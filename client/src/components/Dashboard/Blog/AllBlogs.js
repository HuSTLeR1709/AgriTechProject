import React, { useEffect, useState } from 'react'
import { deleteBlog, fetchAllBlogs } from '../../../services/operations/blogAPI';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { FaComments } from "react-icons/fa";
import { deleteProduct } from '../../../services/operations/productAPI';

const AllBlogs = () => {
    const {token} = useSelector((state)=>state.auth)
    const navigate = useNavigate();
    const [blogs, setBlogs] = useState([])
    useEffect(()=>{
        const fetchBlogs = async() => {
                const allBlogs = await fetchAllBlogs(token);
                console.log("Blogs",allBlogs)
                if(allBlogs){
                    setBlogs(allBlogs)
                }
                
            
        }
        fetchBlogs();
    },[])
    const handleDelete = async (blogId)=> {
            const res = await deleteBlog({blogId:blogId},token)
    }
  return (
    <>
        <div className='text-4xl font-semibold mb-9'>All Blogs</div>
        <div className='flex flex-wrap gap-9'>
        {
            blogs.length === 0 ? (
                <div>No Blogs Found</div>
            ) : (
                blogs.map((blog)=>(
                    <div className={`flex flex-col w-[430px] h-[230px]  rounded-[10px] bg-black mb-36`}>
        <div className='relative flex justify-center items-start w-full h-full rounded-md'>
            <img src={blog.image} className='w-full cursor-pointer h-full rounded-[10px]'></img>
            <div className='flex flex-col justify-between items-center p-[4px] text-[16px] leading-[24.15px] tracking-[0.5px] w-14 h-14 rounded-[100%] bg-white absolute left-3 top-3'>
                <p className='font-bold border-b-2 px-1'>08</p>
                <p>Jul</p>
            </div>
            <div className='w-[90%] h-auto p-5 flex flex-col justify-between items-center shadow-sm shadow-green-500 bg-white absolute -bottom-[140px] rounded-xl'>
                <div className='w-full text-[14px] leading-[0.5px] tracking-[0.5px] text-[#121212] p-5 pb-6 flex flex-row justify-between -mt-1'>
                    <span>Posted By: {blog.author}</span>
                    <span className='flex justify-between items-center gap-x-2 relative bottom-[6px] text-[#777777]'>
                        <FaComments/>0 comments
                    </span>
                </div>
                <div className='w-full border-b-2 p-0 -mt-4'></div>
                <div className='w-full text-[21px] font-medium leading-[28px] text-center capitalize tracking-[0.5px] text-[#121212] py-3 cursor-pointer hover:text-[#6e9936] transition-all duration-100'>{blog.title}</div>
                <div className='w-full text-[14px] text-[#777777] leading-[21px] text-center text-ellipsis tracking-[0.5px] py-1'>{blog.description}</div>
                <div className='absolute bottom-2 right-3'>
                    <button className='bg-red-500 text-white text-sm rounded-xl px-3 py-1' onClick={()=>handleDelete(blog._id)}>Delete</button>
                </div>
            </div> 
        </div>
    </div>
                ))
            )
        }
        </div>
        
    </>
  )
}

export default AllBlogs