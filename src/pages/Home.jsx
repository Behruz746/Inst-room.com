import React from "react";

// Styles page
import "./styles.scss";

// Components
import ToolsNav from "../components/ToolsNav";
import CardsCon from "../components/CardsCon";
import ComponeySlider from "../components/ComponeySlider";
import About from "../components/About";
import SliderGoods from "../components/SliderGoods";
import NewsHome from "../components/NewsHome";

function Home() {
  return (
    <>
      <ToolsNav />
      <CardsCon />
      <ComponeySlider />
      <About />
      <SliderGoods />
      <NewsHome />
    </>
  );
}

export default Home;
