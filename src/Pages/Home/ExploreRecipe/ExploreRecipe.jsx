import React from "react";
import "./ExploreRecipe.scss";
import image from "./p.svg";
import { Link } from "react-router-dom";

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
              Embark on a flavor-filled journey through our recipe section, where each dish is a masterpiece waiting to be savored. From sizzling sensations to sweet surprises, our recipes are crafted to ignite your passion for cooking and leave you craving more culinary adventures.
              </p>
            </div>
            <div className="btn">
              <Link to={'/recipes'}>
              <button className="button">Explore Now</button>
              </Link>
            </div>
          </div>
        </div>
      </div>

      );
}

export default ExploreRecipe;
