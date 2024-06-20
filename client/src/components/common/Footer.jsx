import React from 'react';
import { FaInstagram, FaTelegram, FaTwitter, FaWhatsapp } from "react-icons/fa";
import {FooterLinks} from "../../data/FooterLinks";
import { Link } from 'react-router-dom';
import UpperImg from '../../assests/bgImages/rv-12-infos-vector.png';
import { FaArrowRightLong } from "react-icons/fa6";
const Footer = () => {
  return (
    <div className='relative w-full h-auto bg-[#02564E] flex flex-col items-center'>
        <div className='w-11/12 flex flex-row flex-wrap gap-12 py-24 justify-around'>
        <div className=' h-auto w-[25%] min-w-[200px]'>
        <div className='w-full flex flex-col gap-2'>
        <h1 className='text-[#4cd75c] text-3xl'>AgriTech</h1>
        <p className=' text-sm text-[rgba(255,255,255,0.8)]'>In the fields of opportunity, agriculture is the seed that grows prosperity.</p>
        <div className='text-lg text-[rgba(255,255,255,0.8)] flex flex-row gap-2'>
        <FaWhatsapp />
        <FaInstagram />
        <FaTwitter />
        <FaTelegram />
        </div>
        <p className='text-xl text-[#FFF] font-semibold pt-2 '>Newsletter</p>
        <input className='text-[rgba(255,255,255,0.8)] w-full flex items-center py-1 bg-[#02564E] pl-2 rounded-md border-2 border-[rgba(255,255,255,0.6)] active:outline-none focus:outline-none' placeholder='Enter your Email'>

        </input>
        <button className='flex flex-row gap-2 w-full justify-center items-center py-1 rounded-md bg-[#509E0F] text-xl text-[#FFF] font-semibold hover:bg-[#02564E] border-2 border-[#02564E] hover:border-2 hover:border-[#509E0F] transition-all ease-in-out duration-200'>
            Subscribe
            <FaArrowRightLong />
        </button>
        </div>

        </div>
        <div className='flex flex-row flex-wrap gap-5 justify-around'>
        <div className='h-auto w-[23%]  min-w-[200px] gap-8'>
        <p className='text-xl text-[#FFF] font-semibold'>Services</p>
        <div className=' pt-3'>
        <ul className='list-none text-md text-[rgba(255,255,255,0.8)] flex flex-col gap-1'>
        {FooterLinks.Services.map((links, index) =>(
            <Link to={links.link}>
            <li className=' cursor-pointer' key={index}>{links.name}</li>
            </Link>
        ))}
        </ul>

        </div>

        </div>
        <div className='h-auto w-[23%] min-w-[200px]'>

        <p className='text-xl text-[#FFF] font-semibold'>Support</p>
        <div className=' pt-3'>
        <ul className='list-none text-md text-[rgba(255,255,255,0.8)]  flex flex-col gap-1'>
        {FooterLinks.Support.map((links, index) =>(
            <Link to={links.link}>
            <li className=' cursor-pointer' key={index}>{links.name}</li>
            </Link>
        ))}
        </ul>

        </div>

        </div>
        <div className='h-auto w-[23%]  min-w-[200px]'>

        <p className='text-xl text-[#FFF] font-semibold'>Policies</p>
        <div className=' pt-3'>
        <ul className='list-none text-md text-[rgba(255,255,255,0.8)]  flex flex-col gap-1'>
        {FooterLinks.Policies.map((links, index) =>(
            <Link to={links.link}>
            <li className=' cursor-pointer' key={index}>{links.name}</li>
            </Link>
        ))}
        </ul>

        </div>

        </div>
        <div className='h-auto w-[23%]  min-w-[200px]'>

        <p className='text-xl text-[#FFF] font-semibold'>ContactUs</p>
        <div className=' pt-3'>
        <ul className='list-none text-md text-[rgba(255,255,255,0.8)]  flex flex-col gap-1'>
        {FooterLinks.ContactUs.map((links, index) =>(
            <Link to={links.link}>
            <li className=' cursor-pointer' key={index}>{links.name}</li>
            </Link>
        ))}
        </ul>

        </div>

        </div>
        </div>
        <div className=' border-t-2 mt-3 border-[rgba(255,255,255,0.6)] border-solid w-full py-4 flex  justify-center'>
        <p className='text-lg text-[rgba(255,255,255,0.8)]'>© 2024 All Rights Reserved by Team Ardent</p>
        </div>
        </div>
        <div className='absolute top-0 left-16'>
        <img src={UpperImg} alt='leaves'/>
      </div>
      <div className='absolute rotate-180 bottom-0 right-16'>
        <img src={UpperImg} alt='leaves'/>
      </div>
    </div>
  )
}

export default Footer;