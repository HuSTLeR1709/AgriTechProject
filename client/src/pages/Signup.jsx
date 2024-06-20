import React from 'react';
import Signupimg from "../assests/formsimg/signup.jpg";
import frameImage from "../assests/formsimg/frame.png";
import {FcGoogle} from "react-icons/fc";
import SignupForm from "../components/forms/SignupForm";
import HighlightText from '../components/common/HighlightText';

const Signup = () => {
  return (
    <div className='w-full h-auto bg-[#d9dcdf] pb-4'>
        <div className='flex flex-wrap lg:justify-between justify-center w-11/12 max-w-[1160px] p-10 mx-auto gap-12 mt-24 rounded-xl bg-[#c4c8cc]'>
    <div className='relative w-11/12 max-w-[450px] lg:order-1'>
            {/* <img src={frameImage}
                alt="Pattern"
                width={558}
                height={590}
                loading="lazy"/> */}

            <img src={Signupimg}
                alt="Students"
                width={558}
                height={490}
                loading="lazy"
                className='h-full -p-4 rounded-lg'
                />    
        </div>

        <div className='w-11/12 max-w-[450px] lg:order-1 order-2' >
            <h1
            className='font-semibold text-[1.875rem] leading-[2.375rem]' 
            >
                <HighlightText text={"Join us for next gen farming"}/>
            </h1>

            <p className='text-[1.125rem] leading[1.625rem] mt-4' >
                <span className='text-black'>Unlock Modern Farming Tools and Insights!</span>
                <br/>
                <span className='text-[#06623B] italic'>Join Our Agriculture Platform Today.</span>
            </p>
            <SignupForm />

            {/* <div className='flex w-full items-center my-4 gap-x-2'>
                <div className='w-full h-[1px] bg-richblack-700'></div>
                <p className='text-richblack-700 font-medium leading[1.375rem]'>
                    OR
                </p>
                <div className='w-full h-[1px] bg-richblack-700'></div>
            </div>

            <button className='w-full flex justify-center items-center rounded-[8px] font-medium text-richblack-100
            border border-richblack-700 px-[12px] py-[8px] gap-x-2 mt-6 '>
                <FcGoogle/>
                <p>Sign Up with Google</p>
            </button> */}

        </div>


    </div>
    </div>
  )
}

export default Signup;