import React, {useEffect, useState} from "react";
import "../../profilePage.css";
import "../home/style.css";
import {useDispatch, useSelector} from "react-redux";
import {loadSingleUserThunk, updateProfileThunk} from "../../../../users/users-thunks";

const ProfileAccountComponent = () => {
    let [currentUser, setCurrentUser] = useState({})
    const username = window.location.hash.split("username=")[1]

    useSelector((state) => state);
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
    const [email, setEmail] = useState(currentUser.email);
    const [password, setPassword] = useState(currentUser.password);
    const [status, setStatus] = useState(true)
    const [newProfile, setNewProfile] = useState({
        ...currentUser,
    });

    const profileSaveHandler = () => {
        newProfile.email = email
        newProfile.password = password
        dispatch(updateProfileThunk(newProfile));
        setCurrentUser(newProfile)
        setStatus(true)
    };

    return (
        <>
            <div
                className="tab-pane fade show active"
                id="account"
                role="tabpanel"
                aria-labelledby="account-tab"
            >
                {
                    status ?
                        <div className="data">
                            <div className="col-md-12">
                                {!username ?
                                    <button
                                        type="button"
                                        className="btn btn-light float-end fw-bold rouded-pill"
                                        onClick={() => setStatus(false)}
                                    >
                                        Edit Account
                                    </button> : ""
                                }
                            </div>
                            <div className="row">
                                <div className="col-md-2">
                                    <label>Email</label>
                                </div>
                                <div className="col-md-6">
                                    {currentUser && <p>{currentUser.email}</p>}
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-md-2">
                                    <label>Password</label>
                                </div>
                                <div className="col-md-6">
                                    {currentUser && <p>***************</p>}
                                </div>
                            </div>
                        </div> :
                        <div className="edit">
                            <div className="row">
                                <div
                                    className="col col-10 mt-2"
                                    onClick={() => setStatus(true)}
                                >
                                    <i className="bi bi-x-lg fs-4 fw-bold"></i>
                                </div>
                                <button
                                    className="col col-2 btn btn-dark float-end fw-bold rounded-pill"
                                    onClick={() => profileSaveHandler()}
                                >
                                    Save
                                </button>
                            </div>
                            <div className="row">
                                <label htmlFor="inputEmail">Email</label>
                                <br/>
                                <input
                                    type="text"
                                    id="inputEmail"
                                    className="form-control"
                                    onChange={(e) => {
                                        setEmail(e.target.value);
                                    }}
                                    value={email}
                                />
                                <br/>
                                <label htmlFor="inputPassword">Password</label>
                                <input
                                    type="password"
                                    id="inputPassword"
                                    className="form-control"
                                    onChange={(e) => {
                                        setPassword(e.target.value);
                                    }}
                                    value={password}
                                />
                            </div>
                        </div>
                }
            </div>


        </>
    );
};
export default ProfileAccountComponent;
