import axios from "axios";

const REVIEW_API = "https://rateprof-backend.herokuapp.com/reviews";
const PROF_REVIEW_API = "https://rateprof-backend.herokuapp.com/profs";
const AUTHOR_REVIEW_API = "https://rateprof-backend.herokuapp.com/users";


export const createReview = async (review) => {
    const response = await axios.post(`${REVIEW_API}`, review)
    return response.data
}

export const findReviewsByProf = async (profID) => {
    const response = await axios.get(`${PROF_REVIEW_API}/${profID}/reviews`)
    return response.data
}

export const findReviewsByAuthor = async (username) => {
    const response = await axios.get(`${AUTHOR_REVIEW_API}/${username}/reviews`)
    return response.data
}