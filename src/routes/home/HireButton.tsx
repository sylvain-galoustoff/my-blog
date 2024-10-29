import { AnimatePresence, motion } from "framer-motion";
import { Link } from "react-router-dom";
import { variants } from "../../utils/animations";
import { IoChevronForward, IoArrowForward } from "react-icons/io5";

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
          <span className="button-icon">
            <IoChevronForward className="button-chevron" />
            <IoArrowForward className="button-arrow" />
          </span>
          <span className="button-text">Embauchez-moi !</span>
        </Link>
      </motion.span>
    </AnimatePresence>
  );
}

export default HireButton;
