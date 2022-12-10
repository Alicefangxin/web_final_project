import "./registerandlogin.css";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { registerThunk } from "../../users/users-thunks";
import { Link, useNavigate } from "react-router-dom";
import { Dropdown } from "semantic-ui-react";
import Footer from "../footer/Footer";

const Register = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [userType, setUserType] = useState("");
  const [validatePassword, setValidatePassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [error, setError] = useState(null);
  const { currentUser } = useSelector((state) => state.users);
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const userTypeOptions = [
    {
      key: "Student",
      text: "Student",
      value: "STUDENT",
      image: { avatar: true, src: "/images/student.png" },
    },
    {
      key: "Professor",
      text: "Professor",
      value: "PROFESSOR",
      image: { avatar: true, src: "/images/professor.png" },
    },
    {
      key: "Admin",
      text: "Admin",
      value: "ADMIN",
      image: { avatar: true, src: "/images/admin.png" },
    },
  ];

  const handleRegisterBtn = () => {
    if (password !== validatePassword) {
      setError("Passwords must match!");
      return;
    } else if (
      username === "" ||
      password === "" ||
      validatePassword === "" ||
      userType === ""
    ) {
      setError("Error! Fields below must be filled!");
      return;
    }
    setError(null);
    console.log("userType is: ", userType);
    const newUser = { username, password, userType };
    dispatch(registerThunk(newUser)).then((res) => {
      console.log(res);
      if (res.error) {
        setError("Registration failed! Username already exists!");
      } else {
        navigate("/login");
      }
    });
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
          <label htmlFor="userType">User Type</label>
          <Dropdown
            placeholder="Please Select Your User Type*"
            fluid
            required
            selection
            clearable
            options={userTypeOptions}
            value={userType}
            id="userType"
            onChange={(e, item) => {
              setUserType(item.value);
            }}
          ></Dropdown>
          <label htmlFor="username">Username</label>
          <input
            className="form-control mb-2 d-control-input"
            value={username}
            placeholder="Please input a unique username"
            onChange={(e) => setUsername(e.target.value)}
            required
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
              required
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
              required
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
      {/* <div className="d-login-footer">
        <Footer />
      </div> */}
    </>
  );
};

export default Register;
