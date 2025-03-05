/*import React from "react";
//import { useLocation } from 'react-router-dom';
import './ResultsPage.css';
//import ReactDOM from 'react-dom';
function ResultsPage() {
    return (
        <div>
            <h1>Hello, World!</h1>
        </div>
    );
}
export default ResultsPage;
*/

/*import React from 'react';
import { useLocation } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';

import './ResultsPage.css';

function ResultsPage() {
    const location = useLocation();
    const navigate = useNavigate();
    const { buses, source, destination } = location.state || {};

    const handleTrack = (busName) => {
        
        if (!source || !destination) {
            alert('Source and destination are required!');
            return;
        }

       

        // Google Maps route for the selected bus
        const mapsUrl = `https://www.google.com/maps/dir/?api=1&origin=${encodeURIComponent(
            source
        )}&destination=${encodeURIComponent(destination)}&travelmode=transit`;

        // Open the Google Maps route in a new tab
        window.open(mapsUrl, '_blank');
    };
    

   
    const handleTrack = () => {
        navigate('/MapPage', { state: { source, destination } });
    };

  

    return (
        <div className="results-page">
            <h1>Available Buses</h1>
            {buses && buses.length > 0 ? (
                <div>
                    {buses.map((bus) => (
                        <div key={bus.id} className="bus-card">
                            <p><strong>{bus.name}</strong></p>
                            <p>Departure: {bus.departure}</p>
                            <p>Arrival: {bus.arrival}</p>
                            <button
                                className="track-button"
                                onClick={() => handleTrack(bus.name)}
                            >
                                Track
                            </button>
                            <button className="track-button">
                                Book Ticket
                            </button>
                        </div>
                    ))}
                </div>
            ) : (
                <p>No buses available for the selected route.</p>
            )}
        </div>
    );
}

export default ResultsPage;
*/

/*import React from 'react';
import { useLocation, useNavigate } from 'react-router-dom'; // Import navigate
import './ResultsPage.css';

function ResultsPage() {
    const location = useLocation();
    const navigate = useNavigate(); // Initialize navigate
    const { buses, source, destination } = location.state || {};

    // Handle tracking of a bus
    const handleTrack = (busName) => {
        if (!source || !destination) {
            alert('Source and destination are required!');
            return;
        }

        // Navigate to the MapPage with the source, destination, and bus name
        navigate('/MapPage', { state: { source, destination, busName } });
    };

    return (
        <div className="results-page">
            <h1>Available Buses</h1>
            {buses && buses.length > 0 ? (
                <div>
                    {buses.map((bus) => (
                        <div key={bus.id} className="bus-card">
                            <p><strong>{bus.name}</strong></p>
                            <p>Departure: {bus.departure}</p>
                            <p>Arrival: {bus.arrival}</p>
                            <button
                                className="track-button"
                                onClick={() => handleTrack(bus.name)}
                            >
                                Track
                            </button>
                            <button className="track-button">
                                Book Ticket
                            </button>
                        </div>
                    ))}
                </div>
            ) : (
                <p>No buses available for the selected route.</p>
            )}
        </div>
    );
}

export default ResultsPage;
*/

/* real code
import React from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import './ResultsPage.css';

function ResultsPage() {
    const location = useLocation();
    const navigate = useNavigate();
    const { buses, source, destination } = location.state || {};

    const handleTrack = (busName) => {
        if (!source || !destination) {
            alert('Source and destination are required!');
            return;
        }


        // Navigate to MapPage and pass the necessary data
        //navigate('/MapPage', { state: { source, destination, busName } });
        
        // Google Maps route for the selected bus
        const mapsUrl = `https://www.google.com/maps/dir/?api=1&origin=${encodeURIComponent(
            source
        )}&destination=${encodeURIComponent(destination)}&travelmode=transit`;

        // Open the Google Maps route in a new tab
        window.open(mapsUrl, '_blank');


    };

    return (
        <div className="results-page">
            <h1>Available Buses</h1>
            {buses && buses.length > 0 ? (
                <div>
                    {buses.map((bus) => (
                        <div key={bus.id} className="bus-card">
                            <p><strong>{bus.name}</strong></p>
                            <p>Departure: {bus.departure}</p>
                            <p>Arrival: {bus.arrival}</p>
                            <button
                                className="track-button"
                                onClick={() => handleTrack(bus.name)}
                            >
                                Track
                            </button>
                            <button className="track-button">
                                Book Ticket
                            </button>
                        </div>
                    ))}
                </div>
            ) : (
                <p>No buses available for the selected route.</p>
            )}
        </div>
    );
}

export default ResultsPage;
*/


/* mapcode
import React from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import './ResultsPage.css';

function ResultsPage() {
    const location = useLocation();
    const navigate = useNavigate();
    const { buses, source, destination } = location.state || {};

    const handleTrack = (busName) => {
        if (!source || !destination) {
            alert('Source and destination are required!');
            return;
        }

        // Navigate to MapPage and pass the necessary data
        navigate('/MapPage', { state: { source, destination, busName } });
        
        
    };

    return (
        <div className="results-page">
            <h1>Available Buses</h1>
            {buses && buses.length > 0 ? (
                <div>
                    {buses.map((bus) => (
                        <div key={bus.id} className="bus-card">
                            <p><strong>{bus.name}</strong></p>
                            <p>Departure: {bus.departure}</p>
                            <p>Arrival: {bus.arrival}</p>
                            <button
                                className="track-button"
                                onClick={() => handleTrack(bus.name)}
                            >
                                Track
                            </button>
                            <button className="track-button">
                                Book Ticket
                            </button>
                        </div>
                    ))}
                </div>
            ) : (
                <p>No buses available for the selected route.</p>
            )}
        </div>
    );
}

export default ResultsPage;
*/
// realcode



import React from "react";
import { useLocation, useNavigate } from "react-router-dom";
import "./ResultsPage.css";

function ResultsPage() {
  const location = useLocation();
  const navigate = useNavigate();
  const { buses, source, destination } = location.state || {};

  const handleBookTicket = (bus) => {
    if (!source || !destination) {
      alert("Source and destination are required!");
      return;
    }

    // Navigate to TicketPage and pass the necessary data
    navigate("/TicketPage", {
      state: { bus, source, destination },
    });
  };

  const handleTrack = (busName) => {
    if (!source || !destination) {
      alert("Source and destination are required!");
      return;
    }

    const mapsUrl = `https://www.google.com/maps/dir/?api=1&origin=${encodeURIComponent(
      source
    )}&destination=${encodeURIComponent(destination)}&travelmode=transit`;

    window.open(mapsUrl, "_blank");
  };

  return (
    <div className="results-page" style={{ backgroundImage: `url('/images/4.jpg')` }}>
      <h1 className="page-title">Available Buses</h1>
      {buses && buses.length > 0 ? (
        <div className="buses-container">
          {buses.map((bus) => (
            <div key={bus.id} className="bus-card">
              <p><strong>{bus.name}</strong></p>
              <p>Departure: {bus.departure}</p>
              <p>Arrival: {bus.arrival}</p>
              <button
                className="track-button"
                onClick={() => handleTrack(bus.name)}
              >
                Track
              </button>
              <button
                className="track-button"
                onClick={() => handleBookTicket(bus)}
              >
                Book Ticket
              </button>
            </div>
          ))}
        </div>
      ) : (
        <p className="no-buses-text">No buses available for the selected route.</p>
      )}
    </div>
  );
}

export default ResultsPage;
