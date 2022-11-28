/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import "./home.css";

const HomePage = () => {
  const { currentUser } = useSelector((state) => state.users);
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
        <i className="fas fa-search fa-2x d-home-icon-color"></i>
        <input
          className="wd-H-searchBar d-flex justify-content-center rounded-pill border border-5 border-secondary border-opacity-25 "
          placeholder="Search for Your Professor........"
        />
        <a className="ms-2 fs-6 d-home-icon-color" href="#">
          {" "}
          I want to find a professor by campus{" "}
        </a>
      </div>
    </>
  );
};

export default HomePage;
