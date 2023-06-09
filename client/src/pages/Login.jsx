import React, { useContext, useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import axios from "axios";
import { AuthContext } from "../context/authContext";

export default function Login() {
  let [inputs, setInputs] = useState({
    email: "",
    password: "",
  });

  const [err, setError] = useState(null);

  const navigate = useNavigate();

  const { login } = useContext(AuthContext);

  // console.log(currenUser);

  const handleChange = (e) => {
    setInputs((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    inputs.email = inputs.email.trim();

    try {
      // await axios.post("/auth/login", inputs);
      await login(inputs)
      navigate("/");
    } catch (err) {
      setError(err.response.data);
      // console.log(err);
    }
  };

  return (
    <div className="auth">
      <h1>Login</h1>
      <form>
        <input
          required
          type="text"
          placeholder="email"
          name="email"
          onChange={handleChange}
        />
        <input
          required
          type="password"
          placeholder="password"
          name="password"
          onChange={handleChange}
        />
        <button onClick={handleSubmit}>Login</button>
        {err && <p>{err}</p>}
        <span>
          <NavLink to={"/register"}>Register</NavLink>
        </span>
      </form>
    </div>
  );
}
