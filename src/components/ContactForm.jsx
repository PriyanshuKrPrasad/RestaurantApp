import React, { useState } from "react";
import "../App.css";

function ContactForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    console.log("Contact Data:", formData);
    alert("Message sent successfully!");

    setFormData({
      name: "",
      email: "",
      message: "",
    });
  };

  return (
    <div className="contact-container">

      {/* LEFT SIDE */}
      <div className="contact-image">
        <div className="contact-overlay">
          <h1>📞 Get in Touch</h1>
          <p>
            We are here to help you. Send us a message and we will respond quickly.
          </p>
        </div>
      </div>

      {/* RIGHT SIDE FORM */}
      <div className="contact-form-section">
        <form className="contact-form" onSubmit={handleSubmit}>
          <h2>Contact Us</h2>

          <div className="form-group">
            <label>Name</label>
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              placeholder="Enter your name"
              required
            />
          </div>

          <div className="form-group">
            <label>Email</label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="Enter your email"
              required
            />
          </div>

          <div className="form-group">
            <label>Message</label>
            <textarea
              name="message"
              value={formData.message}
              onChange={handleChange}
              placeholder="Enter your message"
              rows="5"
              required
            />
          </div>

          <button type="submit" className="form-btn">
            Send Message
          </button>
        </form>
      </div>

    </div>
  );
}

export default ContactForm;