import React from "react";
import "../style/PouringAnimation.css";

const PouringAnimation = () => {
  return (
    <div className="container">
      <div className="pour"></div>
      <div className="glass target-glass">
        <div className="water target-water"></div>
      </div>
    </div>
  );
};

export default PouringAnimation;
