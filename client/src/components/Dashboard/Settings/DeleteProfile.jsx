import React from 'react'
import { RiDeleteBinLine } from "react-icons/ri";
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { deleteAccount } from '../../../services/operations/profileAPI';


const DeleteProfile = () => {

    const token = useSelector((state)=>state.auth.token)
    const dispatch = useDispatch();
    const navigate =useNavigate();

    const onDeleteAccount = () => {
        if(window.confirm
          ("Are you sure you want to delete your account?")){
            deleteAccount(token,dispatch,navigate);
          }
    
      }
  return (
    <div className='bg-zinc-100 flex gap-10 p-7 rounded-md'>

    <div>
    <RiDeleteBinLine  className='text-5xl text-[#EF476F] mt-5'/>

    </div>

    <div className='flex flex-col text-white gap-3'>
    <h1 className='text-xl text-red-500 font-semibold'>Delete Account</h1>

    <div className='text-black'>
    <p>Would you like to delete account?</p>
    <p>This account contains all your order details and other information, Are you sure to delete your account?</p>
    </div>
    <div>
        <p className='text-xl text-[#D43D63] italic'>I want to delete my account.</p>
    </div>
    <button onClick={onDeleteAccount}  className="w-fit cursor-pointer italic text-red-700 font-semibold ">Delete Account</button>

    </div>

    </div>
  )
}

export default DeleteProfile