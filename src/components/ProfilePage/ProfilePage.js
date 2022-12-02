import "./profilePage.css";
import { useSelector, useDispatch } from "react-redux";
import { BrowserRouter, useNavigate } from "react-router-dom";
import React from "react";
import ResultList from "../SearchPage/result-list.js";
import DetailComponent from "../DetailPage/index.js";
import { logoutThunk } from "../../users/users-thunks";
import {Routes, Route} from "react-router";
import ProfileHomeComponent from "./profileHome";
import ProfileAccountComponent from "./profileAccount";
import ProfileRatingsComponent from "./profileRatings";
import ProfileProfessorsComponent from "./profileProfessors";
import Navs from "./navs";

const ProfilePage = () => {
  const profile = useSelector((state) => state.profile);
  const dispatch = useDispatch();
  let navigate = useNavigate();
  const routeChange = () => {
    let path = `edit-profile`;
    navigate(path);
  };
  const routeChange2 = () => {
    let path2 = `edit-profile-account`;
    navigate(path2);
  };

  const logOutBtnHandler = (e) => {
    e.preventDefault();
    // clear data from storage
    localStorage.removeItem("username");
    localStorage.clear();
    sessionStorage.clear();
    navigate("/login");
    dispatch(logoutThunk()).then((res) => {
      console.log("logOutBtnHandler: ", res);
    });
  };

  return (
    <>
      <div class="container emp-profile">
        <form method="post">
          <div class="row">
            <div class="col-md-3">
              <div class="profile-head">
                <h4>Your Account</h4>
                <button
                  className="d-actions-button rounded-pill"
                  onClick={logOutBtnHandler}
                >
                  Log Out
                </button>
              </div>
            </div>
            <div class="col-md-7">
              <div class="profile-head">
                <h5>
                  {profile.firstName} {profile.lastName}
                </h5>
                <h6>Student</h6>
                <br />
                <br />
                <Navs active="home"/>
              </div>
            </div>
          </div>
          <div class="row">
            <div class="col-md-3"></div>
            <div class="col-md-7">
              <div class="tab-content profile-tab" id="myTabContent">
                  <Routes>
                    <Route path="/home" element={<ProfileHomeComponent/>}/>
                    <Route path="/account" element={<ProfileAccountComponent/>}/>
                    <Route path="/ratings" element={<ProfileRatingsComponent/>}/>
                    <Route path="/professors" element={<ProfileProfessorsComponent/>}/>
                  </Routes>
              </div>
            </div>
          </div>
        </form>
      </div>
    </>
  );
};
export default ProfilePage;
