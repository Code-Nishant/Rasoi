import React from "react";
import SwiperAutoplay from "./SwiperAutoplay/SwiperAutoplay.jsx";
import Modal from "../../component/Modal/Modal.jsx";
import Card_one from "../../component/Cards/Carsousel/Card_one.jsx";

import "./Cuisine.scss";

const Cuisine = () => {
  return (
    <div className="cuisine">
      <SwiperAutoplay />
      <section className="main">
        <hr />
        <h5 className="mt-6 text-left main heading">Indian Cuisine</h5>
        <hr />

        <Card_one />

        <hr />
        <h5 className="mt-6 text-left main heading">American Cuisine</h5>
        <hr />
        <Card_one />
        <hr />
        <h5 className="mt-6 text-left main heading">Asian Cuisine</h5>
        <hr />
        <Card_one />
        <hr />
        <h5 className="mt-6 text-left main heading">Chinese Cuisine</h5>
        <hr />
        <Card_one />
        <hr />
        <h5 className="mt-6 text-left main heading">French Cuisine</h5>
        <hr />
        <Card_one />
        <hr />
        <h5 className="mt-6 text-left main heading">Italian Cuisine</h5>
        <hr />
        <Card_one />
        <hr />
        <h5 className="mt-6 text-left main heading">Japanese Cuisine</h5>
        <hr />
        <Card_one />
        <hr />
        <h5 className="mt-6 text-left main heading">Mexican Cuisine</h5>
        <hr />
        <Card_one />
      </section>
    </div>
  );
};

export default Cuisine;
