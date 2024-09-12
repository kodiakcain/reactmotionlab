import React from 'react';
import './css/HoverShadow.css';

const HoverShadow = ({ 
  children, 
  scale = 1.2, 
  shadowColor = 'rgba(0, 0, 0, 0.3)', 
  shadowBlur = 10, 
  shadowDistance = 5 
}) => {
  return (
    <div 
      className="hover-shadow-effect"
      style={{
        '--scale-factor': scale,
        '--shadow-color': shadowColor,
        '--shadow-blur': `${shadowBlur}px`,
        '--shadow-offset-x': `${shadowDistance}px`,
        '--shadow-offset-y': `${shadowDistance}px`,
      }}
    >
      {children}
    </div>
  );
};

export default HoverShadow;
