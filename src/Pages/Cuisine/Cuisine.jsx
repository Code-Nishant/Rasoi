import React from "react";
import SwiperAutoplay from "./SwiperAutoplay/SwiperAutoplay.jsx";
import Modal from "../../component/Modal/Modal.jsx";
import "./Cuisine.scss";
function Cuisine() {
  return (
    <div className="cuisine">
      <SwiperAutoplay />
      {/* <Modal /> */}
    </div>
  );
}

export default Cuisine;
