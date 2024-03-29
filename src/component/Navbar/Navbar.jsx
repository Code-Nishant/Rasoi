import React, { useEffect, useState } from "react";
import { dataItems } from "./data.jsx";
import { Link, useLocation } from "react-router-dom";
import "./Navbar.scss";
import { SiCodechef } from "react-icons/si";
import { RxHamburgerMenu } from "react-icons/rx";
import { IoMdClose } from "react-icons/io";
import { IoSearch } from "react-icons/io5";
import { useScroll } from "../../hooks/useScroll.jsx";
// import dropDown from './dropDown'

function Navbar() {
  //state used for the decision of opening and closing of toggle navigation bar
  const [hambuggerMenu, setHambuggerMenu] = useState(false);
  
  //state used for the focus elements
  const [focus, setFocus] = useState("home");
  const handleFocus = function (value) {
    setFocus(value);
    setHambuggerMenu(false);
  };
  useEffect(() => {}, [focus]);
  const location = useLocation();
  const valClass = location.pathname.replace("/", "")
    ? location.pathname.replace("/", "")
    : "home";

  // useEffect(() => {
  //   window.scrollTo(0, 0);
  // }, [location]);



  const [show, setShow] = useState("top");
  const [lastScrollY, setLastScrollY] = useState(0);
  useEffect(() => {
    window.addEventListener("scroll", controlNavbar);
    return () => {
      window.removeEventListener("scroll", controlNavbar);
    };
  }, [lastScrollY]);

  const controlNavbar = () => {
    // console.log(window.scrollY);
    if(window.scrollY>200){
      if(window.scrollY>lastScrollY){
        setShow("hide");
      }
      else{
        setShow("show");
      }
    }
    else{
      setShow("top");
    }
    setLastScrollY(window.scrollY);
  };
  
  

  return (
    <div
      className={`navbar ${hambuggerMenu ? "" : "active"} container-fluid ${show}`}
    >
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
                // className="title"
                className={`navWrapper ${valClass === value.class ? "focus" : ""}`}
                to={value.link}
                style={{ color: "inherit", textDecoration: "inherit" }}
                onClick={() => handleFocus(value.class)}
              >
                <span className="icon">{value.icon}</span>
                <span className="title">{value.title}</span>
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
            <IoSearch className="icon" />
          </button>
        </form>
      </div>

      {/* toggle menu */}
      <div
        className="toggler"
        onClick={() => {
          setHambuggerMenu(!hambuggerMenu);
        }}
      >
        {hambuggerMenu ? (
          <IoMdClose></IoMdClose>
        ) : (
          <RxHamburgerMenu></RxHamburgerMenu>
        )}
      </div>
    </div>
  );
}

export default Navbar;
