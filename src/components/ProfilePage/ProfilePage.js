import "./profilePage.css";
import React, {useEffect, useState} from "react";
import Navs from "./components/nav/Navs";
import CountContext from './CountContext';
import ProfileAccountComponent from "./components/account/profileAccount";
import ProfileHomeComponent from "./components/home/profileHome";
import ProfileRatingsComponent from "./components/ratings/profileRatings";
import ProfileProfessorsComponent from "./components/profileProfessors";
import {loadSingleUserThunk} from "../../users/users-thunks";
import {useDispatch} from "react-redux";
import Footer from "../footer/Footer";


const ProfilePage = () => {
    let [currentUser, setCurrentUser] = useState({})
    const dispatch = useDispatch();
    const username = window.location.hash.split("username=")[1]
    const getProfile = async () => {
        if (username) {
            const data = await dispatch(loadSingleUserThunk(username));
            setCurrentUser(data.payload)
        }
    }
    useEffect(() => {
        if (window.localStorage.getItem("userinfo") && !username) {
            setCurrentUser(JSON.parse(window.localStorage.getItem("userinfo")))
        } else {
            getProfile()
        }
    }, [setCurrentUser, getProfile, username])
    const [active, setActive] = useState("Profile")
    return (
        <>
            <div className="container emp-profile">
                <form method="post">
                    <div className="row">
                        <div className="col-md-12">
                            <div className="profile-head">
                                {username ? <h1>{username}'s Profile</h1> : currentUser &&
                                    <h1>Hi {currentUser.username}</h1>}
                            </div>
                            <div className="profile-head">
                                {currentUser && <h3> {currentUser.userType}</h3>}
                            </div>
                            <CountContext.Provider value={{active, setActive}}>
                                <Navs/>
                            </CountContext.Provider>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-md-12">
                            <div className="tab-content profile-tab" id="myTabContent">
                                {
                                    active === "Profile" ? <ProfileHomeComponent/> : active === "Account" ?
                                        <ProfileAccountComponent/> : active === "Ratings" ? <ProfileRatingsComponent/> :
                                            <ProfileProfessorsComponent/>
                                }
                            </div>
                        </div>
                    </div>
                </form>
            </div>
            <Footer/>
        </>
    );
};
export default ProfilePage;
