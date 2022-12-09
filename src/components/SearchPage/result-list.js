import React from "react";
import ResultItem from "./result-item.js";
import {useSelector} from "react-redux";
import {Link} from "react-router-dom";
import DetailComponent from "../DetailPage";

const ResultList = () => {
    const {searched, loading} = useSelector((state) => state.searched);
    console.log(searched)
    return (
        <ul className="list-group">
            {
                searched && searched.map((prof) =>
                    <li key={prof._id} className="list-group-item border-0 mb-2 bg-light">
                        <div className="row m-2">
                            <div className="col-2 flex-column">
                                <div className="wd-quality-font ms-2">QUALITY</div>
                                <div className="p-4 wd-bg-rating rounded"><h3>{prof.rating}</h3></div>
                                <div className="ms-2">{prof.numOfRatings} ratings</div>
                            </div>
                            <div className="col-8">
                                <div className="text-black fw-bolder"><h3>{prof.name}</h3></div>
                                <div className="text-black mt-2">{prof.department}</div>
                                <div className="mt-3">
                                    <div className="fw-bolder">{prof.againPct} <span className="fw-normal">would take again | </span>{prof.difficultyLevel} <span className="fw-normal">level of difficulty</span> </div>
                                </div>
                            </div>
                            <div className="col-2">
                                <Link to={`details/${prof.profID}`}>
                                    <button onClick={()=><DetailComponent/>} className="btn btn-dark float-end">See Rating</button>
                                </Link>
                            </div>
                        </div>
                    </li>
                )
            }
            {!searched && <h4 className="mt-4">No professors found</h4>}
        </ul>
        /*<ul className="list-group">
            {
                loading &&
                <li className="list-group-item">
                    Loading...
                </li>
            }
            {
                searched.map(info =>
                    <ResultItem
                        key={info._id} info={info}/>)
            }
        </ul>*/
    )
}
export default ResultList;