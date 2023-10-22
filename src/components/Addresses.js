import React, { useState, useEffect } from 'react';
import Navbar from './Navbar.js';

const Addresses = () => {
  const [userAddresses, setUserAddresses] = useState([]);

  // Example user addresses data (replace this with your actual user addresses data)
  const userAddressesData = [
    { id: 1, addressLine1: '123 Main St', city: 'Cityville', postalCode: '12345' },
    { id: 2, addressLine1: '456 Elm St', city: 'Towndale', postalCode: '67890' },
    // Add more address entries as needed
  ];

  useEffect(() => {
    // Set user addresses data when component mounts
    setUserAddresses(userAddressesData);
  }, []);

  return (
    <div className="addresses">
      <Navbar />
      <h1>Addresses</h1>
      <ul>
        {userAddresses.map(address => (
          <li key={address.id}>
            <strong>Address Line 1:</strong> {address.addressLine1} <br />
            <strong>City:</strong> {address.city} <br />
            <strong>Postal Code:</strong> {address.postalCode}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Addresses;
