import React, {useState} from "react";
import { useDispatch, useSelector } from "react-redux";
import { updateProfile } from "../profile-reducer";
import { useNavigate } from "react-router-dom";
import { updateProfileThunk } from "../../../users/users-thunks";

const EditProfile = () => {
    const {currentUser} = useSelector((state) => state.users);
    const [firstName, setFirstName] = useState({firstName: currentUser.firstName});
    const [lastName, setLastName] = useState({lastName: currentUser.lastName});
    const [school, setSchool] = useState({school: currentUser.school});
    const [expectedYearOfGraduation, setEYG] = useState({expectedYearOfGraduation: currentUser.expectedYearOfGraduation});
    const dispatch = useDispatch();
    let navigate = useNavigate();

    const profileSaveHandler = (f, l, s, eyg) => {
        const newProfile = {
            firstName: f,
            lastName: l,
            school: s,
            expectedYearOfGraduation: eyg,
        }
        dispatch(updateProfileThunk(currentUser.username,newProfile));
        navigate('/profile/home');
    }

    return (
        <>
            <div className="position-relative">
                <div className="row">
                <div className="col col-2 mt-2" onClick={() => navigate('/profile/home')}>
                    <i className="bi bi-x-lg fs-4 fw-bold"></i></div>
                    <div className="col col-8 mt-2"><span className="fs-4 fw-bold">Edit Profile</span></div>
                    <button className="col col-2 btn btn-dark float-end fw-bold rounded-pill"
                            onClick={() => profileSaveHandler(firstName, lastName, school, expectedYearOfGraduation)}>
                        Save</button>
                </div>
            </div>
            <div className="mt-3 form-group">
                <label htmlFor="inputFirstName">First Name</label><br/>
                <input type="text" id="inputFirstName" className="form-control"
                        onChange={(e)=>{setFirstName({firstName: e.target.value})}}
                        value={firstName.firstName}/><br/>
                        {/* value={firstName.firstName || ''}/><br/> */}

                <label htmlFor="inputLastName">Last Name</label><br/>
                <input type="text" id="inputLastName" className="form-control"
                        onChange={(e)=>{setLastName({lastName: e.target.value})}}
                        value={lastName.lastName}/><br/>
                        {/* value={lastName.lastName || ''}/><br/> */}

                <label htmlFor="inputSchool">School</label><br/>
                <textarea type="text" className="form-control"
                    onChange={(e)=>{setSchool({school: e.target.value})}}
                    value={school.school} id="inputSchool"/><br/>
                    {/* value={school.school || ''} id="inputSchool"/><br/> */}

                <label htmlFor="inputEYG">Expected Year Of Graduation</label><br/>
                <input type="date" id="inputEYG" className="form-control"
                       onChange={(e)=>{setEYG({expectedYearOfGraduation: e.target.value})}}
                       value={expectedYearOfGraduation.expectedYearOfGraduation}/>
                        {/* value={expectedYearOfGraduation.expectedYearOfGraduation || ''}/> */}
            </div>
        </>
    )
}
export default EditProfile;