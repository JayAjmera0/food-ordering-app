import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom'; // Import Link from react-router-dom
import Navbar from './Navbar.js';
import myVideo from './/FOOD.mp4';


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
        <video autoPlay loop muted>
        <source src={myVideo} type="video/mp4" />
      </video>
      </section>

      {/* Feature Section */}
      <section className="features">
        
        <div className="featured-restaurants">
          {/* Dynamically generate restaurant cards with Link */}
          {restaurants.map(restaurant => (
            <Link to={`/restaurant-menu/${restaurant.id}`} key={restaurant.id}>
              <div className="restaurant-card">
                <img src={restaurant.imageUrl} alt="Restaurant" />
                <h3>{restaurant.name}</h3>
                <p>Cuisine: {restaurant.cuisine}</p>
                <p>Rating: {restaurant.rating}</p>
              </div>
            </Link>
          ))}
        </div>
      </section>
    </div>
  );
};

export default Home;
