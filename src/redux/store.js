import { configureStore } from "@reduxjs/toolkit";
import authSlice from './features/auth/authSlice';
import regionFilterSlice from "./features/products-filters/regionFilterSlice";

export const store = configureStore({
    reducer: {
        auth: authSlice,
        regionFilter: regionFilterSlice,
    },
    devTools: process.env.NODE_ENV !== 'production'
});