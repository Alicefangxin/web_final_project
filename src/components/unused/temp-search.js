/*
import {useDispatch, useSelector} from "react-redux";
import {useEffect, useState} from "react";
import {findProfByNameThunk} from "../../profs/prof-thunks";
import {Link} from "react-router-dom";
import DetailComponent from "../DetailPage";
import React from "react";
import {findProfByIdThunk} from "../../profs/prof-thunks";
import ResultList from "./result-list";

const TempSearch = () => {
    const [searchName, setSearchName] = useState({firstname:"", lastname:""})
    // const {searched, loading} = useSelector((state) => state.profs)
    const dispatch = useDispatch()
    console.log(searchName)
    // console.log(searched)
    /!*useEffect(() => {
        dispatch(findProfByNameThunk(searchName))
    }, [])*!/
    return (
        <>
            <div className="container mt-5">
                <h1>Search Professor By Name</h1>
                <form className="row g-3">
                    <div className="col-auto">
                        <label htmlFor="firstname">First name</label>
                        <input
                            onChange={(e) => {
                                setSearchName({
                                    ...searchName,
                                    firstname: e.target.value
                                })
                            }}
                            value={searchName.firstname}
                            id="firstname"
                            className="form-control w-100"/>
                    </div>
                    <div className="col-auto">
                        <label htmlFor="lastname">Last name</label>
                        <input
                            onChange={(e) => {
                                setSearchName({
                                    ...searchName,
                                    lastname: e.target.value
                                })
                            }}
                            value={searchName.lastname}
                            id="lastname"
                            className="form-control w-100"/>
                    </div>
                    <div className="col-auto">
                        <button
                            onClick={() => {
                                dispatch(findProfByNameThunk(searchName))
                            }}
                            className="btn btn-dark rounded-pill float-end mt-3">
                            Search
                        </button>
                    </div>
                </form>
                <ResultList/>
                {/!*<ul className="list-group">
                    {
                        searched && searched.map((prof) =>
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
                    {!searched && <h4 className="mt-4">No professors found</h4>}
                </ul>*!/}
            </div>
        </>
    )
}
export default TempSearch;*/
