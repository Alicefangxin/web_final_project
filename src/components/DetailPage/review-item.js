import React from "react";
import "./index.css";
import {useSelector} from "react-redux";

const ReviewItem = (
    {
        review = {
        }
    }
) => {
    const {currentUser} = useSelector((state) => state.users)
    return (
        <li className="list-group-item bg-light mt-3 border-0 wd-review">
            <div className="row m-3">
                <div className="col-2 flex-column">
                    <div className="wd-quality-font ms-2">QUALITY</div>
                    <div className="p-4 wd-bg-quality rounded"><h3>{review.QUALITY}</h3></div>
                    <div className="wd-difficulty-font">DIFFICULTY</div>
                    <div className="p-4 wd-bg-difficulty rounded"><h3>{review.DIFFICULTY}</h3></div>
                </div>
                <div className="col-10">
                    <div className="mt-2 wd-margin-left">
                        Would Take Again: <span className="fw-bolder">{review.WouldTakeAgain}</span>
                    </div>
                    <div className="mt-5 wd-margin-left">
                        {review.content}
                    </div>

                </div>
            </div>
        </li>
    )
}
export default ReviewItem;
