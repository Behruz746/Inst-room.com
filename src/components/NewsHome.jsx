import React from "react";

// Compoenets
import Buttons from "./Buttons/Buttons";
import { NavLink } from "react-router-dom";

function NewsHome() {
  return (
    <section className="NewsHome">
      <div className="container py-20">
        <div className="NewsHome__container">
          <div className="NewsHome__content">
            <h1 className="NewsHome__title fontProsto">Новости</h1>
            <p className="text">
              Торговое или промышленное предприятие, торгово-промышленное
              объединение предпринимателей, форма организации предприятия,
              при которой его правосубъектность отличается от правосубъектности
              лиц, в нем участвующих. Компании имеют статус юридического лица.
            </p>
            <NavLink to='*'>
              <Buttons style="btnNews" content="ПЕРЕЙТИ К НОВОСТЯМ" />
            </NavLink>
          </div>
          <div className="NewsHome__cadrs">
            <div className="NewsHome__card">
              <img src="./images/new-image02.jpg" alt="card image" />
              <h3>Название новости</h3>
              <p>12 января 2023</p>
            </div>
            <div className="NewsHome__card">
              <img src="./images/new-image01.jpg" alt="card image" />
              <h3>Название новости</h3>
              <p>12 января 2023</p>
            </div>
            <div className="NewsHome__card">
              <img src="./images/new-image01.jpg" alt="card image" />
              <h3>Название новости</h3>
              <p>12 января 2023</p>
            </div>
            <div className="NewsHome__card">
              <img src="./images/new-image02.jpg" alt="card image" />
              <h3>Название новости</h3>
              <p>12 января 2023</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default NewsHome;
