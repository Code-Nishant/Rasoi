import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { hide } from "../../store/modalSlice";

const MyModal = ({ closeModal }) => {
  const dispatch = useDispatch();

  useEffect(() => {
    document.body.style.overflowY = "hidden";
    return () => {
      document.body.style.overflowY = "scroll";
    };
  }, []);

  return (
    <>
      <div className="modal-wrapper" onClick={() => dispatch(hide())}></div>
      <div className="modal-container">
        <div className="top_part">
          <div main_label>
            <h2>Label</h2>
            <h5>Cuisine</h5>
          </div>

          <div className="modal_box">
            <div className="container-box"></div>
            <div className="container-box"></div>
            <div className="container-box"></div>
            <div className="container-box"></div>
          </div>
        </div>

        
        <button className="modal-btn" onClick={() => dispatch(hide())}>
          Previous
        </button>

        <div className="ingredients">
          <div className="container-box">Ingredients</div>
        </div>

        <div className="modal_banner">
          <img src="" alt="Image 1" className="circle-img" />
          <img src="" alt="Image 2" className="circle-img" />
          <img src="" alt="Image 3" className="circle-img" />
          <img src="" alt="Image 4" className="circle-img" />
          <img src="" alt="Image 5" className="circle-img" />
          <img src="" alt="Image6 " className="circle-img" />
        </div>
      </div>
    </>
  );
};

export default MyModal;
