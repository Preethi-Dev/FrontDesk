import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  isCollapse: false,
  isFilterColumnReveal: false,
};

const configSlice = createSlice({
  name: "config",
  initialState,
  reducers: {
    toggleCollapse(state) {
      state.isCollapse = !state.isCollapse;
    },
    toggleFilterColumnReveal(state) {
      state.isFilterColumnReveal = !state.isFilterColumnReveal;
    },
  },
});

export const { toggleCollapse, toggleFilterColumnReveal } = configSlice.actions;
export default configSlice.reducer;
