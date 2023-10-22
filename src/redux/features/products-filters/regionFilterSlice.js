import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    activeFilter: 'all'
}

const regionFilterSlice = createSlice({
    name: 'regionFilters',
    initialState,
    reducers: {
        getActiveRegionFilter: (state, action) => {
            state.activeFilter = action.payload;
        }
    }
});

export const { getActiveRegionFilter } = regionFilterSlice.actions;
export default regionFilterSlice.reducer;