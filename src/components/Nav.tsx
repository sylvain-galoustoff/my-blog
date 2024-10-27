import { Link } from "react-router-dom";

function Nav() {
  return (
    <nav>
      <ul>
        <li>
          <Link to="/accueil">Accueil</Link>
        </li>
        <li>
          <Link to="/projets/test">Projets</Link>
        </li>
        <li>
          <Link to="/contact">Contact</Link>
        </li>
        <li>
          <Link to="/a-propos">A propos</Link>
        </li>
      </ul>
    </nav>
  );
}

export default Nav;
