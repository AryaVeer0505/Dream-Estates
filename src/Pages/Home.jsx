import React from 'react';
import { NavLink } from 'react-router-dom';
import '../assets/css/Home.css';
import homeImg from '../assets/home.png'
import Apartment1 from '../assets/Apartment1.jpg'
import Villa1 from '../assets/villa1.jpg'
import Familyhouse1 from '../assets/familyhouse1.jpg'

const Home = () => {
  return (
    <div className="home-container">
      
      <div className="hero">
        <div className="hero-left">
        <h1>Find Your Dream Home</h1>
        <p>Explore our exclusive listings and discover the perfect property for you and your family.</p>
        <NavLink to="/listing" className="cta-btn">
          View Listings
        </NavLink>
        </div>
        <div className="hero-right">
          <img src={homeImg} alt="home page image" />
        </div>
      </div>

     
      <div className="featured-listings">
        <h2>Featured Properties</h2>
        <div className="property-grid">
          <div className="property-card">
          <img src={Villa1} alt="Luxury Villa" />
            <h3>Luxury Villa</h3>
            <p>Located in Los Angeles, CA</p>
            <p className="price">$2,500,000</p>
            <NavLink to="/listing" className="view-details">View Details</NavLink>
          </div>
          <div className="property-card">
            <img src={Apartment1} alt="Modern Apartment" />
            <h3>Modern Apartment</h3>
            <p>Located in New York, NY</p>
            <p className="price">$850,000</p>
            <NavLink to="/listing" className="view-details">View Details</NavLink>
          </div>
          <div className="property-card">
            <img src={Familyhouse1} alt="Cozy Family Home" />
            <h3>Cozy Family Home</h3>
            <p>Located in Miami, FL</p>
            <p className="price">$650,000</p>
            <NavLink to="/listing" className="view-details">View Details</NavLink>
          </div>
        </div>
      </div>

     
      <div className="contact-section">
        <h2>Get in Touch</h2>
        <p>Have questions? Contact us to find the perfect home for you.</p>
        <NavLink to="/contact" className="cta-btn">Contact Us</NavLink>
      </div>
    </div>
  );
};

export default Home;
