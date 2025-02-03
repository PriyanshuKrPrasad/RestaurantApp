import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import LoginForm from "./components/LoginForm";
import SignupForm from "./components/SignupForm";
import BookTableForm from "./components/BookTableForm";
import ContactForm from "./components/ContactForm";
import WelcomeMessage from "./components/WelcomeMessage";

function App() {
  return (
    <Router>
      <Navbar />
      <div>
        {/* Show welcome message only on the home page "/" */}
        <Routes>
          <Route path="/" element={<WelcomeMessage />} />
          <Route path="/home" element={<Home />} />
          <Route path="/login" element={<LoginForm />} />
          <Route path="/signup" element={<SignupForm />} />
          <Route path="/book-table" element={<BookTableForm />} />
          <Route path="/contact" element={<ContactForm />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
