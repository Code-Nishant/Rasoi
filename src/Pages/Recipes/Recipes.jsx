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
      <h5 className="mt-6 text-center main heading">Trending Recipes</h5>
      <hr />
      <Card_one fetch={{val:"", type:"mealType"}}/>
      <hr />
      <h5 className="mt-6 text-center main heading">5-mins Recipes</h5>
      <hr />
      <Gallery />

      <hr />
      <h5 className="mt-6 text-center main heading">Good Morning</h5>
      <hr />
      <Card_one fetch={{val:"breakfast", type:"mealType"}}/>
      <hr />
      <h5 className="mt-6 text-center main heading">It's Lunch time</h5>
      <hr />
      <Card_one fetch={{val:"main course", type:"mealType"}}/>
      <hr />
      <h5 className="mt-6 text-center main heading">Ready for Snacks</h5>
      <hr />
      <Card_one fetch={{val:"snack", type:"mealType"}}/>
      <hr />
      <h5 className="mt-6 text-center main heading">Family time - Dinner time</h5>
      <hr />
      <Card_one fetch={{val:"appetizer", type:"mealType"}}/>

    </div>
  );
}

export default Recipes;
