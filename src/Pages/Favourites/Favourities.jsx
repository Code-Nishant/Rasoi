import React from "react";
import "./Favourities.scss";
import bannerImage from "../../assets/Image/Favourites/coffee.jpeg";

import Card_one from "../../component/Cards/Carsousel/Card_one"

const Favourities = () => {
  return (
    <div className="favourites">
      <div className="top-banner">
        <img src={bannerImage} alt="Top Banner" className="banner-image" />
        <div className="banner-content">
          <h1 className="banner-title">Discover Our Favourite Dishes</h1>
          <p className="banner-description">
            Explore a selection of mouthwatering dishes.
          </p>
        </div>
      </div>
      <div className="fav_body">
        <hr />
        <h2>Our Favourite Dishes</h2>

        <hr />
        <div className="fav1">
        <h5 className="mt-6 fav_item">Item1</h5>
        </div>
        <hr />
        <Card_one />
        
        <hr />
        <div className="fav2">
        <h5 className="mt-6 fav_item">Item1</h5>
        </div>
        <hr />
        <Card_one />

        <hr />
        <div className="fav3">
        <h5 className="mt-6 fav_item">Item1</h5>
        </div>
        <hr />
        <Card_one />

        <hr />
        <div className="fav4">
        <h5 className="mt-6 fav_item">Item1</h5>
        </div>
        <hr />
        <Card_one />

        <hr />
        <div className="fav5">
        <h5 className="mt-6 fav_item">Item1</h5>
        </div>
        <hr />
        <Card_one />
       

        
        


      </div>
    </div>
  );
};

export default Favourities;
