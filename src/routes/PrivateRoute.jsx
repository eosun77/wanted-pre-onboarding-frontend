import { Navigate, Outlet } from "react-router-dom";
import { axiosInstance } from "../apis/instance";

const PrivateRoute = () => {
  const accessToken = localStorage.getItem("accessToken");
  if (accessToken) {
    axiosInstance.defaults.headers.common[
      "Authorization"
    ] = `Bearer ${accessToken}`;
  }

  return accessToken ? <Outlet /> : <Navigate to="/signin" replace />;
};

export default PrivateRoute;
