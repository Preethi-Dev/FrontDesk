import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  searchResult: [],
  filteredService: [],
  serviceType: null,
  status: null,
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
    emptyFilteredService(state) {
      state.filteredService = [];
    },
    removeServiceTypeStatus(state) {
      state.serviceType = null;
      state.status = null;
    },
    updateServiceType(state, action) {
      state.serviceType = action.payload;
    },
    updateStatus(state, action) {
      state.status = action.payload;
    },
  },
});

export const {
  clearServiceResult,
  updateSearchResult,
  updateFilteredService,
  removeFilteredService,
  removeServiceTypeStatus,
  emptyFilteredService,
  updateServiceType,
  updateStatus,
} = serviceSlice.actions;
export default serviceSlice.reducer;
