import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { updateProfileThunk } from "../../../users/users-thunks";

const emptyProfile = {
  firstName: "",
  lastName: "",
  school: "",
};

const EditProfile = () => {
  const { currentUser } = useSelector((state) => state.users);

  const [newProfile, setNewProfile] = useState({
    ...emptyProfile,
    ...currentUser,
  });
  const dispatch = useDispatch();
  let navigate = useNavigate();

  console.log("newProfile: ", newProfile);

  const profileSaveHandler = () => {
    dispatch(updateProfileThunk(newProfile)).then(() => {
      navigate("/profile/home");
    });
  };
  //   return null;
  return (
    <>
      <div className="position-relative">
        <div className="row">
          <div
            className="col col-2 mt-2"
            onClick={() => navigate("/profile/home")}
          >
            <i className="bi bi-x-lg fs-4 fw-bold"></i>
          </div>
          <div className="col col-8 mt-2">
            <span className="fs-4 fw-bold">Edit Profile</span>
          </div>
          <div
            className="col col-2 btn btn-dark float-end fw-bold rounded-pill"
            onClick={profileSaveHandler}
          >
            Save
          </div>
        </div>
      </div>
      <div className="mt-3 form-group">
        <label htmlFor="inputFirstName">First Name</label>
        <br />
        <input
          type="text"
          id="inputFirstName"
          className="form-control"
          onChange={(e) => {
            setNewProfile({ ...newProfile, firstName: e.target.value });
          }}
          value={currentUser.firstName}
        />
        <br />

        <label htmlFor="inputLastName">Last Name</label>
        <br />
        <input
          type="text"
          id="inputLastName"
          className="form-control"
          onChange={(e) => {
            setNewProfile({ ...newProfile, lastName: e.target.value });
          }}
          value={newProfile.lastName}
        />
        <br />

        <label htmlFor="inputSchool">School</label>
        <br />
        <textarea
          type="text"
          className="form-control"
          onChange={(e) => {
            setNewProfile({ ...newProfile, school: e.target.value });
          }}
          value={newProfile.school}
          id="inputSchool"
        />
        <br />
      </div>
    </>
  );
};
export default EditProfile;
