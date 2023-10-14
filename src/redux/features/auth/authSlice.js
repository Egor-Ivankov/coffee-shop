import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    user: null,
    token: null,
    status: null,
    isLoading: false
}

export const authSlice = createSlice({
    name: 'auth',
    initialState,
    reducers: {},
    extraReducers: {
        
    }
})

export default authSlice.reducer;