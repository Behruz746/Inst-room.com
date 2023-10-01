import "./Header.scss";

import { MainMenu, MenuLast, Links } from "../MainMenu/MainMenu";
import { dataNav, dataMenu, dataLink } from "../../data/data";

function Header() {
  return (
    <>
      <header className="Header">
        <div className="HeaderTop">
          <div className="container">
            <div className="headerT__container">
              <div className="header__logo">
                <img src="./images/LogoHeader.svg" alt="logo" />
              </div>
              <div className="header__work-time fontRaleway text whiteColor">
                <h3>Время работы: 10:00–20:00</h3>
              </div>
              <div className="header__buy-number">
                <h2 className="whiteColor textBold fontRaleway">
                  +7 495 120-32-14
                </h2>
                <a href="#">Заказать звонок</a>
              </div>

              <nav className="headerT__nav">
                {dataNav.map((data) => {
                  return <MainMenu key={data.id} {...data} />;
                })}
              </nav>

              <div className="header__all-money fontRaleway">
                <h2 className="whiteColor text">Товаров на сумму</h2>
                <p className="whiteColor weight-700 size-16 ">2 000 ₽</p>
              </div>
            </div>
          </div>
        </div>
        <div className="HeaderBottom">
          <div className="container">
            <div className="headerB__container">
              <button className="header__btn">
                <img src="./images/menuIcon.svg" alt="menu icon" />
                <h2 className="fontRaleway whiteColor text">Каталог товаров</h2>
              </button>

              <nav className="headerB_nav">
                {dataMenu.map((data) => {
                  return <MenuLast key={data.id} {...data} />;
                })}
              </nav>

              <div className="headerB__links">
                {dataLink.map((data) => {
                  return <Links key={data.id} {...data} />;
                })}
              </div>

              <div className="headerB__search">
                <img src="./images/search.svg" alt="search icon" />
                <input type="text" placeholder="Поиск по каталогу" />
              </div>
            </div>
          </div>
        </div>
      </header>
    </>
  );
}

export default Header;
