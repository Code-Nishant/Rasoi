import React from 'react'
import { BsArrowLeftShort } from "react-icons/bs";
import { BsArrowRightShort } from "react-icons/bs";
import { IoIosRadioButtonOn } from "react-icons/io";
import img from "../../../assets/Image/Cuisine/Swiper/Indian,jpg"
import "./Card_two.scss"



const Data = [
    {
      cuisineName: "Indian",
      imgSrc: img,
      name: "Biriyani",
      dishType: "veg",
      description:"ndbvhefsjv",
    },
    {
      cuisineName: "chinese",
      imgSrc: img,
      name: "Biriyani",
      dishType: "veg",
      description:"ndbvhefsjv",
    },
  ]

const Card_two = () => {
  return (
    <section className="card_two">
   
    <div className="secContainer">
      <div className="secHeader flex">
        <div className="textDiv">
          <h2 className="secTitle">Explore Cuisines</h2>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus
            ut nesciunt dolore? Harum obcaecati quia commodi voluptatem, ipsa
            quidem nesciunt temporibus eos illum minima, vero ipsum alias
            blanditiis veniam repellendus?
          </p>
        </div>
        <div className="iconsDiv">
          <BsArrowLeftShort className="icon leftIcon" />
          <BsArrowRightShort className="icon" />
        </div>
      </div>
      <div className="mainContent grid">
        {Data.map((item,key) => {
          return (
            <div key ={key} className="foodItem1">
              <div className="foodImg">
                <img src={item.imgSrc} alt="Image Title" />
                <div className="info">
                  <h5>{item.name}</h5>
                  <p>
                    {item.description}
                  </p>
                  <BsArrowRightShort className="icon" />
                </div>
              </div>
              <div className="foodFooter">
                <div className="cuisine_type">
                  <h4>{item.cuisineName}</h4>
                </div>
                <div className="name flex">
                  <h6>{item.name}</h6>
                  <span className="flex">
                    <span className="dishType">
                      <IoIosRadioButtonOn className="icon" />
                    </span>
                    {item.dishType}
                  </span>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  </section>
  )
}

export default Card_two
