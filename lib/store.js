import { configureStore } from "@reduxjs/toolkit";
import configReducer from "./configSlice";
import filterColumnReducer from "./filterColumnSlice";

export const makeStore = () =>
  configureStore({
    reducer: {
      config: configReducer,
      filterColumn: filterColumnReducer,
    },
  });
