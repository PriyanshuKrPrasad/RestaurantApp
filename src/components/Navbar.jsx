import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="navbar">
      {/* Logo */}
      <Link to="/" className="navbar-logo" onClick={() => setIsOpen(false)}>
        <span>eXplore</span>
      </Link>

      {/* Hamburger Toggle Button */}
      <button className="menu-toggle" onClick={() => setIsOpen(!isOpen)}>
        {isOpen ? '✖' : '☰'}
      </button>

      {/* Navigation Links */}
      <ul className={`nav-links ${isOpen ? "show" : ""}`}>
        <li><Link to="/login" onClick={() => setIsOpen(false)}>Login</Link></li>
        <li><Link to="/signup" onClick={() => setIsOpen(false)}>Signup</Link></li>
        {/* <li><Link to="/contact" onClick={() => setIsOpen(false)}>Contact</Link></li> */}
      </ul>
    </nav>
  );
}

export default Navbar;
