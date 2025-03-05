// TicketPage.jsx
/*real code
import React from "react";
import { useLocation, useNavigate } from "react-router-dom";
import "./TicketPage.css";

function TicketPage() {
  const location = useLocation();
  const navigate = useNavigate();
  const { bus, source, destination } = location.state || {};

  if (!bus || !source || !destination) {
    return <p>Invalid booking details. Please try again.</p>;
  }

  const handleConfirmBooking = () => {
    alert("Ticket booked successfully!");
    //navigate("/"); // Redirect to home page or confirmation page
  };

  return (
    <div className="ticket-page">
      <h1>Ticket Booking</h1>
      <div className="ticket-details">
        <p><strong>Bus Name:</strong> {bus.name}</p>
        <p><strong>Source:</strong> {source}</p>
        <p><strong>Destination:</strong> {destination}</p>
        <p><strong>Departure:</strong> {bus.departure}</p>
        <p><strong>Arrival:</strong> {bus.arrival}</p>
        <p><strong>Price:</strong> ₹{bus.price}</p>
      </div>
      <button className="confirm-button" onClick={handleConfirmBooking}>
        Confirm Booking
      </button>
    </div>
  );
}

export default TicketPage;
*/
// reall
import React, { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import "./TicketPage.css";

function TicketPage() {
  const location = useLocation();
  const navigate = useNavigate();
  const { bus, source, destination } = location.state || {};

  // Always call useState before any early returns
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    gender: "",
    seat: "",
  });

  // Early return logic
  if (!bus || !source || !destination) {
    return <p>Invalid booking details. Please try again.</p>;
  }

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleConfirmBooking = () => {
    if (!formData.name || !formData.email || !formData.gender || !formData.seat) {
      alert("Please fill in all fields!");
      return;
    }

    alert(
      `Ticket booked successfully!\n\nDetails:\nName: ${formData.name}\nEmail: ${formData.email}\nGender: ${formData.gender}\nSeat: ${formData.seat}`
    );
    //navigate("/"); // Redirect to home page or confirmation page
  };

  return (
    
    <div className="ticket-page">
      <h1>Ticket Booking</h1>
      <div className="ticket-details">
        <p><strong>Bus Name:</strong> {bus.name}</p>
        <p><strong>Source:</strong> {source}</p>
        <p><strong>Destination:</strong> {destination}</p>
        <p><strong>Departure:</strong> {bus.departure}</p>
        <p><strong>Arrival:</strong> {bus.arrival}</p>
        <p><strong>Price:</strong> ₹200</p>
      </div>
      <form className="ticket-form">
        <h2>Passenger Details</h2>
        <div className="form-group">
          <label htmlFor="name">Name:</label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="email">Email:</label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="gender">Gender:</label>
          <select
            id="gender"
            name="gender"
            value={formData.gender}
            onChange={handleChange}
            required
          >
            <option value="">Select Gender</option>
            <option value="Male">Male</option>
            <option value="Female">Female</option>
            <option value="Other">Other</option>
          </select>
        </div>
        <div className="form-group">
          <label htmlFor="seat">Seat Selection:</label>
          <select
            id="seat"
            name="seat"
            value={formData.seat}
            onChange={handleChange}
            required
          >
            <option value="">Select Seat</option>
            <option value="1A">1A</option>
            <option value="1B">1B</option>
            <option value="2A">2A</option>
            <option value="2B">2B</option>
            <option value="3A">3A</option>
            <option value="3B">3B</option>
            <option value="4A">4A</option>
            <option value="4B">4B</option>
            <option value="5A">5A</option>
            <option value="5B">5B</option>
            <option value="6A">6A</option>
            <option value="6B">6B</option>
            <option value="7A">7A</option>
            <option value="7B">7B</option>
            <option value="8A">8A</option>
            <option value="8B">8B</option>
            <option value="9A">9A</option>
            <option value="9B">9B</option>
            <option value="10B">10A</option>
            <option value="10B">10B</option>

          </select>
        </div>
      </form>
      <button className="confirm-button" onClick={handleConfirmBooking}>
        Confirm Booking
      </button>
    </div>
  );
}

export default TicketPage;

/*
import React, { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import axios from 'axios'; // Import Axios
import "./TicketPage.css";

function TicketPage() {
  const location = useLocation();
  const navigate = useNavigate();
  const { bus, source, destination } = location.state || {};

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    gender: "",
    seat: "",
  });

  // Early return for invalid data
  if (!bus || !source || !destination) {
    return <p>Invalid booking details. Please try again.</p>;
  }

  // Handle input change
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  // Handle form submission
  const handleConfirmBooking = async () => {
    if (!formData.name || !formData.email || !formData.gender || !formData.seat) {
      alert("Please fill in all fields!");
      return;
    }

    try {
      // Sending data to the backend
      const response = await axios.post("http://localhost:5000/api/book-ticket", {
        ...formData,
        busName: bus.name,
        source,
        destination,
        departure: bus.departure,
        arrival: bus.arrival,
        price: bus.price,
      });

      alert(response.data.message); // Show success message
      // Optionally, redirect to the homepage or a confirmation page
      navigate("/confirmation");
    } catch (error) {
      alert("Error booking ticket. Please try again later.");
    }
  };

  return (
    <div className="ticket-page">
      <h1>Ticket Booking</h1>
      <div className="ticket-details">
        <p><strong>Bus Name:</strong> {bus.name}</p>
        <p><strong>Source:</strong> {source}</p>
        <p><strong>Destination:</strong> {destination}</p>
        <p><strong>Departure:</strong> {bus.departure}</p>
        <p><strong>Arrival:</strong> {bus.arrival}</p>
        <p><strong>Price:</strong> ₹{bus.price}</p>
      </div>
      <form className="ticket-form">
        <h2>Passenger Details</h2>
        <div className="form-group">
          <label htmlFor="name">Name:</label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="email">Email:</label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="gender">Gender:</label>
          <select
            id="gender"
            name="gender"
            value={formData.gender}
            onChange={handleChange}
            required
          >
            <option value="">Select Gender</option>
            <option value="Male">Male</option>
            <option value="Female">Female</option>
            <option value="Other">Other</option>
          </select>
        </div>
        <div className="form-group">
          <label htmlFor="seat">Seat Selection:</label>
          <select
            id="seat"
            name="seat"
            value={formData.seat}
            onChange={handleChange}
            required
          >
            <option value="">Select Seat</option>
            <option value="1A">1A</option>
            <option value="1B">1B</option>
            <option value="2A">2A</option>
            <option value="2B">2B</option>
            <option value="3A">3A</option>
            <option value="3B">3B</option>
          </select>
        </div>
      </form>
      <button className="confirm-button" onClick={handleConfirmBooking}>
        Confirm Booking
      </button>
    </div>
  );
}

export default TicketPage;

*/



