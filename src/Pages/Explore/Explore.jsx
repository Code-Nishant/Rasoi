import React from "react";
import "./Explore.scss";
import { useParams } from "react-router-dom";
import useFetchByQuery from "../../hooks/useFetchByQuery";
import { useDispatch, useSelector } from "react-redux";
import { show } from "../../store/modalSlice";
import { set } from "../../store/idSlice";
import ShowModal from "../../component/Modal/ShowModal";

function Explore() {
  const { query } = useParams();
  console.log(query);
  const {data,loading, err}=useFetchByQuery(query);
  // console.log(data);

//   const data = [
//     {
//       id: 640234,
//       title: "Couscous Biryani",
//       image: "https://img.spoonacular.com/recipes/640234-312x231.jpg",
//       imageType: "jpg",
//     },
//       {
//         id: 660913,
//         title: "Special Vegetable Biryani",
//         image: "https://img.spoonacular.com/recipes/660913-312x231.jpg",
//         imageType: "jpg",
//       },
//   ];
  const val = useSelector(state => state.modal);
  const dispatch =useDispatch();

  const btnHandler =(id)=>{
    // setModelId(id);
    // console.log(modelId);
    dispatch(set(id))
    dispatch(show());
  }

  return (
    <div className="explore container">
      <div className="title">
        <h4>Showing result's for {query}...</h4>
      </div>

      <div className="cards">
        {data?.results?.map((item, key) => {
          return (
            <div className="item rounded-xl" key={key}>
              <div className="layer rounded-t-xl">
                <img
                  src={item.image}
                  alt=""
                />
              </div>
              <div className="description">
                <h6 className="text">{item.title}</h6>
                <button className="bttn" onClick={() => btnHandler(item.id)}>
                  Read More
                </button>
              </div>
            </div>
          );
        })}
      </div>
      {val.value && <ShowModal/>}
    </div>

    
  );
}

export default Explore;
