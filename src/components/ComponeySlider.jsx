import React from "react";
import Slider from "react-slick";

const ComponeySlider = () => {
  const settings = {
    className: "slider variable-width",
    dots: false,
    infinite: true,
    centerMode: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    variableWidth: true,
  };

  return (
    <section className="ComponeySlider">
      <div className="container">
        <h2 className="slider__title fontProsto">Наши бренды</h2>
        <Slider {...settings}>
          <div className="box">
            <img src="./images/componey01.png" alt="componey logo" />
          </div>
          <div className="box">
            <img src="./images/componey02.png" alt="componey logo" />
          </div>
          <div className="box">
            <img src="./images/componey03.png" alt="componey logo" />
          </div>
        </Slider>
      </div>
    </section>
  );
};

export default ComponeySlider;
