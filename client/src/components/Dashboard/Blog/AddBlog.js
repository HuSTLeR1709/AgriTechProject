import React, { useEffect, useState } from 'react'
import { useForm } from 'react-hook-form'
import { HiOutlineCurrencyRupee } from "react-icons/hi2";
import { addProductDetails, fetchProductCategory } from '../../../services/operations/productAPI';
import Upload from '../AddProduct/Upload';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { addBlogDetails } from '../../../services/operations/blogAPI';

const AddBlog = () => {
    const [productCategory, setProductCategory] = useState([]);
    const {token} = useSelector((state)=>state.auth)
    const [loading, setLoading] = useState(false);
    const navigate = useNavigate()


    const {
        register,
        handleSubmit,
        setValue,
        getValues,
        formState:{errors},
    } = useForm();

    const onSubmit = async (data) => {
        const formData = new FormData();
        formData.append('title', data.blogTitle);
        formData.append('description', data.blogDescription);
        formData.append('content', data.blogContent);
        formData.append('image', data.blogImage);

        try {
            const response = await addBlogDetails(formData,token,navigate);
            console.log('Product added successfully', response);
            // Handle successful product addition (e.g., navigate to another page, show a success message)
        } catch (error) {
            console.error('Error adding product', error);
            // Handle error (e.g., show an error message)
        }
    };
  return (
    <>
        <div className='text-3xl font-semibold'>Add Blog</div>

        <div className='w-3/4'>
    <div className='mt-6'>
        <h1 className='text-3xl'>
            Blog Information
        </h1>

        <form onSubmit={handleSubmit(onSubmit)} className='mt-4 border-2 p-5 rounded-lg bg-green-100 border-green-900 w-full'>
            <div className='flex flex-col gap-2'>
                <label>Blog Title <sup className='text-red-600'>*</sup></label>
                <input
                    id='blogTitle'
                    name='blogTitle'
                    type='text'
                    placeholder='Enter blog title'
                    {...register("blogTitle",{required:true})}
                    className='w-full bg-richblack-300 p-1 rounded-md'
                />
                {
                    errors.productTitle && (
                        <span className='ml-2 text-xs tracking-wide text-red-600'>Blog Title is required</span>
                    )
                }
            </div>

            <div className='flex flex-col gap-2 mt-3'>
                <label>Blog Description <sup className='text-red-600'>*</sup></label>
                    <textarea
                    id='blogDescription'
                    name='blogDescription'
                    placeholder='Enter blog description'
                    {...register("blogDescription", { required: true })}
                    className='w-full bg-richblack-300 p-1 rounded-md'
                    rows={2} // You can adjust the number of rows as needed
                    ></textarea>
                {
                    errors.productDescription && (
                        <span className='ml-2 text-xs tracking-wide text-red-600'>Blog Description is required</span>
                    )
                }
            </div>
            <div className='flex flex-col gap-2 mt-3'>
                <label>Blog Content <sup className='text-red-600'>*</sup></label>
                    <textarea
                    id='blogContent'
                    name='blogContent'
                    placeholder='Enter blog Content'
                    {...register("blogContent", { required: true })}
                    className='w-full bg-richblack-300 p-1 rounded-md'
                    rows={12} // You can adjust the number of rows as needed
                    ></textarea>
                {
                    errors.productDescription && (
                        <span className='ml-2 text-xs tracking-wide text-red-600'>Blog Description is required</span>
                    )
                }
            </div>

            <div>
            <Upload
            name={"blogImage"}
            label={"blogImage"}
            register={register}
            errors={errors}
            text="Blog Thumbnail"
            setValue={setValue}
            />
            </div>
            <button type='submit' className='px-4 py-1 bg-green-600 text-white mt-3 rounded-lg'>
                Save
            </button>
        </form>
    </div>
    </div>
    </>
  )
}

export default AddBlog