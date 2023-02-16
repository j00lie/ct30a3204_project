import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import snippetService from "./snippetService";

//Define initial state
const initialState = {
  snippets: [],
  isError: false,
  isSuccess: false,
  isLoading: false,
  message: "",
};
//Create new code snippet
export const postSnippet = createAsyncThunk(
  "snippets/post",
  async (snippetData, thunkAPI) => {
    try {
      //Get jwt through thunkAPI so that only auhtenticated users can post code
      const token = thunkAPI.getState().auth.user;
      return await snippetService.postSnippet(snippetData, token);
    } catch (e) {
      const message =
        (e.response && e.response.data && e.response.data.message) ||
        e.message ||
        e.toString();

      return thunkAPI.rejectWithValue(message);
    }
  }
);

//Get posted snippets
export const getSnippets = createAsyncThunk(
  "snippets/getAll",
  async (_, thunkAPI) => {
    try {
      return await snippetService.getSnippets();
    } catch (error) {}
  }
);

//Create reducers
export const snippetSlice = createSlice({
  name: "snippet",
  initialState,
  reducers: {
    reset: (state) => initialState,
  },
  extraReducers: (builder) => {
    builder
      .addCase(postSnippet.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(postSnippet.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isSuccess = true;
        state.snippets.push(action.payload);
      })
      .addCase(postSnippet.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.message = action.payload;
      })
      .addCase(getSnippets.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(getSnippets.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isSuccess = true;
        state.snippets = action.payload;
      })
      .addCase(getSnippets.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.message = action.payload;
      });
  },
});

export const { reset } = snippetSlice.actions;
export default snippetSlice.reducer;
