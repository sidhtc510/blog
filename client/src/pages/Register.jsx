import React from "react";
import { NavLink } from "react-router-dom";

export default function Register() {
  return (
    <div className="auth">
      <h1>Register</h1>
      <form>
        <input required type="text" placeholder="username" />
        <input required type="email" placeholder="eMail" />
        <input required type="password" placeholder="password" />
        <button>Register</button>
        <p>This is an Error!</p>
        <span><NavLink to={"/login"}>Login</NavLink></span>
      </form>
    </div>
  );
}
