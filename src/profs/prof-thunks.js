import { createAsyncThunk } from "@reduxjs/toolkit";
import {findAllProfs, findProfById, findProfByName} from "./prof-service";

export const findAllProfsThunk = createAsyncThunk(
    "findAllProfs",
    () => findAllProfs()
);

export const findProfByIdThunk = createAsyncThunk(
    "findProfById",
    async (profID) => findProfById(profID)
);

export const findProfByNameThunk = createAsyncThunk(
    "findProfByName",
    ({firstname, lastname}) => findProfByName(firstname, lastname)
);