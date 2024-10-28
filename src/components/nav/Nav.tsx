import { NavLink } from "react-router-dom";
import style from "./nav.module.css";

function Nav() {
  return (
    <nav id={style.nav}>
      <ul>
        <li>
          <NavLink to="/accueil">Accueil</NavLink>
        </li>
        <li>
          <NavLink to="/projets">Projets</NavLink>
        </li>
        <li>
          <NavLink to="/contact">Contact</NavLink>
        </li>
        <li>
          <NavLink to="/a-propos">A propos</NavLink>
        </li>
      </ul>
    </nav>
  );
}

export default Nav;
