/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
import {useSelector} from "react-redux";
import {Link} from "react-router-dom";
import "./home.css";
import ProfList from "../../professors";

const UnloggedHome = () => {
    const {currentUser} = useSelector((state) => state.users);
    return (
        <>
            <div className="pt-2">
                <h1>Northeastern University - R8MyProfessor</h1>
            </div>
            <div className="d-flex flex-row-reverse pt-1">
                <div className="mb-4">
                    {!currentUser && (
                        <Link to="/login">
                            <button className="d-actions-button rounded-pill">Log In</button>
                        </Link>
                    )}
                    {currentUser && (
                        <Link to="/profile">
                            <button className="d-actions-button rounded-pill">Profile</button>
                        </Link>
                    )}
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
                <h2>Professors in Trends</h2>
            </div>
            <div className="p-3 mb-5 bg-info bg-opacity-10 border border-success border-start-0 border-end-0 rounded-end">
                <div className="tab-pane fade show active" id="professors" role="tabpanel" aria-labelledby="professors-tab">
                    <ProfList/></div>
            </div>
        </>
    );
};

export default UnloggedHome;
