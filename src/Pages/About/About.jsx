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
              We’ve organized these recipes every way we could think of so you
              don't have to! Dietary restrictions, weeknight dinners, meal prep
              recipes, some of our most tried-and-true… no matter how you
              browse, we’re sure you’ll find just what you were looking for.
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Accusamus molestias asperiores sit necessitatibus nostrum, iste quis iusto doloribus non explicabo. Assumenda, fugit. Aspernatur omnis veritatis laborum odio totam nihil exercitationem, perspiciatis nulla culpa accusantium ut inventore illo quia quis autem, optio magni expedita animi sequi suscipit minus enim. Nisi, in?Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod sapiente molestiae impedit quos velit similique natus dolores minus ducimus ullam at molestias cupiditate tenetur aliquid, aut eaque ipsam soluta! Molestias debitis adipisci perferendis nesciunt totam soluta eveniet. Consequuntur voluptas cum natus? Nam nisi, excepturi veniam optio consequuntur fugit quae doloribus?
            </p>
          </div>
        </div>
      </div>

      <div className="mid_section">
        <div className="mission">
          <h2>Mission</h2>
          <p>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit.
            Temporibus, assumenda! Minima perspiciatis nostrum commodi animi
            adipisci quia autem. Rem quod perspiciatis consectetur ut molestiae.
           
          </p>
        </div>
        <div className="vision">
          <h2>Vision</h2>
          <p>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit.
            Temporibus, assumenda! Minima perspiciatis nostrum commodi animi
            adipisci quia autem. Rem quod perspiciatis consectetur ut molestiae.
            
          </p>
        </div>
      </div>

      <div className="team_section">
        <div className="inner_team">
          <div className="title">
            <h2>The Team</h2>
            <div className="description">
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua.
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Reprehenderit, aperiam, neque enim mollitia, cumque illum fuga laborum incidunt consequuntur sed aliquam provident ipsam accusamus odit dolorum unde at et iusto.
              </p>
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
