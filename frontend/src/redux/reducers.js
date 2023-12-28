import { createSlice } from '@reduxjs/toolkit'

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

export const generalMenuReducer = createSlice({
   name: 'General Menu',
   initialState: {
      currentMenu: 'Beranda',
   },
   reducers: {
      setCurrentMenu: (state, action) => {
         state.currentMenu = action.payload
      },
   },
})

export const { login, logout } = authReducer.actions
export const { setCurrentMenu } = generalMenuReducer.actions
