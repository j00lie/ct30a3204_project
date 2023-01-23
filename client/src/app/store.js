import { configureStore } from "@reduxjs/toolkit";
import authReducer from "../features/auth/authSlice";
import snippetReducer from "../features/snippets/snippetSlice";
export const store = configureStore({
  reducer: {
    auth: authReducer,
    snippet: snippetReducer,
  },
});
