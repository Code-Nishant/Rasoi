import React from "react";
import SwiperAutoplay from "./SwiperAutoplay/SwiperAutoplay.jsx";
import Modal from "../../component/Modal/Modal.jsx";
import { BsArrowLeftShort } from "react-icons/bs";
import { BsArrowRightShort } from "react-icons/bs";
import "./Cuisine.scss";
const Cuisine = () => {
  return (
   <section className="cuisine">
    <SwiperAutoplay />
    <div className="secContainer">
      <div className="secHeader">
        <div className="textDiv">
          <h2 className="secTitle">Explore Cuisines
          </h2>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus ut nesciunt dolore? Harum obcaecati quia commodi voluptatem, ipsa quidem nesciunt temporibus eos illum minima, vero ipsum alias blanditiis veniam repellendus?

          </p>
        </div>
        <div className="iconsDiv">
        <BsArrowLeftShort className="icon" />
        <BsArrowRightShort className="icon" />

        </div>
      </div>
      <div className="mainContent">

      </div>
    </div>

   </section>
  );
}

export default Cuisine;
