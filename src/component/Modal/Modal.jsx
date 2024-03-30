import React, { useState } from "react";
import MyModal from "./ShowModal";
import "./Modal.scss";

const Modal = () => {
  const [showModal, setShowModal] = useState(false);

  const closeModal = () => setShowModal(false);

  return (
    <div className="m" style={{"paddingTop":"65px"}}>
      <button className="modal-btn" onClick={() => setShowModal(true)}>View more</button>
      {showModal && <MyModal closeModal={closeModal} />}
      
    </div>
  );
};

export default Modal;
