import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  title: "",
  description:"",
}

export const reviewSlice = createSlice({
  name: 'review',
  initialState,
  reducers: {

    changeTitle: (state, action) => {
      state.title = action.payload
    },
    changeDescription: (state, action) => {
      state.description = action.payload
    },
    setReviewForm: (state, action) => {
      state.title = action.payload.title
      state.description = action.payload.description
    },
  },
})

// Action creators are generated for each case reducer function
export const { changeTitle, changeDescription, setReviewForm } = reviewSlice.actions

export default reviewSlice.reducer