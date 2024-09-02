import React from 'react';
import './css/LetterDrop.css'; 

const LetterDrop = ({ 
  text, 
  duration = '0.5s', 
  delay = '0s', 
  count = 1, 
  fontSize = '2rem', 
  color = '#000' 
}) => { 
  return (
    <div className="letter-drop" style={{ fontSize, color }}>
      {text.split('').map((letter, index) => (
        <span
          key={index}
          className="letter"
          style={{
            animationDelay: `${index * 0.1 + parseFloat(delay)}s`, 
            animationDuration: duration, 
            animationIterationCount: count,
          }}
        >
          {letter === ' ' ? '\u00A0' : letter} {/* Handle spaces */}
        </span>
      ))}
    </div>
  );
};

export default LetterDrop;