import "./styles.scss";
import { NavLink } from "react-router-dom";
import Buttons from "../../components/Buttons/Buttons";

function PageNotFound() {
  return (
    <section className="App__pageError blackColor">
      <div className="container">
        <div className="pageError__image"></div>
        <div className="pageError__container">
          <h2>К сожалению, страница не найдена</h2>
          <h3>
            Но мы обязательно всё починим, <br /> а пока попробуйте:
          </h3>
          <NavLink to="/">
            <Buttons style="btnNews" content="ВЕРНУТЬСЯ НА ГЛАВНУЮ" />
          </NavLink>
          <h1>404</h1>
        </div>
      </div>
    </section>
  );
}

export default PageNotFound;
