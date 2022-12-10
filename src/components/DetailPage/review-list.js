import React, {useEffect, useState} from "react";
import ReviewItem from "./review-item";
import {findReviewsByAuthorThunk, findReviewsByProfThunk} from "../../reviews/reviews-thunks";
import {useDispatch} from "react-redux";
import {useParams} from "react-router";

const ReviewList = () => {
    const [reviews, setReviews] = useState([])
    const {profID} = useParams();
    let [currentUser, setCurrentUser] = useState({})
    const username = window.location.hash.split("username=")[1]

    const dispatch = useDispatch();
    const findReviews = async () => {
        if (profID) {
            const data = await dispatch(findReviewsByProfThunk(profID))
            setReviews(data.payload)
        } else {
            if (username) {
                const data = await dispatch(findReviewsByAuthorThunk(username))
                setReviews(data.payload)
            } else {
                const data = await dispatch(findReviewsByAuthorThunk(JSON.parse(window.localStorage.getItem("userinfo")).username))
                setReviews(data.payload)
            }
        }

    }
    useEffect(() => {
        findReviews()
    }, [])
    return (
        <ul className="list-group">
            {
                reviews.map(review =>
                    <ReviewItem
                        key={review._id} review={review}/>)
            }
        </ul>
    )
}
export default ReviewList;
