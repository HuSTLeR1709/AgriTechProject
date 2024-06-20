import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from "react-redux"
import { Link, useNavigate, useParams } from "react-router-dom"
import { fetchBlogDetails } from '../services/operations/blogAPI'

const BlogDetails = () => {
    const { user } = useSelector((state) => state.profile)
    const { token } = useSelector((state) => state.auth)
    const [response, setResponse] = useState(null)
    const [loading, setLoading] = useState(true)
    const [error, setError] = useState(null)
    const {blogId} = useParams()
    const navigate = useNavigate()

    useEffect(() => {
        // Calling fetchBlogDetails function to fetch the details
        const fetchDetails = async () => {
            try {
                const res = await fetchBlogDetails(blogId)
                console.log("Blog Details res: ", res)
                setResponse(res)
            } catch (error) {
                setError("Could not fetch Blog Details")
                console.error("Error fetching Blog Details:", error)
            } finally {
                setLoading(false)
            }
        }

        fetchDetails()
    }, [blogId])

    if (loading) {
        return <div>Loading...</div>
    }

    if (error) {
        return <div>{error}</div>
    }

    if (!response) {
        return <div>No Blog Details Available</div>
    }

    console.log("Details",response)

    const {title, image, description, content, numViews} = response

    return (
        <>
            <div className='mt-28 pl-14 mb-12'>
                <div>
                    <p className='text-4xl font-semibold'>{title}</p>
                    <div className='flex items-center justify-center mt-9'>
                        <img src={image} alt='blogImage' className='w-[1000px] h-[500px]' />
                    </div>
                    <div className='mt-7 text-center mb-7'>
                        <p className='text-2xl font-medium'>{description}</p>
                    </div>
                    <div className='flex justify-center'>
                        <div className='w-11/12'>
                            <div className='text-xl' dangerouslySetInnerHTML={{ __html: content }} />
                        </div>
                    </div>
                    <div className='mt-7'>
                        <p className='text-lg font-semibold'>Views: {numViews}</p>
                    </div>
                    <div className='flex mt-7 justify-center'>
                        <Link to="/blogs">
                            <button className='px-4 py-1 bg-green-700 text-white rounded-lg' >More Blogs</button>
                        </Link>
                    </div>
                </div>
            </div>
        </>
    )
}

export default BlogDetails
