import { AnimatePresence, motion } from "framer-motion";
import style from "./home.module.css";
import url from "../../assets/avatar-sylvain-galoustoff.png";
import { variants } from "../../utils/animations";

function Portrait() {
  return (
    <AnimatePresence>
      <motion.div
        id={style.portrait}
        variants={variants}
        initial="initial"
        animate="animate"
        exit="exit"
        transition={{ delay: 0.1, duration: 1, ease: "backInOut" }}
      >
        <img src={url} alt="Portrait de Sylvain Galoustoff" />
      </motion.div>
    </AnimatePresence>
  );
}

export default Portrait;
