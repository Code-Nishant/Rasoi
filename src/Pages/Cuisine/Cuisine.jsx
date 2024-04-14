import React from "react";
import SwiperAutoplay from "./SwiperAutoplay/SwiperAutoplay.jsx";
import Modal from "../../component/Modal/Modal.jsx";
import Card_one from "../../component/Cards/Carsousel/Card_one.jsx";
import { FaBowlRice } from "react-icons/fa6";
import { IoFastFood } from "react-icons/io5";
import { FaBowlFood } from "react-icons/fa6";
import { GiNoodles } from "react-icons/gi";
import { TbSalad } from "react-icons/tb";
import { LuSalad } from "react-icons/lu";
import { CiBowlNoodles } from "react-icons/ci";
import { GiBowlOfRice } from "react-icons/gi";

import "./Cuisine.scss";
import Card from "../../component/Cards/Card.jsx";

const Cuisine = () => {
  return (
    <div className="cuisine">
      <SwiperAutoplay />
      <section className="main">
        <hr />
        <div className="item1">
          <h5 className="mt-6 text-left main heading">Indian Cuisine</h5>
          <FaBowlRice />
        </div>
        <hr />
        {/* <Card_one /> */}

        <hr />
        <div className="item2">
          <h5 className="mt-6 text-left main heading">American Cuisine</h5>
          <IoFastFood />
        </div>
        <hr />
        {/* <Card_one /> */}


        <hr />
       <div className="item3">
       <h5 className="mt-6 text-left main heading">Asian Cuisine</h5>
       <FaBowlFood />
       </div>
        <hr />
        {/* <Card_one /> */}

        <hr />
        <div className="item4">
          <h5 className="mt-6 text-left main heading">Chinese Cuisine</h5>
          <GiNoodles />
        </div>
        <hr />
        {/* <Card_one /> */}

        <hr />
        <div className="item5">
        <h5 className="mt-6 text-left main heading">French Cuisine</h5>
        <LuSalad />
        </div>
        <hr />
        {/* <Card_one /> */}

      
        <hr />
        <div className="item6">
        <h5 className="mt-6 text-left main heading">Italian Cuisine</h5>
        <TbSalad />
        </div>
        <hr />
        {/* <Card_one /> */}


        <hr />
        <div className="item7">
        <h5 className="mt-6 text-left main heading">Japanese Cuisine</h5>
        <CiBowlNoodles />
        </div>
        <hr />
        {/* <Card_one /> */}


        <hr />
        <div className="item8">
        <h5 className="mt-6 text-left main heading">Mexican Cuisine</h5>
        <GiBowlOfRice />
        </div>
        <hr />
        {/* <Card_one /> */}

        <Card />

      </section>
    </div>
  );
};

export default Cuisine;
