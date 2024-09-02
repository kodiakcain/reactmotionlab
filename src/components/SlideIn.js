import React, { useEffect, useRef, useState } from 'react';
import './css/SlideIn.css';

const SlideIn = ({ 
  children, 
  duration = '2s', 
  delay = '0s', 
  distance = '100%', 
  count = '1', 
  direction = 'left', 
  animateCondition 
}) => {
  const ref = useRef(null);
  const [isSliding, setIsSliding] = useState(true);

  useEffect(() => {
    if (ref.current) {
      ref.current.style.setProperty('--slide-distance', distance);
    }
  }, [distance]);

  useEffect(() => {
    if (typeof animateCondition === 'function') {
      setIsSliding(animateCondition());
    } else if (animateCondition !== undefined) {
      setIsSliding(animateCondition);
    }
  }, [animateCondition]);

  const style = {
    animationDuration: duration,
    animationDelay: delay,
    animationIterationCount: count,
    animationName: isSliding ? `slideIn-${direction}` : 'none',
  };

  return (
    <div className={`slide-in slide-in-${direction}`} style={style} ref={ref}>
      {children}
    </div>
  );
};

export default SlideIn;
