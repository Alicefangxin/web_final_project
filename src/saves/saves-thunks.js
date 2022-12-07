import {createAsyncThunk} from "@reduxjs/toolkit";
import {userSavesProf} from "./saves-service";

export const userSavesProfThunk = createAsyncThunk(
    'userSavesProf',
    async (save) => {
        return await userSavesProf(save)
    }
)