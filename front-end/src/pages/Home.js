import React, { useState, useEffect } from 'react';
import './Home.css';
import Header from './Header.js';
import netelaAnimationImage from '../Images/netelaAnimation.jpg';

const NetelaAnimation = () => {
  const [isNetelaVisible, setIsNetelaVisible] = useState(true);
  const [isAnimationStarted, setIsAnimationStarted] = useState(false);
  const [isAnimationFinished, setIsAnimationFinished] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const netela = document.getElementById('netela');
      const person = document.getElementById('person');
      
      if (!netela || !person) return; // Exit early if the elements are not found

      const windowHeight = window.innerHeight;
      const netelaPosition = netela.getBoundingClientRect().top;

      if (netelaPosition < windowHeight && !isAnimationStarted && !isAnimationFinished) {
        setIsAnimationStarted(true);
        setIsNetelaVisible(false);
      }

      if (isAnimationFinished && netelaPosition > windowHeight) {
        setIsAnimationFinished(false);
        setIsAnimationStarted(false);
        setIsNetelaVisible(true);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [isAnimationStarted, isAnimationFinished]);

  const handleAnimationEnd = () => {
    setIsAnimationFinished(true);
  };

  return (
    <>
      {isNetelaVisible && (
        <div
          id="netela"
          style={{
            backgroundImage: `url(${netelaAnimationImage})`,
            backgroundSize: 'cover',
          }}
        ></div>
      )}
      {isAnimationStarted && (
        <div id="wardrobe">
          <div
            id="person"
            className={`person-animation ${isAnimationFinished ? 'reset-animation' : ''}`}
            onAnimationEnd={handleAnimationEnd}
          ></div>
        </div>
      )}
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