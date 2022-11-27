import './App.css';
import {BrowserRouter, Route, Routes} from "react-router-dom";
import HomePage from "./components/HomePage/HomePage";
import RegisterPage from "./components/RegisterPage/RegisterPage";
import LoginContent from "./components/LoginContent/LoginContent";


function App() {
  return (
      <BrowserRouter>
        <div className="container" id={"root"}>
          <Routes>
              <Route path="/">
                  <Route path="/"
                         element={<HomePage/>}/>
                  <Route path="home"
                         element={<LoginContent/>}/>
                  <Route path="register"
                         element={<RegisterPage/>}/>
              </Route>
          </Routes>
        </div>
      </BrowserRouter>
  );
}
export default App;