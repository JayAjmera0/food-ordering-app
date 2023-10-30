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
        { id: 1, name: 'Pesto', description: 'Delicious Pesto pasta with a burst of basil flavor.', price: 350, imageUrl: '/ita1.jpg', rating: 4.2 },
        { id: 2, name: 'Red Sauce Pasta', description: 'Classic Italian pasta with rich and tangy red sauce.', price: 375, imageUrl: '/ita4.jpg', rating: 3.5 },
        { id: 3, name: 'White Sauce Pasta', description: 'Creamy white sauce pasta to satisfy your cravings.', price: 359, imageUrl: '/pasta.jpg', rating: 4.0 },
        // Add more appetizer items as needed
      ]},
      { category: 'Main Courses', items: [
        { id: 4, name: 'Pasta Penne', description: 'Delight in the Penne pasta with a perfect al dente texture.', price: 349.99, imageUrl: '/ita2.jpg', rating: 4.8 },
        { id: 5, name: 'Spaghetti', description: 'Indulge in classic Spaghetti, a timeless favorite. ', price: 299.50, imageUrl: '/ita3.jpg', rating: 4.5 },
        { id: 6, name: 'Pizza', description: 'Experience the taste of Pizza with a blend of toppings.', price: 499.99, imageUrl: '/ita5.jpg', rating: 4.9 }
    
      ]},
      // Add more categories as needed
    ]},
    // Add more restaurants as needed
    { id: 2, name: 'Tortilla Street', rating: 4.5, menu: [
      { category: 'Appetizers', items:[
        { id: 5, name: 'Macaroni', description: 'Savor the cheesy delight of Macaroni for a comforting meal.', price: 249.99, imageUrl: '/mex4.jpg', rating: 4.5 },
        { id: 6, name: 'Canopies', description: 'Enjoy a delightful assortment of Canopies, perfect for sharing.', price: 199.50, imageUrl: '/mex1.jpg', rating: 4.6 },
        { id: 7, name: 'Nachos', description: 'Crunch on the zesty Nachos loaded with flavorful toppings.', price: 179.99, imageUrl: '/mex2.jpg', rating: 4.4 }
    
        // Add more appetizer items as needed
      ]},
      { category: 'Main Courses', items:[
        { id: 8, name: 'Salsa', description: 'Experience the zesty and tangy flavors of Salsa in every bite.', price: 249.50, imageUrl: '/mex3.jpg', rating: 4.7 },
        { id: 9, name: 'Tacos', description: 'Satisfy your cravings with delicious and authentic Tacos.', price: 299.99, imageUrl: '/mex5.jpg', rating: 4.8 },
        { id: 10, name: 'Burrito-bowl', description: 'Indulge in a hearty Burrito Bowl packed with your favorite ingredients.', price: 349.00, imageUrl: '/mex6.jpg', rating: 4.9 }
    
        // Add more main course items as needed
      ]},
      // Add more categories as needed
    ]},
    // Add more restaurants as needed
    { id: 3, name: 'Indian Masala House', rating: 4.8, menu: [
      { category: 'Appetizers', items:[
        { id: 11, name: 'Biryani', description: 'Indulge in aromatic Biryani, a flavorful delight from India.', price: 399.00, imageUrl: '/ind1.jpg', rating: 4.7 },
        { id: 12, name: 'Idli', description: 'Experience the soft and fluffy Idli, a South Indian classic.', price: 159.99, imageUrl: '/ind2.jpg', rating: 4.5 },
        { id: 13, name: 'Chole-Puri', description: 'Delight in the spicy and tangy Chole-Puri combo.', price: 179.50, imageUrl: '/ind3.jpg', rating: 4.6 }
    
        // Add more appetizer items as needed
      ]},
      { category: 'Main Courses', items:[
        { id: 14, name: 'Thali', description: 'Enjoy a delectable Indian Thali with an array of flavors on one platter.', price: 499.99, imageUrl: '/indian.jpg', rating: 4.6 },
        { id: 15, name: 'Gulab-Jamun', description: 'Indulge in the sweetness of Gulab Jamun, a classic Indian dessert.', price: 199.50, imageUrl: '/ind4.jpg', rating: 4.7 },
        { id: 16, name: 'Samosa', description: 'Savor the crispy and flavorful Samosa, a popular Indian snack.', price: 179.00, imageUrl: '/ind5.jpg', rating: 4.5 }
    
    
        // Add more main course items as needed
      ]},
      // Add more categories as needed
    ]},

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
        <p>Restaurant Rating : {restaurant.rating}</p>
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
