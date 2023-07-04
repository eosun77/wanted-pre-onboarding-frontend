import { Navigate, Outlet } from "react-router-dom";

const PublickRoute = () => {
  const token = localStorage.getItem("token");

  return token ? <Navigate to="/todo" replace /> : <Outlet />;
};

export default PublickRoute;
