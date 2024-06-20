import { combineReducers } from "@reduxjs/toolkit";
import authReducer from '../slices/authSlice'
import profileReducer from '../slices/profileSlice'
import cartReducer from '../slices/cartSlice'
import productReducer from '../slices/productSlice'
// import courseReducer from '../slices/courseSlice'
import loadingBarReducer from '../slices/loadingBarSlice'

const rootReducer = combineReducers({
    auth: authReducer,
    profile: profileReducer,
    cart: cartReducer,
    loadingBar: loadingBarReducer,
    product: productReducer,

})

export default rootReducer;