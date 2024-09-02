import React, { useEffect, useRef, useState } from 'react';
import './css/Scale.css';

const Scale = ({ 
  children, 
  duration = '6s', 
  delay = '0s', 
  factor = '2', 
  direction = 'none', 
  count = '1', 
  animateCondition 
}) => {
  const ref = useRef(null);
  const [isScaling, setIsScaling] = useState(true);

  const style = {
    animationDuration: duration,
    animationDelay: delay,
    animationName: isScaling ? `scale${direction}` : 'none',
    animationIterationCount: count,
  };

  useEffect(() => {
    if (ref.current) {
      ref.current.style.setProperty('--scale-factor', factor);
    }
  }, [factor]);

  useEffect(() => {
      
    if (typeof animateCondition === 'function') {
      const condition = animateCondition();
      setIsScaling(condition);
    } else if (animateCondition !== undefined) {
      setIsScaling(animateCondition);
    }
  }, [animateCondition]);

  return (
    <div className={`scale-${direction}`} style={style} ref={ref}>
      {children}
    </div>
  );
};

export default Scale;