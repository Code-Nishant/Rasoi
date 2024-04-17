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
import {set} from "../../../store/idSlice.js"

function CardOne({fetch}) {

  const type=fetch?.type;
  const value=fetch?.val;
  
  const {data, loading, error}=useFetch("complexSearch?",type+"="+value)
  
  // console.log(data);
 


  const val = useSelector(state => state.modal);
  const dispatch = useDispatch();


  const sliderRef = useRef(null); // Ref for accessing the Slider component
  const [slidesToShow, setSlidesToShow] = useState(4); // State to store the number of slides to show
  useEffect(() => {
    const handleResize = () => {
      // Update the number of slides to show based on the container width
      const containerWidth = sliderRef.current?.offsetWidth;
      if (containerWidth < 426) {
        setSlidesToShow(1);
      } 
      else if (containerWidth < 620) {
        setSlidesToShow(2);
      }
      else if (containerWidth < 768) {
        setSlidesToShow(3);
      } 
      // else if (containerWidth < 1200) {
      //   setSlidesToShow(4);
      // }
       else {
        setSlidesToShow(4);
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
  }, [slidesToShow]); // Empty dependency array ensures that the effect runs only once

  const settings = {
    infinite: true,
    speed: 500,
    slidesToShow: slidesToShow, // Use the state value for slidesToShow
    slidesToScroll: 1,
  };

  // const [modelId, setModelId]=useState("");
  // const id=useSelector(state=> state.id);
  // console.log(id);

  // handling button
  const btnHandler =(id)=>{
    // setModelId(id);
    // console.log(modelId);
    dispatch(set(id))
    dispatch(show());
  }

  return (
    <div className="cardOne container-fluid" ref={sliderRef}>
      <Slider {...settings} className="slider">
        {data?.results?.map((d, key) => (
          <div key={key} className="item rounded-xl">
            <div className="layer rounded-t-xl">
              <img src={d.image} alt="" />
            </div>
              <div className="description">
                <p className="text">{d.title}</p>
                {/* <p>{d.description}</p> */}
                <button className='bttn' onClick={() => btnHandler(d.id)}>Read More</button>
              </div>
          </div>
        ))}
      </Slider>
      {/* {val.value && <ShowModal />} */}
    </div>

    // <div className="cardOne container" ref={sliderRef}>
    //   <Slider {...settings} className="slider">
    //     {Data.map((d, key) => (
    //       <div key={key} className="item rounded-xl">
    //         <div className="layer rounded-t-xl">
    //           <img src={d.img} alt="" />
    //         </div>
    //           <div className="description">
    //             <h6 className="text">{d.name}</h6>
    //             {/* <button className='bttn' onClick={() => dispatch(show())}>Read More</button> */}
    //             <button className='bttn' onClick={()=>btnHandler(d.name)}>Read More</button>

    //           </div>
    //       </div>
    //     ))}
    //   </Slider>
    // </div>
  );
}

export default React.memo(CardOne);