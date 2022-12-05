import "./profilePage.css";
import { useSelector, useDispatch } from "react-redux";
import React from "react";
import { Routes, Route, useNavigate } from "react-router";
import ProfileHomeComponent from "./profileHome";
import ProfileAccountComponent from "./profileAccount";
import ProfileRatingsComponent from "./profileRatings";
import EditProfileComponent from "./edit-profile";
import EditProfileAccountComponent from "./edit-profile-account";
import ProfileProfessorsComponent from "./profileProfessors";
import Navs from "./navs";
import { logout } from "../../users/users-reducer";

const ProfilePage = () => {
  const { currentUser } = useSelector((state) => state.users);
  // const profile = useSelector((state) => state.profile);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const logOutBtnHandler = () => {
    localStorage.removeItem("username");
    sessionStorage.clear();
    dispatch(logout());
    navigate("login");
  };

  return (
    <>
      <div className="container emp-profile">
        <form method="post">
          <div className="row">
            <div className="col-md-3">
              <div className="profile-head">
                <h4>Your Account</h4>
                <div
                  className="d-actions-button rounded-pill"
                  onClick={logOutBtnHandler}
                >
                  Log Out
                </div>
              </div>
            </div>
            <div className="col-md-7">
              <div className="profile-head">
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
          <div className="row">
            <div className="col-md-3"></div>
            <div className="col-md-7">
              <div className="tab-content profile-tab" id="myTabContent">
                <Routes>
                  <Route index element={<ProfileHomeComponent />} />
                  <Route path="/home" element={<ProfileHomeComponent />} />
                  <Route
                    path="/home/edit-profile"
                    element={<EditProfileComponent />}
                  />
                  <Route
                    path="/account"
                    element={<ProfileAccountComponent />}
                  />
                  <Route
                    path="/account/edit-profile-account"
                    element={<EditProfileAccountComponent />}
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
