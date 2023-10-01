import { NavLink } from "react-router-dom";
import "./style.scss";

export function MainMenu({ pageLink, icon, item }) {
  return (
    <>
      <NavLink to={pageLink} className="nav__item outLine">
        <div className="item__content">
          <img src={icon} alt="menu icon" />
          {item && (
            <div className="items__num">
              <p className="shape whiteColor fontRaleway">0</p>
            </div>
          )}
        </div>
      </NavLink>
    </>
  );
}

export const MenuLast = ({ text, pageLink }) => {
  return (
    <>
      <NavLink className="fontRaleway text" to={pageLink}>
        {text}
      </NavLink>
    </>
  );
};

export const Links = ({ link, image }) => {
  return (
    <>
      <a href={link} target="_blank">
        <img src={image} alt="link icons" />
      </a>
    </>
  );
};

export const FooterList = ({ text, link }) => {
  return (
    <>
      <NavLink to={link}>{text}</NavLink>
    </>
  );
};
