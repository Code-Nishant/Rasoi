import React from "react";
import "./Footer.scss";

import { CiFacebook } from "react-icons/ci";
import { FaInstagram } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { FaPinterest } from "react-icons/fa";
import { FaRegCopyright } from "react-icons/fa";

function Footer() {
  return (
    <div className="footer container">
      <div className="heading">
        <h2>Rasoi</h2>
      </div>
      <div className="footerItems">
        <div className="footerItem">Terms and Conditions</div>
        <div className="footerItem">Privacy Policy</div>
        <div className="footerItem">Editorial Guidline</div>
        <div className="footerItem">FAQ's</div>
        <div className="footerItem">Contact Us</div>
      </div>
      <div className="logos">
        <div className="logo facebook">
        <CiFacebook />
        </div>
        <div className="logo instagram">
          <FaInstagram />
        </div>
        <div className="logo twitter">
          <FaXTwitter />
        </div>
        <div className="logo pininterest">
          <FaPinterest />
        </div>
      </div>
      <div className="searchFeed">
        <input type="text" placeholder="Sign-up for weekly NewsPaper"></input>
      </div>

      <div className="bottomTagLine">
        &#169;
        <p>Rasoi, All Right Reserved.</p>
      </div>
    </div>
  );
}

export default Footer;
