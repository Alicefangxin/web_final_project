import {useDispatch, useSelector} from "react-redux";
import {useEffect, useState} from "react";
import {findProfByNameThunk} from "../temp-prof-for-detail/temp-profs-thunks";
import {Link} from "react-router-dom";
import DetailComponent from "../DetailPage";
import React from "react";
import {findProfByIdThunk} from "../temp-prof-for-detail/temp-profs-thunks";

const TempSearch = () => {
    const [searchName, setSearchName] = useState('')
    const {profs, loading} = useSelector((state) => state.temp)
    const dispatch = useDispatch()
    useEffect(() => {
        dispatch(findProfByNameThunk(searchName))
    }, [])
    return (
        <>
            <h1>Temp Search</h1>
            <ul className="list-group">
                <li className="list-group-item">
                    <button
                        onClick={() => {
                            dispatch(findProfByNameThunk(searchName))
                        }}
                        className="btn btn-dark rounded-pill float-end">
                        Search
                    </button>
                    <input
                        onChange={(e) => {
                            setSearchName(e.target.value)
                        }}
                        value={searchName}
                        className="form-control w-75"/>
                </li>
                {
                    profs && profs.map((prof) =>
                        <li key={prof.profID} className="list-group-item border-0 mb-2 bg-light">
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
            </ul>
        </>
    )
}
export default TempSearch;