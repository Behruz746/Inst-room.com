import { NavLink } from "react-router-dom";
import "./styles.scss";

export const SvgIcon = () => (
  <>
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g id="arrow-left">
        <path
          id="Vector"
          d="M15 19L8 12L15 5"
          stroke="black"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </g>
    </svg>
  </>
);

export function CardDouble(data) {
  return (
    <div className="cards__block">
      <h1>{data.text}</h1>
      <div className="card__header">
        <h2 className="card__title fontProsto">{data.cardTitle}</h2>
        <div className="card__btns">
          <button className="btn__left">
            <SvgIcon />
          </button>
          <button className="btn__right">
            <SvgIcon />
          </button>
        </div>
      </div>
      <div className="cards__container">
        <div className="card">
          <div className="card__links">
            <NavLink to={data.newsLink01}>Новинка</NavLink>
            <div className="card__icons">
              <img src="./images/bar-chart-2.svg" alt="card icon" />
              <img src="./images/heart.svg" alt="card icon" />
            </div>
          </div>
          <div className="card__img">
            <img src={data.cardImage01} alt="card images" />
          </div>
          <div className="card__position">
            <span></span>
            <span></span>
            <span></span>
            <span></span>
          </div>
          <div className="card__content">
            <h2>{data.cardDescription01}</h2>
            <div className="card__price">
              <h1 className="price__text">
                {data.cardPrice01[0]}
                <span>{data.cardPrice01[1]}</span>
              </h1>
              <div>
                <img src="./images/check.svg" alt="card icon" />
                <p>в наличии</p>
              </div>
              <button className="card__btn">
                <img src="./images/shopping-cart.svg" alt="card icon" />
              </button>
            </div>
          </div>
        </div>
        <div className="card">
          <div className="card__links">
            <NavLink to={data.newsLink02}>Новинка</NavLink>
            <div className="card__icons">
              <img src="./images/bar-chart-2.svg" alt="card icon" />
              <img src="./images/heart.svg" alt="card icon" />
            </div>
          </div>
          <div className="card__img">
            <img src={data.cardImage02} alt="card images" />
          </div>
          <div className="card__position">
            <span></span>
            <span></span>
            <span></span>
            <span></span>
          </div>
          <div className="card__content">
            <h2>{data.cardDescription02}</h2>
            <div className="card__price">
              <h1 className="price__text">
                {data.cardPrice02[0]}
                <span>{data.cardPrice02[1]}</span>
              </h1>
              <div>
                <img src="./images/check.svg" alt="card icon" />
                <p>в наличии</p>
              </div>
              <button className="card__btn">
                <img src="./images/shopping-cart.svg" alt="card icon" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export function CardOne(data) {
  return (
    <>
      <div className="card blackColor">
        <div className="card__links">
          <NavLink to={data.link}>Новинка</NavLink>
          <div className="card__icons">
            <img src="./images/bar-chart-2.svg" alt="card icon" />
            <img src="./images/heart.svg" alt="card icon" />
          </div>
        </div>
        <div className="card__img">
          <img src={data.image} alt="card images" />
        </div>
        <div className="card__position">
          <span></span>
          <span></span>
          <span></span>
          <span></span>
        </div>
        <div className="card__content">
          <h2>{data.title}</h2>
          <div className="card__price">
            <h1 className="price__text">
              {data.price[0]}
              <span>{data.price[1]}</span>
            </h1>
            <div>
              <img src="./images/check.svg" alt="card icon" />
              <p>в наличии</p>
            </div>
            <button className="card__btn">
              <img src="./images/shopping-cart.svg" alt="card icon" />
            </button>
          </div>
        </div>
      </div>
    </>
  );
}
