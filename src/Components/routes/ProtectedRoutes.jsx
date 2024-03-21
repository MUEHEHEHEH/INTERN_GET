import { Navigate, Outlet } from "react-router-dom";
import { useAuth } from "../../hooks/useAuth";

const ProtectedRoute = () => {
  const isAuthenticated = useAuth();

  return isAuthenticated ? <Outlet /> : <Navigate to="/SignIn" replace={true} />;
};

export default ProtectedRoute;
