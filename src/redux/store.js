import { configureStore } from "@reduxjs/toolkit";
import authSlice from './features/auth/authSlice';
import productsFilter from "./features/products-filters/productsFiltersSlice";

export const store = configureStore({
    reducer: {
        auth: authSlice,
        productsFilter,
    },
    devTools: process.env.NODE_ENV !== 'production'
});