import React from "react";

// Styles page
import "./styles.scss";

// Components
import ToolsNav from "../components/ToolsNav";
import CardsCon from "../components/cardsCon";
import ComponeySlider from "../components/ComponeySlider";

function Home() {
  return (
    <>
      <ToolsNav />
      <CardsCon />
      <ComponeySlider />
    </>
  );
}

export default Home;
