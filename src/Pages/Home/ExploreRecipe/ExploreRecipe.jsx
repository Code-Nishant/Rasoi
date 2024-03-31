import React from "react";
import "./ExploreRecipe.scss";
import image from "./p.svg";

function ExploreRecipe() {
  return (
    <div className="exploreRecipe container-fluid">
        <div className="inner">
          <div className="image">
            <img src={image} alt="image" />
          </div>
          
          <div className="main">
            <div className="title">
              <h3>Recipe</h3>
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
        </div>
      </div>

      );
}

export default ExploreRecipe;
