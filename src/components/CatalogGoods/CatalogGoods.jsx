import { useEffect, useState } from "react";
import { v4 as uuidv4 } from "uuid";
import "./styles.scss";

import { list0, list1, list2, list3, list4, list5 } from "../../data/data";
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

const CatalogGoods = ({ setListTiggle, listToggle, isToggle, setIsToggle }) => {
  const [isData, setIsData] = useState([]);

  useEffect(() => {
    const sectionList = document.querySelectorAll(".catalog__list li");
    for (let i = 0; i < sectionList.length; i++) {
      sectionList[i].addEventListener("click", () => {
        for (let j = 0; j < sectionList.length; j++) {
          sectionList[j].classList.remove("item--active");
        }
        sectionList[i].classList.add("item--active");
      });

      if (!listToggle) {
        sectionList[i].classList.remove("item--active");
        console.log(i);
      }
    }
  }, [listToggle]);

  function overList() {
    setIsToggle(true);
  }

  return (
    <div
      className={
        listToggle ? `CatalogGoods CatalogGoods--active` : `CatalogGoods`
      }
    >
      <div className="catalog__container">
        <ul className="catalog__list fontProsto">
          <li
            className="catalog__item"
            onClick={() => {
              overList();
              setIsData(list0);
            }}
          >
            <h3>Малярные товары</h3>
            <MySvg />
          </li>

          <li
            className="catalog__item"
            onClick={() => {
              overList();
              setIsData(list1);
            }}
          >
            <h3>Электроинструмент</h3>
            <MySvg />
          </li>

          <li
            className="catalog__item"
            onClick={() => {
              overList();
              setIsData(list2);
            }}
          >
            <h3>Спецодежда</h3>
            <MySvg />
          </li>

          <li
            className="catalog__item"
            onClick={() => {
              overList();
              setIsData(list3);
            }}
          >
            <h3>Сезонное</h3>
            <MySvg />
          </li>

          <li
            className="catalog__item"
            onClick={() => {
              overList();
              setIsData(list4);
            }}
          >
            <h3>Для дома и дачи</h3>
            <MySvg />
          </li>
          <li
            className="catalog__item"
            onClick={() => {
              overList();
              setIsData(list5);
            }}
          >
            <h3>Инструменты</h3>
            <MySvg />
          </li>
        </ul>
      </div>

      {isToggle && (
        <div className="list__data blackColor">
          <ul className="flex f-column">
            {isData.map((data) => (
              <NavLink
                to={data.link}
                key={uuidv4()}
                onClick={() => setListTiggle(false)}
              >
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
