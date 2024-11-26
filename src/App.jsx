import React from 'react';
import ReactDom from "react-dom/client"
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import "./App.css"
import Navbar from './Navbar';
import Home from './Home';
import About from './About';
import Contact from './Contact';
import Bookings from './Bookings';
import Middle from './Middle';
import Footer from './Footer';

function App() {
  return (
    <Router>
      <div>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/bookings" element={<Bookings/>} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
        <Footer/>
      </div>
    </Router>
  );
}

export default App;
