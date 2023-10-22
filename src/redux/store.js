import { configureStore } from "@reduxjs/toolkit";
import authSlice from './features/auth/authSlice';
import productsFiltersSlice from "./features/products-filters/productsFiltersSlice";

export const store = configureStore({
    reducer: {
        auth: authSlice,
        productsFilter: productsFiltersSlice,
    },
    devTools: process.env.NODE_ENV !== 'production'
});