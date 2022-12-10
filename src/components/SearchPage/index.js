import React from "react";
import "./index.css";
import ResultList from "./result-list.js";
import SearchBar from "./search-bar";
import Footer from "../footer/Footer";

const SearchComponent = () => {
    return(
        <>
            <div className="container">
                <SearchBar/>
                <div className="mt-4">
                    <ResultList/>
                </div>
            </div>
            <div className="h4 pb-2 mb-4 border-bottom border-success border-opacity-50"></div>
            <Footer/>
        </>
    )
}
export default SearchComponent;