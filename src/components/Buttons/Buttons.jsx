import { useContext } from "react";

import "./styles.scss";

import AppContext from "../../AppContext";

function Buttons({ style, content }) {
  const { isData } = useContext(AppContext);
  return (
    <>
      <button type="button" className={`${style}`}>
        {content}
      </button>
    </>
  );
}

export default Buttons;
