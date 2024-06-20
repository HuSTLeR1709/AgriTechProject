import toast from "react-hot-toast";
import { apiConnector } from "../apiConnector";
import { settingsEndpoints } from "../api";
import { logout } from "./authAPI";

export async function updatePfp(token,pfp){
    const toastId = toast.loading("Uploading...");
    try {
      const formData = new FormData();
      console.log("pfp",pfp)
      formData.append('pfp',pfp);
      const response = await apiConnector("PUT", settingsEndpoints.UPDATE_DISPLAY_PICTURE_API,formData,{
        Authorisation: `Bearer ${token}`,
      });
      console.log("UPDATE_DISPLAY_PICTURE_API API RESPONSE............", response)
      if (!response.data.success) {
        throw new Error(response.data.message)
      }
      toast.success("Profile Picture Updated Successfully");
      const imageUrl = response.data.data.image;
      localStorage.setItem("user",JSON.stringify({...JSON.parse(localStorage.getItem("user")),image:imageUrl}));
      console.log(JSON.parse(localStorage.getItem("user")).image);
    } catch (error) {
      console.log("UPDATE_DISPLAY_PICTURE_API API ERROR............", error)
      toast.error(error.response.data.message);
    }
    toast.dismiss(toastId);
  }

  export async function deleteAccount(token,dispatch,navigate){
    const toastId = toast.loading("Deleting...");
    try {
      const response = await apiConnector("DELETE", settingsEndpoints.DELETE_PROFILE_API,null,{
        Authorisation: `Bearer ${token}`,
      });
      console.log("DELETE_ACCOUNT_API API RESPONSE............", response)
      if (!response.data.success) {
        throw new Error(response.data.message)
      }
      toast.success("Account Deleted Successfully");
      dispatch(logout(navigate))
    }
    catch (error) {
      console.log("DELETE_ACCOUNT_API API ERROR............", error)
      toast.error(error.response.data.message)
    }
    toast.dismiss(toastId);
  }

  export async function updatePassword(token,password){
    const { oldPassword, newPassword, confirmPassword:confirmNewPassword }=password;
    console.log("password",password);
    const toastId = toast.loading("Updating...");
    try {
     const response = await apiConnector("POST", settingsEndpoints.CHANGE_PASSWORD_API,{oldPassword, newPassword, confirmNewPassword},{
        Authorisation: `Bearer ${token}`,
      });
      console.log("UPDATE_PASSWORD_API API RESPONSE............", response)
      if (!response.data.success) {
        throw new Error(response.data.message)
      }
      toast.success("Password Updated Successfully");
    }
    catch (error) {
      console.log("UPDATE_PASSWORD_API API ERROR............", error)
      toast.error(error.response.data.message)
    }
    toast.dismiss(toastId);
  }