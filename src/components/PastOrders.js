import React, { useState, useEffect } from 'react';
import Navbar from './Navbar.js';

const PastOrders = () => {
  const [pastOrders, setPastOrders] = useState([]);

  // Example past orders data (replace this with your actual past orders data)
  const pastOrdersData = [
    { id: 1, restaurant: 'Restaurant A', orderDate: '2023-10-20', total: 35.99 },
    { id: 2, restaurant: 'Restaurant B', orderDate: '2023-10-18', total: 42.50 },
    // Add more past order entries as needed
  ];

  useEffect(() => {
    // Set past orders data when component mounts
    setPastOrders(pastOrdersData);
  }, []);

  return (
    <div className="past-orders">
      <Navbar />
      <h1>Past Orders</h1>
      <ul>
        {pastOrders.map(order => (
          <li key={order.id}>
            <strong>Restaurant:</strong> {order.restaurant} <br />
            <strong>Order Date:</strong> {order.orderDate} <br />
            <strong>Total Price:</strong> ${order.total.toFixed(2)}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default PastOrders;
