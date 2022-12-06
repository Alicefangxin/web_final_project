import { createAsyncThunk } from "@reduxjs/toolkit";
import {findAllProfs, findProfById, findProfByName} from "./temp-profs-service";

export const findAllProfsThunk = createAsyncThunk(
  "findAllProfs",
  () => findAllProfs()
);

export const findProfByIdThunk = createAsyncThunk(
  "findProfById",
  (profID) => findProfById(profID)
);

export const findProfByNameThunk = createAsyncThunk(
    "findProfByName",
    (profName) => findProfByName(profName)
);