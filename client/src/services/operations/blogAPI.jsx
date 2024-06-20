import { toast } from "react-hot-toast";


// import { updateCompletedLectures } from "../../slices/viewCourseSlice";
// import { setLoading } from "../../slices/profileSlice";
import { apiConnector } from "../apiConnector";

import { blogEndpoints } from "../api";

const {
    CREATE_BLOG_API,
    ALL_BLOG_API,
    BLOG_DETAILS_API,
    DELETE_BLOG_API,
} = blogEndpoints;

export const addBlogDetails = async (data,token,navigate)=>{
    let result = null;
    const toastId = toast.loading("Loading...");
    try {
      const response = await apiConnector("POST", CREATE_BLOG_API, data, {
        "Content-Type": "multipart/form-data",
        Authorisation: `Bearer ${token}`,
      });
      console.log("CREATE COURSE API RESPONSE............", response);
      if (!response?.data?.success) {
        throw new Error("Could Not Add Blog Details");
      }
      toast.success("Product Details Added Successfully");
      result = response?.data?.data;
      navigate("/dashboard/blogs")
    } catch (error) {
      console.log("CREATE BLOG API ERROR............", error);
      toast.error(error.response.data.message);
    }
    toast.dismiss(toastId);
    return result;
}

export const fetchAllBlogs = async (token) => {
    let result = []
    const toastId = toast.loading("Loading...")
    try {
      const response = await apiConnector(
        "GET",
        ALL_BLOG_API,
        null,
        {
          Authorisation: `Bearer ${token}`,
        }
      )
      console.log("ALL BLOGS API RESPONSE............", response)
      if (!response?.data?.success) {
        throw new Error("Could Not Fetch Seller Products")
      }
      result = response?.data?.data
    } catch (error) {
      console.log("ALL BLOGS API ERROR............", error)
      toast.error(error.message)
    }
    toast.dismiss(toastId)
    return result
  }

  export const fetchBlogDetails = async (blogId) => {
    let result = []
    console.log("Blog Id in fun",blogId)
    const toastId = toast.loading("Loading...")
    try {
        const response = await apiConnector("POST", BLOG_DETAILS_API, {
            blogId,
          })
      console.log("ALL BLOGS API RESPONSE............", response)
      if (!response?.data?.success) {
        throw new Error("Could Not Fetch Blog Details")
      }
      result = response?.data?.data
    } catch (error) {
      console.log("BLOGS DETAILS API ERROR............", error)
      toast.error(error.message)
    }
    toast.dismiss(toastId)
    return result
  }


  export const deleteBlog = async (data, token) => {
    const toastId = toast.loading("Loading...")
    console.log(data)
    try {
      const response = await apiConnector("DELETE", DELETE_BLOG_API, data, {
        Authorisation: `Bearer ${token}`,
      })
      console.log("DELETE Blog API RESPONSE............", response)
      if (!response?.data?.success) {
        throw new Error("Could Not Delete Blog")
      }
      toast.success("Blog Deleted")
    } catch (error) {
      console.log("DELETE BLOG API ERROR............", error)
      toast.error(error.message)
    }
    toast.dismiss(toastId)
  }
