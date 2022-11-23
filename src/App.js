import './App.css';
import {BrowserRouter, Route, Routes, Navigate} from "react-router-dom";
import HomePage from "./components/HomePage/HomePage";
import HelloWorld from "./components/HelloWorld";
import RegisterPage from "./components/RegisterPage/RegisterPage";


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
                  <Route path="hello"
                         element={<HelloWorld/>}/>
              </Route>
          </Routes>
        </div>
      </BrowserRouter>
  );
}
export default App;