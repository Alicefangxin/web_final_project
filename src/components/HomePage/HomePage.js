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
          <div className="input-group mb-3">
              <input type="text" aria-describedby="button-addon2"
                     className="form-control wd-H-searchBar d-flex justify-content-center rounded-pill border border-5 border-secondary border-opacity-25"
                     placeholder="Search for Your Professor........"/>
              <button className="ms-3 btn btn-outline-secondary rounded-pill border border-5 border-secondary border-opacity-25"
                      type="button" id="button-addon2">Confirm</button>
          </div>
      </div>
    </>
  );
};

export default HomePage;
