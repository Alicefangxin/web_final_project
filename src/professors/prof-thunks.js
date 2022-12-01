import {createAsyncThunk} from "@reduxjs/toolkit";

import * as service from "./prof-service"

export const getProfessorsThunk = createAsyncThunk(
    'professors/getProfessors', async () => await service.getProfessors("david", "neu")
)

export const searchProfessorsThunk = createAsyncThunk(
    'professors/searchProfessors', async (profName, university) => await service.getProfessors(profName, university)
)