/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";

const LoginContent = () => {
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
                <a className="dropdown-item" href="https://www.google.com/">
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
        <i
          className="fas fa-search fa-2x"
          style={{ color: "lightslategray" }}
        ></i>
        <input
          className="wd-H-searchBar d-flex justify-content-center rounded-pill border border-5 border-secondary border-opacity-25 "
          placeholder="Search for Your Professor........"
        />
        <a className="ms-2 fs-6" style={{ color: "lightslategray" }} href="#">
          {" "}
          I want to find a professor by campus{" "}
        </a>
      </div>

      <div className="mt-6 p-3 bg-white bg-opacity-10 border border-dark border-bottom-0 border-end-0 border-start-0">
        <b className="mt-6 p-3 pt-5">Welcome Back !</b>
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
        <div className="mt-3 text-center">
          <a href="#">
            {" "}
            <button
              type="button"
              className="rounded-4 btn align-items-end"
              style={{
                color: "white",
                backgroundColor: "lightslategray",
                border: "none",
              }}
            >
              My Ratings/My Profile/Admin
            </button>
          </a>
        </div>
      </div>
    </>
  );
};

export default LoginContent;