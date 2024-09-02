import React, { useEffect, useRef, useState } from 'react';
import './css/Rotate.css';

const Rotate = ({ 
  children, 
  duration = '2s', 
  delay = '0s', 
  angle = '360deg', 
  direction = 'x', 
  count = '1', 
  animateCondition 
}) => {
  const ref = useRef(null);
  const [isRotating, setIsRotating] = useState(true);

  useEffect(() => {
    if (ref.current) {
      ref.current.style.setProperty('--rotate-angle', angle);
    }
  }, [angle]);

  useEffect(() => {

    if (typeof animateCondition === 'function') {
      const condition = animateCondition();
      setIsRotating(condition);
    } else if (animateCondition !== undefined) {
      setIsRotating(animateCondition);
    }
  }, [animateCondition]);

  const style = {
    animationDuration: duration,
    animationDelay: delay,
    animationName: isRotating ? `rotate${direction}` : 'none',
    animationIterationCount: count,
  };

  return (
    <div className={`rotate-${direction}`} style={style} ref={ref}>
      {children}
    </div>
  );
};

export default Rotate;