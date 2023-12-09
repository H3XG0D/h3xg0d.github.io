export const containerAnimation = {
  hidden: {
    opacity: 0,
  },
  visible: {
    opacity: 1,
    transition: { duration: 0.8 },
  },
  exit: {
    opacity: 0,
    transition: { duration: 0.8 },
  },
};

export const sliderAnimation = {
  sliderEnter: (dir: number) => {
    return {
      x: dir > 0 ? 1000 : -1000,
      opacity: 0,
      transition: { duration: 0.2 },
    };
  },
  sliderCenter: {
    zIndex: 1,
    x: 0,
    opacity: 1,
  },
  sliderExit: (dir: number) => {
    return {
      zIndex: 0,
      x: dir < 0 ? 1000 : -1000,
      opacity: 0,
      transition: { duration: 0.2 },
    };
  },
};

export const textAnimation = {
  initial: {
    x: 0,
    y: -400,
    opacity: 0,
  },
  animate: {
    x: 0,
    y: 0,
    opacity: 1,
  },
};

export const pathAnimation = {
  initial: { pathLength: 0 },
  animate: { pathLength: 1 },
};

export const buttonsAnimation = {
  initial: {
    x: 400,
    y: 0,
    opacity: 0,
  },
  animate: {
    x: 0,
    y: 0,
    opacity: 1,
  },
};

export const modalAnimation = {
  hidden: {
    y: "100vh",
    opacity: 0,
  },
  visible: {
    y: 0,
    opacity: 1,
    transition: { duration: 0.4, type: "tween" },
  },
  exit: {
    y: "100vh",
    opacity: 0,
    transition: { duration: 0.4, type: "tween" },
  },
};
