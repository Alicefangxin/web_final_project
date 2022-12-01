import { useSelector } from "react-redux";
import { useNavigate } from "react-router";

const ProtectedRoute = ({ children }) => {
  const navigate = useNavigate();
  const { currentUser } = useSelector((state) => state.users);
  if (currentUser) {
    return children;
  } else {
    navigate("/login");
  }
};

export default ProtectedRoute;
