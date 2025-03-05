import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Navbar, Nav, Container, Card, Button, Alert } from 'react-bootstrap';
import './Home.css';

function Home() {
  const navigate = useNavigate();
  const [logoutMessage, setLogoutMessage] = useState('');

  const handleLogout = () => {
    setLogoutMessage('You logged out successfully. Thank you!');
    setTimeout(() => {
      setLogoutMessage(''); // Clear the message after 3 seconds
      navigate('/'); // Redirect to the home page
    }, 3000);
  };

  return (
    <div>
      {/* Navbar Section */}
      <Navbar bg="primary" variant="dark" expand="lg">
        <Container>
          <Navbar.Brand onClick={() => navigate('/')}>City Bus</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ms-auto">
              <Nav.Link onClick={() => navigate('/')}>Home</Nav.Link>
              <Nav.Link onClick={() => navigate('/search')}>Search</Nav.Link>
              {/* Link to Details Section */}
              <Nav.Link href="#details">Details</Nav.Link>
              {/* Link to Contact Section */}
              <Nav.Link href="#contact">Contact</Nav.Link>
              {/* Link to Feedback Section */}
              <Nav.Link href="#feedback">Feedback</Nav.Link>
              <Nav.Link onClick={() => navigate('/ticket-booking')}>
                Ticket Booking
              </Nav.Link>
              {/* Logout Button */}
              <Button
                variant="outline-light"
                className="ms-3"
                onClick={handleLogout}
              >
                Logout
              </Button>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>

      {/* Logout Message */}
      {logoutMessage && (
        <div style={{ textAlign: 'center', marginTop: '20px' }}>
          <Alert variant="success">{logoutMessage}</Alert>
        </div>
      )}

      {/* Full Page Image */}
      <div className="image-container">
        <img
          src="/images/page.jpg"
          alt="City Bus"
          className="page-image"
        />
        <div className="overlay-text">
          Welcome to Bus Services
          <br />
          Let's go
        </div>
      </div>

      {/* Details Section */}
      <div id="details" className="section">
        <h2>Details</h2>
        <div className="card-container">
          {/* Card 1 */}
          <Card className="card">
            <Card.Body>
              <Card.Title>Bus Schedule</Card.Title>
              <Card.Text>
                Check out our updated bus schedules to plan your journey easily.
              </Card.Text>
              <Button variant="primary" onClick={() => navigate('/search')}>
                Go to Search
              </Button>
            </Card.Body>
          </Card>

          {/* Card 2 */}
          <Card className="card">
            <Card.Body>
              <Card.Title>Routes</Card.Title>
              <Card.Text>
                Explore all the routes from source and destination.
              </Card.Text>
              <Button variant="primary" onClick={() => navigate('/search')}>
                Explore Routes
              </Button>
            </Card.Body>
          </Card>

          {/* Card 3 */}
          <Card className="card">
            <Card.Body>
              <Card.Title>Book Ticket</Card.Title>
              <Card.Text>
                Book your tickets from source place to destination place.
              </Card.Text>
              <Button variant="primary" onClick={() => navigate('/TicketPage')}>
                Book Ticket
              </Button>
            </Card.Body>
          </Card>

          {/* Card 4 */}
          <Card className="card">
            <Card.Body>
              <Card.Title>Offers</Card.Title>
              <Card.Text>
                Avail exciting discounts and offers on your bus journeys.
              </Card.Text>
              <Button variant="primary" onClick={() => navigate('/offers')}>
                View Offers
              </Button>
            </Card.Body>
          </Card>
        </div>
      </div>

      {/* Steps to Book Ticket and Track the Bus */}
<div id="steps-section" className="steps-container">
  <h2 className="steps-title">How to Book a Ticket and Track the Bus</h2>
  <div className="timeline">
    <div className="timeline-item">
      <div className="timeline-dot"></div>
      <div className="timeline-content">
        <h4>Step 1: Search Buses</h4>
        <p>Enter your source and destination locations in the search bar to find available buses.</p>
      </div>
    </div>
    <div className="timeline-item">
      <div className="timeline-dot"></div>
      <div className="timeline-content">
        <h4>Step 2: Choose Your Bus</h4>
        <p>Pick the bus that suits your schedule and budget. View detailed route and time information.</p>
      </div>
    </div>
    <div className="timeline-item">
      <div className="timeline-dot"></div>
      <div className="timeline-content">
        <h4>Step 3: Book Your Ticket</h4>
        <p>Fill in your details and confirm your booking securely through our platform.</p>
      </div>
    </div>
    <div className="timeline-item">
      <div className="timeline-dot"></div>
      <div className="timeline-content">
        <h4>Step 4: Track the Bus</h4>
        <p>After booking, use the tracking feature to view the real-time location of your bus.</p>
      </div>
    </div>
  
  <div className="timeline-item">
      <div className="timeline-dot"></div>
      <div className="timeline-content">
        <h4>Step 5: Enjoy the journey</h4>
        <p>After booking, use the tracking feature to view the real-time location of your bus.</p>
      </div>
    </div>
  </div>
</div>



      {/* Contact Section */}
      <div
        id="contact"
        className="section"
        style={{
          backgroundColor: 'lightgreen',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          padding: '180px 80px',
          color: 'green',
          textAlign: 'center',
        }}
      >
        <h2>Contact Us</h2>
        <p>
          Have questions or need assistance? Feel free to contact us! <br />
          <strong>Email:</strong> support@bus.com <br />
          <strong>Phone:</strong> +1 9581922705
        </p>
        <div style={{ marginTop: '20px' }}>
          <h3>Our Location</h3>
          <p>123 Bus Street, RK Valley, Kadapa</p>
        </div>
      </div>

      {/* Feedback Section */}
      <div id="feedback" className="section">
        <h2 style={{ textAlign: 'center', marginBottom: '20px' }}>Feedback</h2>
        <p
          style={{
            fontSize: '1.2em',
            textAlign: 'justify',
            lineHeight: '1.8',
            maxWidth: '800px',
            margin: '0 auto',
          }}
        >
          At Bus, we value your feedback and suggestions. Your thoughts help us improve our services and ensure a smooth travel experience for everyone. If you have any comments, suggestions, or ideas on how we can do better, feel free to share them with us.
        </p>
        <p
          style={{
            fontSize: '1.2em',
            textAlign: 'justify',
            lineHeight: '1.8',
            maxWidth: '800px',
            margin: '20px auto 0 auto',
          }}
        >
          You can reach out to us directly via email at{' '}
          <strong>feedback@bus.com</strong>, or call us at{' '}
          <strong>+1 9581922705</strong>. Your voice matters, and we’re always here to listen.
        </p>
        <p
          style={{
            fontSize: '1.2em',
            textAlign: 'center',
            marginTop: '30px',
          }}
        >
          Thank you for choosing City Bus. Safe travels!
        </p>
      </div>
    </div>
  );
}

export default Home;
