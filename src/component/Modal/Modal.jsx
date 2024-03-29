import React, { useState } from "react";
import MyModal from "./ShowModal";
import "./Modal.scss";

const Modal = () => {
  const [showModal, setShowModal] = useState(false);

  const closeModal = () => setShowModal(false);

  return (
    <>
      <button className="modal-btn" onClick={() => setShowModal(true)}>View more</button>
      {showModal && <MyModal closeModal={closeModal} />}

      <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Odit praesentium autem sit minima aliquam velit, beatae qui eveniet obcaecati libero rem vitae rerum, vero vel molestiae voluptate. Perferendis, eos nesciunt.
      Lorem ipsum dolor sit amet, consectetur adipisicing elit. Mollitia provident placeat repudiandae! Quidem adipisci impedit, cumque libero voluptatum repudiandae maiores tempore nulla velit nam quaerat similique. Maxime consequuntur dolores eaque?
      Lorem ipsum, dolor sit amet consectetur adipisicing elit. Neque et veritatis voluptas quo doloremque a ipsa provident quos velit delectus asperiores tenetur sint expedita esse, aliquid quaerat voluptatum repudiandae. Nobis accusantium beatae ipsam adipisci iusto, quas, corrupti dolor debitis id magni voluptatum rem saepe doloremque. Eos neque unde numquam sed.</p>
    </>
  );
};

export default Modal;
