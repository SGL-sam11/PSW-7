import React, { useState } from "react";
import "../style/brown.css";

const Brown = () => {

  return (
    <div className="container">
      <div className="glass">
        <div className="water">
        {/* SVG for the zig-zag line --> */}
      <svg class="line-svg" viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
        {/* Define the path --> */}
        <path id="zigzag-path" d="M 10 10 L 50 30 L 10 50 L 50 70 L 10 90" stroke="black" fill="transparent" />
      </svg>
       {/* Ball that follows the path --> */}
      <div class="ball"></div>
      </div>
      </div>
    </div>
  );
};

export default Brown;
