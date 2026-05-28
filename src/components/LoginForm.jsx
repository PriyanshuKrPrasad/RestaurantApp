import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import "../App.css";

function LoginForm() {
  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    console.log(email, password);
    alert("Login Successful!");

    navigate("/home");
  };

  return (
    <div className="auth-container">
      {/* Left Side */}
      <div className="auth-image">
        <div className="overlay">
          <h1>🍔 Foodie Hub</h1>
          <p>Delicious food delivered to your doorstep</p>
        </div>
      </div>

      {/* Right Side */}
      <div className="auth-form-section">
        <form className="auth-form" onSubmit={handleSubmit}>
          <h2>Welcome Back 👋</h2>
          <p className="subtitle">Login to continue ordering</p>

          <div className="form-group">
            <input
              type="email"
              placeholder="Email Address"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>

          <div className="form-group">
            <input
              type="password"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>

          <button type="submit" className="auth-btn">
            Login
          </button>

          <p className="switch-text">
            Don’t have an account?
            <Link to="/signup"> Signup</Link>
          </p>
        </form>
      </div>
    </div>
  );
}

export default LoginForm;