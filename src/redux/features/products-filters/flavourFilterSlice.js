import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    activeFilter: 'all'
}

const flavourFilterSlice = createSlice({
    name: 'flavourFilter',
    initialState,
    reducers: {
        getActiveFlavourFilter: (state, action) => {
            state.activeFilter = action.payload;
        }
    }
})

export default flavourFilterSlice.reducer;
export const { getActiveFlavourFilter } = flavourFilterSlice.actions;