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
      {/* <div className="menu-tab container">
        <div className="menu-tab d-flex justify-content-around">
          <button className="bttn">Breakfast</button>
          <button className="bttn">Breakfast</button>
          <button className="bttn">Breakfast</button>
          <button className="bttn">All</button>
        </div>
      </div> */}
      {/* <div className="menu-items container mt-1">
        <div className="row">
          <div className="col-11 mx-auto">
            <div className="col">
              {items.map((element, key) => {
                const { id, image, name, description, category, dishType } =
                  element;
                return (
                  <div
                    key={key}
                    className="item1 col-12 col-md-6 col-lg-6 col-xl-4 my-5"
                  >
                    <div className="row item-inside">
                      <div className="col-12 col-md-12 col-lg-4 img-div">
                        <img
                          src={image}
                          alt="img"
                          className="img-fluid"
                          style={{
                            borderRadius: "100%",
                            overflow: "hidden",
                          }}
                        />
                      </div>
           
                      <div className="col-12 col-md-12 col-lg-8">
                        <div className="main-title pt-4 pb-3">
                          <h3>{name}</h3>
                          <p>{description}</p>
                        </div>
                        <div className="dish-type">
                          <div className="dish-type-inner d-flex justify-content-between">
                            <p>{dishType}</p>
                            <button
                              className="bttn"
                              onClick={() => dispatch(show())}
                            >
                              Read More
                            </button>
                          </div>
                          <p>rating</p>
                        </div>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div> */}

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

      {val.value && <ShowModal />}
    </div>
  );
};

export default Gallery;
