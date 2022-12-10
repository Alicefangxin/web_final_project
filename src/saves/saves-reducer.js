import {createSlice} from "@reduxjs/toolkit";
import {findUsersWhoSavedProfThunk, userSavesProfThunk, userUnsavesProfThunk} from "./saves-thunks";

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
        },
        [findUsersWhoSavedProfThunk.fulfilled]: (state, action) => {
            state.saves = action.payload
        },
        [userUnsavesProfThunk.fulfilled]: (state, {payload}) => {
            state.saves = state.saves.filter(s => s.user !== payload.username && s.profID !== payload.profID)
        }
    }
})

export default savesReducer.reducer