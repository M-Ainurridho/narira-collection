import { createSlice } from "@reduxjs/toolkit";

export const authReducer = createSlice({
    name: "authentication",
    initialState: {
        isLogin: false,
        user: {},
    },
    reducers: {
        login: (state, action) => {
            state.isLogin = action.payload.isLogin;
            state.user = action.payload.user;
        },

        logout: (state) => {
            state.isLogin = false;
            state.user = {};
        },
    },
});

export const generalMenuReducer = createSlice({
    name: "General Menu",
    initialState: {
        currentMenu: "Beranda",
    },
    reducers: {
        setCurrentMenu: (state, action) => {
            state.currentMenu = action.payload;
        },
    },
});

export const alertReducer = createSlice({
    name: "alert message",
    initialState: {
        status: null,
        msg: "",
    },
    reducers: {
        setAlert: (state, action) => {
            state.status = action.payload.status;
            state.msg = action.payload.msg;
        },
    },
});

export const cartReducer = createSlice({
    name: "cart",
    initialState: {
        carts: [],
    },
    reducers: {
        addCart: (state, action) => {
            state.carts.push(action.payload);
        },

        replaceCart: (state, action) => {
            state.carts = action.payload;
        },
    },
});

export const { login, logout } = authReducer.actions;
export const { setCurrentMenu } = generalMenuReducer.actions;
export const { setAlert } = alertReducer.actions;
export const { addCart, replaceCart } = cartReducer.actions;
