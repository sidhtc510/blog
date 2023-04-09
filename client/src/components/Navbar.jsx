import React from "react";
import { NavLink } from "react-router-dom";

export default function Navbar() {
  return (
    <div className="navbar">
      <div className="container">
        <div className="logo"> <NavLink to="/">Logo</NavLink></div>
        <span>
          <div className="links">
            <NavLink to="/">Home</NavLink>
          </div>
          <div className="links">
            <NavLink to="/write">Write</NavLink>
          </div>
          <div className="links">
            <NavLink to="/login">Login</NavLink>
          </div>
        </span>
      </div>
    </div>
  );
}
