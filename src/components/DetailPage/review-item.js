import React from "react";
import "./index.css";
const ReviewItem = (
    {
        review = {
            "QUALITY": "5.0",
            "DIFFICULTY": "3.0",
            "course": "CS5500",
            "WouldTakeAgain": "Yes",
            "review": "I would recommend to take this course.",
            "topic": "AWESOME",
            "date": "Nov 24th, 2022"
        }
    }
) => {
    return(
        <li className="list-group-item bg-light mt-3 border-0 wd-review">
            <div className="row m-3">
                <div className="col-2 flex-column">
                    <div className="wd-quality-font ms-2">QUALITY</div>
                    <div className="p-4 wd-bg-quality rounded"><h3>{review.QUALITY}</h3></div>
                    <div className="wd-difficulty-font">DIFFICULTY</div>
                    <div className="p-4 wd-bg-difficulty rounded"><h3>{review.DIFFICULTY}</h3></div>
                </div>
                <div className="col-10">
                    <div className="d-flex flex-row justify-content-between">
                        <div className="p-2 fw-bolder wd-margin-left">{review.course}</div>
                        <div className="p-2 fw-bolder wd-bg-title rounded">{review.topic}</div>
                        <div className="p-2 fw-bolder float-end me-1">{review.date}</div>
                    </div>
                    <div className="mt-2 wd-margin-left">
                        Would Take Again: <span className="fw-bolder">{review.WouldTakeAgain}</span>
                    </div>
                    <div className="mt-5 wd-margin-left">
                        {review.review}
                    </div>
                </div>
            </div>
        </li>
    )
}
export default ReviewItem;