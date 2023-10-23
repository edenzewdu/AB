import React from 'react';
import './Home.css';
import Header from './Header.js';

const NetelaAnimation = () => {
  const animateNetela = () => {
    const netela = document.getElementById("netela");
    netela.style.top = "0px";
    netela.style.left = "0px";
    netela.style.opacity = "0";

    setTimeout(function() {
      netela.style.display = "none";
      document.getElementById("wardrobe").innerHTML +=
        '<div style="position: absolute; top: 200px; left: 200px; width: 100px; height: 100px; background-image: url(\'netela_image.png\'); background-size: cover;"></div>';
    }, 1000); // adjust the timeout value to match the transition duration
  };

  return (
    <>
      <button onClick={animateNetela}>Start Animation</button>

      <div id="person"></div>
      <div id="wardrobe"></div>
    </>
  );
};

const Home = () => {
  return (
    <div className='home'>
      <Header />
      <div className='body'>
        <h1>Welcome to Ethiopian Traditions</h1>
        <p>Discover the beauty of traditional Ethiopian clothing</p>
        <button className="shop-now-btn">Shop Now</button>
        <NetelaAnimation />
      </div>
    </div>
  );
};

export default Home;