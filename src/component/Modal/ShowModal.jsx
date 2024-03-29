import { useEffect } from "react";

const MyModal = ({ closeModal }) => {
  useEffect(() => {
    document.body.style.overflowY = "hidden";
    return () => {
      document.body.style.overflowY = "scroll";
    };
  }, []);

  return (
    <>
      <div className="modal-wrapper" onClick={closeModal}></div>
      <div className="modal-container">
        <h2>Modal page</h2>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas
          inventore id libero in animi odio officiis dolor incidunt fuga quis
          quaerat earum praesentium, sunt exercitationem, molestiae repellendus
          dolores laudantium voluptates.
        </p>
        <button className="modal-btn" onClick={closeModal}>
          Previous
        </button>
      </div>
    </>
  );
};

export default MyModal;
