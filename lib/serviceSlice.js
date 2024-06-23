import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  searchResult: [],
  filteredService: [],
};

const serviceSlice = createSlice({
  name: "service",
  initialState,
  reducers: {
    updateSearchResult(state, action) {
      state.searchResult = action.payload;
    },
    clearServiceResult(state, action) {
      state.searchResult = [];
    },
    updateFilteredService(state, action) {
      state.filteredService.push(action.payload);
    },
    removeFilteredService(state, action) {
      state.filteredService.splice(
        state.filteredService.indexOf(action.payload),
        1
      );
    },
  },
});

export const {
  clearServiceResult,
  updateSearchResult,
  updateFilteredService,
  removeFilteredService,
} = serviceSlice.actions;
export default serviceSlice.reducer;
