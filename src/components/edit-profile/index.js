import React, {useState} from "react";
import { useDispatch, useSelector } from "react-redux";
import { updateProfile } from "../ProfilePage/profile-reducer";
import { useNavigate } from "react-router-dom";

const EditProfile = () => {
    const profile = useSelector( state => state.profile );
    const [firstName, setFirstName] = useState({firstName: profile.firstName});
    const [lastName, setLastName] = useState({lastName: profile.lastName});
    const [school, setSchool] = useState({school: profile.school});
    const [expectedYearOfGraduation, setEYG] = useState({expectedYearOfGraduation: profile.expectedYearOfGraduation});
    const dispatch = useDispatch();
    let navigate = useNavigate();

    const profileSaveHandler = (f, l, s, eyg) => {
        const newProfile = {
            firstName: f,
            lastName: l,
            school: s,
            expectedYearOfGraduation: eyg,
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
                    <div className="col col-8 mt-2"><span className="fs-4 fw-bold">Edit Profile</span></div>
                    <button className="col col-2 btn btn-dark float-end fw-bold rounded-pill"
                            onClick={() => profileSaveHandler(firstName, lastName, school, expectedYearOfGraduation)}>
                        Save</button>
                </div>
                <img className="mt-3" width="100%" alt="" src={`/images/${profile.bannerPicture}`}/>
            </div>
            <div className="mt-3 form-group">
                <label htmlFor="inputFirstName">First Name</label><br/>
                <input type="text" id="inputFirstName" className="form-control"
                        onChange={(e)=>{setFirstName({firstName: e.target.value})}}
                        value={firstName.firstName}/><br/>
                <label htmlFor="inputLastName">Last Name</label><br/>
                <input type="text" id="inputLastName" className="form-control"
                        onChange={(e)=>{setLastName({lastName: e.target.value})}}
                        value={lastName.lastName}/><br/>

                <label htmlFor="inputSchool">School</label><br/>
                <textarea type="text" className="form-control"
                    onChange={(e)=>{setSchool({bio: e.target.value})}}
                    value={school.school} id="inputSchool"/><br/>
                <label htmlFor="inputEYG">Expected Year Of Graduation</label><br/>
                <input type="date" id="inputEYG" className="form-control"
                       onChange={(e)=>{setEYG({expectedYearOfGraduation: e.target.value})}}
                       value={expectedYearOfGraduation.expectedYearOfGraduation}/>
            </div>
        </>
    )
}

export default EditProfile;