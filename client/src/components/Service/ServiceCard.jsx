import React from 'react'
import { TiWeatherStormy } from "react-icons/ti";
import * as Icons from 'react-icons/fa'
import { FaArrowRightLong } from "react-icons/fa6";
import { Link } from 'react-router-dom';
const ServiceCard = ({service, iconName}) => {
    const Icon = Icons[iconName]
  return (
    <div className='relative group w-[110%] h-[320px] px-6 py-4 bg-[#c4c8cc] rounded-2xl flex flex-col gap-6 items-center justify-center hover:bg-[#4dae3d] hover:text-white transition-all ease-linear duration-300 shadow-xl hover:scale-105'>
    <div className='absolute text-8xl top-8'>
    <Icon className='text-[60px]'/>
    </div>
    <div className='w-[80px] h-[80px] bg-white rounded-full group-hover:bg-[rgb(0,0,0,0.7)] '>

    </div>
        <div>
            <h1 className='text-center text-2xl font-semibold'>{service.name}</h1>
        </div>
        <div>
        <Link to={service.link}>
            <button className=' p-4 text-xl rounded-full bg-[#ef6023]'><FaArrowRightLong className='text-white' /></button>
        </Link>
            
        </div>
    </div>
  )
}

export default ServiceCard