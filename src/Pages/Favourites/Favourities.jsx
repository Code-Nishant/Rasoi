import React from "react";
import "./Favourities.scss";
import bannerImage from "../../assets/Image/Favourites/coffee.jpeg";
import { useDispatch, useSelector } from "react-redux";
import { show } from "../../store/modalSlice";
import ShowModel from "../../component/Modal/ShowModal.jsx"
import Card_one from "../../component/Cards/Carsousel/Card_one"
import { useEffect } from "react";
import { useParams } from "react-router-dom";

const Favourities = () => {
  
  const val = useSelector(state => state.modal);
  const dispatch = useDispatch();

  const { sectionId } = useParams();

  useEffect(() => {
    if (sectionId) {
      const section = document.getElementById(sectionId);
      if (section) {
        section.scrollIntoView({ behavior: "smooth" });
      }
    }
  }, [sectionId]);


  return (
    <div className="favourites">
      <div className="top-banner">
        <img src={bannerImage} alt="Top Banner" className="banner-image" />
        <div className="banner-content">
          <h1 className="banner-title">Discover Our Favourite Dishes</h1>
          <p className="banner-description">
            Explore a selection of mouthwatering dishes.
          </p>
        </div>
      </div>
      <div className="fav_body">
        <hr />
        <h2>Your Favourite Dishes</h2>

        <hr />
        <div className="fav1" id="vegetarain">
        <h5 className="mt-6 fav_item">Vegetarain</h5>
        </div>
        <hr />
        <Card_one fetch={{val:"vegetarian", type:"query"}}/>
        
        <hr />
        <div className="fav2" id="biscuits">
        <h5 className="mt-6 fav_item">Biscuits</h5>
        </div>
        <hr />
        <Card_one fetch={{val:"biscuits", type:"query"}}/>

        <hr />
        <div className="fav3" id="sweets">
        <h5 className="mt-6 fav_item">Sweets</h5>
        </div>
        <hr />
        <Card_one fetch={{val:"sweets", type:"query"}}/>

        <hr />
        <div className="fav4" id="salad">
        <h5 className="mt-6 fav_item">Salad</h5>
        </div>
        <hr />
        <Card_one fetch={{val:"salad", type:"query"}}/>

        <hr />
        <div className="fav5" id="soup" >
        <h5 className="mt-6 fav_item">Soup</h5>
        </div>
        <hr />
        <Card_one fetch={{val:"soup", type:"query"}}/>

        <hr />
        <div className="fav3" id="starter">
        <h5 className="mt-6 fav_item">Starter</h5>
        </div>
        <hr />
        <Card_one fetch={{val:"starter", type:"query"}}/>

        <hr />
        <div className="fav4" id="pancakes">
        <h5 className="mt-6 fav_item">Pancakes</h5>
        </div>
        <hr />
        <Card_one fetch={{val:"pancakes", type:"query"}}/>

        <hr />
        <div className="fav5" id="icecream" >
        <h5 className="mt-6 fav_item">Ice-Cream</h5>
        </div>
        <hr />
        <Card_one fetch={{val:"icecream", type:"query"}}/>

      </div>
      {val.value && <ShowModel/>}
    </div>
  );
};

export default Favourities;
