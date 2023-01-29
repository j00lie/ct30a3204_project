import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

const initialState = {
  clickedItem: "",
};

export const postSlice = createSlice({
  name: "clickedPost",
  initialState,
  reducers: {
    reset: (state) => initialState,
  },
});

export const { reset } = postSlice.actions;
export default postSlice.reducer;
