import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { hide } from "../../store/modalSlice";
 

const MyModal = ({ closeModal }) => {
  
  const dispatch=useDispatch();

  useEffect(() => {
    document.body.style.overflowY = "hidden";
    return () => {
      document.body.style.overflowY = "scroll";
    };
  }, []);

  return (
    <>
      
      <div className="modal-wrapper" onClick={()=>dispatch(hide())}></div>
      <div className="modal-container">
        <h2>Label</h2>
        <h5>Cuisine</h5>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas
          inventore id libero in animi odio officiis dolor incidunt fuga quis
          quaerat earum praesentium, sunt exercitationem, molestiae repellendus
          dolores laudantium voluptates.
          lorem500
        </p>
        {/* <button className="modal-btn" onClick={closeModal}> */}
        <button className="modal-btn" onClick={()=>dispatch(hide())}>
          Previous
        </button>
      </div>
    </>
  );
};

export default MyModal;
