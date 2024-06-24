import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  dateOrder: null,
  startDate: null,
  endDate: null,
};

const scheduleSlice = createSlice({
  name: "schedule",
  initialState,
  reducers: {
    updateOrder(state, action) {
      state.dateOrder = action.payload;
    },
    clearOrder(state) {
      state.dateOrder = null;
    },
    updateStartDate(state, action) {
      state.startDate = action.payload;
    },
    updateEndDate(state, action) {
      state.endDate = action.payload;
    },
    removeStartEndDate(state) {
      state.startDate = null;
      state.endDate = null;
    },
  },
});

export const {
  updateOrder,
  clearOrder,
  updateStartDate,
  updateEndDate,
  removeStartEndDate,
} = scheduleSlice.actions;
export default scheduleSlice.reducer;
