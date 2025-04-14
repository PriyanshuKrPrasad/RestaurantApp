import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./src/components/Navbar";
import Home from "./src/components/Home";
import LoginForm from "./src/components/LoginForm";
import SignupForm from "./src/components/SignupForm";
import BookTableForm from "./src/components/BookTableForm";
import ContactForm from "./src/components/ContactForm";
import { AnimatePresence } from "framer-motion";

function App() {
  return (
    <AnimatePresence mode="">
    <Router>
      <Navbar />
      <div>
        
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<LoginForm />} />
          <Route path="/signup" element={<SignupForm />} />
          <Route path="/book-table" element={<BookTableForm />} />
        <Route path="/contact" element={<ContactForm />} />
        </Routes>     
      </div>
    </Router>
    </AnimatePresence>
  );
}

export default App;
