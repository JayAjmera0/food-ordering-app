import React from 'react';
import Navbar from './Navbar.js';

const Home = () => {
  return (
    <div className="home">
      <Navbar />
      <section className="hero">
        {/* Hero Header Section */}
        <div className="hero-header">
          <h1>Find the Best Restaurants Near You</h1>
          {/* Filter options for veg/non-veg, cuisine, ratings, and price */}
          <div className="filters">
            {/* Include filter options here */}
            {/* For example: */}
            {/* Veg/Non-Veg filter */}
            <label>
              <input type="checkbox" /> Veg Only
            </label>
            {/* Cuisine filter */}
            <select>
              <option value="">Select Cuisine</option>
              {/* Add cuisine options */}
            </select>
            {/* Ratings filter */}
            <select>
              <option value="">Select Ratings</option>
              {/* Add ratings options */}
            </select>
            {/* Price filter */}
            <select>
              <option value="">Select Price Range</option>
              {/* Add price range options */}
            </select>
          </div>
        </div>
      </section>

      {/* Feature Section */}
      <section className="features">
        <h2>Featured Restaurants</h2>
        <div className="featured-restaurants">
          {/* Highlight popular restaurants and featured cuisines */}
          {/* Example restaurant cards */}
          <div className="restaurant-card">
            <img src="restaurant-image-url" alt="Restaurant" />
            <h3>Restaurant Name</h3>
            <p>Cuisine Type</p>
            <p>Rating</p>
            {/* Add more restaurant details */}
          </div>
          {/* Add more restaurant cards */}
        </div>
      </section>
    </div>
  );
};

export default Home;
