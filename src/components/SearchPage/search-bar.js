import React, {useState} from "react";
import {useDispatch} from "react-redux";
import {searchProfessorsThunk} from "../../professors/professor-thunks";
import {findProfByNameThunk} from "../../profs/prof-thunks";
import ResultList from "./result-list";


const SearchBar = () => {
    // let [professorName, setProfessorName] = useState('');
    const [firstname, setFirstname] = useState("");
    const [lastname, setLastname] = useState("");
    const dispatch = useDispatch();
    /*const searchClickHandler = () => {
        dispatch(searchProfessorsThunk(professorName, 'NEU'))
    };*/
    /*const searchClickHandler = () => {

    }*/

    return (
        <div className="container mt-5">
            <h1>Search Professor By Name</h1>
            <form className="row g-3">
                <div className="col-auto">
                    <label htmlFor="firstname">First name</label>
                    <input
                        onChange={(e) => {
                            setFirstname(e.target.value)
                        }}
                        value={firstname}
                        id="firstname"
                        className="form-control w-100"/>
                </div>
                <div className="col-auto">
                    <label htmlFor="lastname">Last name</label>
                    <input
                        onChange={(e) => {
                            setLastname(e.target.value)
                        }}
                        value={lastname}
                        id="lastname"
                        className="form-control w-100"/>
                </div>
                <div className="col-auto">
                    <button
                        onClick={(e)=>{
                            e.preventDefault()
                            dispatch(findProfByNameThunk({firstname, lastname}))
                        }}
                        className="btn btn-dark rounded-pill float-end mt-3">
                        Search
                    </button>
                </div>
            </form>
        </div>
        /*<div className="row mt-5">
            <div className="col-10">
                <textarea value={professorName} placeholder="Search Professors by Name ......"
                          aria-describedby="button-addon2"
                          className="form-control wd-H-searchBar d-flex justify-content-center rounded-pill border border-5 border-secondary border-opacity-25"
                          onChange={(event) => setProfessorName(event.target.value)}/>
            </div>
            <div className="col-2">
                <button className="btn btn-dark rounded-pill" onClick={searchClickHandler}>Search</button>
            </div>
        </div>*/
    )
};

export default SearchBar;