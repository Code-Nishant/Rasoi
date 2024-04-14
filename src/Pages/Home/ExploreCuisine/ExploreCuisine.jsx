import React from "react";
import "./ExploreCuisine.scss"
import image from "./p.svg";
import { Link } from "react-router-dom";

function ExploreCuisine() {
  return (
    <div className="exploreCuisine container-fluid">
      <div className="inner">
        

        <div className="main">
          <div className="title">
            <h3>Cuisine</h3>
          </div>
          <div className="description">
            <p>
            Get ready to explore delicious foods from around the world in our cuisine section. We've gathered tasty dishes from different countries, from street snacks to fancy meals. It's like taking your taste buds on a trip! Get excited to try new flavors and foods you've never had before.
            </p>
          </div>
          <div className="btn">
            <Link to={"/cuisine"}>
            
            <button className="button">Explore Now</button>
            </Link>
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
