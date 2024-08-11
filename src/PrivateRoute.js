import { Navigate } from "react-router-dom";
export const PrivateRoute = ({ children }) => {
  const getToken = localStorage.getItem("token");

  if (getToken) {
    return <>{children}</>;
  }
  return <Navigate to="/login" />;
};
