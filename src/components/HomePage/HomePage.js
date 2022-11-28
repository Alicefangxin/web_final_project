/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
import { Link } from "react-router-dom";
import "./home.css";

const HomePage = () => {
  return (
    <>
      <div>
        <h1>Northeastern University - rate my professor</h1>
      </div>
      <div className="wd-loginSignup wd-bgColor">
        <div className="wd-lSContainer">
          <h4>
            <Link to="/login">
              <button className="wd-round-pill">Log In</button>
            </Link>
            <Link to="/register">
              <button className="wd-round-pill">Register</button>
            </Link>
          </h4>
        </div>
      </div>

      <div className="wd-searchMain">
        <i className="fas fa-cog fa-2x" style={{ color: "dodgerblue" }}></i>
        <input
          className="wd-searchBar"
          placeholder="Search for Your Professor........"
        />
        <a className="wd-switchToMajor" href="#">
          {" "}
          I want to find a professor by major{" "}
        </a>
      </div>
    </>
  );
};

export default HomePage;
