import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "../createSlice/counterSlice";

export default configureStore({
  reducer: {
    counter: counterReducer,
  },
});
