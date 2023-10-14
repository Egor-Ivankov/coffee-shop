import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from '@utils/axios'

const initialState = {
    user: null,
    token: null,
    status: null,
    isLoading: false
}

export const loginThunk = createAsyncThunk('auth/loginUser', async () => {
    try {
        const { data } = await axios.post('/auth/login', { email, password })

        if (data.token) {
            window.localStorage.setItem('token', data.token);
        }
        return data;
    } catch (error) {
        console.log(error);
    }
})

export const authSlice = createSlice({
    name: 'auth',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
        .addCase(loginThunk.pending, (state) => {
            state.isLoading = true;
            state.status = null;
        })
        .addCase(loginThunk.fulfilled, (state, action) => {
            state.isLoading = false;
            state.status = action.payload.message;
            state.user = action.payload.user;
            state.token = action.payload.token;
        })
        .addCase(loginThunk.rejected, (state, action) => {
            state.isLoading = false;
            state.status = action.payload.message;
        })
    }
})

export const checkIsAuth = (state) => Boolean(state.auth.token);

export default authSlice.reducer;