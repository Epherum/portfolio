const delay = 4.7;

const imageVariant = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      delay: 0.2 + delay,
      duration: 0.6,
      ease: "easeOut",
    },
  },
};

const heyVariant = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.05,
      delayChildren: 0.6 + delay,
    },
  },
};

const heyLettersVariant = {
  hidden: { y: 100, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: {
      duration: 0.3,
      ease: "easeOut",
    },
  },
};
const imVariant = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.05,
      delayChildren: 0.8 + delay,
    },
  },
};

const imLettersVariant = {
  hidden: { y: 100, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,

    transition: {
      duration: 0.3,
      ease: "easeOut",
    },
  },
};
const wassimVariant = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.05,
      delayChildren: 0.9 + delay,
    },
  },
};

const wassimLettersVariant = {
  hidden: { y: 100, opacity: 0 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.3,
      ease: [0.215, 0.41, 0.355, 1],
    },
  },
};

const subtitle1Variant = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.05,
      delayChildren: 0.9 + delay,
    },
  },
};
const subtitle2Variant = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.05,
      delayChildren: 1 + delay,
    },
  },
};
const subtitle3Variant = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.05,
      delayChildren: 1.4 + delay,
    },
  },
};
const subtitleLettersVariant = {
  hidden: { y: 100, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: {
      duration: 0.4,
      ease: [0.215, 0.41, 0.355, 1],
    },
  },
};

const linksVariant = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.05,
      delayChildren: 1.6 + delay,
    },
  },
};

const linkVariant = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.7,
      ease: "easeOut",
    },
  },
};

const descriptionVariant = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      delay: 1.5 + delay,
      duration: 0.7,
      ease: "easeOut",
    },
  },
};
const buttonVariant = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    delay: 2,
    opacity: 1,
    y: 0,
    transition: {
      delay: 1.7 + delay,
      duration: 0.7,
      ease: "easeOut",
    },
  },
};

const bigCircleVariant = {
  //make it spin infintly
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      delay: 0.4 + delay,
      duration: 0.6,
      ease: "easeOut",
    },
  },
  spin: {
    rotate: 360,
    transition: {
      repeat: Infinity,
      duration: 5,
      ease: "easeInOut",
      repeatType: "reverse",
    },
  },
};

const HeroAnimations = {
  imageVariant,
  heyVariant,
  heyLettersVariant,
  imVariant,
  imLettersVariant,
  wassimVariant,
  wassimLettersVariant,
  subtitle1Variant,
  subtitle2Variant,
  subtitle3Variant,
  subtitleLettersVariant,
  linksVariant,
  linkVariant,
  descriptionVariant,
  buttonVariant,
  bigCircleVariant,
};

export default HeroAnimations;
