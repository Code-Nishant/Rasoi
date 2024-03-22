import React from "react";
import { useState } from "react";
import { dataItems } from "./data.jsx";
import { Link } from "react-router-dom";
import "./Navbar.scss";
import { SiCodechef } from "react-icons/si";
import { RxHamburgerMenu } from "react-icons/rx";
import { IoMdClose } from "react-icons/io";
import { IoSearch } from "react-icons/io5";

function Navbar() {
  const [icon, setIcon] = useState(false);
  return (
    <div className={`navbar ${icon ? "" : "active"} container-fluid`}>
      {/* logo */}
      <div className="logo">
        <Link to={"/"} className="text-link">
          <span className="icon">
            <SiCodechef />
          </span>
          <span className="text">Rasoi</span>
        </Link>
      </div>

      {/* Navigation item */}
      <div className="navItems">
        {dataItems.map((value, key) => {
          return (
            <div className="navItem" key={key}>
              <Link
                className="title"
                to={value.link}
                style={{ color: "inherit", textDecoration: "inherit" }}
              >
                <span className="icon">{value.icon}</span>
                <span>{value.title}</span>
              </Link>
            </div>
          );
        })}
      </div>

      {/* Search Bar */}
      <div className="search-bar">
        <form action="/" method="GET" className="form">
          <input type="search" placeholder="Search" className="search-field" />
          <button type="submit" className="search-button">
            <IoSearch className="icon"/>
          </button>
        </form>
      </div>

      {/* toggle menu */}
      <div
        className="toggler"
        onClick={() => {
          setIcon(!icon);
        }}
      >
        {icon ? <IoMdClose></IoMdClose> : <RxHamburgerMenu></RxHamburgerMenu>}
      </div>

    </div>
  );
}

export default Navbar;
