import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    regions: 'all',
    flavour: 'all',
    strength: 'all'
}

const productsFiltersSlice = createSlice({
    name: 'productsFilter',
    initialState,
    reducers: {
        getActiveRegionFilter: (state, action) => {
            state.regions = action.payload;
        },
        getActiveFlavourFilter: (state, action) => {
            state.flavour = action.payload;
        },
        getActiveStrengthsFilter: (state, action) => {
            state.strength = action.payload;
        }
    }
});

export default productsFiltersSlice.reducer;

export const {
    getActiveRegionFilter,
    getActiveFlavourFilter,
    getActiveStrengthsFilter
} = productsFiltersSlice.actions;