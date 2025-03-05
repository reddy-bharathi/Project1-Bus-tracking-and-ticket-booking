/*import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import './SearchPage.css';

function SearchPage() {
    const [source, setSource] = useState('');
    const [destination, setDestination] = useState('');
    const [date, setDate] = useState('');
    const [buses, setBuses] = useState([]);
    const navigate = useNavigate();

    const handleSearch = async () => {
        try {
            const response = await axios.post('http://localhost:5000/search-buses', {
                source,
                destination,
                date
            });
            setBuses(response.data);

            // Navigate to ResultsPage with buses, source, and destination data
            navigate('/ResultsPage', { state: { buses: response.data, source, destination } });
            navigate('/ResultsPage'); 
        } catch (error) {
            console.error('Error fetching bus schedules:', error);
        }
    };

    return (
        <div className="search-page">
            <h2>Check your buses</h2>
            <input
                type="text"
                placeholder="Source Stop..."
                value={source}
                onChange={(e) => setSource(e.target.value)}
            />
            <input
                type="text"
                placeholder="Destination Stop..."
                value={destination}
                onChange={(e) => setDestination(e.target.value)}
            />
            <button onClick={handleSearch}>ON</button>
            <input
                type="date"
                value={date}
                onChange={(e) => setDate(e.target.value)}
            />
        </div>
    );
}

export default SearchPage;
*/

/*import React from 'react';
import { useNavigate } from 'react-router-dom';


function SearchPage() {
    const navigate = useNavigate();

    const handleEnter = () => {
        navigate('/ResultsPage');
    };
    const pageStyle = {
        backgroundImage: `url('/images/1.jpg')`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        height: '100vh',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        color: 'black',
        textShadow: '2px 2px 4px rgba(0, 0, 0, 0.7)'
    };
    const buttonStyle = {
        padding: '10px 20px',
        fontSize: '16px',
        backgroundColor: '#007BFF',
        color: 'blue',
        border: 'none',
        borderRadius: '5px',
        cursor: 'pointer',
        boxShadow: '2px 2px 5px rgba(0, 0, 0, 0.3)'
    };

    return (
        
        <div style={pageStyle}>
        <h1>Welcome to My App</h1>
        <button onClick={handleEnter} style={buttonStyle}>
            Enter
        </button>
    </div>



    );
}

export default SearchPage;
*/

/*import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './SearchPage.css';

function SearchPage() {
    const [source, setSource] = useState('');
    const [destination, setDestination] = useState('');
    const navigate = useNavigate();
    const handleTrack = () => {
        if (!source || !destination) {
            alert('Please enter both source and destination!');
            return;
        }

        // Construct the Google Maps URL for the route
        const mapsUrl = `https://www.google.com/maps/dir/?api=1&origin=${encodeURIComponent(
            source
        )}&destination=${encodeURIComponent(destination)}&travelmode=transit`;

        // Open the Google Maps route in a new tab
        window.open(mapsUrl, '_blank');
    };
    const handleTicket = () => {
        navigate('/Busticket');
    };

    return (
        <div className="search-page">
            <h1>Bus Route Tracker</h1>
            <div className="form-group">
                <input
                    type="text"
                    placeholder="Enter Source"
                    value={source}
                    onChange={(e) => setSource(e.target.value)}
                    className="form-input"
                />
            </div>
            <div className="form-group">
                <input
                    type="text"
                    placeholder="Enter Destination"
                    value={destination}
                    onChange={(e) => setDestination(e.target.value)}
                    className="form-input"
                />
            </div>
            <button className="track-button" onClick={handleTrack}>
                Track
            </button>
            <button className="track-button" onClick={handleTicket}>
                Book Ticket
            </button>
        </div>
    );
}

export default SearchPage;
*/


import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './SearchPage.css';

function SearchPage() {
    const [source, setSource] = useState('');
    const [destination, setDestination] = useState('');
    const navigate = useNavigate();

    const handleGo = () => {
        if (!source || !destination) {
            alert('Please enter both source and destination!');
            return;
        }

        // Simulated data of available buses
        const buses = [
            { id: 1, name: 'Bus A', departure: '9:00 AM', arrival: '11:00 AM' },
            { id: 2, name: 'Bus B', departure: '10:00 AM', arrival: '12:30 PM' },
            { id: 3, name: 'Bus C', departure: '11:00 AM', arrival: '1:00 PM' },
        ];

        // Redirect to ResultsPage with buses, source, and destination
        navigate('/ResultsPage', { state: { buses, source, destination } });
    };

    return (
        <div className="search-page" style={{ backgroundImage: `url('/images/1.jpg')` }}>
            <div className="content-box">
                <h1>Bus Route Tracker</h1>
                <div className="form-group">
                    <input
                        type="text"
                        placeholder="Enter Source"
                        value={source}
                        onChange={(e) => setSource(e.target.value)}
                        className="form-input"
                    />
                </div>
                <div className="form-group">
                    <input
                        type="text"
                        placeholder="Enter Destination"
                        value={destination}
                        onChange={(e) => setDestination(e.target.value)}
                        className="form-input"
                    />
                </div>
                <button className="track-button" onClick={handleGo}>
                    Go
                </button>
                
            </div>
        </div>
    );
}

export default SearchPage;


