import { NavLink } from "react-router-dom";
import Buttons from "./Buttons/Buttons";

function ToolsNav() {
  return (
    <section className="ToolsNav">
      <div className="container py-20">
        <div className="home__tools-nav">
          <div className="tools__card card__biger">
            <div className="card__img images01"></div>
            <h1 className="card__title fontProsto">
              DeWALT - Инструмент с настоящим характером
            </h1>
            <NavLink to="/">
              <Buttons style="btnNews" content="ПЕРЕЙТИ В КАТАЛОГ" />
            </NavLink>
            <NavLink to="/" className="card__link">
              <img src="./images/arrow-left.svg" alt="arrow icon" />
            </NavLink>
          </div>

          <div className="tools__card card__big">
            <div className="card__img images02"></div>
            <h1 className="card__title fontProsto">Акции</h1>
            <NavLink to="/" className="card__link">
              <img src="./images/arrow-left.svg" alt="arrow icon" />
            </NavLink>
          </div>

          <div className="card__container">
            <div className="tools__card card__smaill">
              <div className="card__img images03"></div>
              <h1 className="card__title fontProsto">Новое поступление</h1>
              <NavLink to="/" className="card__link">
                <img src="./images/arrow-left.svg" alt="arrow icon" />
              </NavLink>
            </div>

            <div className="tools__card card__smaill">
              <div className="card__img images04"></div>
              <h1 className="card__title fontProsto">Акции на сверла</h1>
              <NavLink to="/" className="card__link">
                <img src="./images/arrow-left.svg" alt="arrow icon" />
              </NavLink>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default ToolsNav;
