import { createSlice } from "@reduxjs/toolkit";
import {
    getProfessorsThunk
} from "./professor-thunks";

const professorsReducer = createSlice({
    name: "professors",
    initialState: {
        professors: [],
        loading: false
    },
    reducers: {},
    extraReducers: {
        [getProfessorsThunk.pending]: (state) => {
            state.professors = [];
            state.loading = true;
        },
        [getProfessorsThunk.fulfilled]: (state, {payload}) => {
            state.professors = payload;
            state.loading = false;
        }
    }
});

export default professorsReducer.reducer;
