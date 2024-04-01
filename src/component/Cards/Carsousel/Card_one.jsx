import React, { useState } from "react";
import { data } from "./data";
import "./Card_one.scss";
import ShowModal from "../../Modal/ShowModal.jsx"
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";


function CardOne() {
  const settings = {
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
  };

  const [open, setOpen]=useState(false);


  return (
    <div className="cardOne container">
      <Slider {...settings} className="slider">
        {data.map((d) => (
          <div key={d.id} className="item rounded-xl">
            <div className="layer rounded-t-xl">
              <img src={d.img} alt=""/>
            </div>

            <div className="description">
              <p className="text-xl font-semibold">{d.name}</p>
              <p>{d.description}</p>
              <button className='btn btn-primary bg-indigo-500 text-white text-lg px-6 py-1 rounded-xl' onClick={()=>{setOpen(true)}}>Read More</button>
            </div>

            {open && <ShowModal />}
            <ShowModal/>
          </div>
        ))}
      </Slider>
    </div>
  );
}

export default CardOne;
