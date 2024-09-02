import React, { useState, useEffect } from 'react';
import './css/Card.css';

const Card = ({ 
  frontContent, 
  backContent, 
  duration = '2s', 
  delay = '0s', 
  animateCondition, 
  animationType = 'flipped',
  frontBG = '#fff',
  backBG = '#f0f0f0',
  height = '200px', 
  width = '200px'   
}) => {
  const [isAnimating, setIsAnimating] = useState(false);
  
  const style = {
    animationDuration: duration,
    animationDelay: delay,
    height: height,
    width: width
  };

  const frontStyle = {
    backgroundColor: frontBG,
    height: height,
    width: width
  }

  const backStyle = {
    backgroundColor: backBG,
    height: height,
    width: width
  }

  useEffect(() => {
    if (typeof animateCondition === 'function') {
      setIsAnimating(animateCondition());
    } else if (animateCondition !== undefined) {
      setIsAnimating(animateCondition);
    }
  }, [animateCondition]);

  const handleAnimation = () => {
    if (animateCondition === undefined) {
      setIsAnimating(!isAnimating);
    }
  };

  return (
    <div 
      className={`card ${isAnimating ? animationType : ''}`} 
      style={style} 
      onClick={handleAnimation}
    >
      <div className="card-front" style={frontStyle}>
        {frontContent}
      </div>
      <div className={`card-back card-back-${animationType}`} style={backStyle}>
        {backContent}
      </div>
    </div>
  );
};

export default Card;
