import HireButton from "./HireButton";
import style from "./home.module.css";
import Portrait from "./Portrait";
import Presentation from "./Présentation";
import Title from "./Title";

function Home() {
  return (
    <div className="slide" id={style.home}>
      <div id={style.top}>
        <Portrait />
        <Title />
        <HireButton />
      </div>
      <Presentation />
    </div>
  );
}

export default Home;
