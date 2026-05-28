import React, { useState } from "react";
import "../App.css";

function BookTableForm() {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    date: "",
    time: "",
    guests: "",
    occasion: "",
    requests: "",
  });

  const [success, setSuccess] = useState(false);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    console.log("Booking Data:", formData);

    setSuccess(true);

    setTimeout(() => {
      setSuccess(false);
    }, 4000);

    setFormData({
      name: "",
      phone: "",
      email: "",
      date: "",
      time: "",
      guests: "",
      occasion: "",
      requests: "",
    });
  };

  return (
    <div className="booking-container">
      {/* Left Side */}
      <div className="booking-image">
        <div className="booking-overlay">
          <h1>Reserve Your Table 🍽️</h1>
          <p>
            Experience luxury dining with delicious meals and unforgettable
            moments.
          </p>
        </div>
      </div>

      {/* Right Side */}
      <div className="booking-form-section">
        <form className="booking-form" onSubmit={handleSubmit}>
          <h2>Book a Table</h2>
          <p className="booking-subtitle">
            Reserve your seat in just a few clicks
          </p>

          {success && (
            <div className="success-message">
              🎉 Table booked successfully!
            </div>
          )}

          <div className="input-row">
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
                type="tel"
                name="phone"
                placeholder="Phone Number"
                value={formData.phone}
                onChange={handleChange}
                required
              />
            </div>
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

          <div className="input-row">
            <div className="form-group">
              <input
                type="date"
                name="date"
                value={formData.date}
                onChange={handleChange}
                required
              />
            </div>

            <div className="form-group">
              <input
                type="time"
                name="time"
                value={formData.time}
                onChange={handleChange}
                required
              />
            </div>
          </div>

          <div className="input-row">
            <div className="form-group">
              <input
                type="number"
                name="guests"
                placeholder="Guests"
                value={formData.guests}
                onChange={handleChange}
                required
              />
            </div>

            <div className="form-group">
              <select
                name="occasion"
                value={formData.occasion}
                onChange={handleChange}
              >
                <option value="">Occasion</option>
                <option>Birthday</option>
                <option>Anniversary</option>
                <option>Date Night</option>
                <option>Business Meeting</option>
                <option>Family Dinner</option>
              </select>
            </div>
          </div>

          <div className="form-group">
            <textarea
              name="requests"
              placeholder="Special Requests..."
              rows="4"
              value={formData.requests}
              onChange={handleChange}
            ></textarea>
          </div>

          <button type="submit" className="booking-btn">
            Reserve Now
          </button>
        </form>
      </div>
    </div>
  );
}

export default BookTableForm;