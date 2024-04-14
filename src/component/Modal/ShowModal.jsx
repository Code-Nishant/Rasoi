import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { hide } from "../../store/modalSlice";
import { FaTimes } from 'react-icons/fa';

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

      <div className="close-button" onClick={() => dispatch(hide())}>
          <FaTimes /> 
        </div>
     
        <div className="main">
          <div className="main_label">
            <h2>Label</h2>
            <h5>Cuisine</h5>
          </div>

          <div className="modal_box">
            <div className="container-box"></div>
            <div className="container-box"></div>
            <div className="container-box"></div>
            <div className="container-box"></div>
          </div>

          <div className="modal_banner">
           <li></li>
            
          </div>

          <p>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ab cupiditate saepe recusandae optio incidunt, ad fugiat quidem! Porro numquam, consectetur modi ratione id deleniti velit itaque debitis aliquam omnis repudiandae. Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eveniet amet officia est eaque ea, tempore, labore exercitationem optio fugit, mollitia expedita nisi consequatur! Illum asperiores explicabo enim ullam qui odit quisquam architecto molestias velit impedit iusto vero atque quidem harum labore voluptatem aut aperiam similique mollitia, natus fuga omnis sunt? Enim laborum, nulla eveniet modi atque incidunt voluptatibus veritatis aut iusto dolores ducimus praesentium mollitia quia delectus quae dolorum pariatur hic tenetur omnis magnam earum. At unde ratione possimus molestias placeat quis cupiditate expedita, iste sed, omnis modi laborum odit minima quo deleniti praesentium? Maxime voluptas veritatis nostrum accusantium quo. Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi, ea cupiditate fugiat eos expedita id nulla? Animi porro, sed recusandae optio perferendis possimus praesentium inventore provident reprehenderit quibusdam debitis dolore. Aperiam qui corrupti modi iste voluptate blanditiis quod nesciunt repudiandae soluta tenetur repellat alias corporis quasi id perspiciatis, cupiditate officiis illum autem eaque officia odit. Pariatur id harum magni aperiam in saepe doloremque nemo fugit, maxime tempora earum, cum, aliquam illum. Iusto quas commodi animi aliquid repellat iste pariatur molestias quam, totam temporibus similique et eligendi nesciunt quos consequuntur cum facere? Distinctio architecto cum optio molestiae neque iste quidem veniam!
           
          </p>
        </div>

        {/* <button className="modal-btn" onClick={() => dispatch(hide())}>
          Previous
        </button> */}

        <div className="ingredients">
          <div className="inner_ingredients">
            <h5>Ingredients</h5>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Officiis,
            reiciendis? Dolorem, eum praesentium. Rem rerum nostrum officia
            officiis id deserunt laborum, dolores nobis, suscipit consectetur
            repellat maiores nemo a exercitationem pariatur veritatis earum.
            Nemo, dolorum suscipit quasi atque dolores deleniti dolorem saepe,
            modi magnam, soluta placeat? Atque labore ratione ipsam perferendis
            itaque enim sequi, eos explicabo impedit a dignissimos dolorum
            tempora doloribus reprehenderit odit? Enim exercitationem voluptates
            illo fugiat excepturi ut, recusandae quaerat. Doloremque fugit
            possimus eligendi beatae impedit eaque, minima, dignissimos
            perspiciatis tempora quidem ut consequatur ipsum quod neque nostrum
            totam quisquam dolore accusantium dolorem itaque porro. Suscipit,
            vitae!
          </div>
        </div>
      </div>
    </>
  );
};

export default MyModal;
