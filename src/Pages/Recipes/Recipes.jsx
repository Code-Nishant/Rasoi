import React from "react";
import Card_one from "../../component/Cards/Carsousel/Card_one.jsx";

import "./Recipes.scss";

import TopBanner from "./TopBanner/TopBanner";

function Recipes() {
  return (
    <div className="recipes">
      <TopBanner className="container-fluid" />
      <h5>trending food recipe</h5>
      <Card_one />
    </div>
  );
}

export default Recipes;
