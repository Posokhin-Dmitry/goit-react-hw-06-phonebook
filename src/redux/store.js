import { configureStore } from "@reduxjs/toolkit";
import phoneBookReducer from "./reducer";

const store = configureStore({
  reducer: {
    phoneBook: phoneBookReducer,
  },
});

export default store;
