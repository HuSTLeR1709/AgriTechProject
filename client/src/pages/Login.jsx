import React from 'react';
import Signupimg from "../assests/formsimg/signup.jpg";
import frameImage from "../assests/formsimg/frame.png";
import {FcGoogle} from "react-icons/fc";
import LoginForm from '../components/forms/LoginForm';
import HighlightText from '../components/common/HighlightText';

const Login = () => {
  return (
    <div className='w-full h-[100vh] bg-[#d9dcdf] mt-16'>
    <div className='flex flex-wrap lg:justify-between justify-center w-11/12 max-w-[1160px] py-14 px-14 mx-auto gap-10 mt-12 bg-[#c4c8cc]'>
    <div className='relative w-11/12 max-w-[450px] h-[500px] overflow-hidden lg:order-1'>
            {/* <img src={frameImage}
                alt="Pattern"
                width={558}
                height={590}
                loading="lazy"/> */}

            <img src={Signupimg}
                alt="Students"
                width={558}
                height={450}
                loading="lazy"
                className='absolute -top-4 right-4 h-[558px]'
                />    
        </div>

        <div className='w-11/12 max-w-[450px] lg:order-1 order-2' >
            <h1
            className='text-[#F1F2FF] font-semibold text-[1.875rem] leading-[2.375rem]' 
            >
                <HighlightText text={"Join and Grow with Our Innovative Agriculture Platform!"}/>
            </h1>

            <p className='text-[1.125rem] leading[1.625rem] mt-4' >
                <span className='text-black'>Unlock Modern Farming Tools and Insights!</span>
                <br/>
                <span className='text-[#06623B] italic'>Join Our Agriculture Platform Today.</span>
            </p>
            {/* (<SignupForm setIsLoggedIn={false}/>): */}

            {/* explicitely false */}
            <LoginForm />

            {/* <div className='flex w-full items-center my-4 gap-x-2'>
                <div className='w-full h-[1px] bg-[#2C333F]'></div>
                <p className='text-[#2C333F] font-medium leading[1.375rem]'>
                    OR
                </p>
                <div className='w-full h-[1px] bg-[#2C333F]'></div>
            </div>

            <button className='w-full flex justify-center items-center rounded-[8px] font-medium text-[#AFB2BF]
            border border-[#2C333F] px-[12px] py-[8px] gap-x-2 mt-6 '>
                <FcGoogle/>
                <p>Sign Up with Google</p>
            </button> */}

        </div>


    </div>
    </div>
  )
}

export default Login;