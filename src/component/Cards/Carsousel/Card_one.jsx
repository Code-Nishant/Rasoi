import React from "react";
import { data } from "./data";
import "./Card_one.scss";
// import Modal from "../../Modal";
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
  return (
    <div className="cardmain w-3/4">
      <Slider {...settings}>
        {data.map((d) => (
          <div key={d.id} className="bg-white h-[450px] text-black rounded-xl">
            <div className="h-56 flex justify-center items-center rounded-t-xl">
              <img src={d.img} alt="" className="h-44 w-44 rounded-full" />
            </div>

            <div
              className="
              flex
              flex-col
              items-center
              justify-center
              gap-4
              p-4"
            >
              <p className="text-xl font-semibold">{d.name}</p>
              <p>{d.description}</p>
              {/* <Modal /> */}
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
}

export default CardOne;
