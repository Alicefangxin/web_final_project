/* eslint-disable react-hooks/exhaustive-deps */
import React, {useEffect, useState} from "react";
import {useDispatch} from "react-redux";
import {deleteUserThunk, findAllUsersThunk} from "./users-thunks";
import {Link} from "react-router-dom";
import {useNavigate} from "react-router";
import Footer from "../components/footer/Footer";

const UserList = () => {
    const [userList, setUserList] = useState([])
    let users = null
    if (window.localStorage.getItem("userinfo")) {
        users = JSON.parse(window.localStorage.getItem("userinfo"))
    }
    const dispatch = useDispatch();
    const navigate = useNavigate();
    useEffect(() => {
        if (users)
            findAllUsers()
        else
            navigate("/login")
    });
    const findAllUsers = async () => {
        const data = await dispatch(findAllUsersThunk());
        setUserList(data.payload)
    }
    const detect = async (id) => {
        setUserList(userList.filter(item => {
            return item.id !== id
        }))
        await dispatch(deleteUserThunk(id))
    }
    return (
        <>
            <table className="ui table">
                <thead>
                <tr>
                    <th>Name</th>
                    <th>usertype</th>
                    <th>School</th>
                    <th>operation</th>
                </tr>
                </thead>
                <tbody>
                {userList.map((user) => (
                    <tr key={user._id}>
                        <td>{user.username}</td>
                        <td>{user.userType}</td>
                        <td>{user.school}</td>
                        <td>
                            <span style={{padding: "0 10px"}}>
                            <Link to={`/profile?username=${user.username}`}>show details</Link>
                            </span>
                            <span>
                              {users.userType === "ADMIN" ? <Link to="/userlist" onClick={() => {
                                  detect(user._id)
                              }}> delete</Link> : ""
                              }
                            </span>
                        </td>
                    </tr>
                ))}
                </tbody>
            </table>
            <Footer/>
        </>
    );
};

export default UserList;
