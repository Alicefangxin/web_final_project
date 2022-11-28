/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
import "./home.css";

const HomePage = () => {
    return (
        <>
            <div className="pt-2">
                <h1>Northeastern University - rate my professor</h1>
            </div>
            <div className="d-flex flex-row-reverse pt-1">
                <div className="mb-2">
                    <h4>
                        <button className="rounded-pill fs-6 fw-bold p-2 border-0 me-2" style={{ color: "white", backgroundColor: "lightslategray" }}>Log  In</button>
                        <button className="rounded-pill fs-6 fw-bold p-2 ms-2 border-0" style={{ color: "white", backgroundColor: "lightslategray" }} >Sign Up</button>
                    </h4>
                    <input
                        type="text"
                        placeholder="username"
                        id="username"
                        className="d-flex justify-content-end mb-2"
                    />
                    <input
                        type="password"
                        placeholder="password"
                        id="password"
                        className="d-flex justify-content-end"
                    />
                </div>
            </div>

            <div className="mt-5 p-5">
                <i className="fas fa-search fa-2x" style={{ color: "lightslategray" }}></i>
                <input
                    className="wd-H-searchBar d-flex justify-content-center rounded-pill border border-5 border-secondary border-opacity-25 "
                    placeholder="Search for Your Professor........"
                />
                <a className="ms-2 fs-6" style={{ color: "lightslategray" }} href="#">
                    {" "}
                    I want to find a professor by campus{" "}
                </a>
            </div>
        </>
    );
};

export default HomePage;