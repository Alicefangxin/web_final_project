import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";

import HelloWorld from "./components/HelloWorld";
import ProfilePage from "./components/ProfilePage/ProfilePage";
import profileReducer from "./components/ProfilePage/profile-reducer";
import profReducer from "./professors/professors-reducer";
import { configureStore } from "@reduxjs/toolkit";
import { Provider } from "react-redux";
import usersReducer from "./users/users-reducer";
import Register from "./components/RegisterAndLogin/register";
import Login from "./components/RegisterAndLogin/login";
import LoggedHome from "./components/logged-home/LoggedHome";
import SearchComponent from "./components/SearchPage";
import searchedReducer from "./components/SearchPage/searched-reducer";
import ProtectedRoute from "./components/ProtectedRoute";
import UnloggedHome from "./components/unlogged-home/UnloggedHome";

const store = configureStore({
  reducer: {
    profile: profileReducer,
    users: usersReducer,
    professors: profReducer,
    searched: searchedReducer,
  },
});

function App() {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <div className="container">
          <Routes path="/">
            <Route>
              <Route index element={<UnloggedHome />} />
              <Route path="/home" element={<LoggedHome />} />
              <Route path="/register" element={<Register />} />
              <Route path="/login" element={<Login />} />
              <Route
                path="/profile/*"
                element={
                  <ProtectedRoute>
                    <ProfilePage />
                  </ProtectedRoute>
                }
              />
              <Route path="/search" element={<SearchComponent />} />
              <Route path="/hello" element={<HelloWorld />} />
            </Route>
          </Routes>
        </div>
      </BrowserRouter>
    </Provider>
  );
}

export default App;
