import { useContext } from "react";
import { v4 as uuidv4 } from "uuid";
import ContentLoader from "react-content-loader";

import CardDouble from "./Cards/Cards";
import AppContext from "../AppContext";

const MyLoader = (props) => {
  const arr = [1, 2, 3, 4];
  return (
    <>
      {arr.map(() => {
        return (
          <ContentLoader
            key={uuidv4()}
            speed={2}
            width={640}
            height={404}
            viewBox="0 0 640 404"
            backgroundColor="#eee8e8"
            foregroundColor="#d8d4d4"
            {...props}
          >
            <rect x="3" y="8" rx="7" ry="7" width="314" height="32" />
            <rect x="356" y="2" rx="46" ry="46" width="40" height="40" />
            <rect x="406" y="1" rx="46" ry="46" width="40" height="40" />
            <rect x="8" y="73" rx="4" ry="4" width="286" height="278" />
            <rect x="320" y="72" rx="4" ry="4" width="286" height="278" />
          </ContentLoader>
        );
      })}
    </>
  );
};

function CardsCon() {
  const { cardData, isLoad } = useContext(AppContext);
  return (
    <section className="home__cards">
      <div className="container py-20">
        <div className="cards__box">
          {isLoad ? (
            cardData.map((data) => <CardDouble {...data} key={uuidv4()} />)
          ) : (
            <MyLoader />
          )}
        </div>
      </div>
    </section>
  );
}

export default CardsCon;
