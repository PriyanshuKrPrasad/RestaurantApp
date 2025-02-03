import React from "react";
import { useLocation } from "react-router-dom";
import "../App.css"

function WelcomeMessage() {
    const location = useLocation();

    // Show message only on the home page "/"
    if (location.pathname !== "/") return null;

    return (
        <div>
            <h1 className="welcome-text Animated">Welcome to Our Website</h1>
            <img 
                src="src/assets/images.png" 
                alt="Animated Welcome" 
                className="welcome-image" 
            />
        </div>
    );
}

export default WelcomeMessage;
