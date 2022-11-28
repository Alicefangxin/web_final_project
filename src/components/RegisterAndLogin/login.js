import "./registerandlogin.css";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { loginThunk } from "../../users/users-thunks";
const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(null);
  const { currentUser } = useSelector((state) => state.users);
  const dispatch = useDispatch();
  const handleLoginBtn = () => {
    setError(null);
    const loginUser = { username, password };
    dispatch(loginThunk(loginUser));
  };
  return (
    <>
      <section className="d-auth">
        <h1>Login</h1>
        {error && <div className="alert alert-danger">{error}</div>}
        <form>
          <div className="d-control">
            <label htmlFor="username">Username</label>
            <input
              className="form-control mb-2"
              placeholder="username"
              id="username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
            />
            <label htmlFor="password">Password</label>
            <input
              className="form-control mb-2"
              id="password"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
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
      </section>
    </>
  );
};

export default Login;
