import React, { useEffect, useState } from 'react';
import './css/FadeIn.css';

const FadeIn = ({ 
  children, 
  duration = '2s', 
  delay = '0s', 
  count = '1', 
  animateCondition 
}) => {
  const [isFading, setIsFading] = useState(true);

  const style = {
    animationDuration: duration,
    animationDelay: delay,
    animationIterationCount: count,
    animationName: isFading ? 'fadeIn' : 'none', 
  };

  useEffect(() => {

    if (typeof animateCondition === 'function') {
      setIsFading(animateCondition());
    } else if (animateCondition !== undefined) {
      setIsFading(animateCondition);
    }
  }, [animateCondition]);

  return (
    <div className="fade-in" style={style}>
      {children}
    </div>
  );
};

export default FadeIn;