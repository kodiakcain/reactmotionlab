import React, { useEffect, useState } from 'react';
import './css/FadeOut.css';

const FadeOut = ({ 
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
    animationName: isFading ? 'fadeOut' : 'none', 
    animationFillMode: 'forwards',
  };

  useEffect(() => {

    if (typeof animateCondition === 'function') {
      setIsFading(animateCondition());
    } else if (animateCondition !== undefined) {
      setIsFading(animateCondition);
    }
  }, [animateCondition]);

  return (
    <div className="fade-out" style={style}>
      {children}
    </div>
  );
};

export default FadeOut;