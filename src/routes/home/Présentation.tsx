import { variants, bounceTransition, linearTransition } from "../../utils/animations";
import style from "./home.module.css";
import { motion } from "framer-motion";

function Presentation() {
  return (
    <div id={style.bottom}>
      <motion.p
        className={style.presentation}
        variants={{ ...variants, y: -100 }}
        initial="initial"
        animate="animate"
        transition={{ ...linearTransition, duration: 0.5, delay: 0.5 }}
      >
        Je m’appelle <span className="primary">Sylvain Galoustoff</span>,
      </motion.p>
      <motion.p
        className={style.presentation}
        variants={variants}
        initial="initial"
        animate="animate"
        transition={{ ...linearTransition, duration: 0.5, delay: 0.7 }}
      >
        Développeur front-end, spécialiste React.
      </motion.p>
      <motion.p
        className={style.presentation}
        variants={variants}
        initial="initial"
        animate="animate"
        transition={{ ...linearTransition, duration: 0.5, delay: 0.9 }}
      >
        J’aime aussi créer des designs avec Figma.
      </motion.p>
    </div>
  );
}

export default Presentation;
