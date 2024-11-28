import React, { useState } from 'react';
import './contact.css';
import backgroundImage from './assets/hampi.jpeg';
import { FaFacebookSquare } from 'react-icons/fa';
import { FaInstagramSquare } from 'react-icons/fa';
import { TbApps } from 'react-icons/tb';
import axios from 'axios';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const [responseMessage, setResponseMessage] = useState('');

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      // Send form data to backend using POST request
      const response = await axios.post('http://localhost:5000/api/contact', formData);
      
      // Handle success response
      setResponseMessage(response.data.message);
      setFormData({
        name: '',
        email: '',
        message: '',
      }); // Reset the form
    } catch (error) {
      console.error('Error submitting contact form:', error);
      setResponseMessage('Failed to send message. Please try again.');
    }
  };

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
              <p>
                <b>Travel..`IN`..Dia</b>, India
              </p>
              <p>India, India</p>
              <p>Email: Travelindia@email.com</p>
              <p>Phone: +1234567890</p>
            </div>
            <div>
              <h2>Social Media</h2>
              <p>Follow us on:</p>
              <div className="social-icons">
                <FaFacebookSquare />
                <FaInstagramSquare />
                <TbApps />
              </div>
            </div>
          </div>
        </div>

        <div className="contact-form">
          <h2>Send Us a Message</h2>
          <form onSubmit={handleSubmit}>
            <div className="form-group">
              <label htmlFor="name">Your Name</label>
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
              <label htmlFor="email">Your Email</label>
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
              <label htmlFor="message">Message</label>
              <textarea
                id="message"
                name="message"
                rows="5"
                value={formData.message}
                onChange={handleChange}
                required
              ></textarea>
            </div>
            <button type="submit" className="submit-button">
              Send Message
            </button>
          </form>
          {responseMessage && <p className="response-message">{responseMessage}</p>}
        </div>
      </div>
    </section>
  );
};

export default Contact;
