import React, { useState, useEffect } from 'react';
import './css/Bounce.css';

const Bounce = ({ 
  children, 
  duration = '0.6s', 
  delay = '0s', 
  count = 'infinite', 
  direction = 'up',
  distance = '100%',  
  animateCondition 
}) => {
  const [isBouncing, setIsBouncing] = useState(false);

  const style = {
    animationDuration: duration,
    animationDelay: delay,
    animationIterationCount: count,
    animationName: isBouncing ? `bounce-${direction}` : 'none', 
    '--bounce-distance': distance, 
  };

  useEffect(() => {
    if (typeof animateCondition === 'function') {
      setIsBouncing(animateCondition());
    } else if (animateCondition !== undefined) {
      setIsBouncing(animateCondition);
    }
  }, [animateCondition]);

  
  useEffect(() => {
    setIsBouncing(true);
  }, []);

  return (
    <div className={`bounce bounce-${direction}`} style={style}>
      {children}
    </div>
  );
};

export default Bounce;
