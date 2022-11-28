import React from "react";
import reviewArray from "./reviews.json";
import ReviewItem from "./review-item";

const ReviewList = () => {
    return(
        <ul className="list-group">
            {
                reviewArray.map(review =>
                <ReviewItem
                key={review._id} review={review}/>)
            }
        </ul>
    )
}
export default ReviewList;