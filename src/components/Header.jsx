import "./Header.css";
import { NavLink } from "react-router-dom";
import { useContext } from "react";
import AuthContext from "../providers/AuthProvider";

function Header() {
  const authContext = useContext(AuthContext);
  return (
    <header>
      <div class="logo-container">
        <div class="logo">
          <span class="Logo-img">
            <img
              class="Logo-BG"
              src={require("../media/makerspacelogo-bg.png")}
              alt="Logo-BG"
            ></img>
            <img
              class="cog"
              src={require("../media/makerspacelogo-cog.png")}
              alt="Logo-cog"
            ></img>
          </span>

          <span class="logo-text">
            <h1>Hammer Time</h1>
          </span>
        </div>
      </div>
      <nav class="nav">
        <NavLink
          to="/"
          className={({ isActive }) => (isActive ? "active" : "pending")}
        >
          Home
        </NavLink>
        <NavLink
          to="/tools"
          className={({ isActive }) => (isActive ? "active" : "pending")}
        >
          Tools
        </NavLink>
        {/* Need authentication restrictions */}
        {authContext.isAuthenticated() ? (
          <>
            <NavLink
              to="/user"
              className={({ isActive }) => (isActive ? "active" : "pending")}
            >
              User profile
            </NavLink>
            {authContext.isAdmin && (
              <NavLink
                to="/admin"
                className={({ isActive }) => (isActive ? "active" : "pending")}
              >
                Admin page
              </NavLink>
            )}
            <NavLink
              to="/logout"
              className={({ isActive }) =>
                isActive ? "login-link active" : "login-link pending"
              }
            >
              Logout
            </NavLink>
          </>
        ) : (
          <NavLink
            to="/login"
            className={({ isActive }) =>
              isActive ? "login-link active" : "login-link pending"
            }
          >
            Login
          </NavLink>
        )}
      </nav>
    </header>
  );
}

export default Header;
