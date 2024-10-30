import { NavLink } from "react-router-dom";
import style from "./nav.module.css";
import pages from "../../utils/pages";
import { usePageContext } from "../../context/PageContext";

function Nav() {
  const { setPageIndex } = usePageContext();

  const HandleNavClick = (pathname: string) => {
    const newIndex = pages.indexOf(pathname);
    setPageIndex(newIndex);
  };

  return (
    <nav id={style.nav}>
      <ul>
        <li>
          <NavLink to="/accueil" onClick={() => HandleNavClick("/accueil")}>
            Accueil
          </NavLink>
        </li>
        <li>
          <NavLink to="/projets" onClick={() => HandleNavClick("/projets")}>
            Projets
          </NavLink>
        </li>
        <li>
          <NavLink to="/contact" onClick={() => HandleNavClick("/contact")}>
            Contact
          </NavLink>
        </li>
        <li>
          <NavLink to="/a-propos" onClick={() => HandleNavClick("/a-propos")}>
            A propos
          </NavLink>
        </li>
      </ul>
    </nav>
  );
}

export default Nav;
