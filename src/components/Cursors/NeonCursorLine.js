import React, { useEffect, useState, useRef } from 'react';
import './css/NeonCursorLine.css';

const NeonCursorLine = ({ children, color = '#00ff00' }) => {
  const [lineStyle, setLineStyle] = useState({});
  const containerRef = useRef(null);

  useEffect(() => {
    const handleMouseMove = (e) => {
      if (containerRef.current) {
        const rect = containerRef.current.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;

        setLineStyle({
          left: `${x}px`,
          top: `${y}px`,
          boxShadow: `0 0 20px ${color}, 0 0 40px ${color}, 0 0 60px ${color}`, 
        });
      }
    };

    document.addEventListener('mousemove', handleMouseMove);
    return () => {
      document.removeEventListener('mousemove', handleMouseMove);
    };
  }, [color]);

  return (
    <div
      ref={containerRef}
      className="neon-cursor-container"
    >
      <div className="neon-line" style={lineStyle} />
      {children}
    </div>
  );
};

export default NeonCursorLine;
