import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  isFilterOpen: false,
  isFilterApplied: false,
};

const filterSlice = createSlice({
  name: "filter",
  initialState,
  reducers: {
    toggleFilterOpen(state) {
      state.isFilterOpen = !state.isFilterOpen;
    },
    applyFilter(state, action) {
      state.isFilterApplied = action.payload;
    },
  },
});

export const { applyFilter, toggleFilterOpen } = filterSlice.actions;
export default filterSlice.reducer;
