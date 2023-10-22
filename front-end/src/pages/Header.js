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
    src="https://cdn.lordicon.com/cosvjkbu.json"
    trigger="hover"
    colors="primary:#c7166f,secondary:#911051,tertiary:#5c0a33"
    style={{width:"250px", height:'250px'}}>
</lord-icon>
      </div>
      <div>
        <img src={require('../Images/AB_ETHIOPIAN_TRADITIONAL_CLOTHES__2_-removebg-preview.png')} alt='logo' />
      </div>
    </div>
  );
};

export default Header;