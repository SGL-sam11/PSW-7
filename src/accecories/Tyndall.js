import React, { useState } from "react";
import "../style/Tyndall.css";
import senterImage from "../aset/senter.png";
import bubble from "../aset/bubble.png"

const Tyndall = () => {
    // State to control animation
    const [animate, setAnimate] = useState(false);

    // Function to toggle animation
    const handleStartAnimation = () => {
      setAnimate(true);
    };
  return (
    <div className="container">
         {/* Button to start the animation */}
   <div className="button">
   <button onClick={handleStartAnimation} >
        Start Animation
      </button>
      </div>
      <div className="glass target-glass">
        <div className="water"></div>
        </div>
        <div className="glass source-glass">
        <div className="water"></div>
      </div>
      <div className="glass source-glass">
        <div className="water"></div>
     <div className="bubble"><img src={bubble} alt="bubble" className="bubble" />
     </div>
      </div>
       {/* Conditionally apply the 'sinari' class */}
       {animate && <div className="sinari"></div>}
      <img src={senterImage} alt="Flashlight" className="flashlight" />
       </div>
  );
};

export default Tyndall;
