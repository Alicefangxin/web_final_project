import React from "react";
import {Link} from "react-router-dom";

const ResultItem = (
    {
        info = {}
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
                    <Link to={`/details/${info.profID}`}>
                        < button onClick={() => {
                        }} className="btn btn-dark float-end">See Rating
                        </button>
                    </Link>
                </div>
            </div>
        </li>
    )
}
export default ResultItem;
