import React from 'react';
import { FaReact, FaShoppingCart } from 'react-icons/fa';
import './Home.css'; // Import a CSS file for styling and animations (create this file later)

const Home = () => {
  return (
    <div className="home">
      <h1>Welcome to Ethiopian Traditions</h1>
      <p>Discover the beauty of traditional Ethiopian clothing</p>
      <div >
        <FaShoppingCart  />
      </div>
      <button className="shop-now-btn">Shop Now</button>
    </div>
  );
};

export default Home;