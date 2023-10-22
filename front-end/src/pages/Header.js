import React from 'react';
import lottie from 'lottie-web';
import { defineElement } from '@lordicon/element';

// Define "lord-icon" custom element with default properties
defineElement(lottie.loadAnimation);

const Header = () => {
  return (
    <div>
      <lord-icon
        src="../Images/Lordicon/wired-flat-146-trolley.json"
      ></lord-icon>
    </div>
  );
};

export default Header;