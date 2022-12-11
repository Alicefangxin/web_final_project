import React, {useContext, useEffect, useState} from "react";
import "./style.css"
import CountContext from '../../CountContext';
import {loadSingleUserThunk} from "../../../../users/users-thunks";
import {useDispatch} from "react-redux";

const Navs = () => {
    let {active, setActive} = useContext(CountContext)
    let [currentUser, setCurrentUser] = useState({})
    const username = window.location.hash.split("username=")[1]
    const dispatch = useDispatch();

    const clickItem = (name) => {
        setActive(name)
    }
    const getProfile = async () => {
        if (username) {
            const data = await dispatch(loadSingleUserThunk(username));
            setCurrentUser({...data.payload})
        }
    }
    useEffect(() => {
        if (window.localStorage.getItem("userinfo") && !username) {
            setCurrentUser(JSON.parse(window.localStorage.getItem("userinfo")))
        } else {
            getProfile()
        }
    }, [setCurrentUser, getProfile, username])
    return (
        <ul className="nav nav-tabs">
            <li className={active === "Profile" ? "nav-item nav-active" : "nav-item"} onClick={() => {
                clickItem("Profile")
            }}>
                Profile
            </li>
            {
                username ? "" :
                    <li className={active === "Account" ? "nav-item nav-active" : "nav-item"} onClick={() => {
                        clickItem("Account")
                    }}>
                        Account Settings
                    </li>
            }
            {currentUser.userType !== "STUDENT" ? "" :
                <li className={active === "Ratings" ? "nav-item nav-active" : "nav-item"} onClick={() => {
                    clickItem("Ratings")
                }}>
                    Ratings
                </li>
            }
            {currentUser.userType !== "STUDENT" ? "" :
                <li className={active === "Professors" ? "nav-item nav-active" : "nav-item"} onClick={() => {
                    clickItem("Professors")
                }}>
                    Saved Professors
                </li>
            }
        </ul>
    );
};
export default Navs;
