import React, { useEffect, useState } from 'react';
import { fetchAllBlogs } from '../services/operations/blogAPI';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import FeaturedSliderBlogs from '../components/Shop/FeaturedSliderBlogs';
import HighlightText from '../components/common/HighlightText';
import BlogsCard from '../components/Blogs/BlogsCard';
import Footer from '../components/common/Footer';

const Blogs = () => {
    const { token } = useSelector((state) => state.auth);
    const navigate = useNavigate();
    const [blogs, setBlogs] = useState([]);

    useEffect(() => {
        const fetchBlogs = async () => {
            const allBlogs = await fetchAllBlogs(token);
            console.log("Blogs", allBlogs);
            if (allBlogs) {
                setBlogs(allBlogs);
            }
        }
        fetchBlogs();
    }, [token]);

    return (
        <>
            <div className='relative w-full flex flex-col items-center'>
                <FeaturedSliderBlogs />
                <div className='w-11/12 m-0'>
                    <div className='text-5xl mb-9 text-center'>
                        <HighlightText text={"Our Blogs"} />
                    </div>
                    <div className='flex flex-wrap gap-9'>
                        {
                            blogs.length === 0 ? (
                                <div>No Blogs Found</div>
                            ) : (
                                blogs.map((blog) => (
                                    <BlogsCard key={blog._id} blog={blog} />
                                ))
                            )
                        }
                    </div>
                </div>
                <Footer/>
            </div>
        </>
    )
}

export default Blogs;
