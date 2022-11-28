import "./profilePage.css";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import React from "react";
import 'bootstrap';
import ReviewList from "../DetailPage/review-list";

const ProfilePage = () => {
    const profile = useSelector( state => state.profile );
    let navigate = useNavigate();
    const routeChange = () => {
        let path = `edit-profile`;
        navigate(path);
    }
    const routeChange2 = () => {
        let path2 = `edit-profile-account`;
        navigate(path2);
    }

    
    return (
        <>
            <div class="container emp-profile">
            <form method="post">
                <div class="row">
                    <div class="col-md-3">
                    <div class="profile-head">
                        <h4>Your Account</h4>
                        <h6>Log Out</h6>
                    </div>
                    </div>
                    <div class="col-md-7">
                        <div class="profile-head">
                            <h5>{profile.firstName} {profile.lastName}</h5>
                            <h6>Student</h6>
                            <br/><br/>
                            <ul class="nav nav-tabs" id="myTab" role="tablist">
                                <li class="nav-item">
                                    <a class="nav-link active" id="home-tab" data-toggle="tab" href="#home" role="tab" aria-controls="home" aria-selected="true">Profile</a>
                                </li>
                                <li class="nav-item">
                                    <a class="nav-link" id="account-tab" data-toggle="tab" href="#account" role="tab" aria-controls="account" aria-selected="false">Account Settings</a>
                                </li>
                                <li class="nav-item">
                                    <a class="nav-link" id="ratings-tab" data-toggle="tab" href="#ratings" role="tab" aria-controls="ratings" aria-selected="false">Your Ratings</a>
                                </li>
                                <li class="nav-item">
                                    <a class="nav-link" id="professors-tab" data-toggle="tab" href="#professors" role="tab" aria-controls="professors" aria-selected="false">Saved Professors</a>
                                </li>
                            </ul>
                        </div>
                    </div>
    
                </div>
                <div class="row">
                    <div class="col-md-3">
                
                    </div>
                    <div class="col-md-7">
                        <div class="tab-content profile-tab" id="myTabContent">
                            <div class="tab-pane fade" id="home" role="tabpanel" aria-labelledby="home-tab">
                                <div class="col-md-12">
                                    <button type="button" class="btn btn-light float-end fw-bold rouded-pill" onClick={routeChange}>Edit Profile</button>
                                </div>
                                <div class="row">
                                    <div class="col-md-6">
                                        <label>First Name</label>
                                    </div>
                                    <div class="col-md-4">
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
                            <div class="tab-pane fade show active" id="account" role="tabpanel" aria-labelledby="account-tab">
                                <div class="col-md-12">
                                    <button type="button" class="btn btn-light float-end fw-bold rouded-pill" onClick={routeChange2}>Edit Account</button>
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
                            <div class="tab-pane fade" id="ratings" role="tabpanel" aria-labelledby="ratings-tab"><ReviewList/></div>
                            <div class="tab-pane fade" id="professors" role="tabpanel" aria-labelledby="professors-tab">Saved Professors</div>
                        </div>
                    </div>
                </div>
            </form>           
        </div>
        </>
    );
};
export default ProfilePage;