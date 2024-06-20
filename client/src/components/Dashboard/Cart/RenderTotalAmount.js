import React from 'react'
import { useDispatch, useSelector } from "react-redux"
import { useNavigate } from "react-router-dom"
import { buyProduct } from '../../../services/operations/userFeature';



const RenderTotalAmount = () => {
    const {total, cart} = useSelector((state)=> state.cart);
    const { user } = useSelector((state) => state.profile)
  const { token } = useSelector((state) => state.auth)
  const navigate = useNavigate()
  const dispatch = useDispatch()
    const handlebuycourse = ()=> {
        const products = cart.map((product)=> product._id)
        buyProduct(token, products, user, navigate, dispatch)
    }
  return (
    <div className='w-1/4 border-[2px] border-green-700 p-4 rounded-xl h-1/5 flex '>
        <div className='flex flex-col gap-1'>
            <p className='text-[#5d55ff] text-xl font-bold'>Total:</p>
            <p className='text-green-500 text-3xl mt-4'>Rs. {total}</p>

            <button className=' w-[120px] bg-green-400 text-white font-semibold rounded-lg px-3 py-1 text-xl ml-10 mt-6' onClick={handlebuycourse}>
                Buy Now
            </button>
            {/* <div>
                <IconBtn
                text="Buy now"
              
                customClasses={'w-[120px]'}
            />
            </div> */}
            
        </div>
    </div>
  )
}

export default RenderTotalAmount