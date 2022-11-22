import './App.css';
import {BrowserRouter, Route, Routes} from "react-router-dom";
import HomePage from "./components/HomePage/HomePage";
import HelloWorld from "./components/HelloWorld";
import RegisterPage from "./components/RegisterPage/RegisterPage";
import LoginContent from "./components/LoginContent/LoginContent";


function App() {
  return (
      <BrowserRouter>
        <div className="container" id={"root"}>
          <Routes>
              <Route path="/">
                  <Route path="home"
                         element={<HomePage/>}/>
                  <Route path="home/login"
                         element={<LoginContent/>}/>
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