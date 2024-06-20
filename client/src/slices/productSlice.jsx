import { createSlice } from "@reduxjs/toolkit"

const initialState = {

  course: null,

  paymentLoading: false,
}

const productSlice = createSlice({
  name: "product",
  initialState,
  reducers: {
    setProduct: (state, action) => {
      state.course = action.payload
    },
    setPaymentLoading: (state, action) => {
      state.paymentLoading = action.payload
    },
  },
})

export const {

  setCourse,

  setPaymentLoading,

} = productSlice.actions

export default productSlice.reducer