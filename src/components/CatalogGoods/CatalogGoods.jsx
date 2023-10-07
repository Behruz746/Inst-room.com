import "./styles.scss";

const MySvg = () => (
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
        stroke="#000"
        stroke-width="2"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
    </g>
  </svg>
);

const CatalogGoods = () => (
  <div className="CatalogGoods blackColor">
    <div className="catalog__container">
      <ul className="catalog__list fontProsto">
        <li className="catalog__item">
          <h3>Малярные товары</h3>
          <MySvg />
        </li>
        <li className="catalog__item">
          <h3>Электроинструмент</h3>
          <MySvg />
        </li>
        <li className="catalog__item">
          <h3>Спецодежда</h3>
          <MySvg />
        </li>
        <li className="catalog__item">
          <h3>Сезонное</h3>
          <MySvg />
        </li>
        <li className="catalog__item">
          <h3>Для дома и дачи</h3>
          <MySvg />
        </li>
        <li className="catalog__item">
          <h3>Инструменты</h3>
          <MySvg />
        </li>
      </ul>
    </div>
  </div>
);

export default CatalogGoods;
