import React, { useEffect, useRef, useState } from 'react';
import './css/SlideOut.css';

const SlideOut = ({ 
  children, 
  duration = '2s', 
  delay = '0s', 
  distance = '100%', 
  count = '1', 
  direction = 'left',
  animateCondition 
}) => {
  const ref = useRef(null);
  const [isSlidingOut, setIsSlidingOut] = useState(true);

  useEffect(() => {
    if (ref.current) {
      ref.current.style.setProperty('--slide-distance', distance);
    }
  }, [distance]);

  useEffect(() => {
    if (typeof animateCondition === 'function') {
      const condition = animateCondition();
      setIsSlidingOut(condition);
    } else if (animateCondition !== undefined) {
      setIsSlidingOut(animateCondition);
    }
  }, [animateCondition]);

  const style = {
    animationDuration: duration,
    animationDelay: delay,
    animationIterationCount: count,
    animationName: isSlidingOut ? `slideOut-${direction}` : 'none',
    animationFillMode: 'forwards',
  };

  return (
    <div className={`slide-out slide-out-${direction}`} style={style} ref={ref}>
      {children}
    </div>
  );
};

export default SlideOut;
