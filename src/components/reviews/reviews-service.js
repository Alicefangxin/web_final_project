import axios from "axios";

const REVIEW_API = "http://localhost:4000/reviews";

const api = axios.create({withCredentials: true});

export const createReview = async (review) => {
    const response = await api.post(REVIEW_API, review)
    return response.date
}