import { configureStore } from "@reduxjs/toolkit";
import authSlice from './features/auth/authSlice';
import regionFilterSlice from "./features/products-filters/regionFilterSlice";
import flavourFilterSlice from "./features/products-filters/flavourFilterSlice";

export const store = configureStore({
    reducer: {
        auth: authSlice,
        regionFilter: regionFilterSlice,
        flavourFilter: flavourFilterSlice,
    },
    devTools: process.env.NODE_ENV !== 'production'
});