import React from "react";
import "./Banner.scss";
import { dataItem } from "./data";
import { Link } from "react-router-dom";

function Banner() {

  return (
    <div className="banner">
      {dataItem.map((item, key) => {
        return (
          <div className={`dataitem ${item.class}`} key={key}>
            
              <Link className="link">
                <img src={item.imagePath} alt="image" />
                <p>{item.title}</p>
              </Link>
          </div>
        );
      })}
    </div>
  );
}

export default Banner;
