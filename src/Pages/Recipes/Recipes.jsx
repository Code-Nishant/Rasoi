import React from "react";
import "./Recipes.scss";
import Card from "../../component/Cards/Card";

import TopBanner from "./TopBanner/TopBanner";



function Recipes() {
  
  return (
    <div className="recipes">
      <TopBanner className="container-fluid" />

      <Card></Card >
      <Card></Card>
      <Card></Card>
      <Card></Card>
      <Card></Card>
      <Card></Card>
    </div>

  );
}

export default Recipes;
