import React from 'react';
import lottie from 'lottie-web';
import { defineElement } from '@lordicon/element';

// Define "lord-icon" custom element with default properties
defineElement(lottie.loadAnimation);

const Header = () => {
  return (
    <div>
      <div>
        <lord-icon
          src={require('../Images/Lordicon/wired-flat-146-trolley.json')}
        ></lord-icon>
      </div>
      <div>
        <img src={require('../Images/AB_ETHIOPIAN_TRADITIONAL_CLOTHES__2_-removebg-preview.png')} alt='logo' />
      </div>
    </div>
  );
};

export default Header;