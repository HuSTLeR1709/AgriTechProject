import React, { useEffect, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { NavbarLinks } from '../../data/nevbar-links';
import { matchPath } from 'react-router-dom';
import Button from '../common/Button';
import {  FaChevronDown } from 'react-icons/fa'
import ProfileDropDown from './ProfileDropDown';
import { useSelector } from 'react-redux';
import { AiOutlineShoppingCart } from 'react-icons/ai';

const sublinks = [
    {
        title: "Weather",
        link: "services/weather"
    },
    {
        title: "E-commerce",
        link: "services/shop"
    },
    // {
    //     title: "Community",
    //     link: "services/community"
    // },
    {
        title: "Calculator",
        link: "services/calculator"
    },
    {
        title: "Blog",
        link: "services/blogs"
    },
    {
        title: "Digital Assisstant",
        link: "services/assisstant"
    },
]

const Navbar = () => { 
    const [isScrolled, setIsScrolled] = useState(false);
    const [home, setHome] = useState(true);
    const {user} = useSelector((state)=> state.profile)
    const {totalItems} = useSelector((state)=> state.cart)
    const {token} = useSelector((state)=>state.auth);
    useEffect(() => {
        const handleScroll = () => {
          if (window.scrollY > 35) {
            setIsScrolled(true)
          } else {
            setIsScrolled(false)
          }
        }
    
        window.addEventListener('scroll', handleScroll);
    
        return () => {
          window.removeEventListener('scroll', handleScroll)
        }
      }, []);
    
    const location = useLocation(); // Check that useLocation is being used correctly
    console.log(location); // Log the location object to see its structure

    const matchRoutes = (routes) => {
        return matchPath({ path: routes }, location.pathname)
    }
    useEffect(() => {
        // Update home state based on location.pathname
        if (location.pathname !== '/') {
            setHome(false);
        } else {
            setHome(true);
        }
    }, [location.pathname]); 



    return (
        <div className='w-full flex justify-center'>
         <div className={home ? `${isScrolled ? 'flex w-full h-20 items-center justify-center backdrop-blur-2xl fixed bg-[rgba(0,0,0,0.5)] z-50 transition-all duration-300': 
        "flex w-11/12 h-20 items-center justify-center absolute backdrop-blur-2xl rounded-md top-8 bg-[rgba(0,0,0,0.5)] z-10 transition-all duration-300 ease-linear"}` 
        : 'flex w-full h-20 items-center justify-center backdrop-blur-2xl fixed bg-[rgba(0,0,0,0.5)] z-50 transition-all duration-300'} >
            {/* <div className=`${ isScrolled ?'flex w-11/12 max-w-maxContent items-center justify-between ':'flex w-full max-w-maxContent items-center justify-between'}`> */}
            <div className={home ? `${
  isScrolled ? 'flex w-11/12 max-w-maxContent items-center justify-between' : 'flex w-full px-8 max-w-maxContent items-center justify-between'
}`:'flex w-11/12 max-w-maxContent items-center justify-between'}>

                <Link to="/">
                    <h1 className='text-[#4cd75c] text-3xl'>AgriTech</h1>
                </Link>
                <nav>
                    <ul className='flex gap-x-6 text-lg text-richblack-25'>
                        {
                            NavbarLinks.map((link, index) => (
                                <li key={index}>
                                    {
                                        link.title === "Services" ? (
                                            <div className=' flex items-center group relative cursor-pointer'>
                                                <p className='text-lg text-white hover:text-[#32ff4a]'>{link.title}</p>
                                                <FaChevronDown className='mt-1 ml-1 text-white text-sm' />
                                                <div className="hidden absolute w-[200px] -left-[70%] top-[0%] z-[1000] translate-y-[3em] flex-col rounded-lg  h-[400px] text-white  opacity-100 transition-all duration-200 group-hover:flex group-hover:translate-y-[1.65em] group-hover:opacity-100 lg:w-[200px]"></div>
                                                <div className='hidden absolute items-center -left-[70%] top-[99%] z-[1000]  w-[200px] translate-y-[3em] flex-col rounded-lg bg-[rgba(0,0,0,0.5)] p-4 text-white  opacity-100 transition-all duration-200 group-hover:flex group-hover:translate-y-[1.65em] group-hover:opacity-100 lg:w-[200px]'>
                                                    <div className='absolute left-[40%] top-0 h-6 w-6 translate-x-[110%] rotate-45 select-none rounded bg-richblack-5'></div>
                                                    {
                                                        sublinks?.length > 0 && (
                                                            sublinks?.map((element, index) => (
                                                                <Link to={`/${element.link}`} key={index} className="rounded-lg bg-transparent py-2 hover:scale-110 transition-all duration-200 hover:text-[#32ff4a]" >
                                                                    <p className=''>
                                                                        {element.title}
                                                                    </p>
                                                                </Link>
                                                            ))
                                                        )
                                                    }
                                                </div>
                                            </div>
                                        ) : (
                                            <Link to={link.path}>
                                                <p className={`${matchRoutes(link.path) ? "text-[#38f998]" : "text-lg text-white hover:text-[#32ff4a]"}`}>{link.title}</p>
                                                <div className={`${matchRoutes(link.path) ? "w-full h-[3px] rounded-lg mt-1 bg-[#269a60]" : "hidden"}`}></div>
                                            </Link>
                                        )
                                    }
                                </li>
                            ))
                        }
                    </ul>
                </nav>

                <div className='flex gap-x-6 items-center relative'>
            {
               user && user?.accountType === "User" && (
            <Link to='/dashboard/cart'>
            <AiOutlineShoppingCart className='text-xl text-white'/>
                                            {
                                         totalItems !== 0 && (
                                                <span className=' absolute -top-4 left-4 text-white bg-green-600 w-6 h-6 rounded-full text-center'>
                                                {totalItems}
                                                </span>
                                                )
                                            }
                                 </Link>
                            )
                                             }
                    {
                        token === null && (
                            <Button active={false} linkto={"/login"}>
                              Log in
                           </Button>
                        )
                    }
                    {
                        token === null && (
                            <Button active={false} linkto={"/signup"}>
                    Sign Up
                </Button>
                        )
                    }

                    {
                            token !== null && <ProfileDropDown/>
                        }
                </div>
            </div>
        </div>
        </div>
       
    )
}

export default Navbar;
