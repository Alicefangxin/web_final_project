import {createAsyncThunk} from "@reduxjs/toolkit";
import {createReview, findReviewsByAuthor, findReviewsByProf} from "./reviews-service";

export const createReviewThunk = createAsyncThunk(
    'createReview',
    async (review) => {
        return await createReview(review)
    }
)

export const findReviewsByProfThunk = createAsyncThunk(
    'findReviewsByProf',
    async (profID) => findReviewsByProf(profID)
)

export const findReviewsByAuthorThunk = createAsyncThunk(
    'findReviewsByAuthor',
    async (username) => findReviewsByAuthor(username)
)



