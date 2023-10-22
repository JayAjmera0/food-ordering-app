import React, { useState, useEffect } from 'react';
import Navbar from './Navbar.js';

const Home = () => {
  const [restaurants, setRestaurants] = useState([]);

  // Example data (replace this with your actual restaurant data)
  const restaurantData = [
    { id: 1, name: 'Restaurant 1', cuisine: 'Italian', rating: 4.5, imageUrl: 'restaurant-image-url-1' },
    { id: 2, name: 'Restaurant 2', cuisine: 'Mexican', rating: 4.2, imageUrl: 'restaurant-image-url-2' },
    // Add more restaurant entries as needed
  ];

  useEffect(() => {
    // Set restaurants when component mounts
    setRestaurants(restaurantData);
  }, []);

  return (
    <div className="home">
      <Navbar />
      <section className="hero">
        {/* Hero Header Section */}
        <div className="hero-header">
          <h1>Find the Best Restaurants Near You</h1>
          {/* Filter options for veg/non-veg, cuisine, ratings, and price */}
          {/* ... (your filter options here) */}
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
          {/* Dynamically generate restaurant cards */}
          {restaurants.map(restaurant => (
            <div className="restaurant-card" key={restaurant.id}>
              <img src={restaurant.imageUrl} alt="Restaurant" />
              <h3>{restaurant.name}</h3>
              <p>Cuisine: {restaurant.cuisine}</p>
              <p>Rating: {restaurant.rating}</p>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default Home;