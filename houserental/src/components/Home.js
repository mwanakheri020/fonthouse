import React from 'react';
import { Link } from 'react-router-dom';
import './Home.css';

const Home = () => {
  return (
    <div className="home-container">
      {/* Big System Name */}
      <div className="system-banner">
        House Rental System
      </div>

      <header className="app-header">
        <h1>Welcome!</h1>
        <p>Find the perfect place to call home!</p>
      </header>

      <div className="app-attributes">
        <h2>Our Features</h2>
        <ul>
          <li>🌟 Wide range of houses and apartments</li>
          <li>📅 Easy and seamless booking process</li>
          <li>💬 Honest customer reviews</li>
          <li>💰 Affordable prices for every budget</li>
          <li>🌍 Accessible locations across the region</li>
        </ul>
      </div>

      <div className="card-container">
        <Link to="/review" className="card">
          <h3>Customer Reviews</h3>
          <p>Read feedback from previous tenants</p>
        </Link>

        <Link to="/booking" className="card">
          <h3>Book Your Stay</h3>
          <p>Reserve your dream house today!</p>
        </Link>

        <Link to="/house" className="card">
          <h3>Available Houses</h3>
          <p>Browse through available listings</p>
        </Link>
      </div>
    </div>
  );
};

export default Home;
