import { configureStore } from "@reduxjs/toolkit";
import resultSlice from "./resultSlice";

const store = configureStore({
  reducer: {
    result: resultSlice,
  },
});

export default store;
