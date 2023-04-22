import React, { useContext } from "react";
import { NavLink } from "react-router-dom";
import { AuthContext } from "../context/authContext";

export default function Navbar() {
  const { currentUser, logout } = useContext(AuthContext);

  const showEditorMode = () => {
    if (currentUser) {
      return (
        <React.Fragment>
          <div className="links">
            <NavLink to="/write">Write</NavLink>
          </div>
          <div className="links">
            <span>{currentUser.username}</span>
          </div>
        </React.Fragment>
      );
    } else {
      return null;
    }
  };

  return (
    <div className="navbar">
      <div className="container">
        <div className="logo">
          {" "}
          <NavLink to="/">Logo</NavLink>
        </div>
        <span>
          {/* <div className="links">
            <NavLink to="/">Home</NavLink>
          </div> */}

          {showEditorMode()}

          <div className="links">
            {currentUser ? (
              <a href="#" onClick={logout}>
                Logout
              </a>
            ) : (
              <NavLink to="/login">Login</NavLink>
            )}
          </div>
        </span>
      </div>
    </div>
  );
}
