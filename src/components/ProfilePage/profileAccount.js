import React from "react";
import "./profilePage.css";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

const ProfileAccountComponent = () => {
  const {currentUser} = useSelector((state) => state.users);
  let navigate = useNavigate();
  const routeChange = () => {
    let path = `edit-profile-account`;
    navigate(path);
  };

  return (
    <>
      <div
        className="tab-pane fade show active"
        id="account"
        role="tabpanel"
        aria-labelledby="account-tab"
      >
        <div className="col-md-12">
          <button
            type="button"
            className="btn btn-light float-end fw-bold rouded-pill"
            onClick={routeChange}
          >
            Edit Account
          </button>
        </div>
        <div className="row">
          <div className="col-md-6">
            <label>Email</label>
          </div>
          <div className="col-md-6">
          {currentUser && <p>{currentUser.email}</p>}
          </div>
        </div>
        <div className="row">
          <div className="col-md-6">
            <label>Password</label>
          </div>
          <div className="col-md-6">
          {currentUser && <p>{currentUser.password}</p>}
          </div>
        </div>
      </div>
    </>
  );
};
export default ProfileAccountComponent;
