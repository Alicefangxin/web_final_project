import { createSlice } from "@reduxjs/toolkit";
import {
    findProfByNameThunk
} from "./prof-thunks";

const searchedProfReducer = createSlice({
    name: "searched",
    initialState: {
        searched: [],
        loading: false
    },
    reducers: {},
    extraReducers: {
        [findProfByNameThunk.pending]: (state) => {
            state.searched = [];
            state.loading = true;
        },
        [findProfByNameThunk.fulfilled]: (state, {payload}) => {
            state.searched = payload;
            state.loading = false;
        }
    }
});

export default searchedProfReducer.reducer;
