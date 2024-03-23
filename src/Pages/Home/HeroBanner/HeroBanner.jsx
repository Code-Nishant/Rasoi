import React from "react";
import "./HeroBanner.scss";

function HeroBanner() {
  return (
    <div className="heroBanner container-fluid">
      <div className="backdrop-img">
        <img
          src="https://wallpaperbat.com/img/8943620-free-ai-art-image-of-kitchen-vitality.jpg"
          alt="herobanner wallpaper"
        />
      </div>
      <div className="opacity-layer"></div>


    </div>
  );
}

export default HeroBanner;
