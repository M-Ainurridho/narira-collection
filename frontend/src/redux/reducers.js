import { createSlice } from '@reduxjs/toolkit'

export const userData = createSlice({
   name: 'user data',
   initialState: {
      data: {},
   },
   reducers: {},
})

export const authReducer = createSlice({
   name: 'authentication',
   initialState: {
      isLogin: false,
   },
   reducers: {
      login: (state, action) => {
         state.isLogin = action.payload
      },

      logout: (state, action) => {
         state.isLogin = action.payload
      },
   },
})

export const { login, logout } = authReducer.actions
