import React from "react";
import "./index.css";
import ResultList from "./result-list.js";

const SearchComponent = () => {
    return(
        <>
            <div className="container">
                <div className="row mt-5">
                    <div className="col-10">
                        <input placeholder="Professor Name"
                               className="form-control rounded-pill ps-5"/>
                        <i className="bi bi-search text-dark wd-search-icon"></i>
                    </div>
                    <div className="col-2">
                        <button className="btn btn-dark rounded-pill">Search</button>
                    </div>
                </div>
                <div className="mt-4">
                    <ResultList/>
                </div>
            </div>
        </>
    )
}
export default SearchComponent;