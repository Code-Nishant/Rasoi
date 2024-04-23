import React from "react";
import "./About.scss";
import img from "../../assets/Image/Contact/01.png";
import teamImg from "../../assets/Image/Contact/2.png";

import Form from "../About/Get_in_touch/Form.jsx";

function About() {
  return (
    <div className="about">
      <div className="top_part">
        <div className="img">
          <img src={img} alt="" />
        </div>

        <div className="right_part">
          <div className="label">
            <h3> About Us </h3>
          </div>
          <div className="description">
            <p>
              <i>Rasoi</i> , your ultimate destination for culinary inspiration,
              exploration, and community. At <i>Rasoi</i> , we believe that food
              has the power to bring people together, spark creativity, and
              ignite joy. Whether you're a seasoned chef or a kitchen novice,
              our mission is to empower you on your culinary journey by
              providing a treasure trove of delicious recipes, helpful tips, and
              a vibrant community of fellow food enthusiasts.Most importantly, Allrecipes connects home cooks with their greatest sources of inspiration — other home cooks. We're the world's leading digital food brand, and that inspires us to do everything possible to keep our community connected. 
            </p>
          </div>
        </div>
      </div>

      <div className="mid_section">
        <div className="mission">
          <h2>Mission</h2>
          <p>
          Our mission at <i>Rasoi</i> is to inspire and empower individuals to explore the joy of cooking, discover new flavors, and create memorable culinary experiences. We strive to provide a platform where food enthusiasts of all skill levels can find inspiration, learn new techniques,and share their love of food with others.Through our curated collection of recipes,we aim to make cooking accessible,enjoyable,and rewarding for everyone.
          </p>
        </div>
        <div className="vision">
          <h2>Vision</h2>
          <p>
          At <i>Rasoi</i>,our vision is to create a community where individuals are inspired and empowered to explore the joy of cooking, discover new flavors, and create unforgettable culinary experiences.We envision a world where people from all walks of life come together to celebrate the diversity of food,share their passion for cooking,and connect with others who share their love of gastronomy.
          </p>
        </div>
      </div>

      <div className="team_section">
        <div className="inner_team">
          <div className="title">
            <h2>The Team</h2>
            <div className="description">
            <div className="team_member">
                <h4>Nishant Choudhary</h4>
                <ul>
                  <li>User interface design</li>
                  <li>Logic building</li>
                  <li>API integration</li>
                </ul>
              </div>
              <div className="team_member">
                <h4>Mahesmati Maharana</h4>
                <ul>
                <li>Frontend development</li>
                  <li>User interface design</li>
                  
                </ul>
              </div>
            </div>
          </div>
          <div className="image">
            <img src={teamImg} alt="Team" />
          </div>
        </div>
      </div>
      <Form />
    </div>
  );
}

export default About;
