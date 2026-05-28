import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import "../App.css";

function SignupForm() {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    console.log(formData);
    alert("Signup Successful!");

    navigate("/login");
  };

  return (
    <div className="auth-container">
      {/* Left Side */}
      <div className="auth-image">
        <div className="overlay">
          <h1>🍕 Foodie Hub</h1>
          <p>Fresh meals, fast delivery, happy moments</p>
        </div>
      </div>

      {/* Right Side */}
      <div className="auth-form-section">
        <form className="auth-form" onSubmit={handleSubmit}>
          <h2>Create Account ✨</h2>
          <p className="subtitle">Join us and order your favorite food</p>

          <div className="form-group">
            <input
              type="text"
              name="name"
              placeholder="Full Name"
              value={formData.name}
              onChange={handleChange}
              required
            />
          </div>

          <div className="form-group">
            <input
              type="email"
              name="email"
              placeholder="Email Address"
              value={formData.email}
              onChange={handleChange}
              required
            />
          </div>

          <div className="form-group">
            <input
              type="password"
              name="password"
              placeholder="Password"
              value={formData.password}
              onChange={handleChange}
              required
            />
          </div>

          <button type="submit" className="auth-btn">
            Signup
          </button>

          <p className="switch-text">
            Already have an account?
            <Link to="/login"> Login</Link>
          </p>
        </form>
      </div>
    </div>
  );
}

export default SignupForm;