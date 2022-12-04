import { useEffect } from "react";
import { useNavigate } from "react-router";
import { useDispatch, useSelector } from "react-redux";
import { loadSingleUserThunk } from "../users/users-thunks";

const ProtectedRoute = ({ children }) => {
  console.log("loading protected wrapper");
  const { currentUser } = useSelector((state) => state.users);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  useEffect(() => {
    console.log("currentUser: ", currentUser);
    if (!currentUser) {
      const local_username = localStorage.getItem("username");
      console.log("local_username:", local_username);
      if (local_username) {
        dispatch(loadSingleUserThunk(local_username));
      } else {
        navigate("/login");
      }
    }
  }, [currentUser, dispatch, navigate]);
  return children;
};
export default ProtectedRoute;