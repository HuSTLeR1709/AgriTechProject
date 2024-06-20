import toast from "react-hot-toast";
import { apiConnector } from "../apiConnector";
import { categoryData } from "../api";



export const getCatalogPageData = async(categoryId) => {
    const toastId = toast.loading("Loading...");
    let result = [];
    try{
          const response = await apiConnector("POST", categoryData.GET_CATEGORY_DATA_API, 
          {categoryId: categoryId,});
          // console.log("Catalog page data response", response)
          if(!response?.data?.success)
              throw new Error("Could not Fetch Category page data");
  
           result = response?.data;
  
    }
    catch(error) {
      console.log("CATALOG PAGE DATA API ERROR....", error);
      toast.error(error.message);
      result = error.response?.data;
    }
    toast.dismiss(toastId);
    return result;
  }