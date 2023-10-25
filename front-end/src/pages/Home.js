import React, { useState, useEffect } from 'react';
import './Home.css';
import Header from './Header.js';
import netelaAnimationImage from '../Images/netelaAnimation.jpg';
import netellaImage from '../Images/netelaAnimation-removebg-preview.png';
import wardrobeImage from '../Images/wardrobe.png';
import backgroundImage from '../Images/beauty girl wind blows (2).gif';

// const NetelaAnimation = () => {
//   const [scrollPosition, setScrollPosition] = useState(0);
//   const [netelaVisible, setNetelaVisible] = useState(false);

//   useEffect(() => {
//     const handleScroll = () => {
//       const position = window.scrollY;
//       setScrollPosition(position);
//     };

//     window.addEventListener('scroll', handleScroll);

//     return () => {
//       window.removeEventListener('scroll', handleScroll);
//     };
//   }, []);

//   useEffect(() => {
//     const windowHeight = window.innerHeight;
//     const netelaAnimationImageHeight = 1000; // Adjust this value based on the actual height of the netelaAnimationImage

//     if (scrollPosition >= windowHeight && scrollPosition <= windowHeight + netelaAnimationImageHeight) {
//       setNetelaVisible(true);
//     } else {
//       setNetelaVisible(false);
//     }
//   }, [scrollPosition]);

//   return (
//     <div className="App" style={{ height: '2000px' }}>
//       <div className="container" style={{ position: 'relative' }}>
//         {netelaVisible && (
//           <img
//             src={netelaAnimationImage}
//             alt="Beautiful Girl with Netella"
//             style={{
//               position: 'absolute',
//               top: `${scrollPosition - window.innerHeight}px`,
//               transition: 'top 0.5s ease',
//             }}
//           />
//         )}
//         <img
//           src={netellaImage}
//           alt="Netella"
//           style={{
//             position: 'absolute',
//             top: `${scrollPosition}px`,
//             transition: 'top 0.5s ease',
//           }}
//         />
//         <img
//           src={wardrobeImage}
//           alt="Wardrobe"
//           style={{
//             position: 'absolute',
//             top: `${scrollPosition + 1000}px`,
//             transition: 'top 0.5s ease',
//           }}
//         />
//       </div>
//     </div>
//   );
// };

const Home = () => {
  return (
    <div className="home">
      <Header />
      <div className="body">
        <div className="image-container">
          <div className="crop-container">
            <img src={backgroundImage} alt="Background" className="gif-image" />
          </div>
        </div>
        <div className="content">
          <h1>Welcome to Ethiopian Traditions</h1>
          <p>Discover the beauty of traditional Ethiopian clothing</p>
          <button className="shop-now-btn">Shop Now</button>
        </div>
      </div>
    </div>
  );
};

export default Home;