import {createAsyncThunk} from "@reduxjs/toolkit";
import {findProfsSavedByUser, findUsersWhoSavedProf, userSavesProf, userUnsavesProf} from "./saves-service";

export const userSavesProfThunk = createAsyncThunk(
    'userSavesProf',
    async (save) => {
        return await userSavesProf(save)
    }
)

export const userUnsavesProfThunk = createAsyncThunk(
    'userUnsavesProf',
    async ({username, profID}) => userUnsavesProf(username, profID)
)

export const findUsersWhoSavedProfThunk = createAsyncThunk(
    'findUsersWhoSavedProf',
    async (profID) => findUsersWhoSavedProf(profID)
)
export const findProfsSavedByUserThunk = createAsyncThunk(
    'findUsersWhoSavedProf',
    async (username) => findProfsSavedByUser(username)
)