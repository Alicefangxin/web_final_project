import React, {useEffect} from "react";
import InfoArray from "../SearchPage/profInfos.json";
import {Link} from "react-router-dom";
import AddRating from "./add-rating/add-rating";
import {useParams} from "react-router";
import {useDispatch, useSelector} from "react-redux";
import {findProfByIdThunk} from "../temp-prof-for-detail/temp-profs-thunks";
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
    const {profID} = useParams()
    const {details} = useSelector((state) => state.temp)
    const dispatch = useDispatch()
    useEffect(() => {
        dispatch(findProfByIdThunk(profID))
    }, [])
    return(
        <>
            <h1>{profID}</h1>
            <pre>
                {JSON.stringify(details, null, 2)}
            </pre>
            {/*<div className="container mt-5">
                <div className="row">
                    <div className="col">
                        <div className="fs-1 fw-bolder">{details.rating} <span className="fs-5 fw-normal text-secondary"> / 5</span> </div>
                        <div className="fw-bolder">Overall Quality Based on {details.numOfRatings} ratings</div>
                        <div className="mt-3 wd-profname">{details.name} <span><i className="bi bi-bookmark text-secondary fw-bolder fs-4 ms-2"></i></span></div>
                        <div>Professor in the <span className="fw-bolder">{details.department} department</span> at <span className="fw-bolder"><Link to="https://www.northeastern.edu/" className="text-dark">Northeastern University</Link></span></div>
                        <div className="d-flex flex-row bd-highlight">
                            <div className="p-2 bd-highlight border-2 border-end border-dark">
                                <div className="ms-4 wd-data">{details.againPct}</div>
                                <div>Would take again</div>
                            </div>
                            <div className="p-2 bd-highlight">
                                <div className="ms-4 wd-data">{details.difficultyLevel}</div>
                                <div>Level of Difficulty</div>
                            </div>
                        </div>
                        <Link to="/addrating">
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
            </div>*/}
        </>
    )
}
export default ProfInfo;