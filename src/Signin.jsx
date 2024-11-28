import React, { useState } from "react";
import './Auth.css';
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { login } from "./authSlice";

const SignIn = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [credentials, setCredentials] = useState({
    email: "",
    pass: "",
  });

  const handleChange = (e) => {
    setCredentials({ ...credentials, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const response = await fetch("http://localhost:5000/api/signin", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(credentials),
    });
    const data = await response.json();

    if (data.token) {
      alert("Login Successful");

      // Save token and user data
      localStorage.setItem("authToken", data.token);
      dispatch(login({ email: credentials.email, name: data.name })); // Save user info in Redux
      navigate("/profile");
    } else {
      alert("Error: " + data.message);
    }
  };

  return (
    <div className="auth-container">
      <h2>Sign In</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="email"
          name="email"
          placeholder="Email"
          value={credentials.email}
          onChange={handleChange}
        />
        <input
          type="password"
          name="pass"
          placeholder="Password"
          value={credentials.pass}
          onChange={handleChange}
        />
        <button type="submit">Sign In</button>
      </form>
    </div>
  );
};

export default SignIn;
