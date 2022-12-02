import "./profilePage.css";
import { useSelector, useDispatch } from "react-redux";
import React from "react";
import { Routes, Route } from "react-router";
import ProfileHomeComponent from "./profileHome";
import ProfileAccountComponent from "./profileAccount";
import ProfileRatingsComponent from "./profileRatings";
import ProfileProfessorsComponent from "./profileProfessors";
import Navs from "./navs";
import { logout } from "../../users/users-reducer";

const ProfilePage = () => {
  const { currentUser } = useSelector((state) => state.users);
  // const profile = useSelector((state) => state.profile);
  const dispatch = useDispatch();

  const logOutBtnHandler = () => {
    localStorage.removeItem("username");
    sessionStorage.clear();
    dispatch(logout());
  };

  return (
    <>
      <div class="container emp-profile">
        <form method="post">
          <div class="row">
            <div class="col-md-3">
              <div class="profile-head">
                <h4>Your Account</h4>
                <div
                  className="d-actions-button rounded-pill"
                  onClick={logOutBtnHandler}
                >
                  Log Out
                </div>
              </div>
            </div>
            <div class="col-md-7">
              <div class="profile-head">
                {currentUser && <h5>Welcome {currentUser.username}</h5>}

                {/* <h5>
                  {profile.firstName} {profile.lastName}
                </h5> */}
                <h6>Student</h6>
                <br />
                <br />
                <Navs active="home" />
              </div>
            </div>
          </div>
          <div class="row">
            <div class="col-md-3"></div>
            <div class="col-md-7">
              <div class="tab-content profile-tab" id="myTabContent">
                <Routes>
                  <Route path="/home" element={<ProfileHomeComponent />} />
                  <Route
                    path="/account"
                    element={<ProfileAccountComponent />}
                  />
                  <Route
                    path="/ratings"
                    element={<ProfileRatingsComponent />}
                  />
                  <Route
                    path="/professors"
                    element={<ProfileProfessorsComponent />}
                  />
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
