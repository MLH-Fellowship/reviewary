import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  name: "",
  email:"",
  locationInfo:{},
  ip:"",
  country:"", 
  flag: " ",
  city: "",
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
    setLocationInfo: (state, action) => {
      state.ip = action.payload.ip;
      state.country = action.payload.country_name;
      state.flag = action.payload.flag;
      state.city = action.payload.city;
    }
  },
})

// Action creators are generated for each case reducer function
export const { changeName, changeEmail, setUser , setLocationInfo  } = userSlice.actions

export default userSlice.reducer