import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from '@utils/axios.js'

const initialState = {
    user: null,
    token: null,
    status: null,
    isLoading: false
}

export const loginThunk = createAsyncThunk('auth/loginUser', async ({username, password}) => {
    try {
        const { data } = await axios.post('/auth/login', { username, password })

        if (data.token) {
            window.localStorage.setItem('token', data.token);
        }
        return data;
    } catch (error) {
        console.log(error);
    }
})

export const getUser = createAsyncThunk('auth/getUser', async () => {
    try {
        const { data } = await axios.get('auth/me')
        return data;
    } catch (error) {
        console.log(error);
    }
})

export const authSlice = createSlice({
    name: 'auth',
    initialState,
    reducers: {
        logout: (state) => {
            state.isLoading = false;
            state.user = null;
            state.token = null;
            state.status = null;
        },
    },
    extraReducers: (builder) => {
        builder

        // Login user
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

        .addCase(getUser.pending, (state) => {
            state.isLoading = true;
            state.status = null;
        })
        .addCase(getUser.fulfilled, (state, action) => {
            state.isLoading = false;
            state.status = action.payload.message;
            state.user = action.payload?.user;
            state.token = action.payload?.token;
        })
        .addCase(getUser.rejected, (state, action) => {
            state.isLoading = false;
            state.status = action.payload.message;
        })
    }
})

export const checkIsAuth = (state) => Boolean(state.auth.token);

export const { logout } = authSlice.actions;
export default authSlice.reducer;