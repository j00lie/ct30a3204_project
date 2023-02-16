/*Add Redux reducers here */

import { configureStore } from "@reduxjs/toolkit";
import authReducer from "../features/auth/authSlice";
import snippetReducer from "../features/snippets/snippetSlice";
import postReducer from "../features/posts/showPostSlice";
import commentReducer from "../features/comments/commentSlice";
export const store = configureStore({
  reducer: {
    auth: authReducer,
    snippet: snippetReducer,
    clickedItem: postReducer,
    comment: commentReducer,
  },
});
