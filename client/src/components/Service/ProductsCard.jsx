import React from 'react';
import { IoStarSharp } from "react-icons/io5";
import image from "../../assests/bgImages/sample_img.jpg.png";
import { AiOutlineMinusCircle } from "react-icons/ai";
import { AiOutlinePlusCircle } from "react-icons/ai";
import { HiShoppingBag } from "react-icons/hi2";
import { FaEye } from "react-icons/fa";
import { Link, useNavigate } from 'react-router-dom';
import { addToCart } from '../../slices/cartSlice';
import { useDispatch, useSelector } from 'react-redux';

const ProductsCard = ({product}) => {
  console.log("Product",product)
  console.log("ProductId",product._id)
  const dispatch = useDispatch()
    const {token} = useSelector((state)=>state.auth)
    const navigate = useNavigate()
    const discount = Math.round(((product.mrp-product.price)/product.mrp)*100);
    const hasDiscount = discount>0.1;
    const saleActive = discount> 10;
    const handleAddToCart = () => {
      if (token) {
        dispatch(addToCart(product))
        return
      }
      navigate("/login")
  }
  return (
    <div className={`flex flex-col w-[276px] items-start justify-between rounded-lg shadow-lg shadow-gray-500 bg-[#FFF] border-solid p-3`}>
    {saleActive && <div className='flex items-center justify-center  bg-[#06623B] absolute m-3 py-0 px-2 rounded-lg'>
    <p className=' text-white text-center text-[12px] '>SALE</p>
    </div>}
    <Link to={`/services/shop/products/${product._id}`}>
      <div className='flex justify-center w-full h-[100%] object-cover '>
          {/* image here */}
          <img src={product.image1} alt='productImage' className='h-[276px]'/> 
    </div>
    </Link>
    
    <div className='w-full h-auto flex flex-col'>
    <div className='flex flex-row w-full justify-between items-center p-2'>
    <div className='font text-[14px] text-[#06623B] px-3 py-1 rounded-xl bg-[#FED507]'>
    {product.category.name}
    </div>
    <div className='flex flex-row '>
    <IoStarSharp />
    <IoStarSharp />
    <IoStarSharp />
    <IoStarSharp />
    <IoStarSharp />
    
    </div>
    </div>
    <div className='w-full h-auto p-2'>
    <p className='text-ms text-lg text-[#06623B]'>
    {product.title}
    </p>

    </div>

    <div className='flex flex-row w-full justify-between p-2'>
    <div className='font text-sm text-[#06623B] px-3 py-[2px] rounded-xl bg-[#FED507]'>
    1kg
    </div>
    <div className='flex flex-row gap-2 items-center'>
    <AiOutlineMinusCircle />
    <span> 2 </span>
    <AiOutlinePlusCircle />
    </div>
    </div>
    <div className='flex fex-row w-full justify-between items-center'>
    <div className='flex flex-row gap-2 items-center p-2'>
    <p className='text-2xl text-[#06623B]'>
    ₹{product.price}
    </p>
    {hasDiscount && <p className='text-sm text-[#666] line-through'>
    ₹{product.mrp}
    </p>}
    </div>
    {hasDiscount && <div className='px-2 py-1 rounded-md bg-[#FED507] mx-1'>
   <p className='text-[12px] text-[#06623B]'>
    Save {discount}%
    </p>
    </div>}
    </div>
    <div className='flex flex-row gap-2 w-full justify-between p-2'>
    <div className=' cursor-pointer flex w-[72%] flex-row items-center justify-center gap-2 text-[#06623B] py-2 bg-[#FED507] rounded-2xl transition-all duration-200 ease-in-out hover:scale-95 hover:bg-[#06623B] hover:text-[#FFF]'>
    <button className='text-sm' onClick={handleAddToCart}>Add To Cart</button>
    <HiShoppingBag />
    </div>
    <div className='flex items-center p-3 cursor-pointer rounded-full bg-slate-300  transition-all duration-200 ease-in-out hover:scale-95 hover:bg-[#06623B] hover:text-[#FFF]'>
    <FaEye />
    </div>
    </div>
    </div>
    </div>
  );
};

export default ProductsCard;
