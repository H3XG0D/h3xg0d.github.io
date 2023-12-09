import { FC } from "react";
import "./navigation.scss";
import { NavLink } from "react-router-dom";

const links = [
  {
    id: 1,
    selector: "home",
    name: "Home",
    pathname: "/",
  },
  {
    id: 2,
    selector: "works",
    name: "Works",
    pathname: "/works",
  },
  {
    id: 3,
    selector: "about",
    name: "About Me",
    pathname: "/about",
  },
  {
    id: 4,
    selector: "contact",
    name: "Contact",
    pathname: "/contact",
  },
];

const Navigation: FC = () => {
  return (
    <div className="nav">
      {links.map((link) => (
        <NavLink
          key={link.selector}
          className={(navData) =>
            navData.isActive ? "nav__links active" : "nav__links"
          }
          id={link.selector}
          to={link.pathname}
        >
          {link.name}
        </NavLink>
      ))}
    </div>
  );
};

export default Navigation;
