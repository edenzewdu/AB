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
    colors="primary:#6c16c7,secondary:#4f1091,tertiary:#320a5c"
    style={{width:'100px',height:'100px'}}>
</lord-icon>
      </div>
      <div>
        <img src={require('../Images/AB_ETHIOPIAN_TRADITIONAL_CLOTHES__2_-removebg-preview.png')} alt='logo' />
      </div>
    </div>
  );
};

export default Header;