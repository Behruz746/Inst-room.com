import { useEffect, useState } from "react";
import { v4 as uuidv4 } from "uuid";
import "./styles.scss";

import { headerListData } from "../../data/data";
import { NavLink } from "react-router-dom";

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
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </g>
  </svg>
);

const CatalogGoods = ({ setListTiggle }) => {
  const [isToggle, setIsToggle] = useState(false);
  // const [isIndex, setIsIndex] = useState([]);
  console.log(isToggle);

  useEffect(() => {
    const items = document.querySelectorAll(".catalog__list li");
    items.forEach((item, index) =>
      item.addEventListener("click", () => {
        console.log(item.textContent, index);
        setIsToggle(true);

        console.log(isToggle);
      })
    );

    window.addEventListener("scroll", () => {
      setListTiggle(false);
    });
  }, []);

  return (
    <div className="CatalogGoods blackColor">
      <div className="catalog__container">
        <ul className="catalog__list fontProsto">
          {headerListData.map((data) => {
            return (
              <li className="catalog__item" key={uuidv4()}>
                <h3>{data.text}</h3>
                <MySvg />
              </li>
            );
          })}
        </ul>
      </div>

      {isToggle && (
        <div className="list__data blackColor">
          <ul className="flex f-column">
            {headerListData.map((data) => (
              <NavLink to={data.link} key={uuidv4()}>
                <li>{data.text}</li>
              </NavLink>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

export default CatalogGoods;
