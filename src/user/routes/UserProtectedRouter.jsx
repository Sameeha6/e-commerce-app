import { Outlet, Navigate } from "react-router-dom";

const UserProtectedRouter = () => {
  const isAuthenticated = localStorage.getItem("user");
  return isAuthenticated ? <Outlet /> : <Navigate to="/login" />;
};

export default UserProtectedRouter;