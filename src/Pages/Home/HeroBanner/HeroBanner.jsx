import React, { useState } from "react";
import "./HeroBanner.scss";
import useFetch from "../../../hooks/useFetch";

function HeroBanner() {
  // const data= useFetch();

  return (
    <div className="heroBanner container-fluid">
      <div className="backdrop-img">
        <img
          src="https://wallpaperbat.com/img/8943620-free-ai-art-image-of-kitchen-vitality.jpg"
          alt="herobanner wallpaper"
        />
      </div>
      <div className="opacity-layer"></div>

      <div className="wrapper container">
        <div className="heroBannerContent">

          <span className="title">Rasoi: khana nhi zindagi ka swad</span>

          <span className="subTitle">
          Easy recipes for every craving, every day. Simple ingredients, sensational flavors await. Embrace the joy of cooking, one dish at a time. Start your culinary journey with us today!
          </span>

          <div className="searchInput">
            <input
              type="text"
              placeholder="Most Hand-pick Recipes"
              // onChange={(e) => setQuery(e.target.value)}
              // onKeyUp={searchQueryHandler}
            ></input>
            <button>Search</button>
          </div>
          
        </div>
      </div>
    </div>
  );
}

export default HeroBanner;

