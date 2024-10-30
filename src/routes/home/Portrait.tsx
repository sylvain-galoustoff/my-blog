import { AnimatePresence, motion } from "framer-motion";
import style from "./home.module.css";
import url from "../../assets/avatar-sylvain-galoustoff.png";
import { bounceTransition, linearTransition, variants } from "../../utils/animations";

function Portrait() {
  return (
    <AnimatePresence>
      <motion.div
        id={style.portrait}
        variants={variants}
        initial="initial"
        animate="animate"
        exit="exit"
        transition={{
          y: bounceTransition,
          opacity: linearTransition,
        }}
      >
        <img src={url} alt="Portrait de Sylvain Galoustoff" />
      </motion.div>
    </AnimatePresence>
  );
}

export default Portrait;
