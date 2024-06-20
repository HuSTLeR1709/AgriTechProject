import React from 'react'
import * as Icons from 'react-icons/fa'
import { TiWeatherStormy } from "react-icons/ti";
const SeviceExplainCard = ({service, iconName}) => {
    const Icon = Icons[iconName]
  return (
    <div className='flex text-white gap-7'>
        <div className='text-5xl flex text-white cursor-pointer rounded-full text-center px-3 py-3'>
            <Icon className='text-center'/>
        </div>
        <div className='flex flex-col gap-3'>
            <div className='w-4/5'>
                <span className="text-2xl font-semibold cursor-pointer hover:text-green-400 transition-all duration-200">{service.name}</span>
            </div>
            <div className=''>
            {service.description}
            </div>
            <div className= ' h-[4px] bg-[#0f5f57] w-[105%] mt-4 rounded-xl'>

            </div>
            
        </div>
        

    </div>
  )
}

export default SeviceExplainCard