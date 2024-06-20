
import toast from "react-hot-toast"
import { endpoints } from "../api"
import { apiConnector } from "../apiConnector"
import { setLoading, setToken } from "../../slices/authSlice"
import { setProgress } from "../../slices/loadingBarSlice"
import { setUser } from "../../slices/profileSlice"
import { resetCart } from "../../slices/cartSlice"


const {
    SENDOTP_API,
    SIGNUP_API,
    LOGIN_API,
    RESETPASSTOKEN_API,
    RESETPASSWORD_API,
  } = endpoints


export function sendOtp(email,navigate){
    return async (dispatch)=>{
        dispatch(setLoading(true))
        try {
            const response = await apiConnector("POST", SENDOTP_API, {
                email,
                checkUserPresent:true
            })
            dispatch(setProgress(100))
            console.log("SEND OTP API RESPONSE>>>",response)
            console.log(response.data.success)
            if(!response.data.success){
                throw new Error(response.data.message)
            }
            toast.success("OTP Sent Successfully")
            navigate("/otp-verify")
        } catch (error) {
            console.log("SENDOTP API ERROR............", error)
            toast.error(error?.response?.data?.message)
            dispatch(setProgress(100));
        }
        dispatch(setLoading(false))
    }
  }


  export function signUp(
    accountType,
    firstName,
    lastName,
    phone,
    email,
    password,
    confirmPassword,
    otp,
    navigate
  ) {
    return async (dispatch) => {
      const toastId = toast.loading("Loading...")
      dispatch(setLoading(true))
      try {
        const response = await apiConnector("POST", SIGNUP_API, {
          accountType,
          firstName,
          lastName,
          phone,
          email,
          password,
          confirmPassword,
          otp,
        })
  
        console.log("SIGNUP API RESPONSE............", response)
  
        if (!response.data.success) {
          throw new Error(response.data.message)
        }
        dispatch(setProgress(100));
        toast.success("Signup Successful")
        navigate("/login")
      } catch (error) {
        dispatch(setProgress(100));
        console.log("SIGNUP API ERROR............", error)
        toast.error("Signup Failed")
        navigate("/signup")
      }
      dispatch(setLoading(false))
      toast.dismiss(toastId)
    }
  }


  export function login(email, password, navigate) {
    return async (dispatch) => {
      const toastId = toast.loading("Loading...")
      dispatch(setLoading(true))
      try {
        const response = await apiConnector("POST", LOGIN_API, {
          email,
          password,
        })
  
        console.log("LOGIN API RESPONSE............", response)
  
        if (!response.data.success) {
          throw new Error(response.data.message)
        }
        dispatch(setProgress(100))
        toast.success("Login Successful")
        dispatch(setToken(response.data.token))
        const userImage = response.data?.user?.image
          ? response.data.user.image
          : `https://api.dicebear.com/5.x/initials/svg?seed=${response.data.user.firstName} ${response.data.user.lastName}`
        dispatch(setUser({ ...response.data.user, image: userImage }))
        localStorage.setItem("user", JSON.stringify(response.data.user))
        localStorage.setItem("token", JSON.stringify(response.data.token))
        navigate("/dashboard/my-profile")
      } catch (error) {
        dispatch(setProgress(100))
        console.log("LOGIN API ERROR............", error)
        toast.error(error.response.data.message)
      }
      dispatch(setLoading(false))
      toast.dismiss(toastId)
    }
  }

  export function logout(navigate) {
    return async (dispatch) => {
      // Dispatch actions to clear token, user, and reset cart
      dispatch(setToken(null));
      dispatch(setUser(null));
      dispatch(resetCart());
  
      // Remove items from localStorage
      localStorage.removeItem('token');
      localStorage.removeItem('user');
  
      // Show success toast (assuming you're using 'toast' from a library like react-toastify)
      toast.success('Logged Out');
  
      // Wait for actions to complete before navigating
      await new Promise((resolve) => setTimeout(resolve, 100)); // Optional delay for safety
  
      // Navigate to the login page
      navigate('/');
    };
  }
  