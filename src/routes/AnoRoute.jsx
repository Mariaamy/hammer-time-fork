import { useContext } from "react";
import { Outlet, Navigate } from "react-router-dom";
import AuthContext from "../providers/AuthProvider";

const AnoRoute = ({ children }) => {
  const context = useContext(AuthContext);
  const user = context.getUser();

  if (user) return <Navigate to="/" replace />;
  return children ? children : <Outlet />;
};

export default AnoRoute;
