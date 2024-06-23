import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  dateOrder: "All",
};

const scheduleSlice = createSlice({
  name: "schedule",
  initialState,
  reducers: {
    updateOrder(state, action) {
      state.dateOrder = action.payload;
    },
  },
});

export const { updateOrder } = scheduleSlice.actions;
export default scheduleSlice.reducer;
