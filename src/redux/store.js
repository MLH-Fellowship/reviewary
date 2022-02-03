import { configureStore } from '@reduxjs/toolkit'
import userReducer from './userSlice'
import reviewReducer from './reviewSlice'

export const store =  configureStore({
  reducer: {
    user: userReducer,
    review:  reviewReducer,
  },
})