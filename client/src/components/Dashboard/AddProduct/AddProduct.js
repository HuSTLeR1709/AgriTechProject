import React, { useEffect, useState } from 'react'
import { useForm } from 'react-hook-form'
import { HiOutlineCurrencyRupee } from "react-icons/hi2";
import { addProductDetails, fetchProductCategory } from '../../../services/operations/productAPI';
import Upload from './Upload';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
const AddProduct = () => {

    const [productCategory, setProductCategory] = useState([]);
    const {token} = useSelector((state)=>state.auth)
    const [loading, setLoading] = useState(false);
    const navigate = useNavigate()
    const getProductCategory = async () => {
        setLoading(true);
        const categories = await fetchProductCategory();
        

        if(categories.length > 0){
            setProductCategory(categories); 
        }
        setLoading(false)
    }

    useEffect(()=>{

    
        getProductCategory();
    },[])
    const {
        register,
        handleSubmit,
        setValue,
        getValues,
        formState:{errors},
    } = useForm();

    const onSubmit = async (data) => {
        const formData = new FormData();
        formData.append('title', data.productTitle);
        formData.append('description', data.productDescription);
        formData.append('price', data.productPrice);
        formData.append('mrp', data.productMrp);
        formData.append('category', data.productCategory);
        formData.append('image1', data.productImage1);
        formData.append('image2', data.productImage2);
        formData.append('image3', data.productImage3);
        formData.append('image4', data.productImage4);

        try {
            const response = await addProductDetails(formData,token,navigate);
            console.log('Product added successfully', response);
            // Handle successful product addition (e.g., navigate to another page, show a success message)
        } catch (error) {
            console.error('Error adding product', error);
            // Handle error (e.g., show an error message)
        }
    };
  return (
  <>
    <div className='text-3xl font-semibold'>Add Product</div>

    <div className='w-3/4'>
    <div className='mt-8'>
        <h1 className='text-3xl'>
            Product Information
        </h1>

        <form onSubmit={handleSubmit(onSubmit)} className='mt-4 border-2 p-5 rounded-lg bg-green-100 border-green-900 w-full'>
            <div className='flex flex-col gap-2'>
                <label>Product Title <sup className='text-red-600'>*</sup></label>
                <input
                    id='productTitle'
                    name='productTitle'
                    type='text'
                    placeholder='Enter product title'
                    {...register("productTitle",{required:true})}
                    className='w-full bg-richblack-300 p-1 rounded-md'
                />
                {
                    errors.productTitle && (
                        <span className='ml-2 text-xs tracking-wide text-red-600'>Course Title is required</span>
                    )
                }
            </div>

            <div className='flex flex-col gap-2 mt-3'>
                <label>Product Description <sup className='text-red-600'>*</sup></label>
                    <textarea
                    id='productDescription'
                    name='productDescription'
                    placeholder='Enter product description'
                    {...register("productDescription", { required: true })}
                    className='w-full bg-richblack-300 p-1 rounded-md'
                    rows={4} // You can adjust the number of rows as needed
                    ></textarea>
                {
                    errors.productDescription && (
                        <span className='ml-2 text-xs tracking-wide text-red-600'>Course Description is required</span>
                    )
                }
            </div>
            <div className='flex flex-col gap-2 mt-3 relative'>
                <label>Product Price <sup className='text-red-600'>*</sup></label>
                <input
                    id='productPrice'
                    name='productPrice'
                    type='text'
                    placeholder='Enter product Price'
                    {...register("productPrice",{required:true , valueAsNumber:true})}
                    className='w-full bg-richblack-300 p-1 rounded-md !pl-8'
                />
                <HiOutlineCurrencyRupee  className='absolute bottom-2 text-xl text-richblack-900 font-bold left-2'/>
                {
                    errors.productPrice && (
                        <span className='ml-2 text-xs tracking-wide text-red-600'>Course Price is required</span>
                    )
                }
            </div>
            <div className='flex flex-col gap-2 mt-3 relative'>
                <label>Product Price <sup className='text-red-600'>*</sup></label>
                <input
                    id='productMrp'
                    name='productMrp'
                    type='text'
                    placeholder='Enter product Mrp'
                    {...register("productMrp",{required:true , valueAsNumber:true})}
                    className='w-full bg-richblack-300 p-1 rounded-md !pl-8'
                />
                <HiOutlineCurrencyRupee  className='absolute bottom-2 text-xl text-richblack-900 font-bold left-2'/>
                {
                    errors.productMrp && (
                        <span className='ml-2 text-xs tracking-wide text-red-600'>Product Mrp is required</span>
                    )
                }
            </div>

            <div className='flex flex-col gap-2 mt-3'>
                <label>product Category <sup className='text-red-600'>*</sup></label>
                <select
                id='productCategory'
                defaultValue=""
                {...register("productCategory",{required:true})}
                className='w-full bg-richblack-300 p-1 rounded-md'
                >

                <option value="" disabled className='w-full bg-richblack-300 p-1 rounded-md'>Choose a category</option>
                    {
                        !loading && productCategory.map((item,index)=>{
                            return <option key={index} value={item?._id} className='text-richblack-900'>{item?.name}</option>
                        })
                    }
                </select>
                
                {
                    errors.courseCategory && (
                        <span className='ml-2 text-xs tracking-wide text-red-600'>Course Category is required</span>
                    )
                }
            </div>

            <div>
            <Upload
            name={"productImage1"}
            label={"ProductImage"}
            register={register}
            errors={errors}
            text="Product Images"
            setValue={setValue}
            />
            </div>
            <div>
            <Upload
            name={"productImage2"}
            label={"ProductImage"}
            register={register}
            errors={errors}
            text="Product Images"
            setValue={setValue}
            />
            </div><div>
            <Upload
            name={"productImage3"}
            label={"ProductImage"}
            register={register}
            errors={errors}
            text="Product Images"
            setValue={setValue}
            />
            </div><div>
            <Upload
            name={"productImage4"}
            label={"ProductImage"}
            register={register}
            errors={errors}
            text="Product Images"
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

export default AddProduct