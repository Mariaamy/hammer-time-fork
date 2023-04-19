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

  // useEffect only runs when user is updated (as to prevent token refresh spam)
  useEffect(() => {
    // Refresh token if we SHOULD be logged in, but API has no access token
    if (user && !hAPI.isAuthenticated) {
      hAPI.refreshToken();
    }
  }, [user]);

  // Decodes the JWT token and returns an object
  const decodeToken = (token) => {
    try {
      const decoded = jwt_decode(token);
      return decoded;
    } catch (e) {
      return null;
    }
  };

  // Sets the user in localStorage & react state
  const setUser = (newUser) => {
    if (user === newUser) return;

    const decoded = decodeToken(newUser);
    setUserState(decoded);

    if (!decoded) localStorage.removeItem("user");
    else localStorage.setItem("user", JSON.stringify(decoded)); // Only sets decoded object, NOT ACTUAL access token in localStorage.
  };

  // Returns user
  const getUser = () => {
    return user;
  };

  // Sets name in localStorage & react state
  const setName = (newName) => {
    if (name === newName) return;

    localStorage.setItem("name", newName);
    setNameState(newName);

    if (!newName) localStorage.removeItem("name");
  };

  // Logs in user via the backend API
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

  // Registers a user via the backend API
  const register = async (email, password) => {
    try {
      const response = await hAPI.Axios.post(`/auth/register`, {
        email,
        password,
      });
      return response.data;
    } catch (error) {
      return Promise.reject(error);
    }
  };

  // Clears all authentication states
  const logout = () => {
    setUser("");
    setName(null);
    history("/");
  };

  // Returns true if logged in
  const isAuthenticated = () => {
    if (getUser()) return true;
    else return false;
  };

  // Returns true if user is admin
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
