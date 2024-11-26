import React from 'react';
import './contact.css'; 
import backgroundImage from "./assets/hampi.jpeg"; 
import { FaFacebookSquare } from "react-icons/fa";
import { FaInstagramSquare } from "react-icons/fa";
import { TbApps } from "react-icons/tb";

const Contact = () => {
  return (
    <section className="contact">
      <div className="overlay"></div>
      <img src={backgroundImage} alt="Background" className="background-image" />
      <div className="contact-content container">
        <div className="contact-info">
          <h1>Contact Us</h1>
          <p>Feel free to reach out to us for any inquiries or assistance.</p>
          <div className="info-details">
            <div>
              <h2>Our Office</h2>
              <p><b>Travel..`IN`..Dia</b>, India</p>
              <p>India, India</p>
              <p>Email: Travelindia@email.com</p>
              <p>Phone: +1234567890</p>
            </div>
            <div>
              <h2>Social Media</h2>
              <p>Follow us on:</p>
              <div className="social-icons">
              <FaFacebookSquare/>
              <FaInstagramSquare/>
              <TbApps/>
              </div>
            </div>
          </div>
        </div>

        <div className="contact-form">
          <h2>Send Us a Message</h2>
          <form>
            <div className="form-group">
              <label htmlFor="name">Your Name</label>
              <input type="text" id="name" name="name" required />
            </div>
            <div className="form-group">
              <label htmlFor="email">Your Email</label>
              <input type="email" id="email" name="email" required />
            </div>
            <div className="form-group">
              <label htmlFor="message">Message</label>
              <textarea id="message" name="message" rows="5" required></textarea>
            </div>
            <button type="submit" className="submit-button">Send Message</button>
          </form>
        </div>
      </div>
    </section>
  );
}

export default Contact;
