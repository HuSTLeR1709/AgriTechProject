import { userEndpoints } from "../api";
import { toast } from "react-hot-toast"
import { apiConnector } from "../apiConnector";
import rzpLogo from '../../assests/bgImages/logo.png'
import { resetCart } from "../../slices/cartSlice";
import { setPaymentLoading } from "../../slices/productSlice";
const {
    PRODUCT_PAYMENT_API,
    PRODUCT_VERIFY_API,
    SEND_PAYMENT_SUCCESS_EMAIL_API,
} = userEndpoints;

function loadScript(src) {
    return new Promise((resolve)=> {
        const script = document.createElement("script")
        script.src = src;
        script.onload= ()=> {
            resolve(true)
        }
        script.onerror = ()=>{
            resolve(false)
        }

        document.body.appendChild(script);
    })
}

export async function buyProduct(token, products, userDetails, navigate, dispatch){
    const toastId = toast.loading("Loading...")
    try {
        const res = await loadScript("https://checkout.razorpay.com/v1/checkout.js")

        if(!res){
            toast.error("Razorpay SDK failed to load")
        }

        const orderResponse = await apiConnector("POST", PRODUCT_PAYMENT_API, {products},
    {
        Authorisation: `Bearer ${token}`
    })

    if(!orderResponse.data.success){
        throw new Error(orderResponse.data.message)
    }

    const options = {
        key: process.env.RAZORPAY_KEY,
        currency:orderResponse.data.message.currency,
        amount:`${orderResponse.data.amount}`,
        order_id:orderResponse.data.message.id,
        name:"AgriTech",
        description:"Thank you for purchasing the product",
        image:rzpLogo,
        prefill:{
            name:`${userDetails.firstName}`,
            email:userDetails.email
        },
        handler: function(response){
            sendPaymentSuccessEmail(response, orderResponse.data.message.amount,token);
            verifyPayment({...response, products}, token , navigate, dispatch )
        }
    }

    const paymentObject = new window.Razorpay(options)
    paymentObject.open();
    paymentObject.on("paymnet.failed", function(response){
        toast.error("Payment Failed");
        console.log(response.error)
    })

    } catch (error) {
        console.log("PAYMENT API ERROR",error)
        toast.error("Could not make payment")
    }
    toast.dismiss(toastId)
}

async function sendPaymentSuccessEmail(response,amount, token){
        try {
            await apiConnector("POST",SEND_PAYMENT_SUCCESS_EMAIL_API,{
                orderId:response.razorpay_order_id,
                paymentId:response.razorpay_payment_id,
                amount,
            },{
                Authorisation : `Bearer ${token}`
            })
        } catch (error) {
            console.log("PAYMENT SUCCESS EMAIL ERROR",error)
        }
}

async function verifyPayment(bodyData,token,navigate, dispatch){
        const toastId = toast.loading("Verifying Paymnet")
        dispatch(setPaymentLoading(true))
        try{
            const response = await apiConnector("POST", PRODUCT_VERIFY_API, bodyData, {
                Authorisation: `Bearer ${token}`
            })

            if(!response.data.success){
                throw new Error(response.data.message)
            }

            toast.success("You have successfully enrolled to the course")
            dispatch(resetCart())
        }
        catch(error){
            console.log("PAYMENT VERIFY ERROR",error)
            toast.error("Could not verify Payment")

        }

        toast.dismiss(toastId);
        dispatch(setPaymentLoading(false))
}