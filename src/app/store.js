import { configureStore } from "@reduxjs/toolkit";
import useReducer from "../features/userSlice.js";

export default configureStore({
  reducer: {
    user: useReducer,
  },
});
