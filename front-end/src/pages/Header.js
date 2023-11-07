import React, { useState } from 'react';
import lottie from 'lottie-web';
import { defineElement } from '@lordicon/element';
import logo from '../Images/logoimg.png';

// Define "lord-icon" custom element with default properties
defineElement(lottie.loadAnimation);

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <div>
      <div className='header'>
        <div className='gift'>
          <lord-icon
            src="https://cdn.lordicon.com/pgmktfgp.json"
            trigger="hover"
            colors="primary:#c69cf4,secondary:#320a5c"
            className='gift-icon'
          ></lord-icon>
        </div>
        <div className='cart'>
          <lord-icon
            src="https://cdn.lordicon.com/cosvjkbu.json"
            trigger="hover"
            colors="primary:#6c16c7,secondary:#4f1091,tertiary:#320a5c"
            className='cart-icon'
          ></lord-icon>
        </div>
      </div>
      <div className='pp'>
        <div className='ppp'>
          <div className='profile-picture'>
            <img
              alt="Profile"
              className="logo-image"
              style={{
                width: '50px',
                height: '50px',
                borderRadius: '50%',
                marginRight: '10px',
              }}
            />
            <div
              style={{
                width: '45px',
                height: '45px',
                margin: '17px',
                marginRight: '10px',
                borderRadius: '50%',
                backgroundImage: 'linear-gradient(to right, rgb(250, 130, 10), rgb(300, 200, 0))',
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
              }}
            >
              <span style={{ fontSize: '24px', color: 'white', justifyContent: 'center' }}></span>
            </div>
            <div
              style={{
                fontSize: '17px',
                fontStyle: 'italic',
                fontWeight: 'bold',
                justifyContent: 'center',
                marginTop: '30px',
                marginRight: '10px',
              }}
            ></div>
          </div>
          <div className='login-box' style={{ justifyContent: 'right' }}>
            <a className='login'>Logout</a>
          </div>
        </div>
        <div className='login-section'>
          <div
            className='login-box'
            style={{
              textAlign: 'right',
              width: '110PX',
            }}
          >
            <img src={{}} alt='login-icon' className='login-icon' style={{ width: '20PX' }}></img>
          </div>
        </div>
      </div>
      <div className='logo'>
        {/* Use the JSON data to set the image source */}
      </div>
      {/* Menu */}
      <div className="brand-title">{ <img
              alt="logoimg"
              src={logo}
              className="logoimg"
              style={{
                width: '200px',
                height: '200px',
                borderRadius: '50%',
                marginRight: '10px',
              }}
            /> } AB ethiopian traditional clothes</div>
      <div className={`menu ${isMenuOpen ? 'open' : ''}`}>
        <ul>
          <a href='/home'><li>Home</li></a>
          <a href='/about'><li>About</li></a>
          <a href='/services'><li>Services</li></a>
          <a href='/contactus'><li>Contact</li></a>
        </ul>
      </div>
      <button className="menu-toggle" onClick={toggleMenu}>
        {isMenuOpen ? 'Close Menu' : 'Open Menu'}
      </button>
    </div>
  );
};

export default Header;