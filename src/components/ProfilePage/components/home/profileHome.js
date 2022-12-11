import React, {useEffect, useState} from "react";
import "../../profilePage.css";
import {useDispatch, useSelector} from "react-redux";
import "./style.css"
import {loadSingleUserThunk, updateProfileThunk} from "../../../../users/users-thunks";

const emptyProfile = {
    firstName: "",
    lastName: "",
    school: "",
};
const ProfileHomeComponent = () => {
    let [currentUser, setCurrentUser] = useState({})
    const username = window.location.hash.split("username=")[1]


    useSelector((state) => state);
    const [newProfile, setNewProfile] = useState({
        ...emptyProfile,
        ...currentUser,
    });

    const [status, setStatus] = useState(true)
    const dispatch = useDispatch();

    useEffect(() => {
        const getProfile = async () => {
            if (username) {
                const data = await dispatch(loadSingleUserThunk(username));
                setCurrentUser(data.payload)
                setNewProfile(data.payload)
            }
        }
        if (window.localStorage.getItem("userinfo") && !username) {
            setCurrentUser(JSON.parse(window.localStorage.getItem("userinfo")))
            setNewProfile(JSON.parse(window.localStorage.getItem("userinfo")))
        } else {
            getProfile()
        }
    }, [dispatch, setCurrentUser, username])


    const profileSaveHandler = () => {
        dispatch(updateProfileThunk(newProfile)).then(() => {
            setCurrentUser(newProfile)
        });
        setStatus(true)
    };
    return (
        <div className="profile-home">
            {
                status ?
                    <div className="data">
                        <div className="row">
                            <div className="col-md-12">
                                {!username ?
                                    <button
                                        type="button"
                                        className="btn btn-light float-end fw-bold rouded-pill"
                                        onClick={() => {
                                            setStatus(false)
                                        }}
                                    >
                                        Edit Profile
                                    </button> : ""
                                }
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-md-2">
                                <label>First Name</label>
                            </div>
                            <div className="col-md-4">
                                <p>{currentUser.firstName ?? ""}</p>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-md-2">
                                <label>Last Name</label>
                            </div>
                            <div className="col-md-4">
                                <p>{currentUser.lastName ?? ""}</p>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-md-2">
                                <label>School</label>
                            </div>
                            <div className="col-md-4">
                                <p>{currentUser.school ?? ""}</p>
                            </div>
                        </div>
                    </div> :
                    <div className="edit">
                        <div className="row">
                            <div
                                className="col col-2 mt-2"
                                onClick={() => setStatus(true)}
                            >
                                <i className="bi bi-x-lg fs-4 fw-bold"></i>
                            </div>
                            <div className="col col-8 mt-2">
                            </div>
                            <div
                                className="col col-2 btn btn-dark float-end fw-bold rounded-pill"
                                onClick={profileSaveHandler}
                            >
                                Save
                            </div>
                        </div>
                        <div className="mt-3 form-group">
                            <label htmlFor="inputFirstName">First Name</label>
                            <input
                                type="text"
                                id="inputFirstName"
                                className="form-control"
                                onChange={(e) => {
                                    setNewProfile({...newProfile, firstName: e.target.value});
                                }}
                                value={newProfile.firstName ?? ""}
                            />
                            <label htmlFor="inputLastName">Last Name</label>
                            <input
                                type="text"
                                id="inputLastName"
                                className="form-control"
                                onChange={(e) => {
                                    setNewProfile({...newProfile, lastName: e.target.value});
                                }}
                                value={newProfile.lastName ?? ""}
                            />
                            <label htmlFor="inputSchool">School</label>
                            <textarea
                                type="text"
                                className="form-control"
                                onChange={(e) => {
                                    setNewProfile({...newProfile, school: e.target.value});
                                }}
                                value={newProfile.school ?? ""}
                                id="inputSchool"
                            />
                            <br/>
                        </div>
                    </div>
            }
        </div>
    );
};
export default ProfileHomeComponent;
