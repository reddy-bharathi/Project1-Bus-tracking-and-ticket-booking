import React from 'react';
import { useNavigate } from 'react-router-dom';
import './LandingPage.css';
import 'bootstrap/dist/css/bootstrap.min.css';

function LandingPage() {
  const navigate = useNavigate();

  const handleGetStarted = () => {
    navigate('/login'); // Redirects to login page
  };

  const handleSignUp = () => {
    navigate('/register'); // Redirects to registration page
  };

  const pageStyle = {
    backgroundImage: `url('/images/landing.jpg')`,
    backgroundSize: 'cover',
    backgroundPosition: 'center'
  };
    

  return (
    <div style={pageStyle}>
    
   
    <div className="landing-container">
      <div className="content">
        <h1>Welcome to Our Service</h1>
        <p>Track your bus easily.</p>
        <button className="btn btn-primary get-started-btn" onClick={handleGetStarted}>
          Get Started
        </button>
        <p className="mt-3">
          New here? <button className="btn btn-link" onClick={handleSignUp}>Sign Up</button>
        </p>
      </div>
    </div>
    </div>
    
  );

}

export default LandingPage;
