import './App.css';
import {BrowserRouter, Navigate} from "react-router-dom";
import {Route, Routes} from "react-router"
import HomePage from "./components/HomePage/HomePage";
import HelloWorld from "./components/HelloWorld";
import RegisterPage from "./components/RegisterPage/RegisterPage";
import SearchComponent from "./components/SearchPage/index.js";
import DetailComponent from "./components/DetailPage/index.js";
import AddRating from "./components/DetailPage/add-rating";


function App() {
  return (
      <BrowserRouter>
        <div className="container" id={"root"}>
          <Routes>
              <Route path="/" element={<Navigate replace to="/home"/>} />
              <Route path="/">
                  <Route path="home"
                         element={<HomePage/>}/>
                  <Route path="register"
                         element={<RegisterPage/>}/>
                  <Route path="search"
                         element={<SearchComponent/>}/>
                  <Route path="detail"
                         element={<DetailComponent/>}/>
                  <Route path="addRating"
                         element={<AddRating/>}/>
                  <Route path="hello"
                         element={<HelloWorld/>}/>
              </Route>
          </Routes>
        </div>
      </BrowserRouter>
  );
}
export default App;