import { Link } from "react-router-dom";
import url from "../../assets/avatar-sylvain-galoustoff.png";
import style from "./home.module.css";

function Home() {
  return (
    <div className="slide" id={style.home}>
      <div id={style.top}>
        <div id={style.portrait}>
          <img src={url} alt="Portrait de Sylvain Galoustoff" />
        </div>
        <div id={style.titre}>
          <span id={style.ui}>UI</span>
          <div id={style.jobs}>
            <span className={style.job}>Developpeur</span>
            <span className={style.job}>Designer</span>
          </div>
        </div>
        <Link to="/contact" className="button primary">
          Embauchez-moi !
        </Link>
      </div>
      <div id={style.bottom}>
        <p className={style.presentation}>
          Je m’appelle <span className="primary">Sylvain Galoustoff</span>,
        </p>
        <p className={style.presentation}>Développeur front-end, spécialiste React.</p>
        <p className={style.presentation}>J’aime aussi créer des design avec Figma.</p>
      </div>
    </div>
  );
}

export default Home;
