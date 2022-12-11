import {createSlice} from "@reduxjs/toolkit";
import {
    findProfsSavedByUserThunk,
} from "./saves-thunks";

const initialState = {
    saved_profs: []
}

const savesProfReducer = createSlice({
    name: 'saved_profs',
    initialState,
    extraReducers: {
        [findProfsSavedByUserThunk.fulfilled]: (state, {payload}) => {
            state.saved_profs = payload
        }
    }
})

export default savesProfReducer.reducer