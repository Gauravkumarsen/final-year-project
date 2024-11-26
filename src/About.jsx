import React from 'react';
import './about.css';
import teamImage from './assets/hampi.jpeg';

const About = () => {
  return (
    <div className="about-container">
      <h1 className="about-heading">About Us</h1>
      <img src={teamImage} alt="Our Team" className="about-image" />

      <section className="about-section">
        <h2 className="about-subheading">Our Mission</h2>
        <p className="about-paragraph">
          Our mission is to innovate and lead the industry with our exceptional solutions. We value integrity, excellence, and collaboration. Join us on our journey to make a positive impact on the world.
        </p>
      </section>

      <section className="about-section">
        <h2 className="about-subheading">Our Team</h2>
        <p className="about-paragraph">
          We have a diverse team of experts with a wide range of skills and experience. Our goal is to foster a culture of continuous improvement and innovation. We believe in building strong relationships with our clients and partners.
        </p>
      </section>

      <section className="about-section">
        <h2 className="about-subheading">Our Values</h2>
        <div className="about-values">
          <div className="about-value">
            <h3 className="value-title">Integrity</h3>
            <p className="value-description">
              We uphold the highest standards of integrity in all our actions.
            </p>
          </div>
          <div className="about-value">
            <h3 className="value-title">Excellence</h3>
            <p className="value-description">
              We strive for excellence in everything we do and continuously seek to improve.
            </p>
          </div>
          <div className="about-value">
            <h3 className="value-title">Collaboration</h3>
            <p className="value-description">
              We work together, across boundaries, to meet the needs of our customers and to help our company win.
            </p>
          </div>
        </div>
      </section>

      <section className="about-section">
        <h2 className="about-subheading">Our Achievements</h2>
        <div className="about-achievements">
          <div className="achievement-card">
            <h3 className="achievement-title">Award 1</h3>
            <p className="achievement-description">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.</p>
          </div>
          <div className="achievement-card">
            <h3 className="achievement-title">Award 2</h3>
            <p className="achievement-description">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.</p>
          </div>
          <div className="achievement-card">
            <h3 className="achievement-title">Award 3</h3>
            <p className="achievement-description">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.</p>
          </div>
          <div className="achievement-card">
            <h3 className="achievement-title">Award 4</h3>
            <p className="achievement-description">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.</p>
          </div>
        </div>
      </section>

      <section className="about-section">
        <h2 className="about-subheading">Our Team Albums</h2>
        <div className="team-albums">
          <div className="album-item">
            <img src={teamImage} alt="Album 1" className="album-image" />
            <p className="album-caption">Album 1 Caption</p>
          </div>
          <div className="album-item">
            <img src={teamImage} alt="Album 2" className="album-image" />
            <p className="album-caption">Album 2 Caption</p>
          </div>
          <div className="album-item">
            <img src={teamImage} alt="Album 3" className="album-image" />
            <p className="album-caption">Album 3 Caption</p>
          </div>
          <div className="album-item">
            <img src={teamImage} alt="Album 4" className="album-image" />
            <p className="album-caption">Album 4 Caption</p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
