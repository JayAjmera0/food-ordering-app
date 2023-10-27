import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import Navbar from './Navbar';
import { useCart } from './CartContext';
import './RestaurantMenu.css';

const RestaurantMenu = () => {
  const { id } = useParams();
  const [restaurant, setRestaurant] = useState(null);
  const { cart, dispatch } = useCart();

  const restaurantData = [
    { id: 1, name: 'Bella Italia', rating: 4.5, menu: [
      { category: 'Appetizers', items: [
        { id: 1, name: 'Pesto', description: 'Description of Appetizer 1', price: 8.99, imageUrl: '/ita1.jpg', rating: 4.3 },
        // Add more appetizer items as needed
      ]},
      { category: 'Main Courses', items: [
        { id: 2, name: 'Pasta Penne', description: 'Description of Main Course 1', price: 15.99, imageUrl: '/ita2.jpg', rating: 4.6 },
        { id: 3, name: 'Spaghetti', description: 'Description of Main Course 1', price: 15.99, imageUrl: '/ita3.jpg', rating: 4.6 },

        // Add more main course items as needed
      ]},
      // Add more categories as needed
    ]},
    // Add more restaurants as needed
    { id: 2, name: 'Bella Italia', rating: 4.5, menu: [
      { category: 'Appetizers', items: [
        { id: 1, name: 'Pesto', description: 'Description of Appetizer 1', price: 8.99, imageUrl: '/ita1.jpg', rating: 4.3 },
        // Add more appetizer items as needed
      ]},
      { category: 'Main Courses', items: [
        { id: 2, name: 'Pasta Penne', description: 'Description of Main Course 1', price: 15.99, imageUrl: '/ita2.jpg', rating: 4.6 },
        { id: 3, name: 'Spaghetti', description: 'Description of Main Course 1', price: 15.99, imageUrl: '/ita3.jpg', rating: 4.6 },

        // Add more main course items as needed
      ]},
      // Add more categories as needed
    ]}
  ];

  useEffect(() => {
    // Find the restaurant by ID from the data
    const selectedRestaurant = restaurantData.find(rest => rest.id === parseInt(id, 10));
    setRestaurant(selectedRestaurant);
  }, [id, restaurantData]);

  const addToCart = (item) => {
    const newItem = { ...item, quantity: 1 };
    dispatch({ type: 'ADD_TO_CART', payload: newItem });
    alert(`${item.name} added to cart!`);
  };

  if (!restaurant) {
    return <div>Loading...</div>;
  }

  return (
    <div className="restaurant-menu">
      <Navbar />
      <section className="blog-post-header">
        <h1>{restaurant.name}</h1>
        <img src={restaurant.imageUrl} alt={restaurant.name} />
        <p>Rating: {restaurant.rating}</p>
      </section>

      <section className="blog-post-body">
        <h2>Menu</h2>
        {/* Display menu categories and items */}
        {restaurant.menu.map(category => (
          <div className="menu-category" key={category.category}>
            <h3>{category.category}</h3>
            <div className="menu-items">
              {category.items.map(item => (
                <div className="menu-item" key={item.id}>
                  <img src={item.imageUrl} alt={item.name} />
                  <h4>{item.name}</h4>
                  <p>{item.description}</p>
                  <p>Rating: {item.rating}</p>
                  <p>Price: ${item.price.toFixed(2)}</p>
                  <button onClick={() => addToCart(item)}>Add to Cart</button>
                </div>
              ))}
            </div>
          </div>
        ))}
      </section>
    </div>
  );
};

export default RestaurantMenu;
