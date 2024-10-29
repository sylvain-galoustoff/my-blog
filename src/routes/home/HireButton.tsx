import { AnimatePresence, motion } from "framer-motion";
import { Link } from "react-router-dom";
import { variants } from "../../utils/animations";

function HireButton() {
  return (
    <AnimatePresence>
      <motion.span
        variants={variants}
        initial="initial"
        animate="animate"
        exit="exit"
        transition={{ delay: 0.2, duration: 1, ease: "backInOut" }}
      >
        <Link to="/contact" className="button primary">
          Embauchez-moi !
        </Link>
      </motion.span>
    </AnimatePresence>
  );
}

export default HireButton;
