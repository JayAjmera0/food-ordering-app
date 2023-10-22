import React, { createContext, useContext, useReducer } from 'react';

const CartContext = createContext();

export const useCart = () => {
  return useContext(CartContext);
};

const cartReducer = (state, action) => {
  switch (action.type) {
    case 'ADD_TO_CART':
      const existingItemIndex = state.findIndex(item => item.id === action.payload.id);

      if (existingItemIndex !== -1) {
        // If item already exists in the cart, update quantity
        const updatedState = [...state];
        updatedState[existingItemIndex] = {
          ...updatedState[existingItemIndex],
          quantity: updatedState[existingItemIndex].quantity + action.payload.quantity,
        };
        return updatedState;
      } else {
        // If item doesn't exist in the cart, add it
        return [...state, action.payload];
      }

    case 'REMOVE_FROM_CART':
      return state.filter(item => item.id !== action.payload.id);

    default:
      return state;
  }
};

export const CartProvider = ({ children }) => {
  const [cart, dispatch] = useReducer(cartReducer, []);

  return (
    <CartContext.Provider value={{ cart, dispatch }}>
      {children}
    </CartContext.Provider>
  );
};
