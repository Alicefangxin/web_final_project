import React from "react";
import "./profilePage.css";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

const ProfileHomeComponent = () => {
  const { currentUser } = useSelector((state) => state.users);
  console.log("ProfileHomeComponent current user: ", currentUser);
  let navigate = useNavigate();
  const routeChange = () => {
    let path = `edit-profile`;
    navigate(path);
  };

  if (!currentUser) {
    return null;
  }

  return (
    <>
      <div>
        <div className="col-md-12">
          <button
            type="button"
            className="btn btn-light float-end fw-bold rouded-pill"
            onClick={routeChange}
          >
            Edit Profile
          </button>
        </div>
        <div className="row">
          <div className="col-md-6">
            <label>First Name</label>
          </div>
          <div className="col-md-6">
            <p>{currentUser.firstName ?? ""}</p>
          </div>
        </div>
        <div className="row">
          <div className="col-md-6">
            <label>Last Name</label>
          </div>
          <div className="col-md-6">
            <p>{currentUser.lastName ?? ""}</p>
          </div>
        </div>
        <div className="row">
          <div className="col-md-6">
            <label>School</label>
          </div>
          <div className="col-md-6">
            <p>{currentUser.school ?? ""}</p>
          </div>
        </div>
      </div>
    </>
  );
};
export default ProfileHomeComponent;
