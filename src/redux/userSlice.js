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
    setUser: (state, action) => {
      state.email = action.payload.email
      state.name = action.payload.name
    },
  },
})

// Action creators are generated for each case reducer function
export const { changeName, changeEmail, setUser } = userSlice.actions

export default userSlice.reducer