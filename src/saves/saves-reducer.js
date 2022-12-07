import {createSlice} from "@reduxjs/toolkit";
import {userSavesProfThunk} from "./saves-thunks";

const initialState = {
    saves: [],
    loading: false
}

const savesReducer = createSlice({
    name: 'saves',
    initialState,
    extraReducers: {
        [userSavesProfThunk.fulfilled]: (state, action) => {
            state.saves.push(action.payload)
        }
    }
})

export default savesReducer.reducer