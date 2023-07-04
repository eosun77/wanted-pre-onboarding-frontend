import { Navigate, Outlet } from "react-router-dom";

const PublickRoute = () => {
  const accessToken = localStorage.getItem("accessToken");

  return accessToken ? <Navigate to="/todo" replace /> : <Outlet />;
};

export default PublickRoute;
