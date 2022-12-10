import "./style.css"
import {useDispatch} from "react-redux";
import {Link} from "react-router-dom";
import {useLocation, useNavigate} from "react-router";
import {logout} from "../../users/users-reducer";

export default function Header() {
    let currentUser = null
    if (window.localStorage.getItem("userinfo")) {
        currentUser = JSON.parse(window.localStorage.getItem("userinfo"))
    }

    const path = useLocation().pathname;
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const logOutBtnHandler = () => {
        localStorage.clear()
        sessionStorage.clear();
        dispatch(logout());
        navigate("/login");
    };
    return (
        <div className="header">
            <div className="header-content">
                <h2 style={{color: "#088b8e"}}> R8MyProfessor</h2>
                <div className={path === "/" || path === "/home" ? "header-item active" : "header-item"}>
                    <Link to="/">
                        Home
                    </Link>

                </div>
                <div className={path === "/search" ? "header-item active" : "header-item"}>
                    <Link to="/search">
                        Search
                    </Link>
                </div>
                <div className={path === "/userlist" ? "header-item active" : "header-item"}>
                    <Link to="/userlist">
                        UserList
                    </Link>
                </div>
                <div className={path === "/profile" ? "header-item active" : "header-item"}>
                    <Link to="/profile">
                        Profile
                    </Link>
                </div>
                <div className="header-item login">
                    {
                        currentUser !== null ?
                            <Link className={path === "/logout" ? "header-item active" : "header-item"}
                                  onClick={logOutBtnHandler} to="#">log
                                out
                            </Link> : ""
                    }
                    {
                        currentUser === null ?
                            <Link className={path === "/login" ? "header-item active" : "header-item"} to="/login">log
                                in</Link> : ""
                    }{
                    currentUser === null ?
                        <Link className={path === "/register" ? "header-item active" : "header-item"} to="/register">sign
                            up</Link> : ""
                }

                </div>

            </div>
        </div>
    )
}
