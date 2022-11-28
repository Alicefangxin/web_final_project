import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { registerThunk } from "../../users/users-thunks";

const Register = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [validatePassword, setValidatePassword] = useState("");
  const [error, setError] = useState(null);
  const { currentUser } = useSelector((state) => state.users);
  const dispatch = useDispatch();
  const handleRegisterBtn = () => {
    if (password !== validatePassword) {
      setError("Passwords must match");
      return;
    }
    setError(null);
    const newUser = { username, password };
    dispatch(registerThunk(newUser));
  };
  return (
    <>
      <div className="container">
        <h1>Register</h1>
        {error && <div className="alert alert-danger">{error}</div>}
        <input
          className="form-control mb-2"
          value={username}
          placeholder="Please input a unique username"
          onChange={(e) => setUsername(e.target.value)}
        />
        <input
          className="form-control mb-2"
          placeholder="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <input
          className="form-control mb-2"
          placeholder="retype password"
          value={validatePassword}
          onChange={(e) => setValidatePassword(e.target.value)}
        />
        <button onClick={handleRegisterBtn} className="btn btn-primary w-100">
          Register
        </button>
        {currentUser && <h2>Welcome {currentUser.username}</h2>}
      </div>
    </>
  );
};

export default Register;
