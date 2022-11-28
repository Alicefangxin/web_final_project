import "./registerandlogin.css";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { loginThunk } from "../../users/users-thunks";
const Login = () => {
  const [username, setUsername] = useState("");
  const [passwordInput, setPasswordInput] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [error, setError] = useState(null);
  const { currentUser } = useSelector((state) => state.users);
  const dispatch = useDispatch();
  const handlePasswordChange = (e) => {
    setPasswordInput(e.target.value);
    e.preventDefault();
  };
  const togglePasswordTypeHandler = (lastState) => {
    setShowPassword(!lastState);
  };
  const handleLoginBtn = () => {
    setError(null);
    const loginUser = { username, passwordInput };
    dispatch(loginThunk(loginUser));
  };
  return (
    <>
      <div className=" row-10 col-12 d-auth">
        <h1>Login</h1>
        {error && <div className="alert alert-danger">{error}</div>}
        <form>
          <div className="d-control mt-4">
            {/* <label for="username">Username</label> */}
            <input
              className="form-control mb-2 d-control-input"
              placeholder="Username"
              id="username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
            />
            <div className="input-group d-control mt-4">
              <input
                className="form-control d-control-input"
                type={showPassword ? "text" : "password"}
                id="password"
                onChange={handlePasswordChange}
                value={passwordInput}
                placeholder="Password"
              />
              <div
                className="btn bg-white"
                onClick={() => togglePasswordTypeHandler(showPassword)}
              >
                {!showPassword ? (
                  <i className="bi bi-eye-slash"></i>
                ) : (
                  <i className="bi bi-eye"></i>
                )}
              </div>
            </div>
          </div>
          <div className="d-actions">
            <button onClick={handleLoginBtn} className="d-actions-button w-100">
              Login
            </button>
            <Link to="/register">
              <button type="button" className="d-actions-toggle">
                Create a new account
              </button>
            </Link>
          </div>
        </form>
        {currentUser && <h2>Welcome {currentUser.username}</h2>}
      </div>
    </>
  );
};

export default Login;