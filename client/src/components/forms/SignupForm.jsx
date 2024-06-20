import React, { useState } from 'react'
import { AiOutlineEye, AiOutlineEyeInvisible } from "react-icons/ai";
import {toast} from "react-hot-toast"
import { setSignupData } from '../../slices/authSlice';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { sendOtp } from '../../services/operations/authAPI';
//import { useNavigate } from 'react-router-dom';


const SignupForm = () => {
   const navigate = useNavigate();
   const dispatch = useDispatch()

    const [formData, setFormData] = useState({
        firstName:"",
        lastName:"",
        phone:"",
        email:"",
        password:"",
        confirmPassword:"",
    })

    const [showPassword, setShowPassword] = useState(false);
    const [showConfirmPassword, setShowConfirmPassword] = useState(false);
    const [accountType, setAccountType] = useState("User");

    function changeHandler(event) {

        setFormData( (prevData) =>(
            {
                ...prevData,
                [event.target.name]:event.target.value
            }
        ) )

    }

    function submitHandler(event) {
        event.preventDefault();
        if(formData.password !== formData.confirmPassword) {
            toast.error("Passwords do not match");
            return ;
        }

        const finalData = {
            ...formData,
            accountType,
        }

        dispatch(setSignupData(finalData))
        dispatch(sendOtp(formData.email,navigate))
        

        

        setFormData({
            firstName: "",
            lastName: "",
            phone:"",
            email: "",
            password: "",
            confirmPassword: "",
          })
          setAccountType("User")

      //  navigate("/dashboard");

    }


  return (
    <div>
        {/* student-Instructor tab */}
        {/* <div
        className='flex bg-richblack-800 p-1 gap-x-1 rounded-full max-w-max'>

            <button
            className={`${accountType === "student" 
            ?
              "bg-richblack-900 text-richblack-5"
            :"bg-transparent text-richblack-200"} py-2 px-5 rounded-full transition-all duration-200`}
            onClick={()=> setAccountType("student")}>
                Student
            </button>

            <button
            className={`${accountType === "instructor" 
            ?
              "bg-richblack-900 text-richblack-5"
            :"bg-transparent text-richblack-200"} py-2 px-5 rounded-full transition-all duration-200`}
            onClick={() => setAccountType("instructor")}>
                Instructor
            </button>
        </div> */}

        <form onSubmit={submitHandler} >
        {/* first name and lastName */}
            <div className='flex flex-col md:flex-row gap-4 mt-[20px]'>
                    <label className='w-full'>
                        <p className='text-[0.875rem] text-black mb-1 leading-[1.375rem]'>
                            First Name<sup className='text-black'>*</sup>
                        </p>
                        <input
                            required
                            type="text"
                            name="firstName"
                            onChange={changeHandler}
                            placeholder="Enter First Name"
                            value={formData.firstName}
                            className='bg-[#d9dcdf] rounded-[0.5rem] text-black w-full p-[12px] '
                        />
                    </label>

                    <label className='w-full'>
                        <p className='text-[0.875rem] text-black mb-1 leading-[1.375rem]'>Last Name<sup className='text-black'>*</sup></p>
                        <input
                            required
                            type="text"
                            name="lastName"
                            onChange={changeHandler}
                            placeholder="Enter Last Name"
                            value={formData.lastName}
                            className='bg-[#d9dcdf] rounded-[0.5rem] text-black w-full p-[12px]'
                        />
                    </label>
            </div>
            <div className='mt-[20px]'>
            <label className='w-full mt-[20px]'>
                    <p className='text-[0.875rem] text-black mb-1 leading-[1.375rem]'>Mobile Number<sup className='text-black'>*</sup></p>
                    <input
                        required
                        type="number"
                        name="phone"
                        onChange={changeHandler}
                        placeholder="Enter Mobile Number"
                        value={formData.phone}
                        className='bg-[#d9dcdf] rounded-[0.5rem] text-black w-full p-[12px]'
                    />
            </label>
            </div>
            {/* email Add */}
            <div className='mt-[20px]'>
            <label className='w-full mt-[20px]'>
                    <p className='text-[0.875rem] text-black mb-1 leading-[1.375rem]'>Email Address<sup className='text-black'>*</sup></p>
                    <input
                        required
                        type="email"
                        name="email"
                        onChange={changeHandler}
                        placeholder="Enter Email Address "
                        value={formData.email}
                        className='bg-[#d9dcdf] rounded-[0.5rem] text-black w-full p-[12px]'
                    />
            </label>
            </div>
            

            {/* createPassword and Confirm Password */}
            <div className='w-full flex flex-col md:flex-row gap-4 mt-[20px] '>
                <label className='w-full relative'>
                    <p className='text-[0.875rem] text-richblack-5 mb-1 leading-[1.375rem]'>Create Password<sup className='text-black'>*</sup></p>
                    <input
                        required
                        type= {showPassword ? ("text") : ("password")}
                        name="password"
                        onChange={changeHandler}
                        placeholder="Enter Password"
                        value={formData.password}
                        className='bg-[#d9dcdf] rounded-[0.5rem] text-richblack-5 w-full p-[12px]'
                    />
                    <span
                     className='absolute right-3 top-[38px] cursor-pointer' 
                    onClick={() => setShowPassword((prev) => !prev)}>
                        {showPassword ? 

                        (<AiOutlineEyeInvisible fontSize={24} fill='#AFB2BF'/>) : 

                        (<AiOutlineEye fontSize={24} fill='#AFB2BF'/>)}
                    </span>
                </label>

                <label className='w-full relative'>
                    <p className='text-[0.875rem] text-richblack-5 mb-1 leading-[1.375rem]'>Confirm Password<sup className='text-black'>*</sup></p>
                    <input
                        required
                        type= {showConfirmPassword ? ("text") : ("password")}
                        name="confirmPassword"
                        onChange={changeHandler}
                        placeholder="Confirm Password"
                        value={formData.confirmPassword}
                        className='bg-[#d9dcdf] rounded-[0.5rem] text-richblack-5 w-full p-[12px]'
                    />
                    <span 
                     className='absolute right-3 top-[38px] cursor-pointer'
                    onClick={() => setShowConfirmPassword((prev) => !prev)}>
                        {showConfirmPassword ?

                         (<AiOutlineEyeInvisible fontSize={24} fill='#AFB2BF'/>) : 

                         (<AiOutlineEye fontSize={24} fill='#AFB2BF'/>)}
                    </span>
                </label>
            </div>
        <button className=' w-full bg-[#FFD60A] rounded-[8px] font-medium text-richblack-900 px-[12px] py-[8px] mt-6'>
            Create Account
        </button>
        </form>

    </div>
  )
}

export default SignupForm;
