import React from 'react'
import { useDispatch, useSelector } from 'react-redux'

import { RiDeleteBin6Line } from 'react-icons/ri';
import { removeFromCart } from '../../../slices/cartSlice';

const RenderCartProducts = () => {

    const {cart} = useSelector((state)=>state.cart)
    const dispatch  = useDispatch()
  return (
    <div>
        {
            cart.map((product,index)=>{
                return <div className='flex justify-between mb-8 border-b-[1px] border-[#2C333F] p-4 w-[700px]'>
                <div className='flex gap-4 justify-between'>
                <div className='w-[100px]'>
                    <img src={product.image1} alt='courseThumbnail '/>
                </div>
                    
                    <div className='flex flex-col text-black gap-2'>
                        <p className='text-lg font-semibold mt-12'>{product.title}</p>
                       
                        
                    </div>
                </div>

                <div className='flex flex-col gap-3'>
                    <button onClick={()=> dispatch(removeFromCart(product._id))} className='flex items-center gap-2 border-[1px] rounded-xl border-red-500 p-2 text-[#EF476F]'>
                        <RiDeleteBin6Line/>
                        <span>Remove</span>
                    </button>
                    <p className='text-green-500 text-2xl'>Rs. {product?.price}</p>
                    <p className='text-red-500 text-2xl line-through ' >Rs. {product.mrp}</p>
                </div>
                </div>
            })
        }
    </div>
  )
}



export default RenderCartProducts