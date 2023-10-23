import React, { useState, useEffect } from 'react';
import './Home.css';
import Header from './Header.js';
import netelaAnimationImage from '../Images/netelaAnimation.jpg';

const NetelaAnimation = () => {
  const [isNetelaVisible, setIsNetelaVisible] = useState(true);

  useEffect(() => {
    const handleScroll = () => {
      const netela = document.getElementById('netela');
      const wardrobe = document.getElementById('wardrobe');
      const windowHeight = window.innerHeight;
      const netelaPosition = netela.getBoundingClientRect().top;
      const wardrobePosition = wardrobe.getBoundingClientRect().top;

      if (netelaPosition < windowHeight && isNetelaVisible) {
        setIsNetelaVisible(false);
        netela.classList.add('netela-animation');
      }

      if (wardrobePosition < windowHeight && !isNetelaVisible) {
        setIsNetelaVisible(true);
        netela.classList.remove('netela-animation');
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [isNetelaVisible]);

  return (
    <>
      <div id="person"></div>
      <div id="wardrobe"></div>
      <div id="netela-container">
        {isNetelaVisible && (
          <div
            id="netela"
            style={{
              backgroundImage: `url(${netelaAnimationImage})`,
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