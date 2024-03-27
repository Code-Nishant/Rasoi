import React from "react";
import "./Card.scss";

// function Card() {
//   return (
//     <div className="container">
//       <div className="card">
//         <img
//           src="https://imgs.search.brave.com/qCe_h20EWvz8VDjhN09eBxQoeRMBs5b8W7MjDwugPko/rs:fit:860:0:0/g:ce/aHR0cHM6Ly93d3cu/Zm9vZGllc2ZlZWQu/Y29tL3dwLWNvbnRl/bnQvdXBsb2Fkcy8y/MDIzLzEwL2hvdC1j/aG9jb2xhdGUuanBn"
//           className="card-img-top"
//           alt="img"
//         />
//         <div className="description">
//           <h1>food 1</h1>
//           <p>
//             Lorem ipsum dolor sit amet consectetur adipisicing elit. Animi
//             reiciendis quis harum fuga soluta nihil sapiente eaque dignissimos
//             repellendus aliquam? Quibusdam nulla sunt deleniti tenetur?
//             Accusamus maiores, odio, maxime eligendi labore nihil similique
//             pariatur autem magnam iste mollitia sint sunt dicta nesciunt quis numquam, facere temporibus ad sapiente nulla eos.
//           </p>
//         </div>
//       </div>
//     </div>
//   );
// }

function Card() {
  return (
    <div className="card container">
      <img
        src="https://imgs.search.brave.com/qCe_h20EWvz8VDjhN09eBxQoeRMBs5b8W7MjDwugPko/rs:fit:860:0:0/g:ce/aHR0cHM6Ly93d3cu/Zm9vZGllc2ZlZWQu/Y29tL3dwLWNvbnRl/bnQvdXBsb2Fkcy8y/MDIzLzEwL2hvdC1j/aG9jb2xhdGUuanBn"
        className="card-img-top"
        alt="img"
      />
      <div className="description">
        <h3>Food 1</h3>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Animi
          reiciendis quis harum fuga soluta nihil sapiente eaque dignissimos
          repellendus aliquam? Quibusdam nulla sunt deleniti tenetur? Accusamus
          maiores, odio, maxime eligendi labore nihil similique pariatur autem
          magnam iste mollitia sint sunt dicta nesciunt quis numquam, facere
          temporibus ad sapiente nulla eos.
        </p>
      </div>
    </div>
  );
}
export default Card;
