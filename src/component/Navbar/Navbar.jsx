import React from "react";
import { useState } from "react";
import { dataItems } from "./data.jsx";
import { Link } from "react-router-dom";
import "./Navbar.scss";
import { RxHamburgerMenu } from "react-icons/rx";
import { IoMdClose } from "react-icons/io";

function Navbar() {
  const [icon, setIcon] = useState(false);
  return (
    <div className={`navbar ${icon ? "" : "active"}`}>
      {/* logo */}
      <div className="logo">
        <Link to={"/"} className="text-link">
          <span>
           
          </span>
        </Link>
      </div>

      <div className="navItems">
        {dataItems.map((value, key) => {
          return (
            <div className="navItem" key={key}>
              <span className="icon">{value.icon}</span>
              <Link
                className="title"
                to={value.link}
                style={{ color: "inherit", textDecoration: "inherit" }}
              >
                {value.title}
              </Link>
            </div>
          );
        })}
      </div>

      <div className="toggler"onClick={() => {setIcon(!icon);}}>
        {icon ? <IoMdClose></IoMdClose> : <RxHamburgerMenu></RxHamburgerMenu>}
      </div>
    </div>
  );
}

export default Navbar;
