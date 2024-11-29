import React from "react";
import "../style/Tyndall.css";
import senterImage from "../aset/senter.png";

const Tyndall = () => {
  return (
    <div className="container">
      <div className="glass target-glass">
        <div className="water"></div>
        </div>
        <div className="glass source-glass">
        <div className="water"></div>
      </div>
      <div className="glass source-glass">
        <div className="water"></div>
      </div>
      <div className="sinari"></div>
      <img src={senterImage} alt="Flashlight" className="flashlight" />
    </div>
  );
};

export default Tyndall;
