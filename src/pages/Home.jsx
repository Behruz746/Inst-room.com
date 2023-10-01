import React from "react";

// Styles page
import "./styles.scss";

// Components
import ToolsNav from "../components/ToolsNav";
import CardsCon from "../components/cardsCon";

function Home() {
  return (
    <>
      <ToolsNav />
      <CardsCon />
    </>
  );
}

export default Home;
