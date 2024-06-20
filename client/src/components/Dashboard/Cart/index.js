import { useState } from "react";
import { useSelector } from "react-redux";
import RenderCartCourses from "./RenderCartProducts";
import RenderTotalAmount from "./RenderTotalAmount";


export default function Cart() {
    const {total, totalItems} = useSelector((state)=> state.cart)

    return <div className="text-white">
        <h1 className="text-4xl text-black">Your Cart</h1>
        <p className="mt-10 text-xl font-semibold text-[#6E727F]">{totalItems} items in your cart</p>
        

        {total > 0 ? 
        (<div className="flex justify-between">
           <RenderCartCourses/>
        <RenderTotalAmount/> 
        </div>)
         : (<div className="mt-8">
            <p className="text-black text-xl">Your Cart is Empty</p>
         </div>)
        
        }
    </div>
}