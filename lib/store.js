import { configureStore } from "@reduxjs/toolkit";
import configReducer from "./configSlice";
import filterColumnReducer from "./filterColumnSlice";
import scheduleReducer from "./scheduleSlice";
import peopleReducer from "./peopleSlice";
import serviceReducer from "./serviceSlice";

export const makeStore = () =>
  configureStore({
    reducer: {
      config: configReducer,
      filterColumn: filterColumnReducer,
      schedule: scheduleReducer,
      people: peopleReducer,
      service: serviceReducer,
    },
  });
