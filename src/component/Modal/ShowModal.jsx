import React from "react";
import { useEffect, memo } from "react";
import { useDispatch, useSelector } from "react-redux";
import { hide } from "../../store/modalSlice";
import { FaTimes } from "react-icons/fa";
import useFetchById from "../../hooks/useFetchById";

// icons importing
import { GoDotFill } from "react-icons/go";
import { FaHeart } from "react-icons/fa";
import { FaClock } from "react-icons/fa6";
import { MdPeopleAlt } from "react-icons/md";
import { BiPlusMedical } from "react-icons/bi";

const MyModal = () => {
  const id = useSelector((state) => state.id);
  const payload = id.value.payload;
  // console.log(id.value.payload);
  const dispatch = useDispatch();

  useEffect(() => {
    document.body.style.overflowY = "hidden";
    return () => {
      document.body.style.overflowY = "scroll";
    };
  }, []);
  // console.log(payload);
  const {data, loading, error}=useFetchById(payload)
  // console.log(data)
  

  return (
    <>
      <div className="modal-wrapper" onClick={() => dispatch(hide())}></div>
      <div className="modal-container">
        {/* {payload} */}
        <div className="close-button" onClick={() => dispatch(hide())}>
          <FaTimes />
        </div>

        <div className="main">
          <div className="main_label">
            <h2>{data?.title}</h2>
            {/* <h5>Cuisine</h5> */}
          </div>

          <div className="center">
            <div className="left">
              <div className="content">
                <div className="image">
                  <img src={data?.image} alt="" />
                </div>

                <div className="details">
                  <div className="item veg">
                    <div className="icon">
                      {data?.vegetarian ? (
                        <GoDotFill className="green" />
                      ) : (
                        <GoDotFill className="red" />
                      )}
                    </div>
                    <div className="des">
                      <p>
                        {data?.vegetarian ? "Vegetarian" : "Non-Vegetarian"}
                      </p>
                    </div>
                  </div>
                  <div className="item like">
                    <div className="icon">
                      <FaHeart />
                    </div>
                    <div className="des">
                      <p>{data?.aggregateLikes}</p>
                    </div>
                  </div>
                  <div className="item health">
                    <div className="icon">
                      <BiPlusMedical />
                    </div>
                    <div className="des">
                      <p>{data?.healthScore}</p>
                    </div>
                  </div>
                  <div className="item time">
                    <div className="icon">
                      <FaClock />
                    </div>
                    <div className="des">
                      <p>{data?.readyInMinutes} mins</p>
                    </div>
                  </div>
                  <div className="item serving">
                    <div className="icon">
                      <MdPeopleAlt />
                    </div>
                    <div className="des">
                      <p>{data?.servings}</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="summary">
                <h5>Recipe Description</h5>
                <p dangerouslySetInnerHTML={{ __html: data?.summary }}></p>
              </div>
            </div>
            <div className="right">
              <div className="ingredients">
                <h5>Ingredients</h5>
                <div className="inner_ingredients">
                  <ol>
                    {data?.extendedIngredients.map((item, key) => {
                      return (
                        <li key={key} className="ingredient">
                          <h6 className="name">{item.nameClean}</h6>
                          <p className="quantity">{item.originalName}</p>
                        </li>
                      );
                    })}
                  </ol>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="cooking">
          <h5>How to Cook</h5>
          <div className="instruction">
            <ol>
              {data?.analyzedInstructions[0].steps.map((item, key) => {
                return <li key={key}>{item.step}</li>;
              })}
            </ol>
          </div>
        </div>
      </div>
    </>
  );
};

export default React.memo(MyModal);
