import React from "react";
import "./ExploreCuisine.scss"
import image from "./p.svg";

function ExploreCuisine() {
  return (
    <div className="exploreCuisine container-fluid">
      <div className="inner">
        

        <div className="main">
          <div className="title">
            <h3>Cuisine</h3>
          </div>
          <div className="decription">
            <p>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quod
              aperiam nulla, error et natus nisi ipsam laboriosam veritatis,
              quos at consequatur sequi expedita facilis omnis!
            </p>
          </div>
          <div className="btn">
            <button className="button">Explore Now</button>
          </div>
        </div>

        <div className="image">
          <img src={image} alt="image" />
        </div>
      </div>
    </div>
  );
}

export default ExploreCuisine;
