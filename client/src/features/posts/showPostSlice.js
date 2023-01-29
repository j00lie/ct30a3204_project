// import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

// const initialState = {
//   clickedItem: {},
// };

// export const postSlice = createSlice({
//   name: "clickedPost",
//   initialState,
//   reducers: {
//     reset: (state) => initialState,
//   },
// });

// export const { reset } = postSlice.actions;
// export default postSlice.reducer;

const initialState = {
  selectedItem: null,
};

function showPostReducer(state = initialState, action) {
  switch (action.type) {
    case "SET_SELECTED_ITEM":
      return { ...state, selectedItem: action.payload };
    default:
      return state;
  }
}

export default showPostReducer;
