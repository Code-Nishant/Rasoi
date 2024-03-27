import React from "react";
import "./Card.scss";

function Card() {
  return (
    <div className="card container">
      <img
        src="https://imgs.search.brave.com/qCe_h20EWvz8VDjhN09eBxQoeRMBs5b8W7MjDwugPko/rs:fit:860:0:0/g:ce/aHR0cHM6Ly93d3cu/Zm9vZGllc2ZlZWQu/Y29tL3dwLWNvbnRl/bnQvdXBsb2Fkcy8y/MDIzLzEwL2hvdC1j/aG9jb2xhdGUuanBn"
        className="card-img-top"
        alt="img"
      />
      <div className="description">
        <h4>Food 1 </h4>
        
        <h5>Indian</h5>
        
      </div>
    </div>
  );
}
export default Card;
