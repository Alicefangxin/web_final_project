import {createAsyncThunk} from "@reduxjs/toolkit";
import {deleteUser, findAllUsers, loadSingleUser, login, profile, register, updateUser,} from "./users-service";

export const findAllUsersThunk = createAsyncThunk(
    "findAllUsers",
    async () => await findAllUsers()
);

export const registerThunk = createAsyncThunk(
    "register",
    async (user) => await register(user)
);

export const loginThunk = createAsyncThunk(
    "login",
    async (user) => await login(user)
);

export const profileThunk = createAsyncThunk(
    "profile",
    async () => await profile()
);

export const loadSingleUserThunk = createAsyncThunk(
    "loadSingleUser",
    async (username) => await loadSingleUser(username)
);

export const updateProfileThunk = createAsyncThunk(
    "userUpdate",
    async (newProfile) => await updateUser(newProfile)
);
export const deleteUserThunk = createAsyncThunk(
    "deleteUser",
    async (uid) => await deleteUser(uid)
);
