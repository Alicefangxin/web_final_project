<<<<<<<< HEAD:src/components/add-rating/add-rating.js
import React, {useState} from "react";
import InfoArray from "../SearchPage/profInfos.json";
import {Link} from "react-router-dom";
import SubmittedComponent from "./submitted";
const AddRating = () => {
    const {course, setCourse} = useState("");
    const {quality, setQuality} = useState("");
    const {difficulty, setDifficulty} = useState("");
    const {again, setAgain} = useState("");
    const {review, setReview} = useState("");

    return(
        <>
            <div className="container mt-5">
                <div className="fs-1">Rate: <span className="fw-bolder">{InfoArray[1].name}</span> </div>
                <div className="fw-bolder mt-2">{InfoArray[1].department}</div>
                <ul className="list-group mt-5">
                    <li className="list-group-item">
                        <div className="mt-2 fw-bolder">
                            Rate your professor
                        </div>
                        <div className="mt-1 position-relative w-50 start-30">
                            <label htmlFor="range1" className="form-label"></label>
                            <input type="range"
                                   className="form-range"
                                   min="1"
                                   max="5"
                                   step="1"
                                   id="range1"/>
                        </div>
                        <div className="d-flex justify-content-between w-50">
                            <div className="fw-bolder text-secondary">1-Awful</div>
                            <div className="fw-bolder text-secondary">5-Awesome</div>
                        </div>
                    </li>
                    <li className="list-group-item">
                        <div className="mt-2 fw-bolder">
                            How difficult was this professor?
                        </div>
                        <div className="mt-1 position-relative w-50 start-30">
                            <label htmlFor="range2" className="form-label"></label>
                            <input type="range"
                                   className="form-range"
                                   min="1"
                                   max="5"
                                   step="1"
                                   id="range2"/>
                        </div>
                        <div className="d-flex justify-content-between w-50">
                            <div className="fw-bolder text-secondary">1-Very Easy</div>
                            <div className="fw-bolder text-secondary">5-Very Difficult</div>
                        </div>
                    </li>
                    <li className="list-group-item">
                        <div className="mt-2 fw-bolder">
                            Would you take this professor again?
                        </div>
                        <div className="mt-1 position-relative start-30">
                            <div className="form-check">
                                <input className="form-check-input" type="radio"
                                       name="gridRadios" id="r1"
                                       value="yes"/>
                                <label className="form-check-label" htmlFor="r1">
                                    Yes</label>
                            </div>
                            <div className="form-check">
                                <input className="form-check-input" type="radio"
                                       name="gridRadios" id="r2"
                                       value="no"/>
                                <label className="form-check-label" htmlFor="r2">
                                    No</label>
                            </div>
                        </div>
                    </li>
                    <li className="list-group-item">
                        <div className="mt-2 fw-bolder">
                            Write a Review
                        </div>
                        <div className="mt-2">
                            Discuss the professor's professional abilities including teaching style and ability to convey the material clearly
                        </div>
                        <div className="mt-2 bg-light">
                            <div className="fw-bolder"><i className="bi bi-exclamation-circle-fill ms-2 mt-2"></i>    Guidelines</div>
                            <ul className="ms-5">
                                <li>
                                    Your rating could be removed if you use profanity or derogatory terms.
                                </li>
                                <li>Don't claim that the professor shows bias or favoritism for or against students.</li>
                                <li>Don’t forget to proof read!</li>
                            </ul>
                        </div>
                        <textarea className="form-control mt-3 rows=5"></textarea>
                    </li>
                </ul>
                <Link to="/submitted">
                    <button
                        onClick={()=>{<SubmittedComponent/>}}
                        className="mt-4 mb-5 btn btn-primary float-end">Submit</button>
                </Link>
            </div>
        </>
    )
}
========
import React, {useState} from "react";
import InfoArray from "../../SearchPage/profInfos.json";
import {Link} from "react-router-dom";
import SubmittedComponent from "./submitted";
const AddRating = () => {
    const {course, setCourse} = useState("");
    const {quality, setQuality} = useState("");
    const {difficulty, setDifficulty} = useState("");
    const {again, setAgain} = useState("");
    const {review, setReview} = useState("");

    return(
        <>
            <div className="container mt-5">
                <div className="fs-1">Rate: <span className="fw-bolder">{InfoArray[1].name}</span> </div>
                <div className="fw-bolder mt-2">{InfoArray[1].department}</div>
                <ul className="list-group mt-5">
                    <li className="list-group-item">
                        <div className="mt-2 fw-bolder">
                            Rate your professor
                        </div>
                        <div className="mt-1 position-relative w-50 start-30">
                            <label htmlFor="range1" className="form-label"></label>
                            <input type="range"
                                   className="form-range"
                                   min="1"
                                   max="5"
                                   step="1"
                                   id="range1"/>
                        </div>
                        <div className="d-flex justify-content-between w-50">
                            <div className="fw-bolder text-secondary">1-Awful</div>
                            <div className="fw-bolder text-secondary">5-Awesome</div>
                        </div>
                    </li>
                    <li className="list-group-item">
                        <div className="mt-2 fw-bolder">
                            How difficult was this professor?
                        </div>
                        <div className="mt-1 position-relative w-50 start-30">
                            <label htmlFor="range2" className="form-label"></label>
                            <input type="range"
                                   className="form-range"
                                   min="1"
                                   max="5"
                                   step="1"
                                   id="range2"/>
                        </div>
                        <div className="d-flex justify-content-between w-50">
                            <div className="fw-bolder text-secondary">1-Very Easy</div>
                            <div className="fw-bolder text-secondary">5-Very Difficult</div>
                        </div>
                    </li>
                    <li className="list-group-item">
                        <div className="mt-2 fw-bolder">
                            Would you take this professor again?
                        </div>
                        <div className="mt-1 position-relative start-30">
                            <div className="form-check">
                                <input className="form-check-input" type="radio"
                                       name="gridRadios" id="r1"
                                       value="yes"/>
                                <label className="form-check-label" htmlFor="r1">
                                    Yes</label>
                            </div>
                            <div className="form-check">
                                <input className="form-check-input" type="radio"
                                       name="gridRadios" id="r2"
                                       value="no"/>
                                <label className="form-check-label" htmlFor="r2">
                                    No</label>
                            </div>
                        </div>
                    </li>
                    <li className="list-group-item">
                        <div className="mt-2 fw-bolder">
                            Write a Review
                        </div>
                        <div className="mt-2">
                            Discuss the professor's professional abilities including teaching style and ability to convey the material clearly
                        </div>
                        <div className="mt-2 bg-light">
                            <div className="fw-bolder"><i className="bi bi-exclamation-circle-fill ms-2 mt-2"></i>    Guidelines</div>
                            <ul className="ms-5">
                                <li>
                                    Your rating could be removed if you use profanity or derogatory terms.
                                </li>
                                <li>Don't claim that the professor shows bias or favoritism for or against students.</li>
                                <li>Don’t forget to proof read!</li>
                            </ul>
                        </div>
                        <textarea className="form-control mt-3 rows=5"></textarea>
                    </li>
                </ul>
                <Link to="/submitted">
                    <button
                        onClick={()=>{<SubmittedComponent/>}}
                        className="mt-4 mb-5 btn btn-primary float-end">Submit</button>
                </Link>
            </div>
        </>
    )
}
>>>>>>>> SearchAndDetail:src/components/unused/add-rating/add-rating.js
export default AddRating;