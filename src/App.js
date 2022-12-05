import "./App.css";
import { HashRouter, Route, Routes } from "react-router-dom";

import HelloWorld from "./components/HelloWorld";
import ProfilePage from "./components/ProfilePage/ProfilePage";
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
import DetailComponent from "./components/DetailPage";
import AddRating from "./components/DetailPage/add-rating";

const store = configureStore({
  reducer: {
    profile: profileReducer,
    users: usersReducer,
    professors: profReducer,
    searched: searchedReducer,
  },
});

function App() {
  console.log("loading App.js");
  return (
    <Provider store={store}>
      <HashRouter>
        <div className="container">
          <Routes path="/">
            <Route>
              <Route index element={<UnloggedHome/>}/>
              <Route path="/home" element={<LoggedHome/>}/>
              <Route path="/register" element={<Register/>}/>
              <Route path="/login" element={<Login/>}/>
              <Route
                path="/profile/*"
                element={
                  <ProtectedRoute>
                    <ProfilePage />
                  </ProtectedRoute>
                }
              />
              <Route path="/search" element={<SearchComponent/>}/>
              <Route path="/details" element={<DetailComponent/>}/>
              <Route path="/addrating" element={<AddRating/>}/>
              <Route path="/hello" element={<HelloWorld />} />
            </Route>
          </Routes>
        </div>
      </HashRouter>
    </Provider>
  );
}

export default App;
