import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  searchResult: [],
  filteredPeople: [],
};

const peopleSlice = createSlice({
  name: "people",
  initialState,
  reducers: {
    updateSearchResult(state, action) {
      state.searchResult = action.payload;
    },
    clearPeopleResult(state, action) {
      state.searchResult = [];
    },
    updateFilteredPeople(state, action) {
      state.filteredPeople.push(action.payload);
    },
    removeFilteredPeople(state, action) {
      state.filteredPeople.splice(
        state.filteredPeople.indexOf(action.payload),
        1
      );
    },
  },
});

export const {
  clearPeopleResult,
  updateSearchResult,
  updateFilteredPeople,
  removeFilteredPeople,
} = peopleSlice.actions;
export default peopleSlice.reducer;
