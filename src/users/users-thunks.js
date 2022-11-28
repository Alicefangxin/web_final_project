import { createAsyncThunk } from "@reduxjs/toolkit";
import {
  findAllUsers,
  register,
  login,
  logout,
  profile,
} from "./users-service.js";

export const findAllUsersThunk = createAsyncThunk(
  "findAllUsers",
  async () => await findAllUsers()
);

export const registerThunk = createAsyncThunk(
  "register",
  async (user) => await register(user)
);

export const logoutThunk = createAsyncThunk(
  "logout",
  async () => await logout()
);

export const loginThunk = createAsyncThunk(
  "login",
  async (user) => await login(user)
);
export const profileThunk = createAsyncThunk(
  "profile",
  async () => await profile()
);
