import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import Navbar from './Navbar';
import { useCart } from './CartContext';
import './RestaurantMenu.css';
import axios from 'axios';

const RestaurantMenu = () => {
  const { id } = useParams();
  const [restaurant, setRestaurant] = useState(null);
  const { cart, dispatch } = useCart();

  useEffect(() => {
    // Make an HTTP GET request to fetch restaurant menu data
    axios.get(`http://127.0.0.1:8000/api/menus/`)
      .then(response => {
        setRestaurant(response.data);
      })
      .catch(error => {
        console.error('Error fetching restaurant menu data:', error);
      });
  }, [id]);

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
        <p>Restaurant Rating: {restaurant.rating}</p>
      </section>

      <section className="blog-post-body">
        <h2>Menu</h2>
        {restaurant.menu && restaurant.menu.map(category => (
          <div className="menu-category" key={category.category}>
            <h3>{category.category}</h3>
            <div className="menu-items">
              {category.items.map(item => (
                <div className="menu-item" key={item.id}>
                  <img src={item.image_url} alt={item.name} />
                  <h4>{item.name}</h4>
                  <p>{item.description}</p>
                  <p>Rating: {item.rating}</p>
                  <p>Price: Rs{item.price.toFixed(2)}</p>
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
