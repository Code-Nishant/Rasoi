import React, { useEffect, useState } from "react";
import "./HeroBanner.scss";
import useFetch from "../../../hooks/useFetch";
import img from "../../../assets/Image/HeroBannerSection/13.jpg"

function HeroBanner() {
  // const {data,loading, err} = useFetch();

  // console.log(data);

  // console.log(data?.hits);

  return (
    <div className="heroBanner container-fluid">
      <div className="">

      <div className="backdrop-img">
        <img
          
          src={img}
          // "https://wallpaperbat.com/img/8943620-free-ai-art-image-of-kitchen-vitality.jpg"
          alt="herobanner wallpaper"
        />
      </div>
      <div className="opacity-layer"></div>
      </div>

      <div className="wrapper container">
        <div className="heroBannerContent row">
          <span className="title col-12">
            Rasoi: khana nhi zindagi ka swad 
          </span>

          <span className="subTitle col-12">
            Step into our world of tasty wonders,easy recipes for every
            craving,every day. Simple ingredients, sensational flavors await.
            Embrace the joy of cooking, one dish at a time. Start your culinary
            journey with us today!
          </span>

          <div className="searchInput col-10">
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
