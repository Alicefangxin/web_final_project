import {createAsyncThunk} from "@reduxjs/toolkit";
import {createReview} from "./reviews-service";

export const createReviewThunk = createAsyncThunk(
    'createReview',
    async (review) => createReview(review)
)
