import React from 'react';
import './css/NeonBorder.css';

const NeonBorder = ({ children, height = 'auto', width = 'auto', neonColor1 = '#ff00ff', neonColor2 = '#00ffff' }) => {
  return (
    <div
      className='button-wrapper'
      style={{
        height: height,
        width: width,
      }}
    >
      <div className='button-background'>
        <div className='button-content'>
          {children}
        </div>
      </div>
      <div
        className='neon-border'
        style={{
          '--neon-color-1': neonColor1,
          '--neon-color-2': neonColor2,
        }}
      ></div>
    </div>
  );
};

export default NeonBorder;
