import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';

import LandingPage from './components/LandingPage';
import Login from './components/Login';
import Register from './components/Register';
import Home from './components/Home';
import contact from './components/contact';
import SearchPage from './components/SearchPage';
import ResultsPage from './components/ResultsPage';
import Busticket from './components/Busticket';

import AnimatedBusMap from './components/AnimatedBusMap';
import TicketPage from './components/TicketPage';
import './App.css';
function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/home" element={<Home />} />
        <Route path="/Search" element={<SearchPage />} />
        <Route path="/ResultsPage" element={<ResultsPage />} />
        <Route path="/Busticket" element={<Busticket />} />
        <Route path="/AnimatedBusMap" element={<AnimatedBusMap />} />
        <Route path="/TicketPage" element={<TicketPage />} />
      </Routes>
    </Router>
  );
}

export default App;
