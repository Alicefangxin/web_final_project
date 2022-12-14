import React from "react";
import {Link} from "react-router-dom";

const ResultItem = (
    {
        info = {
            "_id": "638be0256727de613b581575",
            "name": "Zhuoqun Cheng",
            "department": "Computer Science",
            "rating": "3.9",
            "numOfRatings": "4",
            "difficultyLevel": "3.9",
            "againPct": "67%",
            "numOfAwesome": "2",
            "numOfGreat": "0",
            "numOfGood": "1",
            "numOfOK": "1",
            "numOfAwful": "0"
        }
    }
) => {
    return (
        <li className="list-group-item border-0 mb-2 bg-light">
            <div className="row m-2">
                <div className="col-2 flex-column">
                    <div className="wd-quality-font ms-2">QUALITY</div>
                    <div className="p-4 wd-bg-rating rounded"><h3>{info.rating}</h3></div>
                    <div className="ms-2">{info.numOfRatings} ratings</div>
                </div>
                <div className="col-8">
                    <div className="text-black fw-bolder"><h3>{info.name}</h3></div>
                    <div className="text-black mt-2">{info.department}</div>
                    <div className="mt-3">
                        <div className="fw-bolder">{info.againPct} <span
                            className="fw-normal">would take again | </span>{info.difficultyLevel} <span
                            className="fw-normal">level of difficulty</span></div>
                    </div>
                </div>
                <div className="col-2">
                    <Link to={`/details/${info._id}`} state={{info: info}}>
                        <button className="btn btn-dark float-end">See Rating</button>
                    </Link>
                </div>
            </div>
        </li>
    )
}
export default ResultItem;