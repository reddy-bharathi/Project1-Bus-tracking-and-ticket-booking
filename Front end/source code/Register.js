/*import React, { useState } from 'react';

import './Register.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
function Register() {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: ''
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      // Post data to backend registration endpoint
      await axios.post('http://localhost:5000/api/auth/register', formData);
      alert('Registration successful');
      
      // Redirect to home page on successful registration
      navigate('/home');
    } catch (error) {
      console.error('Error during registration:', error);
      alert('Error while registering. Please try again.');
    }
  };

  return (
    <div className="background-color">
      <div className="register-container">
        <div className="register-card shadow-lg p-4">
          <h3 className="text-center mb-4">Sign Up</h3>
          <form onSubmit={handleSubmit}>
            <div className="form-group">
              <label>Full Name</label>
              <input
                type="text"
                name="name"
                className="form-control"
                value={formData.name}
                onChange={handleChange}
                required
              />
            </div>
            <div className="form-group mt-3">
              <label>Email</label>
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
            <button type="submit" className="btn btn-primary w-100 mt-4">Register</button>
          </form>
          <p className="text-center mt-3">
            Already have an account? <a href="/login">Login</a>
          </p>
        </div>
      </div>
    </div>
  );
}

export default Register;
*/

// code
/*
import React, { useState } from 'react';
import axios from 'axios';
import './Register.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { useNavigate } from 'react-router-dom';

function Register() {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
  });
  const [loading, setLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setErrorMessage('');

    try {
      const response = await axios.post('http://localhost:5000/api/auth/register', formData);
      alert('Registration successful');
      navigate('/home'); // Redirect to home page after successful registration
    } catch (error) {
      console.error('Error during registration:', error);
      if (error.response && error.response.data) {
        setErrorMessage(error.response.data.message);
      } else {
        setErrorMessage('Error while registering. Please try again.');
      }
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="background-color">
      <div className="register-container">
        <div className="register-card shadow-lg p-4">
          <h3 className="text-center mb-4">Sign Up</h3>
          {errorMessage && <p className="text-danger text-center">{errorMessage}</p>}
          <form onSubmit={handleSubmit}>
            <div className="form-group">
              <label>Full Name</label>
              <input
                type="text"
                name="name"
                className="form-control"
                value={formData.name}
                onChange={handleChange}
                required
              />
            </div>
            <div className="form-group mt-3">
              <label>Email</label>
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
            <button type="submit" className="btn btn-primary w-100 mt-4" disabled={loading}>
              {loading ? 'Registering...' : 'Register'}
            </button>
          </form>
          <p className="text-center mt-3">
            Already have an account? <a href="/login">Login</a>
          </p>
        </div>
      </div>
    </div>
  );
}

export default Register;
*/

/*
import React, { useState } from 'react';
import axios from 'axios';
import './Register.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { useNavigate } from 'react-router-dom';

function Register() {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: ''
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      // Post data to the backend registration endpoint
      const response = await axios.post('http://localhost:5000/api/auth/register', formData);

      // If registration is successful, display success message
      if (response.status === 201) {
        alert('Registration successful');
        navigate('/home'); // Redirect to home page on successful registration
      }
    } catch (error) {
      console.error('Error during registration:', error);
      alert('Error while registering. Please try again.');
    }
  };

  return (
    <div className="background-color">
      <div className="register-container">
        <div className="register-card shadow-lg p-4">
          <h3 className="text-center mb-4">Sign Up</h3>
          <form onSubmit={handleSubmit}>
            <div className="form-group">
              <label>Full Name</label>
              <input
                type="text"
                name="name"
                className="form-control"
                value={formData.name}
                onChange={handleChange}
                required
              />
            </div>
            <div className="form-group mt-3">
              <label>Email</label>
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
            <button type="submit" className="btn btn-primary w-100 mt-4">Register</button>
          </form>
          <p className="text-center mt-3">
            Already have an account? <a href="/login">Login</a>
          </p>
        </div>
      </div>
    </div>
  );
}

export default Register;

*/



import React, { useState } from 'react';
import './Register.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { useNavigate } from 'react-router-dom';

function Register() {
  const navigate = useNavigate(); // hook for navigation
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
  });
  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const validate = () => {
    let errors = {};

    // Name validation (should not be empty)
    if (!formData.name) {
      errors.name = 'Name is required';
    }

    // Email validation (should be in valid email format)
    const emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zAZ0-9.-]{2,6}$/;
    if (!formData.email) {
      errors.email = 'Email is required';
    } else if (!emailRegex.test(formData.email)) {
      errors.email = 'Invalid email format';
    }

    // Password validation (should be at least 6 characters long)
    if (!formData.password) {
      errors.password = 'Password is required';
    } else if (formData.password.length < 6) {
      errors.password = 'Password must be at least 6 characters';
    }

    setErrors(errors);
    return Object.keys(errors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (validate()) {
      alert('Registration successful');
      // Simulate navigating to the home page after successful registration
      navigate('/home'); // Redirect to the home page

      // Optionally, you can submit the form data to your backend API here
      console.log('Form data:', formData);
    }
  };

  return (
    <div className="background-color">
      <div className="register-container">
        <div className="register-card shadow-lg p-4">
          <h3 className="text-center mb-4">Sign Up</h3>
          <form onSubmit={handleSubmit}>
            <div className="form-group">
              <label>Full Name</label>
              <input
                type="text"
                name="name"
                className="form-control"
                value={formData.name}
                onChange={handleChange}
                required
              />
              {errors.name && <p className="text-danger">{errors.name}</p>}
            </div>

            <div className="form-group mt-3">
              <label>Email</label>
              <input
                type="email"
                name="email"
                className="form-control"
                value={formData.email}
                onChange={handleChange}
                required
              />
              {errors.email && <p className="text-danger">{errors.email}</p>}
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
              {errors.password && <p className="text-danger">{errors.password}</p>}
            </div>

            <button type="submit" className="btn btn-primary w-100 mt-4">
              Register
            </button>
          </form>

          <p className="text-center mt-3">
            Already have an account? <a href="/login">Login</a>
          </p>
        </div>
      </div>
    </div>
  );
}

export default Register;
