import React, { useState } from "react";
import "../App.css";

function BookTableForm() {
  const [formData, setFormData] = useState({
    name: "",
    date: "",
    time: "",
    guests: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Table Booking Data:", formData);
    alert("Table booked successfully!");
  };

  return (
    <div className="form-container">
      <form className="form" onSubmit={handleSubmit}>
        <h2>Book a Table</h2>
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
          <label htmlFor="date">Date</label>
          <input
            type="date"
            id="date"
            name="date"
            value={formData.date}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="time">Time</label>
          <input
            type="time"
            id="time"
            name="time"
            value={formData.time}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="guests">Number of Guests</label>
          <input
            type="number"
            id="guests"
            name="guests"
            value={formData.guests}
            onChange={handleChange}
            placeholder="Enter number of guests"
            required
          />
        </div>
        <button type="submit" className="form-btn">
          Book Table
        </button>
      </form>
    </div>
  );
}

export default BookTableForm;
