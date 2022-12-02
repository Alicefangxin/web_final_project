import React from "react";
import "./profilePage.css";
import { useSelector, useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";

const ProfileAccountComponent = () => {
    const profile = useSelector((state) => state.profile);
    const dispatch = useDispatch();
    let navigate = useNavigate();
    const routeChange = () => {
      let path = `edit-profile`;
      navigate(path);
    };
  
 return(
   <>
        <div
            class="tab-pane fade show active"
            id="account"
            role="tabpanel"
            aria-labelledby="account-tab"
        >
            <div class="col-md-12">
            <button
                type="button"
                class="btn btn-light float-end fw-bold rouded-pill"
                onClick={routeChange}
            >
                Edit Account
            </button>
            </div>
            <div class="row">
            <div class="col-md-6">
                <label>Email</label>
            </div>
            <div class="col-md-6">
                <p>{profile.email}</p>
            </div>
            </div>
            <div class="row">
            <div class="col-md-6">
                <label>Password</label>
            </div>
            <div class="col-md-6">
                <p>{profile.password}</p>
            </div>
            </div>
        </div>
   </>
 );
};
export default ProfileAccountComponent;