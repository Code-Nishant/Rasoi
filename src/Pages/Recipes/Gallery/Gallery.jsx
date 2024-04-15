import React, { useState } from "react";
import Menu from "./Menu";
import ShowModal from "../../../component/Modal/ShowModal.jsx";
import { useDispatch, useSelector } from "react-redux";
import { show } from "../../../store/modalSlice.js";
import "./Gallery.scss";

const Gallery = () => {
  const val = useSelector((state) => state.modal);

  const dispatch = useDispatch();

  const [items, setitems] = useState(Menu);

  return (
    <div className="gallery container">
      <div className="menuItems">
        {items.map((element, key) => {
          const { id, image, name, description, category, dishType } = element;
          return (
            <div key={key} className={`menuItem item${id}`}>
              <div className="image">
                <img src={image} alt="" />
              </div>
              <div className="body">
                <h5>{name}</h5>
                <p>{description}</p>

                <div className="lower">
                  <div className="left">
                    <p>{category}</p>
                    <p>{dishType}</p>
                  </div>
                  <div className="right">
                    <button className="bttn" onClick={() => dispatch(show())}>View</button>
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>

      {/* {val.value && <ShowModal />} */}
    </div>
  );
};

export default Gallery;
