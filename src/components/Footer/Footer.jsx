import { dataLink, dataList, dataListB } from "../../data/data";
import { Links, FooterList } from "../MainMenu/MainMenu";

import "./styles.scss";

function Footer() {
  return (
    <>
      <footer className="footer fontRaleway">
        <div className="container">
          <div className="footer__container">
            <nav className="footer__nav">
              <div>
                {dataList.map((data) => (
                  <FooterList {...data} key={data.id} />
                ))}
              </div>
              <div>
                {dataListB.map((data) => (
                  <FooterList {...data} key={data.id} />
                ))}
              </div>
            </nav>
            <div className="footer__contnet">
              <div className="header__logo">
                <img src="./images/LogoHeader.svg" alt="logo" />
              </div>
              <ul className="footer__number">
                <li>+7 495 120-32-14</li>
                <li>+7 495 120-32-15</li>
              </ul>
              <div className="headerB__links mt-24">
                {dataLink.map((data) => {
                  return <Links key={data.id} {...data} />;
                })}
              </div>
              <ul className="footer__domcument mt-24">
                <li>Соглашение пользователя</li>
                <li>«Copyright © Название 2023»</li>
              </ul>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}

export default Footer;
