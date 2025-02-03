import React from "react";
import { Link } from "react-router-dom";
import "./Navbar.css"; // Optional: Add styling for the navbar

function Navbar() {
  return (
    <nav className="navbar">
      <ul>
        <li><Link to="/home"><span>eXplore</span></Link></li>
        <li><Link to="/login">Login</Link></li>
        <li><Link to="/signup">Signup</Link></li>
        {/* <li><Link to="/book-table">Book Table</Link></li> */}
        <li><Link to="/contact">Contact</Link></li>
      </ul>
    </nav>
  );
}

export default Navbar;
