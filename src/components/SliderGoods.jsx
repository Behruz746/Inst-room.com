import Slider from "react-slick";
import { NavLink } from "react-router-dom";
import { useContext } from "react";

// Compoenets
import { CardOne } from "./Cards/Cards";
import AppContext from "../AppContext";

function SliderGoods() {
  const { cardOneData } = useContext(AppContext);

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
            <li className="list__item">Новинки</li>
            <li className="list__item">Акции</li>
            <li className="list__item">Хиты продаж</li>
          </ul>
        </div>
      </div>
      <div className="container py-20">
        <Slider {...settings}>
          {cardOneData.map((data) => (
            <CardOne {...data} />
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
