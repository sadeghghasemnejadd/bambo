import React from "react";
import { Navigate } from "react-router-dom";
import { Login } from "../../components/login-register/Login";

const LoginPage = () => {
  const getToken = localStorage.getItem("token");

  if (getToken) {
    return <Navigate to="/" />;
  }
  return <Login />;
};

export default LoginPage;
