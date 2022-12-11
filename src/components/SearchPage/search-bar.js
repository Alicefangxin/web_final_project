import React, {useState} from "react";
import {useDispatch} from "react-redux";
import {searchProfessorsThunk} from "../../professors/prof-thunks";


const SearchBar = () => {
    let [professorName, setProfessorName] = useState('');
    const dispatch = useDispatch();
    const searchClickHandler = () => {
        dispatch(searchProfessorsThunk(professorName, 'NEU'))
    };

    return (
        <div className="row mt-5">
            <div className="col-10">
                <textarea value={professorName} placeholder="Search Professors by Name ......"
                          aria-describedby="button-addon2"
                          className="form-control wd-H-searchBar d-flex justify-content-center rounded-pill border border-5 border-secondary border-opacity-25"
                          onChange={(event) => setProfessorName(event.target.value)}/>
            </div>
            <div className="col-2">
                <button className="btn btn-dark rounded-pill" onClick={searchClickHandler}>Search</button>
            </div>
        </div>
    )
};

export default SearchBar;