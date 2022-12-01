import React, {useState} from "react";
import DetailComponent from "../DetailPage";
import ProfList from "../../professors";
import {Link} from "react-router-dom";


const LoggedHome = () => {
    return (
        <>
            <div className="pt-2">
                <h1>Northeastern University - rate my professor</h1>
            </div>
            <div className="d-flex flex-row-reverse pt-1">
                <div className="mb-2">
                    <div className="dropdown">
                        <button
                            className="btn btn-secondary dropdown-toggle rounded-pill"
                            style={{
                                color: "white",
                                backgroundColor: "lightslategray",
                                border: "none",
                            }}
                            type="button"
                            data-bs-toggle="dropdown"
                            aria-expanded="false"
                        >
                            Hey User!
                        </button>
                        <ul className="dropdown-menu">
                            <li>
                                <a className="dropdown-item" href="#">
                                    Profile
                                </a>
                            </li>
                            <li>
                                <a className="dropdown-item" href="#">
                                    Your Ratings
                                </a>
                            </li>
                            <li>
                                <a className="dropdown-item" href="/">
                                    Logout
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
            <div className="mt-5 p-5">
                <div className="input-group mb-3">
                    <Link to="/search">
                        <button
                            className="ms-3 btn btn-outline-secondary rounded-pill border border-5 border-secondary border-opacity-25"
                            type="button" id="button-addon2">Search
                        </button>
                    </Link>
                </div>
            </div>

            <div className="mt-6 p-3 bg-white bg-opacity-10 border border-dark border-bottom-0 border-end-0 border-start-0">
                <div className="pt-2">
                    <h2>Welcome Back!</h2>
                </div>
                <div className="mt-1">
                    <img
                        className="rounded-5 me-1"
                        src="https://pbs.twimg.com/media/ExQ97nJXMAM2AJH?format=jpg&name=medium"
                        width="350"
                    />
                    <img
                        className="rounded-5 ms-1"
                        src="https://i0.wp.com/news.northeastern.edu/wp-content/uploads/2021/10/husky-puppies-scaled.jpg?fit=2560%2C1704&ssl=1"
                        width="350"
                    />
                    <img
                        className="rounded-5 ms-2"
                        src="https://pbs.twimg.com/media/ExQ97a9WUAQNm3_?format=jpg&name=medium"
                        width="350"
                    />
                </div>
            </div>

            <div className="pt-2">
                <h2>My Professors</h2>
            </div>

            <div className="p-3 mb-5 bg-info bg-opacity-10 border border-success border-start-0 border-end-0 rounded-end">
                <div className="tab-pane fade show active" id="professors" role="tabpanel" aria-labelledby="professors-tab">
                    <ProfList/></div>
            </div>



            <div className="p-3 mb-5 bg-info bg-opacity-10 border border-success border-start-0 border-end-0 rounded-end">
                <div className="tab-pane fade show active" id="ratings" role="tabpanel" aria-labelledby="ratings-tab">
                    <DetailComponent/></div>
            </div>

            <div className="fixed-bottom bg-success fw-bold bg-opacity-25">R8MyPro..</div>
        </>
    );
};

export default LoggedHome;