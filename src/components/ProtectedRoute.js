import { useSelector } from "react-redux";
import { Navigate } from "react-router";

const ProtectedRoute = ({ children }) => {
  const { currentUser } = useSelector((state) => state.users);

  if (!currentUser) {
    return <Navigate to="/login" replace />;
  } else {
    return children;
  }
};
export default ProtectedRoute;
