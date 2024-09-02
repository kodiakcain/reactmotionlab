import React, { useEffect, useState, useRef } from 'react';
import './css/GlowingCometTrail.css';

const GlowingCometCursor = ({ children, color = '#ff6b6b' }) => {
  const [trail, setTrail] = useState([]);
  const [isHovering, setIsHovering] = useState(false);
  const containerRef = useRef(null);

  useEffect(() => {
    const handleMouseMove = (e) => {
      if (containerRef.current && isHovering) {
        const rect = containerRef.current.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;
        const newTrail = [...trail, { x, y }];
        if (newTrail.length > 15) {
          newTrail.shift();
        }
        setTrail(newTrail);
      }
    };

    document.addEventListener('mousemove', handleMouseMove);
    return () => {
      document.removeEventListener('mousemove', handleMouseMove);
    };
  }, [trail, isHovering]);

  const handleMouseEnter = () => {
    setIsHovering(true);
  };

  const handleMouseLeave = () => {
    setIsHovering(false);
    
    setTimeout(() => {
      setTrail([]);
    }, 100);
  };

  return (
    <div 
      ref={containerRef}
      className="glowing-comet-container"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      {trail.map((pos, index) => (
        <div
          key={index}
          className="comet-trail"
          style={{
            left: `${pos.x}px`,
            top: `${pos.y}px`,
            opacity: (index + 1) / trail.length,
            transform: `scale(${1 - index * 0.05})`,
            backgroundColor: color,  
            boxShadow: `0 0 10px 5px rgba(${parseInt(color.slice(1, 3), 16)}, ${parseInt(color.slice(3, 5), 16)}, ${parseInt(color.slice(5, 7), 16)}, 0.5)`,
          }}
        />
      ))}
      {children}
    </div>
  );
};

export default GlowingCometCursor;
