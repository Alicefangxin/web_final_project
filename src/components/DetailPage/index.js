import React, {useEffect, useState} from "react";
import "./index.css";
import ReviewList from "./review-list";
import {useParams} from "react-router";
import {useDispatch, useSelector} from "react-redux";
import {findProfByIdThunk} from "../temp-prof-for-detail/temp-profs-thunks";
import {Link} from "react-router-dom";
import AddRating from "../add-rating/add-rating";
import {createReviewThunk} from "../../reviews/reviews-thunks";
import {userSavesProfThunk} from "../../saves/saves-thunks";

const DetailComponent = () => {
    const {profID} = useParams()
    const[review, setReview] = useState("")
    const {reviews} = useSelector((state) => state.reviews)
    const {details} = useSelector((state) => state.temp)
    const { currentUser } = useSelector((state) => state.users);
    const username = localStorage.getItem("username")
    console.log(username)
    const futureSave = {username, profID}
    console.log(futureSave)
    console.log(currentUser)
    const dispatch = useDispatch()
    useEffect(() => {
        dispatch(findProfByIdThunk(profID))
        // dispatch(findReviewByProfThunk(profID))
    }, [])
    const handlePostReviewBtn = () => {
        dispatch(createReviewThunk({
            review
        }))
    }
    return(
        <>
            <div className="container mt-5">
                <div className="row">
                    <div className="col">
                        <div className="fs-1 fw-bolder">{details.rating} <span className="fs-5 fw-normal text-secondary"> / 5</span> </div>
                        <div className="fw-bolder">Overall Quality Based on {details.numOfRatings} ratings</div>
                        <div className="mt-3 wd-profname">{details.name}
                            <span><i
                                onClick={() => {
                                    dispatch(userSavesProfThunk(futureSave))
                                }} className="bi bi-bookmark text-secondary fw-bolder fs-4 ms-2"></i></span></div>
                        <div>Professor in the <span className="fw-bolder">{details.department} department</span> at <span className="fw-bolder"><Link to="https://www.northeastern.edu/" className="text-dark">Northeastern University</Link></span></div>
                        <div className="d-flex flex-row bd-highlight">
                            <div className="p-2 bd-highlight border-2 border-end border-dark">
                                <div className="ms-4 wd-data mb-1">{details.againPct}</div>
                                <div>Would take again</div>
                            </div>
                            <div className="p-2 bd-highlight">
                                <div className="ms-4 wd-data mb-1">{details.difficultyLevel}</div>
                                <div>Level of Difficulty</div>
                            </div>
                        </div>
                        <div className="mt-2 d-flex flex-row bd-highlight">
                            <div className="p-2 bd-highlight border-1 border-end border-dark">
                                <Link to="#" className="text-dark">I'm Professor {details.name}</Link>
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
                                <td>{details.numOfAwesome}</td>
                            </tr>
                            <tr>
                                <th scope="row">Great 4</th>
                                <td>{details.numOfGreat}</td>
                            </tr>
                            <tr>
                                <th scope="row">Good 3</th>
                                <td>{details.numOfGood}</td>
                            </tr>
                            <tr>
                                <th scope="row">OK 2</th>
                                <td>{details.numOfOK}</td>
                            </tr>
                            <tr>
                                <th scope="row">Awful 1</th>
                                <td>{details.numOfAwful}</td>
                            </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
                <div className="mt-4 fw-bolder wd-margin-center">{details.numOfRatings} Student Ratings</div>
                <hr className="fw-bolder"/>
            </div>
            {
                (currentUser.userType === "STUDENT") &&
                <ul className="list-group">
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
                        <textarea
                            onChange={(e) => setReview(e.target.value)}
                            className="form-control mt-3 rows=5"></textarea>
                        <button onClick={handlePostReviewBtn}
                                className="mt-3 btn btn-primary rounded-pill fw-bolder float-end">
                            Rate Professor {details.name}</button>
                    </li>
                </ul>
            }

            <ReviewList/>
        </>
    )
}
export default DetailComponent;