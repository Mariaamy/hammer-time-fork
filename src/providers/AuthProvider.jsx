import { createContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import jwt_decode from "jwt-decode";

import hAPI from "../api/hAPI";

const AuthContext = createContext();

export default AuthContext;

export const AuthProvider = ({ children }) => {
  const [name, setNameState] = useState(() => localStorage.getItem("name"));
  const [user, setUserState] = useState(() =>
    localStorage.getItem("user")
      ? JSON.parse(localStorage.getItem("user"))
      : null
  );
  const history = useNavigate();

  useEffect(() => {
    if (user && !hAPI.isAuthenticated) {
      hAPI.refreshToken();
    }
  }, [user]);

  const decodeToken = (token) => {
    try {
      const decoded = jwt_decode(token);
      return decoded;
    } catch (e) {
      return null;
    }
  };

  const setUser = (newUser) => {
    if (user === newUser) return;

    const decoded = decodeToken(newUser);
    setUserState(decoded);

    if (!decoded) localStorage.removeItem("user");
    else localStorage.setItem("user", JSON.stringify(decoded));
  };

  const getUser = () => {
    return user;
  };

  const setName = (newName) => {
    if (name === newName) return;

    localStorage.setItem("name", newName);
    setNameState(newName);

    if (!newName) localStorage.removeItem("name");
  };

  const login = async (email, password) => {
    try {
      const response = await hAPI.login(email, password);
      setUser(response.accessToken);
      setName(response.name);
      history("/");
    } catch (error) {
      return Promise.reject(error);
    }
  };

  const register = async (name, surname, email, password) => {
    try {
      const response = await hAPI.Axios.post(`/auth/register`, {
        name,
        surname,
        email,
        password,
      });
      return response.data;
    } catch (error) {
      return Promise.reject(error);
    }
  };

  const logout = () => {
    setUser("");
    setName(null);
    history("/");
  };

  const isAuthenticated = () => {
    if (getUser()) return true;
    else return false;
  };

  const isAdmin = () => {
    if (getUser().role === 2) return true;
    else return false;
  };

  const contextData = {
    getUser: getUser,
    name: name,
    logout: logout,
    login: login,
    register: register,
    isAuthenticated: isAuthenticated,
    isAdmin: isAdmin,
  };

  return (
    <AuthContext.Provider value={contextData}>{children}</AuthContext.Provider>
  );
};
