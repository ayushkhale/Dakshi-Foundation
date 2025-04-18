import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './index.css';
import Home from './pages/Home';
import About from './pages/About';
import Header from './components/Header';
import Footer from './components/Footer';
import Donation from './pages/Donate'
import Involved from './pages/Involved';
import Volunteer from './pages/Involved';
import Programs from './pages/Programs';
import Errcomponent from './components/Errcomponent';
import Privacy from './pages/Privacy'
import ContactUs from './components/Getinvolved/Contact/ContactUs';
import Careers from './pages/Careers';
import Events from './pages/Events';
import EventDetails from './components/Events/EventDetails.jsx';

const App = () => (
  <Router>
    <Header />
    <Routes>
      <Route path="*" element={<Errcomponent />} />
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<About />} />
      <Route path="/donate" element={<Donation/>} />
      <Route path="/partner" element={<Involved/>} />
      <Route path="/volunteer" element={<Volunteer/>} />
      <Route path="/program" element={<Programs/>} />
      <Route path="/contactus" element={<ContactUs/>} />
      <Route path="/careers" element={<Careers/>} />
      <Route path="/privacy-policy" element={<Privacy/>} />
      <Route path="/events" element={<Events/>} />
      <Route path="/event-details" element={<EventDetails />} />
    </Routes>
    <Footer />
  </Router>
);

export default App;

