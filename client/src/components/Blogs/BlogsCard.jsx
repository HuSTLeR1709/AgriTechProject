import React from 'react';
import { FaComments } from "react-icons/fa";
import { Link } from 'react-router-dom';

const truncateTitle = (title, charLimit) => {
    if (title.length > charLimit) {
        return title.slice(0, charLimit) + '...';
    }
    return title;
};

const BlogsCard = ({ blog }) => {
    const truncatedTitle = truncateTitle(blog.title, 50);
    const truncatedDesc = truncateTitle(blog.description, 80);

    return (
        <div className={`flex flex-col w-[430px] h-[230px] rounded-[10px] bg-black mb-36`}>
            <div className='relative flex justify-center items-start w-full h-full rounded-md'>
                <img src={blog.image} className='w-full cursor-pointer h-full rounded-[10px]'></img>
                <div className='flex flex-col justify-between items-center p-[4px] text-[16px] leading-[24.15px] tracking-[0.5px] w-14 h-14 rounded-[100%] bg-white absolute left-3 top-3'>
                    <p className='font-bold border-b-2 px-1'>08</p>
                    <p>Jul</p>
                </div>
                <div className='w-[90%] h-auto p-5 flex flex-col justify-between items-center shadow-sm shadow-green-500 bg-white absolute -bottom-[80px] rounded-xl'>
                    <div className='w-full text-[14px] leading-[0.5px] tracking-[0.5px] text-[#121212] p-5 pb-6 flex flex-row justify-between -mt-1'>
                        <span>Posted By: {blog.author}</span>
                        <span className='flex justify-between items-center gap-x-2 relative bottom-[6px] text-[#777777]'>
                            <FaComments />{blog.numViews}
                        </span>
                    </div>
                    <div className='w-full border-b-2 p-0 -mt-4'></div>
                    <Link to={`/blogs/${blog._id}`}>
                        <div className='w-full text-[21px] font-medium leading-[28px] text-center capitalize tracking-[0.5px] text-[#121212] py-3 cursor-pointer hover:text-[#6e9936] transition-all duration-100'>
                            {truncatedTitle}
                        </div>
                    </Link>
                    <div className='w-full text-[14px] text-[#777777] leading-[21px] text-center text-ellipsis tracking-[0.5px] py-1'>{truncatedDesc}</div>
                </div>
            </div>
        </div>
    );
};

export default BlogsCard;
