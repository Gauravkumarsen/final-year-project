import React, { useState } from 'react';
import './bookings.css';
import img2 from "./assets/kotaCRF1.jpeg";
import img3 from "./assets/kotaCRF2.jpeg";
import img4 from "./assets/lotaCRF3 - Copy.jpeg";
import img5 from "./assets/kotaCRF4.jpeg";
import img6 from "./assets/kotaCRF5.jpeg";
import img7 from "./assets/kotaCRF6.jpeg";

const Bookings = () => {
  const [activeTab, setActiveTab] = useState('flights');

  const handleTabClick = (tab) => {
    setActiveTab(tab);
  };

  return (
    <div className="bookings-container">
      <h1 className="bookings-heading">Book Your Adventure</h1>
      
      <div className="booking-form">
        <div className="form-group">
          <label htmlFor="destination">Destination</label>
          <input type="text" id="destination" name="dest" placeholder="Enter destination" />
        </div>

        <div className="form-group">
          <label htmlFor="checkin">Check-in</label>
          <input type="date" id="checkin" name="checkin" />
        </div>

        <div className="form-group">
          <label htmlFor="checkout">Check-out</label>
          <input type="date" id="checkout" name="checkout" />
        </div>

        <div className="form-group">
          <label htmlFor="guests">Guests</label>
          <input type="number" id="guests" name="noofpeople" placeholder="Number of guests" />
        </div>

        <button className="booking-button">Search</button>
      </div>
      
      <div className="transport-booking">
        <h2 className="featured-heading">Book Transport</h2>
        <div className="transport-tabs">
          <button className={`tab-button ${activeTab === 'flights' ? 'active' : ''}`} onClick={() => handleTabClick('flights')}>Flights</button>
          <button className={`tab-button ${activeTab === 'trains' ? 'active' : ''}`} onClick={() => handleTabClick('trains')}>Trains</button>
          <button className={`tab-button ${activeTab === 'buses' ? 'active' : ''}`} onClick={() => handleTabClick('buses')}>Buses</button>
        </div>
        
        <div className={`transport-content ${activeTab === 'flights' ? 'active' : ''}`} id="flights">
          <h3>Book a Flight</h3>
          <div className="form-group">
            <label htmlFor="flight-origin">Origin</label>
            <input type="text" id="flight-origin" name="flight-origin" placeholder="Enter origin" />
          </div>
          <div className="form-group">
            <label htmlFor="flight-destination">Destination</label>
            <input type="text" id="flight-destination" name="flight-destination" placeholder="Enter destination" />
          </div>
          <div className="form-group">
            <label htmlFor="flight-departure">Departure Date</label>
            <input type="date" id="flight-departure" name="flight-departure" />
          </div>
          <div className="form-group">
            <label htmlFor="flight-return">Return Date</label>
            <input type="date" id="flight-return" name="flight-return" />
          </div>
          <button className="booking-button">Search Flights</button>
        </div>

        <div className={`transport-content ${activeTab === 'trains' ? 'active' : ''}`} id="trains">
          <h3>Book a Train</h3>
          <div className="form-group">
            <label htmlFor="train-origin">Origin</label>
            <input type="text" id="train-origin" name="train-origin" placeholder="Enter origin" />
          </div>
          <div className="form-group">
            <label htmlFor="train-destination">Destination</label>
            <input type="text" id="train-destination" name="train-destination" placeholder="Enter destination" />
          </div>
          <div className="form-group">
            <label htmlFor="train-departure">Departure Date</label>
            <input type="date" id="train-departure" name="train-departure" />
          </div>
          <button className="booking-button">Search Trains</button>
        </div>

        <div className={`transport-content ${activeTab === 'buses' ? 'active' : ''}`} id="buses">
          <h3>Book a Bus</h3>
          <div className="form-group">
            <label htmlFor="bus-origin">Origin</label>
            <input type="text" id="bus-origin" name="bus-origin" placeholder="Enter origin" />
          </div>
          <div className="form-group">
            <label htmlFor="bus-destination">Destination</label>
            <input type="text" id="bus-destination" name="bus-destination" placeholder="Enter destination" />
          </div>
          <div className="form-group">
            <label htmlFor="bus-departure">Departure Date</label>
            <input type="date" id="bus-departure" name="bus-departure" />
          </div>
          <button className="booking-button">Search Buses</button>
        </div>
      </div>
      
      <div className="featured-destinations">
        <h2 className="featured-heading">THE CHAMBAL RIVER FRONT</h2>
        <div className="destinations-grid">
          <div className="destination-card">
            <img src={img2} alt="Destination 1" />
            <h3 className="destination-title">Iconic 'LOGO' of CRF</h3>
          </div>
          <div className="destination-card">
            <img src={img3} alt="Destination 2" />
            <h3 className="destination-title">मुकुट महल</h3>
          </div>
          <div className="destination-card">
            <img src={img4}alt="Destination 3" />
            <h3 className="destination-title">वैदिक घाट</h3>
          </div>
          <div className="destination-card">
            <img src={img5} alt="Destination 1" />
            <h3 className="destination-title">Golden Night View</h3>
          </div>
          <div className="destination-card">
            <img src={img6} alt="Destination 1" />
            <h3 className="destination-title">नेहरू घाट</h3>
          </div>
          <div className="destination-card">
            <img src={img7} alt="Destination 1" />
            <h3 className="destination-title">RainBow Garden</h3>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Bookings;
