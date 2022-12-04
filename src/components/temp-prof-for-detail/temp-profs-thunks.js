import { createAsyncThunk } from "@reduxjs/toolkit";
import * as service from "./temp-profs-service";
import { findAllProfs } from "./temp-profs-service";

export const findAllProfsThunk = createAsyncThunk(
  "findAllProfs",
  async () => await findAllProfs()
);

export const findProfByIdThunk = createAsyncThunk(
  "findProfById",
  async (pid) => {
    return await service.findProfById(pid);
  }
);
