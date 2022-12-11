import {createAsyncThunk} from "@reduxjs/toolkit";

import * as service from "./professor-service"

export const getProfessorsThunk = createAsyncThunk(
    'professors/getProfessors', async () => await service.getProfessors("", "neu")
)

export const searchProfessorsThunk = createAsyncThunk(
    'professors/searchProfessors', async (profName, university) => await service.searchProfessors(profName, university)
)