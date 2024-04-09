import React, { useEffect, useState, useRef } from "react";
import { data as Data } from "./data";
import "./Card_one.scss";
import ShowModal from "../../Modal/ShowModal.jsx"
import Modal from "../../Modal/Modal.jsx";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { useDispatch, useSelector } from "react-redux";
import { show } from "../../../store/modalSlice.js";
import useFetch from "../../../hooks/useFetch.jsx";

function CardOne({fetch}) {

  const type=fetch?.type;
  const value=fetch?.val;
  const queryStr=type+"="+value
  const {data, loading,err}=useFetch(queryStr)
  // console.log(data?.hits[0].recipe.calories)
  // console.log(typeof arr);


 


  const val = useSelector(state => state.modal);
  const dispatch = useDispatch();


  const sliderRef = useRef(null); // Ref for accessing the Slider component

  const [slidesToShow, setSlidesToShow] = useState(4); // State to store the number of slides to show

  useEffect(() => {
    const handleResize = () => {
      // Update the number of slides to show based on the container width
      const containerWidth = sliderRef.current.offsetWidth;
      if (containerWidth < 426) {
        setSlidesToShow(1);
      } 
      else if (containerWidth < 620) {
        setSlidesToShow(2);
      }
      else if (containerWidth < 768) {
        setSlidesToShow(3);
      } else if (containerWidth < 1026) {
        setSlidesToShow(4);
      } else {
        setSlidesToShow(5);
      }
    };

    // Add event listener for window resize
    window.addEventListener('resize', handleResize);

    // Call handleResize initially to set the initial number of slides to show
    handleResize();

    // Cleanup function to remove event listener
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []); // Empty dependency array ensures that the effect runs only once

  const settings = {
    infinite: true,
    speed: 500,
    slidesToShow: slidesToShow, // Use the state value for slidesToShow
    slidesToScroll: 1,
  };

  return (
    <div className="cardOne container" ref={sliderRef}>
      <Slider {...settings} className="slider">
        {data?.hits.map((d, key) => (
          <div key={key} className="item rounded-xl">
            <div className="layer rounded-t-xl">
              <img src={d.recipe.image} alt="" />
            </div>
            <div className="description">
              <h4 className="text">{d.recipe.label}</h4>
              {/* <p>{d.description}</p> */}
              <button className='bttn' onClick={() => dispatch(show())}>Read More</button>
            </div>
          </div>
        ))}
      </Slider>
      {val.value && <ShowModal />}
    </div>
  );
}

export default CardOne;