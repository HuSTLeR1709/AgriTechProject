import React from 'react'
import * as Icons from 'react-icons/fa'
import bg from '../../../assests/bgImages/service (2).png'
const UspCard = ({data,iconName}) => {
    const Icon = Icons[iconName]
  return (
    <div className='flex flex-col items-center gap-2'>
        <div className='relative text-5xl hover:text-green-600 duration-200 transition-all cursor-pointer'>
        <img src={bg} alt='bg'/>
        <Icon className='absolute top-7 left-9'/>
        </div>
        <div className='text-xl font-semibold'>
        {data.name}
        </div>
        <div className='text-center text-sm'>
        {data.description}
        </div>
        <div className='bg-black h-3 w-3 mt-5 rounded-full z-110'></div>
        <div className='absolute w-[200%] h-0 border-dashed border-2 border-black bottom-[5px] -z-10 bg-white'></div>
    </div>
  )
}

export default UspCard