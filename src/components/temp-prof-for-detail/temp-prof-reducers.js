import { createSlice } from "@reduxjs/toolkit";
import { findAllProfsThunk, findProfByIdThunk } from "./temp-profs-thunks";

const initialState = {
  profs: [],
  loading: false,
  // details: {}
};

const tempProfsReducer = createSlice({
  name: "tempProfs",
  initialState,
  extraReducers: {
    [findAllProfsThunk.pending]: (state) => {
      state.loading = true;
      state.profs = [];
    },
    [findAllProfsThunk.fulfilled]: (state, action) => {
      state.loading = false;
      state.profs = action.payload;
    },
    [findAllProfsThunk.rejected]: (state) => {
      state.loading = false;
    },
    /*[findProfByIdThunk.fulfilled]: (state, {payload}) => {
            state.details = payload
        }*/
  },
});

export default tempProfsReducer.reducer;
