export const variants = {
  initial: {
    y: 20,
    opacity: 0,
  },
  animate: {
    y: 0,
    opacity: 1,
  },
  exit: {
    y: 10,
    opacity: 0,
  },
};

export const bounceTransition = {
  duration: 1,
  type: "spring",
  damping: 10,
  stiffness: 200,
};

export const linearTransition = {
  duration: 1,
  ease: "backInOut",
};
