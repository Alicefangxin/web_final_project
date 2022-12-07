import axios from "axios";

const REVIEW_API = "http://localhost:4000/reviews";


export const createReview = async (review) => {
    const response = await axios.post(REVIEW_API, review)
    return response.data
}