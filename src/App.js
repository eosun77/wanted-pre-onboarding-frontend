import React from "react";
import { Navigate } from "react-router-dom";
import { Route, Routes } from "react-router-dom";
import SignupPage from "./pages/SignupPage";
import SigninPage from "./pages/SigninPage";
import TodoPage from "./pages/TodoPage";
import PrivateRoute from "./routes/PrivateRoute";
import PublickRoute from "./routes/PublickRoute";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Navigate to="/signin" replace />} />
      <Route element={<PublickRoute />}>
        <Route path="/signup" element={<SignupPage />} />
        <Route path="/signin" element={<SigninPage />} />
      </Route>
      <Route element={<PrivateRoute />}>
        <Route path="/todo" element={<TodoPage />} />
      </Route>
    </Routes>
  );
}

export default App;
