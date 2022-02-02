import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  name: "",
  email:"",
}

export const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {

    changeName: (state, action) => {
      state.name = action.payload
    },
    changeEmail: (state, action) => {
      state.email = action.payload
    },
    setUserInfo: (state, action) => {
      state = action.payload
    },
  },
})

// Action creators are generated for each case reducer function
export const { changeName, changeEmail, setUserInfo } = userSlice.actions

export default userSlice.reducer