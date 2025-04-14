import React, { useState } from "react";
import { useNavigate } from "react-router-dom"; // ← Import useNavigate
import "../App.css";

function SignupForm() {
  const navigate = useNavigate(); // ← Initialize the navigate function

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Simulate successful signup
    console.log("Signup Data:", formData);
    alert("Signup Successful!");

    // Redirect to login page
    navigate("/login");
  };

  return (
    <div className="form-container">
      <form className="form" onSubmit={handleSubmit}>
        <h2>Signup</h2>

        <div className="form-group">
          <label htmlFor="name">Name</label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            placeholder="Enter your name"
            required
          />
        </div>

        <div className="form-group">
          <label htmlFor="email">Email</label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            placeholder="Enter your email"
            required
          />
        </div>

        <div className="form-group">
          <label htmlFor="password">Password</label>
          <input
            type="password"
            id="password"
            name="password"
            value={formData.password}
            onChange={handleChange}
            placeholder="Enter your password"
            required
          />
        </div>

        <button type="submit" className="form-btn">
          Signup
        </button>
      </form>
    </div>
  );
}

export default SignupForm;
