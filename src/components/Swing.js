import React, { useEffect, useRef, useState } from 'react';
import './css/Swing.css';

const Swing = ({ 
  children, 
  duration = '1.5s', 
  delay = '0s', 
  count = 'infinite', 
  animateCondition 
}) => {
  const ref = useRef(null);
  const [isSwinging, setIsSwinging] = useState(true);

  useEffect(() => {
    
  }, []);

  useEffect(() => {
    
    if (typeof animateCondition === 'function') {
      const condition = animateCondition();
      setIsSwinging(condition);
    } else if (animateCondition !== undefined) {
      setIsSwinging(animateCondition);
    }
  }, [animateCondition]);

  const style = {
    animationDuration: duration,
    animationDelay: delay,
    animationIterationCount: count,
    animationName: isSwinging ? 'swing' : 'none',
  };

  return (
    <div className='swing' style={style} ref={ref}>
      {children}
    </div>
  );
};

export default Swing;