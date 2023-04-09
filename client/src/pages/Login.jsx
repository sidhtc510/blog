import React from "react";
import { NavLink } from "react-router-dom";

export default function Login() {
  return (
    <div className="auth">
      <h1>Login</h1>
      <form>
        <input required type="text" placeholder="username" />
        <input required type="password" placeholder="password" />
        <button>Login</button>
        <p>This is an Error!</p>
        <span><NavLink to={"/register"}>Register</NavLink></span>
      </form>
    </div>
  );
}
