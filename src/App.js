import './App.css';
import {BrowserRouter, Navigate} from "react-router-dom";
import {Route, Routes} from "react-router"
import HomePage from "./components/HomePage/HomePage";
import HelloWorld from "./components/HelloWorld";
import RegisterPage from "./components/RegisterPage/RegisterPage";
import ProfilePage from "./components/ProfilePage/ProfilePage";
import profileReducer from "./components/ProfilePage/profile-reducer";
import EditProfileComponent from "./components/edit-profile";
import {configureStore} from '@reduxjs/toolkit';
import {Provider} from "react-redux";
import SearchComponent from "./components/SearchPage/index.js";
import DetailComponent from "./components/DetailPage/index.js";

const store = configureStore(
       {reducer: {profile: profileReducer}});

function App() {
  return (
       <Provider store={store}>
      <BrowserRouter>
        <div className="container" id={"root"}>
          <Routes>
              <Route path="/" element={<Navigate replace to="/home"/>} />
              <Route path="/">
                     <Route path="home"
                            element={<HomePage/>}/>
                     <Route path="register"
                            element={<RegisterPage/>}/>
                     <Route path="profile"
                            element={<ProfilePage/>}/>
                     <Route path="profile/edit-profile" element={<EditProfileComponent/>}/>
                     <Route path="search"
                            element={<SearchComponent/>}/>
                     <Route path="detail"
                            element={<DetailComponent/>}/>
                     <Route path="hello"
                            element={<HelloWorld/>}/>
              </Route>
          </Routes>
        </div>
      </BrowserRouter>
      </Provider>
  );
}
export default App;