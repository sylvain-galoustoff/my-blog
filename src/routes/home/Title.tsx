import { AnimatePresence, motion } from "framer-motion";
import style from "./home.module.css";
import { variants } from "../../utils/animations";

function Title() {
  return (
    <AnimatePresence>
      <motion.div
        id={style.titre}
        variants={variants}
        initial="initial"
        animate="animate"
        exit="exit"
        transition={{ delay: 0.15, duration: 1, ease: "backInOut" }}
      >
        <span id={style.ui}>UI</span>
        <div id={style.jobs}>
          <span className={style.job}>Developpeur</span>
          <span className={style.job}>Designer</span>
        </div>
      </motion.div>
    </AnimatePresence>
  );
}

export default Title;
