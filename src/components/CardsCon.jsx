import { useContext } from 'react';
import { v4 as uuidv4 } from 'uuid';

import CardDouble from "./Cards/Cards";
import AppContext from "../AppContext";

function CardsCon() {
  const {cardData} = useContext(AppContext);
  console.log(cardData, 'card data');

  return (
    <section className="home__cards">
      <div className="container py-20">
        <div className="cards__box">
          {cardData.map((data) => (
            <CardDouble {...data} key={uuidv4()} />
          ))}
        </div>
      </div>
    </section>
  );
}

export default CardsCon;
