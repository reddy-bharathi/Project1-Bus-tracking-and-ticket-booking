import React, { useState } from 'react';
import axios from 'axios';
import './Login.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { useNavigate } from 'react-router-dom';
function Login() {
  const [formData, setFormData] = useState({
    email: '',
    password: ''
  });
  const navigate = useNavigate();
  const pageStyle = {
    backgroundImage: `url('/images/page.jpg')`,
    backgroundSize: 'cover',
    backgroundPosition: 'center'
  };
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };
  const handleSubmit = async (e) => {
      navigate('/home');
    } 
  return (
    <div style={pageStyle}>
    <div className="login-container">
      <div className="login-card shadow-lg p-4">
        <div className="row">
          <div className="col-md-6 left-section d-flex flex-column justify-content-center align-items-center text-light">
            <h2>Login</h2>
            <p>you chose the right option</p>
            <button className="btn btn-primary my-2 w-75">Facebook</button>
            <button className="btn btn-info my-2 w-75">Email</button>
          </div>
          <div className="col-md-6 right-section">
            <h3 className="text-center">Enter Credentials</h3>
            <form onSubmit={handleSubmit}>
              <div className="form-group">
                <label>Email Id</label>
                <input
                  type="email"
                  name="email"
                  className="form-control"
                  value={formData.email}
                  onChange={handleChange}
                  required
                />
              </div>
              <div className="form-group mt-3">
                <label>Password</label>
                <input
                  type="password"
                  name="password"
                  className="form-control"
                  value={formData.password}
                  onChange={handleChange}
                  required
                />
              </div>
              <button type="submit" className="btn btn-primary w-100 mt-4">Login</button>
            </form>
            <p className="text-center mt-3">
              Already a user? <a href="/register">Sign-Up</a>
            </p>
          </div>
        </div>
      </div>
    </div>
    </div>
  );
};
export default Login;
