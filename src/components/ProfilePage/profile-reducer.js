import { createSlice } from "@reduxjs/toolkit";
import initialProfile from "./profile.json";

const profileSlice = createSlice({
    name: 'profile',
    initialState: initialProfile,
    reducers: {
        updateProfile(state, action) {
            state.firstName = action.payload.firstName.firstName;
            state.lastName = action.payload.lastName.lastName;
            state.school = action.payload.school.school;
            state.expectedYearOfGraduation = action.payload.expectedYearOfGraduation.expectedYearOfGraduation;
        }
    }
});

export const {updateProfile} = profileSlice.actions;
export default profileSlice.reducer