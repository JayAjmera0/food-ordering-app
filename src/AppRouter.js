import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './components/Home';
import UserProfile from './components/UserProfile';
// import PastOrders from './components/PastOrders';
// import Addresses from './components/Addresses';
// import RestaurantsList from './components/RestaurantsList';
// import RestaurantMenu from './components/RestaurantMenu';
// import Cart from './components/Cart';
// import AddressSelection from './components/AddressSelection';
// import PaymentOptions from './components/PaymentOptions';
// import AboutUs from './components/AboutUs';

const AppRouter = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        
        <Route path="/user-profile" element={<UserProfile />} />
        {/*
        <Route path="/past-orders" element={<PastOrders />} />
        <Route path="/addresses" element={<Addresses />} />
        <Route path="/restaurants" element={<RestaurantsList />} />
        <Route path="/restaurant-menu/:id" element={<RestaurantMenu />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/address-selection" element={<AddressSelection />} />
        <Route path="/payment-options" element={<PaymentOptions />} />
        <Route path="/about-us" element={<AboutUs />} /> */}
      </Routes>
    </Router>
  );
};

export default AppRouter;
