import { configureStore } from "@reduxjs/toolkit";
import {
    alertReducer,
    authReducer,
    cartReducer,
    generalMenuReducer,
    searchReducer,
    searched,
} from "./reducers";

export default configureStore({
    reducer: {
        auth: authReducer.reducer,
        generalMenu: generalMenuReducer.reducer,
        alert: alertReducer.reducer,
        cart: cartReducer.reducer,
        search: searchReducer.reducer,
    },
});
