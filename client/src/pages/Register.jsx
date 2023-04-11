import React, { useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import axios from "axios";

export default function Register() {
    const [inputs, setInputs] = useState({
      username: "",
      email: "",
      password: "",
    });

    const [err, setError] = useState(null)

    const navigate = useNavigate()
    const handleChange = (e) => {
      setInputs((prev) => ({ ...prev, [e.target.name]: e.target.value }));
    };

    const handleSubmit = async (e) => {
      e.preventDefault();
      // console.log(inputs);
      try {
        const res = await axios.post("/auth/register", inputs);
        navigate("/login")
  //  console.log(res);
      } catch (err) {
        setError(err.response.data)
        // console.log(err);
      }
    };

  // const [inputs, setInputs] = useState({
  //   username: "",
  //   email: "",
  //   password: "",
  // });






  return (
    <div className="auth">
      <h1>Register</h1>
      <form>
        <input
          required
          type="text"
          name="username"
          placeholder="username"
          onChange={handleChange}
        />
        <input
          required
          type="email"
          name="email"
          placeholder="eMail"
          onChange={handleChange}
        />
        <input
          required
          type="password"
          name="password"
          placeholder="password"
          onChange={handleChange}
        />
        <button onClick={handleSubmit}>Register</button>
        {err && <p>{err}</p>}
        <span>
          <NavLink to={"/login"}>Login</NavLink>
        </span>
      </form>
    </div>
  );
}
