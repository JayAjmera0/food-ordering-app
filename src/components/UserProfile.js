import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom'; // Import Link from react-router-dom
import Navbar from './Navbar.js';

const UserProfile = () => {
  const [user, setUser] = useState(null);

  // Example user data (replace this with your actual user data)
  const userData = {
    username: 'JohnDoe',
    email: 'johndoe@example.com',
    address: '123 Main St, Cityville, USA',
    phone: '123-456-7890',
  };

  useEffect(() => {
    // Set user data when component mounts
    setUser(userData);
  }, []);

  if (!user) {
    return <div>Loading...</div>;
  }

  return (
    <div className="user-profile">
      <Navbar />
      <section className="user-details">
        <h1>Welcome, {user.username}!</h1>
        <h2>User Information</h2>
        <p><strong>Username:</strong> {user.username}</p>
        <p><strong>Email:</strong> {user.email}</p>
        <p><strong>Address:</strong> {user.address}</p>
        <p><strong>Phone:</strong> {user.phone}</p>
        
        {/* Button to navigate to Past Orders page */}
        <Link to="/past-orders">
          <button>View Past Orders</button>
        </Link>
      </section>
      {/* Add more sections and user-related information as needed */}
    </div>
  );
};

export default UserProfile;
