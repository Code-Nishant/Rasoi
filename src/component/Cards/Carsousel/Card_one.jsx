import React, { useEffect, useState } from "react";
import { data } from "./data";
import "./Card_one.scss";
import ShowModal from "../../Modal/ShowModal.jsx"
import Modal from "../../Modal/Modal.jsx";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { useDispatch, useSelector } from "react-redux";
import { show } from "../../../store/modalSlice.js";

function CardOne() {

  const val= useSelector(state=> state.modal);//incomming of state from redux store directly
  const dispatch=useDispatch();//outgoing of state from redux store directly

  const settings = {
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
  };

  return (
    <div className="cardOne container">
      <Slider {...settings} className="slider">
        {data.map((d,key) => (
          <div key={key} className="item rounded-xl">
            <div className="layer rounded-t-xl">
              <img src={d.img} alt=""/>
            </div>

            <div className="description">
              <h4 className="text">{d.name}</h4>
              <p>{d.description}</p>
              <button className='bttn' onClick={()=>dispatch(show())}>Read More</button>
            </div>
          </div>
        ))}
      </Slider>
        {val.value && <ShowModal />}
    </div>
  );
}

export default CardOne;
