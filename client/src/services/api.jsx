const BASE_URL = process.env.REACT_APP_BASE_URL ;



export const endpoints = {
    SENDOTP_API: BASE_URL + "/auth/sendotp",
    SIGNUP_API: BASE_URL + "/auth/signup",
    LOGIN_API: BASE_URL + "/auth/login",
    RESETPASSTOKEN_API: BASE_URL + "/auth/reset-password-token",
    RESETPASSWORD_API: BASE_URL + "/auth/update-password",
  };

  export const settingsEndpoints = {
    UPDATE_DISPLAY_PICTURE_API: BASE_URL + "/profile/updateDisplayPicture",
    UPDATE_PROFILE_API: BASE_URL + "/profile/updateProfile",
    CHANGE_PASSWORD_API: BASE_URL + "/auth/changepassword",
    DELETE_PROFILE_API: BASE_URL + "/profile/deleteProfile",
    
  };

  export const productEndpoints = {
    PRODUCT_CATEGORIES_API: BASE_URL + "/product/getAllCategory",
    CREATE_PRODUCT_API: BASE_URL + "/product/createProduct",
    GET_ALL_SELLER_PRODUCTS_API: BASE_URL + "/product/getSellerProducts",
    DELETE_PRODUCT_API : BASE_URL + "/product/deleteProduct",
    GET_ALL_PRODUCTS_API : BASE_URL + "/product/all-products",
    GET_PRODUCT_DETAILS : BASE_URL + "/product/productDetails",
  };

  export const blogEndpoints = {
    CREATE_BLOG_API: BASE_URL + "/blogs/add-blog",
    ALL_BLOG_API : BASE_URL + "/blogs/allBlogs",
    BLOG_DETAILS_API : BASE_URL + "/blogs/getFullBlogDetails",
    DELETE_BLOG_API : BASE_URL + "/blogs/deleteBlog"
  }

  export const userEndpoints = {
    PRODUCT_PAYMENT_API: BASE_URL + "/payment/capturePayment",
    PRODUCT_VERIFY_API: BASE_URL + "/payment/verifyPayment",
    SEND_PAYMENT_SUCCESS_EMAIL_API: BASE_URL + "/payment/sendPaymentSuccessEmail",
  }

  export const categoryData = {
    GET_CATEGORY_DATA_API : BASE_URL + "/product/getCategoryData",
  }