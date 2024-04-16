import React from "react";
import "./TopBanner.scss";
import path from "../../../assets/Image/Recipes/recipe_herobanner.png";
import { useNavigate } from "react-router-dom";
import { IoSearch } from "react-icons/io5";
import { useState } from "react";

function TopBanner() {
  const [inputValue, setInputValue] = useState("");
  const navigate = useNavigate();

  // Handler function for input change
  const handleInputChange = (event) => {
    setInputValue(event.target.value);
  };

  // Handler function for form submission
  const handleSubmit = (event) => {
    event.preventDefault();
    console.log("Submitted value:", inputValue);
    navigate(`/explore/${inputValue}`);
    setInputValue("");
  };
  return (
    <div className="topBanner">
      <div className="layer-1">
        <div className="main">
          <div className="title">
            <h3>Recipe</h3>
          </div>
          <div className="description">
            <p>
              We’ve organized these recipes every way we could think of so you
              don't have to! Dietary restrictions, weeknight dinners, meal prep
              recipes, some of our most tried-and-true… no matter how you
              browse, we’re sure you’ll find just what you were looking for.
            </p>
          </div>
        </div>
        <div className="image">
          <img src={path} alt="" />
        </div>
      </div>
      <div className="layer-2">
      <div className="search-bar">
        <form onSubmit={handleSubmit} className="form">
          <input type="text" className="search-field" value={inputValue}
                onChange={handleInputChange}
                placeholder="Search what recipe you prefered to cook today"/>
          <button type="submit" className="search-button">
            <IoSearch className="icon" />
          </button>
        </form>
      </div>
        <div className="suggestion"></div>
      </div>
    </div>
  );
}
export default TopBanner;
