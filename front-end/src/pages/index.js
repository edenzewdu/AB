import React from 'react';
import { FaReact } from 'react-icons/fa';
import './Home.css'; // Import a CSS file for styling and animations (create this file later)

const Home = () => {
  return (
    <div className="home">
      <h1>Welcome to My Website</h1>
      <div className="icon-container">
        <FaReact className="icon" />
        {/* Add more icons here */}
      </div>
    </div>
  );
};

export default Home;
