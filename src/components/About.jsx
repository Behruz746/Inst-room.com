import React from "react";
import { NavLink } from "react-router-dom";

//compoenets
import Buttons from "./Buttons/Buttons";

function About() {
  return (
    <section className="About blackColor">
      <div className="container">
        <div className="about__container">
          <div className="about__image">
            <img src="./images/About-image.png" alt="about image" />
          </div>
          <div className="about__content">
            <h1 className="about__title fontProsto titleH2 weight-400">
              О нас
            </h1>
            <p className="about__text fontRaleway">
              Торговое или промышленное предприятие, торгово-промышленное
              объединение предпринимателей, форма организации предприятия,
              при которой его правосубъектность отличается от правосубъектности
              лиц, в нем участвующих. <br /> <br /> Торговое или промышленное
              предприятие, торгово-промышленное объединение предпринимателей,
              форма организации предприятия
            </p>
            <NavLink to="/catalog">
              <Buttons style="btnNext" content="ПЕРЕЙТИ В КАТАЛОГ" />
            </NavLink>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;
