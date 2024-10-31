import { AnimatePresence, motion } from "framer-motion";
import { bounceTransition, linearTransition, variants } from "../../utils/animations";
import ButtonLink from "../../components/buttons/ButtonLink";

function HireButton() {
  return (
    <AnimatePresence>
      <motion.span
        variants={variants}
        initial="initial"
        animate="animate"
        exit="exit"
        transition={{
          y: { ...bounceTransition, delay: 0.2 },
          opacity: { ...linearTransition, delay: 0.2 },
        }}
      >
        <ButtonLink to="/contact" label="Embauchez-moi !" variant="primary" />
      </motion.span>
    </AnimatePresence>
  );
}

export default HireButton;
