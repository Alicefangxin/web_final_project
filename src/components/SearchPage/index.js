import React from "react";
import "./index.css";
import ResultList from "./result-list.js";
import SearchBar from "./search-bar";

const SearchComponent = () => {
    return(
        <>
            <div className="container">
                <SearchBar/>
                <div className="mt-4">
                    <ResultList/>
                </div>
            </div>
        </>
    )
}
export default SearchComponent;