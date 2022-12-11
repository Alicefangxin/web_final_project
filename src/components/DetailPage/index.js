import React, {useEffect, useState} from "react";
import "./index.css";
import {useParams} from "react-router";
import {useDispatch, useSelector} from "react-redux";
import {findProfByIdThunk} from "../../profs/prof-thunks";
import {Link} from "react-router-dom";
import {createReviewThunk, findReviewsByProfThunk} from "../../reviews/reviews-thunks";
import {findUsersWhoSavedProfThunk, userSavesProfThunk, userUnsavesProfThunk} from "../../saves/saves-thunks";
import ProfileAccountComponent from "../ProfilePage/components/account/profileAccount";
import Footer from "../footer/Footer";

const DetailComponent = () => {
    const {profID} = useParams()
    const username = localStorage.getItem("username")
    const {reviews} = useSelector((state) => state.reviews)
    const {details} = useSelector((state) => state.profs)
    const {saves} = useSelector((state) => state.saves)
    const { currentUser } = useSelector((state) => state.users);
    const futureSave = {username, profID}
    const initialReview = {
        profID: profID,
        author: username,
        QUALITY: "",
        DIFFICULTY: "",
        WouldTakeAgain: "",
        content: ""
    }
    const [review, setReview] = useState(initialReview)
    const [disable, setDisable] = useState(false)
    // console.log(initialReview)
    // console.log(futureSave)
    const dispatch = useDispatch()
    useEffect(() => {
        dispatch(findProfByIdThunk(profID))
        dispatch(findReviewsByProfThunk(profID))
        dispatch(findUsersWhoSavedProfThunk(profID))
    },[])
    console.log(reviews)
    console.log(saves)
    return(
        <>
            <div className="container mt-5">
                <div className="row">
                    <div className="col">
                        <div className="fs-1 fw-bolder">{details.rating} <span className="fs-5 fw-normal text-secondary"> / 5</span> </div>
                        <div className="fw-bolder">Overall Quality Based on {details.numOfRatings} ratings</div>
                        <div className="mt-3 wd-profname">{details.name}
                            {
                                (currentUser && currentUser.userType === "STUDENT") &&
                                <span>
                                    {!saves.some(s => s.user === username) &&
                                        <i onClick={() => {
                                        dispatch(userSavesProfThunk(futureSave)) //setSaved(true)
                                    }} className="bi bi-bookmark text-secondary fw-bolder fs-4 ms-2"></i>}
                                    {saves.some(s => s.user === username) &&
                                        <i onClick={() => {
                                            dispatch(userUnsavesProfThunk(futureSave)) //setSaved(false)
                                        }} className="bi bi-bookmark-fill text-secondary fw-bolder fs-4 ms-2"></i>}
                                </span>
                            }
                        </div>
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
                                <Link to="/login" className="text-dark">I'm Professor {details.name}</Link>
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
                (currentUser && currentUser.userType === "STUDENT") &&
                <ul className="list-group">
                    <li className="list-group-item">
                        <div className="mt-2 fw-bolder">
                            Rate your professor (1.0: Awful; 2.0: OK; 3.0: Good; 4.0: Great; 5.0: Awesome)
                        </div>
                        <input onChange={(e) => setReview({
                            ...review,
                            QUALITY: e.target.value
                        })} value={review.QUALITY}
                               className="mt-1 form-control w-75"/>
                    </li>
                    <li className="list-group-item">
                        <div className="mt-2 fw-bolder">
                            How difficult was this professor? (1.0: Very Easy; 2.0: Easy; 3.0: Average; 4.0: Difficult; 5.0:Very Difficult)
                        </div>
                        <input onChange={(e) => setReview({
                            ...review,
                            DIFFICULTY: e.target.value
                        })} value={review.DIFFICULTY}
                               className="mt-1 form-control w-75"/>
                    </li>
                    <li className="list-group-item">
                        <div className="mt-2 fw-bolder">
                            Would you take this professor again? Yes / No
                        </div>
                        <input onChange={(e) => setReview({
                            ...review,
                            WouldTakeAgain: e.target.value
                        })} value={review.WouldTakeAgain}
                            className="mt-1 form-control w-75"/>
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
                        <textarea
                            onChange={(e) => setReview({
                                ...review,
                                content: e.target.value
                            })}
                            className="form-control mt-3 rows=5"></textarea>
                        <button disabled={disable} onClick={() => {
                            dispatch(createReviewThunk(review))
                            setDisable(true)
                        }}
                                className="mt-3 btn btn-primary rounded-pill fw-bolder float-end">
                            Rate Professor {details.name}</button>
                    </li>
                </ul>
            }
            <ul className="list-group">
                {
                    reviews.map((review) =>
                        <li key={review._id} className="list-group-item bg-light mt-3 border-0 wd-review">
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
                                    { currentUser &&
                                        <Link to="/profile">
                                            <div onClick={() => <ProfileAccountComponent/>} className="mt-5 wd-margin-left fw-bolder">
                                                @{review.author}
                                            </div>
                                        </Link>
                                    }
                                    <div className="mt-5 wd-margin-left">
                                        {review.content}
                                    </div>
                                </div>
                            </div>
                        </li>
                    )
                }
            </ul>
            <div className="mt-5">
                <Footer/>
            </div>
        </>
    )
}
export default DetailComponent;
