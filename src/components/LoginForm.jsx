import React, { useState } from "react";
import { useNavigate } from "react-router-dom"; // ← Import useNavigate
import "../App.css"; // CSS file for styling

function LoginForm() {
  const navigate = useNavigate(); // ← Initialize navigate

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    // Simulate successful login
    console.log("Email:", email);
    console.log("Password:", password);
    alert("Login Successful!");

    // Redirect to main page (e.g., homepage or dashboard)
    navigate("/"); // Change to the route you want after login
  };

  return (
    <div className="login-container">
      <form className="login-form" onSubmit={handleSubmit}>
        <h2>Login</h2>
        <div className="form-group">
          <label htmlFor="email">Email</label>
          <input
            type="email"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Enter your email"
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="password">Password</label>
          <input
            type="password"
            id="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="Enter your password"
            required
          />
        </div>
        <button type="submit" className="login-btn">
          Login
        </button>
      </form>
    </div>
  );
}

export default LoginForm;
