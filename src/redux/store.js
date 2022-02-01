import { configureStore } from '@reduxjs/toolkit'
import userReducer from '../features/counter/counterSlice'

export default configureStore({
  reducer: {
    user: userReducer,
  },
})