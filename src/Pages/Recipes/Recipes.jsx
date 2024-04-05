import React from "react";
import Card_one from "../../component/Cards/Carsousel/Card_one.jsx";
import Card from "../../component/Cards/Card.jsx";
import Gallery from "./Gallery/Gallery.jsx";

import "./Recipes.scss";

import TopBanner from "./TopBanner/TopBanner";

function Recipes() {
  return (
    <div className="recipes">
      <TopBanner className="container-fluid" />
      <hr />
      <h5 className="mt-6 text-center main heading">Explore Recipes</h5>
      <hr />
      <Card_one />

      <hr />
      <h5 className="mt-6 text-center main heading">Explore Recipes</h5>
      <hr />

      <Gallery />
      <hr />
      <h5 className="mt-6 text-center main heading">Explore Recipes</h5>
      <hr />
      <Card_one />
      <hr />
      <h5 className="mt-6 text-center main heading">Explore Recipes</h5>
      <hr />
      <Card_one />
      <hr />
      <h5 className="mt-6 text-center main heading">Explore Recipes</h5>
      <hr />
      <Card_one />

      {/* <Card /> */}
    </div>
  );
}

export default Recipes;
