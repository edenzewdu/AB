import React, { useState } from 'react';
import './Home.css';
import Header from './Header.js';

const NetelaAnimation = () => {
  const [isAnimating, setIsAnimating] = useState(false);

  const animateNetela = () => {
    setIsAnimating(true);
    setTimeout(() => {
      setIsAnimating(false);
    }, 1000); // adjust the timeout value to match the transition duration
  };

  return (
    <>
      <button onClick={animateNetela}>Start Animation</button>

      <div id="person"></div>
      <div id="wardrobe">
        {!isAnimating && (
          <div
            style={{
              position: 'absolute',
              top: '200px',
              left: '200px',
              width: '100px',
              height: '100px',
              backgroundImage: `url('../Images/netelaAnimation.jpg')`,
              backgroundSize: 'cover',
            }}
          ></div>
        )}
      </div>
    </>
  );
};

const Home = () => {
  return (
    <div className="home">
      <Header />
      <div className="body">
        <h1>Welcome to Ethiopian Traditions</h1>
        <p>Discover the beauty of traditional Ethiopian clothing</p>
        <button className="shop-now-btn">Shop Now</button>
        <NetelaAnimation />
      </div>
    </div>
  );
};

export default Home;