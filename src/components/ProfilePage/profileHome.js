import React from "react";
import "./profilePage.css";
import { useSelector, useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";

const ProfileHomeComponent = () => {
    const profile = useSelector((state) => state.profile);
    const dispatch = useDispatch();
    let navigate = useNavigate();
    const routeChange = () => {
      let path = `edit-profile`;
      navigate(path);
    };
  
 return(
   <>
        <div>
            <div class="col-md-12">
            <button
                type="button"
                class="btn btn-light float-end fw-bold rouded-pill"
                onClick={routeChange}
            >
                Edit Profile
            </button>
            </div>
            <div class="row">
            <div class="col-md-6">
                <label>First Name</label>
            </div>
            <div class="col-md-6">
                <p>{profile.firstName}</p>
            </div>
            </div>
            <div class="row">
            <div class="col-md-6">
                <label>Last Name</label>
            </div>
            <div class="col-md-6">
                <p>{profile.lastName}</p>
            </div>
            </div>
            <div class="row">
            <div class="col-md-6">
                <label>School</label>
            </div>
            <div class="col-md-6">
                <p>{profile.school}</p>
            </div>
            </div>
            <div class="row">
            <div class="col-md-6">
                <label>Expected Year Of Graduation</label>
            </div>
            <div class="col-md-6">
                <p>{profile.expectedYearOfGraduation}</p>
            </div> 
            </div>
        </div>
   </>
 );
};
export default ProfileHomeComponent;