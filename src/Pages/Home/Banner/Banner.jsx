import React from "react";
import { useRef, useState } from "react";
import "./Banner.scss";
import { dataItem } from "./data";
import { Link } from "react-router-dom";

function Banner() {
  //ref
  const itemsRef = useRef(null);

  // states
  const [isMouseDown, setIsMouseDown] = useState(false);
  const [startX, setStartX] = useState(0);
  const [scrollLeft, setScrollLeft] = useState(0);

  //handler function
  const handleMouseDown = (e) => {
    setIsMouseDown(true)
    setStartX(e.pageX - - itemsRef.current.offsetLeft);
    setScrollLeft(itemsRef.current.scrollLeft);
  };

  const handleMouseLeave = () => {
    setIsMouseDown(false);
  };

  const handleMouseUp = () => {
    setIsMouseDown(false);
  };

  const handleMouseMove = (e) => {
    if(!isMouseDown){return}
    e.preventDefault();
    const x=e.pageX-itemsRef.current.offsetLeft;
    const walk= (x-startX)*0.5;
    itemsRef.current.scrollLeft=scrollLeft-walk
  };

  return (
    <div
      className="banner container-fluid"
      ref={itemsRef}
      onMouseDown={handleMouseDown}
      onMouseLeave={handleMouseLeave}
      onMouseUp={handleMouseUp}
      onMouseMove={handleMouseMove}
    >
      {dataItem.map((item, key) => {
        return (
          <div className={`dataitem ${item.class}`} key={key}>
            {/* <Link className="link" to={item.link}>
              <img src={item.imagePath} alt="image" />
              <p>{item.title}</p>
            </Link> */}

            <a className="link" href={item.link}>
              <img src={item.imagePath} alt="image" />
              <p>{item.title}</p>
            </a>
          </div>
        );
      })}
    </div>
  );
}

export default Banner;
