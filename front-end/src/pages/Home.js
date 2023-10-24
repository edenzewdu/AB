import React, { useState, useEffect } from 'react';
import './Home.css';
import Header from './Header.js';
import netelaAnimationImage from '../Images/netelaAnimation.jpg';
import WardRobe from '../Images/wardrobe.png';

const NetelaAnimation = () => {
  const [scrollPosition, setScrollPosition] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const position = window.scrollY;
      setScrollPosition(position);
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div className="App" style={{ height: '2000px' }}>
      <div className="container" style={{ position: 'relative' }}>
        <img
          src={netelaAnimationImage}
          alt="Beautiful Girl with Netella"
          style={{
            position: 'absolute',
            top: `${scrollPosition}px`,
            transition: 'top 0.5s ease',
          }}
        />
        <img
          src="netella.png"
          alt="Netella"
          style={{
            position: 'absolute',
            top: `${scrollPosition + 500}px`,
            transition: 'top 0.5s ease',
          }}
        />
        <img
          src={WardRobe}
          alt="Wardrobe"
          style={{
            position: 'absolute',
            top: `${scrollPosition + 1000}px`,
            transition: 'top 0.5s ease',
          }}
        />
      </div>
    </div>
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