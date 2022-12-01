import React, {useState} from "react";
import { useDispatch, useSelector } from "react-redux";
import { updateProfile } from "../ProfilePage/profile-reducer";
import { useNavigate } from "react-router-dom";

const EditProfileAccount = () => {
    const profile = useSelector( state => state.profile );
    const [email, setEmail] = useState({email: profile.email});
    const [password, setPassword] = useState({password: profile.password});
    const dispatch = useDispatch();
    let navigate = useNavigate();

    const profileSaveHandler = (e, p) => {
        const newProfile = {
            email: e,
            password: p,
        }
        dispatch(updateProfile(newProfile));
        navigate('/profile');
    }

    return (
        <>
            <div className="position-relative">
                <div className="row">
                <div className="col col-2 mt-2" onClick={() => navigate('/profile')}>
                    <i className="bi bi-x-lg fs-4 fw-bold"></i></div>
                    <div className="col col-8 mt-2"><span className="fs-4 fw-bold">Edit Account</span></div>
                    <button className="col col-2 btn btn-dark float-end fw-bold rounded-pill"
                            onClick={() => profileSaveHandler(email, password)}>
                        Save</button>
                </div>
            </div>
            <div className="mt-3 form-group">
                <label htmlFor="inputEmail">Email</label><br/>
                <input type="text" id="inputEmail" className="form-control"
                        onChange={(e)=>{setEmail({email: e.target.value})}}
                        value={email.email}/><br/>
                <label htmlFor="inputPassword">Password</label><br/>
                <input type="text" id="inputPassword" className="form-control"
                        onChange={(e)=>{setPassword({password: e.target.value})}}
                        value={password.password}/><br/>
            </div>
        </>
    )
}
export default EditProfileAccount;