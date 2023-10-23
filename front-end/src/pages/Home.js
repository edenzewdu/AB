import React from 'react';
import './Home.css';
import Header from './Header.js';

const Home = () => {
  return (
    <div className='home'>
      <Header />
      <div className='body'>
      <h1>Welcome to Ethiopian Traditions</h1>
      <p>Discover the beauty of traditional Ethiopian clothing</p>
      <button className="shop-now-btn">Shop Now</button>
    </div>
    </div>
  );
};

export default Home;