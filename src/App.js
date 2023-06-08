import React from "react";
import { Navigate } from "react-router-dom";
import { Route, Routes } from "react-router-dom";
import SignupPage from "./pages/SignupPage";
import SigninPage from "./pages/SigninPage";
import TodoPage from "./pages/TodoPage";
import { axiosInstance } from "./apis/instance";

function PrivateRoute({ children }) {
  const accessToken = localStorage.getItem("accessToken");

  if (accessToken) {
    axiosInstance.defaults.headers.common[
      "Authorization"
    ] = `Bearer ${accessToken}`;
    return children;
  } else {
    return <Navigate to="/signin" replace />;
  }
}

function PublickRoute({ children }) {
  const accessToken = localStorage.getItem("accessToken");

  if (accessToken) {
    return <Navigate to="/todo" replace />;
  } else {
    return children;
  }
}

function App() {
  return (
    <Routes>
      <Route path="/" element={<Navigate to="/signin" replace />} />
      <Route
        path="/signup"
        element={
          <PublickRoute>
            <SignupPage />
          </PublickRoute>
        }
      />
      <Route
        path="/signin"
        element={
          <PublickRoute>
            <SigninPage />
          </PublickRoute>
        }
      />
      <Route
        path="/todo"
        element={
          <PrivateRoute>
            <TodoPage />
          </PrivateRoute>
        }
      />
    </Routes>
  );
}

export default App;
