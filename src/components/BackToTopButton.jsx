// src/components/BackToTopButton.js
import React, { useState, useEffect } from 'react';
import top from '../components/assets/top.png';
import '../components/volunteer/volunteer.css'
const BackToTopButton = () => {
  const [isVisible, setIsVisible] = useState(false);

  const handleScroll = () => {
    if (window.scrollY > 300) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  };

  const handleClick = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    isVisible && (
       
       
      
     
        <img src={top} alt="top" className='backtotop'  onClick={handleClick}  />
   
    )
  );
};






export default BackToTopButton;
