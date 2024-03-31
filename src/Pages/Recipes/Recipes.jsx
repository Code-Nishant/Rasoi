import React from "react";
import { EffectCoverflow, Pagination } from "swiper/modules";
import "./Recipes.scss";
import Card from "../../component/Cards/Card";

import TopBanner from "./TopBanner/TopBanner";

import SwiperAutoplay from "../Cuisine/SwiperAutoplay.jsx";
import SwiperEffect from "../../component/Swiper/SwiperEffect";

function Recipes() {
  return (
    <div className="recipes">
      <TopBanner className="container-fluid" />

      <h4>What will be for dinner today?</h4>
      <SwiperEffect />
      <Card></Card>
      <h5>trending food recipe</h5>
      <SwiperAutoplay />

    </div>
  );
}

export default Recipes;
