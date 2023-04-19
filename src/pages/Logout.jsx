import "./Logout.css";
import { useContext, useEffect } from "react";
import { Navigate } from "react-router-dom";
import AuthContext from "../providers/AuthProvider";

function Logout() {
  const authContext = useContext(AuthContext);

  useEffect(() => {
    authContext.logout();
  }, [authContext]);

  return <Navigate to="/" replace />;
}

export default Logout;
