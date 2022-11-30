import "./App.css";
import {BrowserRouter, Route, Routes} from "react-router-dom";

import HomePage from "./components/HomePage/HomePage";
import HelloWorld from "./components/HelloWorld";
import ProfilePage from "./components/ProfilePage/ProfilePage";
import profileReducer from "./components/ProfilePage/profile-reducer";
import profReducer from "./professors/professors-reducer"
import EditProfileComponent from "./components/edit-profile";
import { configureStore } from "@reduxjs/toolkit";
import { Provider } from "react-redux";
import usersReducer from "./users/users-reducer";
import Register from "./components/RegisterAndLogin/register";
import Login from "./components/RegisterAndLogin/login";
import LoginContent from "./components/LoginContent/LoginContent";


const store = configureStore({
    reducer: {profile: profileReducer, users: usersReducer, professors: profReducer},
});

function App() {
    return (
        <Provider store={store}>
            <BrowserRouter>
                <div className="container">
                    <Routes path="/">
                        <Route>
                            <Route index element={<HomePage/>}/>
                            <Route path="/home" element={<LoginContent/>}/>
                            <Route path="/register" element={<Register/>}/>
                            <Route path="/login" element={<Login/>}/>
                            <Route path="/profile" element={<ProfilePage/>}/>
                            <Route
                                path="/profile/edit-profile"
                                element={<EditProfileComponent/>}
                            />
                            <Route path="/hello" element={<HelloWorld/>}/>
                        </Route>
                    </Routes>
                </div>
            </BrowserRouter>
        </Provider>
    );
}

export default App;
