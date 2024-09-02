import React, { useEffect, useState } from 'react';
import './css/Morph.css';

const Morph = ({ 
  firstChildren,
  secondChildren, 
  duration = '2s', 
  delay = '0s', 
  count = '1', 
  animateCondition,
  firstShape='square',
  secondShape='circle', 
  height='20px',
  width='20px'
}) => {
  const [isFading, setIsFading] = useState(true);

  const style = {
    '--height': height,
    '--width': width,
    animationDuration: duration,
    animationDelay: delay,
    animationIterationCount: count,
    animationName: isFading ? `morph-${firstShape}-${secondShape}` : 'none',
    animationFillMode: 'forwards', 
    overflow: 'hidden',
  };

  useEffect(() => {
    if (typeof animateCondition === 'function') {
      setIsFading(animateCondition());
    } else if (animateCondition !== undefined) {
      setIsFading(animateCondition);
    }
  }, [animateCondition]);

  return (
    <div className={`morph-${firstShape}-${secondShape}`} style={style}>
      {firstChildren}
    </div>
  );
};


export default Morph;