import React, { useState, useEffect } from 'react';
import { useSpring, animated } from 'react-spring';
import './Home.css';
import Header from './Header.js';
import netelaAnimationImage from '../Images/netelaAnimation.jpg';
import netellaImage from '../Images/netelaAnimation-removebg-preview.png';
import wardrobeImage from '../Images/wardrobe.png';
import backgroundImage from '../Images/giphy.gif';

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

const AnimatedObject = ({ image, animationDelay }) => {
  const animatedProps = useSpring({
    from: { opacity: 0, transform: 'translateY(100px)' },
    to: { opacity: 1, transform: 'translateY(0)' },
    config: { duration: 1000, delay: animationDelay },
  });

  return (
    <animated.div style={animatedProps}>
      <img src={image} alt="Animated Object" />
    </animated.div>
  );
};

const Home = () => {
  return (
    <div className="home">
      <Header />
      <div className="body">
        <div className="background">
          <img src={backgroundImage} alt="Background" />
             </div>
        <div className="content">
          <h1>Welcome to Ethiopian Traditions</h1>
          <p>Discover the beauty of traditional Ethiopian clothing</p>
          <button className="shop-now-btn">Shop Now</button>
          <div className="animated-objects">
            <AnimatedObject image={netelaAnimationImage} animationDelay={500} />
            <AnimatedObject image={netellaImage} animationDelay={800} />
            <AnimatedObject image={wardrobeImage} animationDelay={1100} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;