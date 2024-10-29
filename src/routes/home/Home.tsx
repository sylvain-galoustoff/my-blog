import HireButton from "./HireButton";
import style from "./home.module.css";
import Portrait from "./Portrait";
import Title from "./Title";

function Home() {
  return (
    <div className="slide" id={style.home}>
      <div id={style.top}>
        <Portrait />
        <Title />
        <HireButton />
      </div>
      <div id={style.bottom}>
        <p className={style.presentation}>
          Je m’appelle <span className="primary">Sylvain Galoustoff</span>,
        </p>
        <p className={style.presentation}>Développeur front-end, spécialiste React.</p>
        <p className={style.presentation}>J’aime aussi créer des designs avec Figma.</p>
      </div>
    </div>
  );
}

export default Home;
