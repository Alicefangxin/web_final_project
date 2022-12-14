import "./App.css";
import { HashRouter, Route, Routes } from "react-router-dom";
import Header from "./components/header/header";
import HelloWorld from "./components/HelloWorld";
import ProfilePage from "./components/ProfilePage/ProfilePage";
// import profileReducer from "./components/ProfilePage/profile-reducer";
import profReducer from "./professors/professors-reducer";
import { configureStore } from "@reduxjs/toolkit";
import { Provider } from "react-redux";
import usersReducer from "./users/users-reducer";
import Register from "./components/RegisterAndLogin/register";
import Login from "./components/RegisterAndLogin/login";
import LoggedHome from "./components/logged-home/LoggedHome";
import SearchComponent from "./components/SearchPage";
import UserList from "./users/index";
import searchedReducer from "./professors/searched-reducer";
import ProtectedRoute from "./components/ProtectedRoute";
import UnloggedHome from "./components/unlogged-home/UnloggedHome";
import DetailComponent from "./components/DetailPage";
import TempProfList from "./components/DetailPage/temp-prof-list";
// import TempSearch from "./components/unused/temp-search";
import profsReducer from "./profs/prof-reducers"
import reviewsReducer from "./reviews/reviews-reducer";
import savesReducer from "./saves/saves-reducer";
import savesProfReducer from "./saves/saves-prof-reducer";

const store = configureStore({
  reducer: {
    // profile: profileReducer,
    users: usersReducer,
    professors: profReducer,
    searched: searchedReducer,
    profs: profsReducer,
    reviews: reviewsReducer,
    saves: savesReducer,
    saved_profs: savesProfReducer
  },
});

function App() {
  console.log("loading App.js");
  return (
    <Provider store={store}>
      <HashRouter>
        <Header/>
        <div className="container">
          <Routes path="/">
            <Route>
              <Route index element={<UnloggedHome />} />
              <Route path="/home" element={<LoggedHome />} />
              <Route path="/register" element={<Register />} />
              <Route path="/login" element={<Login />} />
              <Route path="/userlist" element={<UserList/>}/>
              <Route
                path="/profile/*"
                element={
                  <ProtectedRoute>
                    <ProfilePage />
                  </ProtectedRoute>
                }
              />
              <Route path="/search" element={<SearchComponent />}/>
              <Route path="/search/details/:profID" element={<DetailComponent/>}/>
              <Route path="/details/:profID" element={<DetailComponent/>}/>
              <Route path="/temp" element={<TempProfList/>}/>
              {/*<Route path="/tempsearch" element={<TempSearch/>}/>*/}
              <Route path="/hello" element={<HelloWorld />} />
            </Route>
          </Routes>
        </div>
      </HashRouter>
    </Provider>
  );
}

export default App;
