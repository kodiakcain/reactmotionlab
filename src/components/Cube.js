import React from 'react';
import './css/Cube.css';

const Cube = ({ 
  frontChildren,
  backChildren,
  leftChildren,
  rightChildren,
  topChildren,
  bottomChildren 
}) => {
  return (
    <div className="cube">
      <div className="face frontCube">{frontChildren}</div>
      <div className="face backCube">{backChildren}</div>
      <div className="face leftCube">{leftChildren}</div>
      <div className="face rightCube">{rightChildren}</div>
      <div className="face topCube">{topChildren}</div>
      <div className="face bottomCube">{bottomChildren}</div>
    </div>
  );
};

export default Cube;