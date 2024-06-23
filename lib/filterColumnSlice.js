import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  reset: false,
  columns: Array.from(
    new Set([
      "Order Created On",
      "Payer",
      "Status",
      "Email",
      "Payer Phone",
      "Service",
      "Scheduled",
    ])
  ),
  tempColumns: Array.from(
    new Set([
      "Order Created On",
      "Payer",
      "Status",
      "Email",
      "Payer Phone",
      "Service",
      "Scheduled",
    ])
  ),
};

const configSlice = createSlice({
  name: "config",
  initialState,
  reducers: {
    updateColumns(state, action) {
      state.tempColumns.push(action.payload);
    },
    removeColumns(state, action) {
      state.tempColumns.splice(state.tempColumns.indexOf(action.payload), 1);
    },
    applyFilter(state) {
      state.columns = state.tempColumns;
    },
    resetColumns(state) {
      state.reset = true;
      state.tempColumns = Array.from(
        new Set([
          "Order Created On",
          "Payer",
          "Status",
          "Email",
          "Payer Phone",
          "Service",
          "Scheduled",
        ])
      );
    },
    cancelReset(state) {
      state.reset = false;
    },
  },
});

export const {
  updateColumns,
  removeColumns,
  resetColumns,
  applyFilter,
  cancelReset,
} = configSlice.actions;
export default configSlice.reducer;
