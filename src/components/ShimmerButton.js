import React, { useState } from "react";
import '../components/css/ShimmerButton.css';

const ShimmerButton = ({ 
  children, 
  duration = '2s', 
  delay = '0s', 
  count = 'infinite', 
  shimmerColor = 'rgba(255, 255, 255, 0.4)',
  buttonColor = 'purple', 
  shimmerDirection = 'right', 
}) => {


  const shimmerStart = shimmerDirection === 'right' ? '-150%' : '150%';
  const shimmerEnd = shimmerDirection === 'right' ? '150%' : '-150%';

  const style = {
    '--shimmer-duration': duration,
    '--shimmer-delay': delay,
    '--shimmer-count': count,
    '--shimmer-color': shimmerColor,
    '--shimmer-start': shimmerStart,
    '--shimmer-end': shimmerEnd,
    '--button-color': buttonColor,
  };

  return (
    <div className="button-container">
      <div className="shimmerbutton" style={style}>
        {children}
      </div>
    </div>
  );
};

export default ShimmerButton;
