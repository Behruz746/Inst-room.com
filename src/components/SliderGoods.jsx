import Slider from "react-slick";
import { NavLink } from "react-router-dom";
import { useContext, useEffect } from "react";
import { v4 as uuidv4 } from "uuid";

// Compoenets
import { CardOne } from "./Cards/Cards";
import AppContext from "../AppContext";

function SliderGoods() {
  const { cardOneData, setIsUrl } = useContext(AppContext);

  useEffect(() => {
    const sectionList = document.querySelectorAll(".goods__list li");
    for (let i = 0; i < sectionList.length; i++) {
      sectionList[i].addEventListener("click", () => {
        for (let j = 0; j < sectionList.length; j++) {
          sectionList[j].classList.remove("item--active");
        }
        sectionList[i].classList.add("item--active");

        if(i === 0) {
          setIsUrl("https://651adc18340309952f0df4c9.mockapi.io/cardOne");
        } else if (i === 1) {
          setIsUrl("https://651ed87344a3a8aa476919b4.mockapi.io/acsiya");
        } else if (i === 2) {
          setIsUrl("https://651ed87344a3a8aa476919b4.mockapi.io/cardXit");
        }
      });
    }
  }, []);

  const settings = {
    className: "slider variable-width",
    dots: true,
    infinite: true,
    centerMode: false,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    variableWidth: true,
  };

  return (
    <section className="SliderGoods">
      <div className="goods__header">
        <div className="container py-20">
          <ul className="goods__list">
            <li className="list__item item--active">Новинки</li>
            <li className="list__item">Акции</li>
            <li className="list__item">Хиты продаж</li>
          </ul>
        </div>
      </div>
      <div className="container py-20">
        <Slider {...settings}>
          {cardOneData.map((data) => (
            <CardOne {...data} key={uuidv4()} />
          ))}
        </Slider>
        <NavLink className="goods__link fontRaleway" to="*">
          Смотреть все
        </NavLink>
      </div>
    </section>
  );
}

export default SliderGoods;
