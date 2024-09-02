import React from 'react';
import './css/WaveText.css';

const WaveText = ({ 
  text, 
  color = '#000', 
  count = 1, 
  delay = 0.1, 
  fontSize = '2rem', 
  duration = '2s' 
}) => {
  return (
    <h1 className="wave-text" style={{ fontSize, color }}>
      {text.split('').map((char, index) => (
        <span 
          key={index} 
          style={{ 
            animationDelay: `${index * delay}s`, 
            animationDuration: duration, 
            animationIterationCount: count,
            animationName: 'wave',
            display: char === ' ' ? 'inline-block' : 'inline-block'
          }}
        >
          {char === ' ' ? '\u00A0' : char}
        </span>
      ))}
    </h1>
  );
};

export default WaveText;
