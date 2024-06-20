import { toast } from "react-hot-toast";


// import { updateCompletedLectures } from "../../slices/viewCourseSlice";
// import { setLoading } from "../../slices/profileSlice";
import { apiConnector } from "../apiConnector";

import { productEndpoints } from "../api";

const { 
    PRODUCT_CATEGORIES_API,
    CREATE_PRODUCT_API,
    GET_ALL_SELLER_PRODUCTS_API,
    DELETE_PRODUCT_API,
    GET_ALL_PRODUCTS_API,
    GET_PRODUCT_DETAILS,
} = productEndpoints;

export const fetchProductCategory = async ()=>{
    let result=[];
    try {
        const response = await apiConnector("GET", PRODUCT_CATEGORIES_API)
        console.log("Course Category respone", response)
        if(!response.data.success){
            throw new Error("Could not fetch Categories")
        }
        result = response?.data?.data

    } catch (error) {
        console.log("Product Categories API ERROR...",error)
        toast.error(error.message)
    }
    return result
}

export const addProductDetails = async (data,token,navigate)=>{
    let result = null;
    const toastId = toast.loading("Loading...");
    try {
      const response = await apiConnector("POST", CREATE_PRODUCT_API, data, {
        "Content-Type": "multipart/form-data",
        Authorisation: `Bearer ${token}`,
      });
      console.log("CREATE COURSE API RESPONSE............", response);
      if (!response?.data?.success) {
        throw new Error("Could Not Add Product Details");
      }
      toast.success("Product Details Added Successfully");
      result = response?.data?.data;
      navigate("/dashboard/my-products")
    } catch (error) {
      console.log("CREATE Product API ERROR............", error);
      toast.error(error.response.data.message);
    }
    toast.dismiss(toastId);
    return result;
}

export const fetchSellerProducts = async (token) => {
    let result = []
    const toastId = toast.loading("Loading...")
    try {
      const response = await apiConnector(
        "GET",
        GET_ALL_SELLER_PRODUCTS_API,
        null,
        {
          Authorisation: `Bearer ${token}`,
        }
      )
      console.log("Seller Products API RESPONSE............", response)
      if (!response?.data?.success) {
        throw new Error("Could Not Fetch Seller Products")
      }
      result = response?.data?.data
    } catch (error) {
      console.log("Seller Products API ERROR............", error)
      toast.error(error.message)
    }
    toast.dismiss(toastId)
    return result
  }


  export const deleteProduct = async (data, token) => {
    const toastId = toast.loading("Loading...")
    try {
      const response = await apiConnector("DELETE", DELETE_PRODUCT_API, data, {
        Authorisation: `Bearer ${token}`,
      })
      console.log("DELETE COURSE API RESPONSE............", response)
      if (!response?.data?.success) {
        throw new Error("Could Not Delete Product")
      }
      toast.success("Product Deleted")
    } catch (error) {
      console.log("DELETE COURSE API ERROR............", error)
      toast.error(error.message)
    }
    toast.dismiss(toastId)
  }


  export const fetchAllProducts = async () => {
    let result = []
    const toastId = toast.loading("Loading...")
    try {
      const response = await apiConnector("GET",GET_ALL_PRODUCTS_API)
      console.log("Seller Products API RESPONSE............", response)
      if (!response?.data?.success) {
        throw new Error("Could Not Fetch Seller Products")
      }
      result = response?.data?.data
    } catch (error) {
      console.log("Seller Products API ERROR............", error)
      toast.error(error.message)
    }
    toast.dismiss(toastId)
    return result
  }


  export const fetchProductDetails = async (productId) => {
    let result = []
    console.log("Product Id in fun",productId)
    const toastId = toast.loading("Loading...")
    try {
        const response = await apiConnector("POST", GET_PRODUCT_DETAILS, {
            productId,
          })
      console.log("PRODUCT DETAILS API RESPONSE............", response)
      if (!response?.data?.success) {
        throw new Error("Could Not Fetch Blog Details")
      }
      result = response?.data?.data
    } catch (error) {
      console.log("PRODUCT DETAILS API ERROR............", error)
      toast.error(error.message)
    }
    toast.dismiss(toastId)
    return result
  }

