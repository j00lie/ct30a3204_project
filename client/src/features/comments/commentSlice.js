import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import commentService from "./commentService";
const initialState = {
  comments: [],
  isError: false,
  isSuccess: false,
  isLoading: false,
  message: "",
};
//Create new code snippet
export const postComment = createAsyncThunk(
  "comments/post",
  async (commentData, thunkAPI) => {
    try {
      //Get jwt through thunkAPI so that only auhtenticated users can post code
      const token = thunkAPI.getState().auth.user;
      return await commentService.postComment(commentData, token);
    } catch (e) {
      const message =
        (e.response && e.response.data && e.response.data.message) ||
        e.message ||
        e.toString();

      return thunkAPI.rejectWithValue(message);
    }
  }
);

//Get posted comments
export const getComments = createAsyncThunk(
  "comments/getAll",
  async (postId, thunkAPI) => {
    try {
      return await commentService.getComments(postId);
    } catch (error) {}
  }
);
export const commentSlice = createSlice({
  name: "comment",
  initialState,
  reducers: {
    reset: (state) => initialState,
  },
  extraReducers: (builder) => {
    builder
      .addCase(postComment.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(postComment.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isSuccess = true;
        state.comments.push(action.payload);
      })
      .addCase(postComment.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.message = action.payload;
      })
      .addCase(getComments.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(getComments.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isSuccess = true;
        state.comments = action.payload;
      })
      .addCase(getComments.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.message = action.payload;
      });
  },
});

export const { reset } = commentSlice.actions;
export default commentSlice.reducer;
