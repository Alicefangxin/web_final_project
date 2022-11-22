/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
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
            <button className="wd-round-pill">Log In</button> OR{" "}
            <button className="wd-round-pill">Sign Up</button>
          </h4>
          <input
            type="text"
            placeholder="username"
            id="username"
            className="wd-input"
          />
          <input
            type="password"
            placeholder="password"
            id="password"
            className="wd-input"
          />
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
