import React, { useState } from 'react';
import axios from 'axios';
import './TourismDevelopmentPage.css'; // Ensure you have the CSS imported

const TourismDevelopmentPage = () => {
  const [city, setCity] = useState('');
  const [touristPlaces, setTouristPlaces] = useState([]);
  const [selectedPlace, setSelectedPlace] = useState('');
  const [comment, setComment] = useState('');
  const [donation, setDonation] = useState('');
  const [feedback, setFeedback] = useState('');

  // API Call to fetch tourist places
  const handleCitySearch = async (event) => {
    const query = event.target.value;
    setCity(query);

    if (query.length > 2) {
      try {
        const options = {
          method: 'GET',
          url: 'https://opencage-geocoder.p.rapidapi.com/geocode/v1/json',
          params: {
            language: 'en',
            q: query,
            key: '0bbc6b7819ca4c41aabbbc23f063b574', // Replace with your OpenCage API key
          },
          headers: {
            'x-rapidapi-key': 'd20ce137efmsh4050f1b3d72a29fp1aca46jsn0b24846030b4',
            'x-rapidapi-host': 'opencage-geocoder.p.rapidapi.com',
          },
        };

        const response = await axios.request(options);
        const places = response.data.results.map((result) => ({
          name: result.formatted, // Name of the place
          latitude: result.geometry.lat,
          longitude: result.geometry.lng,
        }));
        setTouristPlaces(places);
      } catch (error) {
        console.error('Error fetching tourist places:', error);
      }
    }
  };

  const handleSubmit = () => {
    if (selectedPlace && comment && donation) {
      setFeedback('Thank you for your donation and comment!');
      setCity('');
      setTouristPlaces([]);
      setSelectedPlace('');
      setComment('');
      setDonation('');
    } else {
      setFeedback('Please fill all fields before submitting.');
    }
  };

  return (
    <div className="tourism-container">
      <h1 className="tourism-title">Tourism Development</h1>

      <div className="mb-4">
        <label htmlFor="city" className="tourism-label">
          Search City
        </label>
        <input
          type="text"
          id="city"
          placeholder="Search for a city..."
          value={city}
          onChange={handleCitySearch}
          className="tourism-input"
        />
      </div>

      {touristPlaces.length > 0 && (
        <div className="mb-4">
          <label htmlFor="touristPlace" className="tourism-label">
            Select Tourist Place
          </label>
          <select
            id="touristPlace"
            onChange={(e) => setSelectedPlace(e.target.value)}
            value={selectedPlace}
            className="tourism-select"
          >
            <option value="">Select a place</option>
            {touristPlaces.map((place, index) => (
              <option key={index} value={place.name}>
                {place.name}
              </option>
            ))}
          </select>
        </div>
      )}

      <div className="mb-4">
        <label htmlFor="comment" className="tourism-label">
          Leave a Comment
        </label>
        <textarea
          id="comment"
          value={comment}
          onChange={(e) => setComment(e.target.value)}
          placeholder="Share your thoughts..."
          className="tourism-textarea"
        />
      </div>

      <div className="mb-4">
        <label htmlFor="donation" className="tourism-label">
          Donation Amount (in INR)
        </label>
        <input
          type="number"
          id="donation"
          value={donation}
          onChange={(e) => setDonation(e.target.value)}
          className="tourism-input"
        />
      </div>

      <button onClick={handleSubmit} className="tourism-button">
        Submit Donation & Comment
      </button>

      {feedback && <div className="tourism-feedback">{feedback}</div>}
    </div>
  );
};

export default TourismDevelopmentPage;
