import { createSlice } from "@reduxjs/toolkit";
import {
    searchProfessorsThunk
} from "../../professors/prof-thunks";

const searchedReducer = createSlice({
    name: "searched",
    initialState: {
        searched: [],
        loading: false
    },
    reducers: {},
    extraReducers: {
        [searchProfessorsThunk.pending]: (state) => {
            state.searched = [];
            state.loading = true;
        },
        [searchProfessorsThunk.fulfilled]: (state, {payload}) => {
            state.searched = payload;
            state.loading = false;
        }
    }
});

export default searchedReducer.reducer;
