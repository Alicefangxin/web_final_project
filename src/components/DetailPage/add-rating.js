import React from "react";
import InfoArray from "../SearchPage/profInfos.json";
const AddRating = () => {
    return(
        <>
            <div className="container">
                <div className="fs-1">Rate: <span className="fw-bolder">{InfoArray[1].name}</span> </div>
                <div className="fw-bolder">{InfoArray[1].department}</div>
                <ul className="list-group mt-5">
                    <li className="list-group-item">
                        <div className="mt-2 fw-bolder">
                            Select Course Code
                        </div>
                        <div className="mt-1 position-relative start-30 w-25">
                            <select className="form-select start-30">
                                <option selected>Select Courses</option>
                                <option value="1">CS5610</option>
                                <option value="2">CS5500</option>
                            </select>
                        </div>
                    </li>
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
                <button className="mt-4 mb-5 btn btn-primary float-end">Submit</button>
            </div>
        </>
    )
}
export default AddRating;