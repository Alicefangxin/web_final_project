import React from "react";
import InfoArray from "../SearchPage/profInfos.json";
import {Link} from "react-router-dom";
import AddRating from "./add-rating";
const ProfInfo = (
    {
        info = {
            "name": "Jose Annunziato",
            "department": "Computer Science",
            "rating": "4.6",
            "numOfRatings": "25",
            "difficultyLevel": "3.1",
            "againPct": "87%",
            "numOfAwesome": "20",
            "numOfGreat": "2",
            "numOfGood": "0",
            "numOfOK": "1",
            "numOfAwful": "2"
        }
    }
) => {
    return(
        <>
            <div className="container mt-5">
                <div className="row">
                    <div className="col">
                        <div className="fs-1 fw-bolder">{InfoArray[1].rating} <span className="fs-5 fw-normal text-secondary"> / 5</span> </div>
                        <div className="fw-bolder">Overall Quality Based on {InfoArray[1].numOfRatings} ratings</div>
                        <div className="mt-3 wd-profname">{InfoArray[1].name} <span><i className="bi bi-bookmark text-secondary fw-bolder fs-4 ms-2"></i></span></div>
                        <div>Professor in the <span className="fw-bolder">{InfoArray[1].department} department</span> at <span className="fw-bolder"><Link to="https://www.northeastern.edu/" className="text-dark">Northeastern University</Link></span></div>
                        <div className="d-flex flex-row bd-highlight">
                            <div className="p-2 bd-highlight border-2 border-end border-dark">
                                <div className="ms-4 wd-data">{InfoArray[1].againPct}</div>
                                <div>Would take again</div>
                            </div>
                            <div className="p-2 bd-highlight">
                                <div className="ms-4 wd-data">{InfoArray[1].difficultyLevel}</div>
                                <div>Level of Difficulty</div>
                            </div>
                        </div>
                        <Link to="/details/addrating">
                            <button onClick={()=><AddRating/>}
                                    className="mt-3 btn btn-primary rounded-pill fw-bolder">
                                Rate Professor Annunziato</button>
                        </Link>
                        <div className="mt-2 d-flex flex-row bd-highlight">
                            <div className="p-2 bd-highlight border-1 border-end border-dark">
                                <Link to="#" className="text-dark">I'm Professor Annunziato</Link>
                            </div>
                            <div className="p-2 bd-highlight">
                                <Link to="#" className="text-dark">Submit a correction</Link>
                            </div>
                        </div>
                    </div>
                    <div className="col">
                        <table className="table table-warning table-striped mt-5">
                            <thead>
                            <tr>
                                <th scope="col">Rating</th>
                                <th scope="col">Number</th>
                            </tr>
                            </thead>
                            <tbody>
                            <tr>
                                <th scope="row">Awesome 5</th>
                                <td>{InfoArray[1].numOfAwesome}</td>
                            </tr>
                            <tr>
                                <th scope="row">Great 4</th>
                                <td>{InfoArray[1].numOfGreat}</td>
                            </tr>
                            <tr>
                                <th scope="row">Good 3</th>
                                <td>{InfoArray[1].numOfGood}</td>
                            </tr>
                            <tr>
                                <th scope="row">OK 2</th>
                                <td>{InfoArray[1].numOfOK}</td>
                            </tr>
                            <tr>
                                <th scope="row">Awful 1</th>
                                <td>{InfoArray[1].numOfAwful}</td>
                            </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
                <div className="mt-4 fw-bolder wd-margin-center">{InfoArray[1].numOfRatings} Student Ratings</div>
                <hr className="fw-bolder"/>
                <div className="dropdown">
                    <button className="btn btn-light dropdown-toggle" type="button" id="dropdownMenuButton1"
                            data-bs-toggle="dropdown" aria-expanded="false">
                        All courses
                    </button>
                    <ul className="dropdown-menu" aria-labelledby="dropdownMenuButton1">
                        <li><Link to="#" className="dropdown-item">CS5500</Link></li>
                        <li><Link to="#" className="dropdown-item">CS5610</Link></li>
                    </ul>
                </div>
                <select className="form-select w-20">
                    <option selected>All courses</option>
                    <option value="1">All courses</option>
                    <option value="2">CS5500</option>
                    <option value="3">CS5610</option>
                </select>
            </div>
        </>
    )
}
export default ProfInfo;