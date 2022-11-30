import "./registerandlogin.css";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { registerThunk } from "../../users/users-thunks";
import { Link, useNavigate } from "react-router-dom";

const Register = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [validatePassword, setValidatePassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [error, setError] = useState(null);
  const { currentUser } = useSelector((state) => state.users);
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const handleRegisterBtn = () => {
    if (password !== validatePassword) {
      setError("Passwords must match");
      return;
    }
    setError(null);
    const newUser = { username, password };
    dispatch(registerThunk(newUser));
    if (currentUser) {
      navigate("/login");
    }
  };
  const togglePasswordTypeHandler = (lastState) => {
    setShowPassword(!lastState);
  };
  useEffect(() => {
    const username = localStorage.getItem("username");
    if (currentUser || username) {
      navigate("/profile");
    }
  }, [currentUser, navigate]);

  return (
    <>
      <section className="d-auth">
        <h1>Register</h1>
        {error && <div className="alert alert-danger">{error}</div>}
        <div className="d-control">
          <label htmlFor="username">Username</label>
          <input
            className="form-control mb-2 d-control-input"
            value={username}
            placeholder="Please input a unique username"
            onChange={(e) => setUsername(e.target.value)}
          />
          <label htmlFor="password">Password</label>
          <div className="input-group d-control mt-2">
            <input
              className="form-control d-control-input"
              id="password"
              type={showPassword ? "text" : "password"}
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
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

          <label htmlFor="password2">Retype Password</label>
          <div className="input-group d-control mt-2">
            <input
              className="form-control d-control-input"
              id="password2"
              type={showPassword ? "text" : "password"}
              placeholder="Retype password"
              value={validatePassword}
              onChange={(e) => setValidatePassword(e.target.value)}
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
          <button
            onClick={handleRegisterBtn}
            className="d-actions-button w-100"
          >
            Register
          </button>
          <Link to="/login">
            <button type="button" className="d-actions-toggle">
              Already have an account? Login here
            </button>
          </Link>
        </div>
        {currentUser && <h2>Welcome {currentUser.username}</h2>}
      </section>
    </>
  );
};

export default Register;
