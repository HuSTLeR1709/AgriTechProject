import React from 'react'
import { RiEditBoxLine } from 'react-icons/ri'
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom'

const MyProfile = () => {
    const {user} = useSelector((state)=>state.profile)
  return (
    <div className='text-black flex flex-col gap-4'>
    <div className='flex justify-between items-center'>
    <div className='flex gap-4 items-center'>
        <div>
            <img src={user?.image} alt='ProfileImage' className='w-[70px] h-[70px] rounded-full'></img>

        </div>
        <div>
            <h1 className='text-xl'>Hii...</h1>
           <h1 className='text-2xl font-semibold text-green-700'>{user?.firstName} {user?.lastName}</h1> 
        </div>
           
        </div>
        <div>
        <Link to="/dashboard/settings">
            <button className='border-2 bg-green-700 text-white px-4 py-1 rounded-lg text-lg flex items-center gap-2'>Edit <RiEditBoxLine /></button>
        </Link>
            
        </div>
    </div>

    <div className='border-2 bg-zinc-100 p-3 py-7 rounded-xl backdrop:blur-xl'>
        <div>
            <h1 className='text-lg font-semibold'>Personal Information</h1>
        </div>
        <div className='flex justify-around'>
            <div className='mt-5 flex flex-col justify-around gap-6'>
            <div>
            <span className='text-sm'>First Name <sup className='text-red-500'>*</sup></span>
            <h1 className='border-2 py-1 pl-2 rounded-md'>{user?.firstName}</h1>
            </div>
            <div>
            <span className='text-sm'>Email <sup className='text-red-500'>*</sup></span>
            <h1 className='border-2  py-1 pl-2 pr-4 rounded-md'>{user?.email}</h1>
            </div>
        </div>
        <div className='mt-5 flex flex-col justify-around gap-6'>
            <div>
            <span className='text-sm'>Last Name <sup className='text-red-500'>*</sup></span>
            <h1 className='border-2 py-1 pl-2 pr-32 rounded-md'>{user?.lastName}</h1>
            </div>
            <div>
            <span className='text-sm'>Mobile No<sup className='text-red-500'>*</sup></span>
            <h1 className='border-2 py-1 pl-2 rounded-md'>{user?.phone ? user?.phone : "XXXXXXXXXX"}</h1>
            </div>
        </div>
        </div>
        
        
    </div>
        
    </div>
  )
}

export default MyProfile