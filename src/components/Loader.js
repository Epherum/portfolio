import React, { useEffect, useState } from "react";
import styles from "@/styles/Loader.module.scss";
import { motion, useAnimation } from "framer-motion";

const letters = ["W", "A", "S", "S", "I", "M"];

const letterVariants = {
  hidden: { opacity: 0, x: -15 },
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.5,
      ease: "easeOut",
    },
  },
  bounceRight: {
    y: [0, -17, 0],
    x: [0, 1, 0],
    transition: {
      duration: 0.7,
      ease: "easeOut",
    },
  },
  bounceLeft: {
    y: [0, -17, 0],
    x: [0, 1, 0],
    transition: {
      duration: 0.7,
      ease: "easeOut",
    },
  },
};

const containerVariants = {
  visible: {
    transition: {
      staggerChildren: 0.1,
    },
  },
  bounceRight: {
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.15,
    },
  },
  bounceLeft: {
    transition: {
      staggerChildren: 0.1,
      staggerDirection: -1,
      delayChildren: 0.05,
    },
  },
  hide: {
    rotate: 25,
    y: 500,
    transition: {
      delay: 0.7,
      duration: 0.6,
      ease: "easeIn",
    },
  },
};

function Loader() {
  const animationControls = useAnimation();

  useEffect(() => {
    const animate = async () => {
      await animationControls.start("visible");
      await animationControls.start("bounceRight");
      await animationControls.start("bounceLeft");
      await animationControls.start("hide");
    };

    animate();
  }, [animationControls]);

  useEffect(() => {
    document.body.style.backgroundColor = "#ece4e4";
    setTimeout(() => {
      document.body.style.backgroundColor = "#111111";
    }, 4500);
  }, []);

  return (
    <div className={styles.loader}>
      <div
        style={{
          overflow: "hidden",
          paddingTop: "2rem",
          display: "inline-block",
        }}
      >
        <motion.div
          initial="hidden"
          animate={animationControls}
          variants={containerVariants}
          className={styles.letters}
        >
          {letters.map((letter, index) => (
            <motion.span
              key={index}
              style={{
                display: "inline-block",
              }}
              variants={letterVariants}
            >
              {letter}
            </motion.span>
          ))}
        </motion.div>
      </div>
      <Counter />
    </div>
  );
}

export default Loader;

const counterVariants = {
  hidden: { opacity: 0 },
  counterVisible: {
    opacity: 1,
    transition: {
      delay: 0.5,
      duration: 0.5,
      ease: "easeOut",
    },
  },
  counterHide: {
    opacity: 0,
    transition: {
      delay: 2.9,
      duration: 0.5,
      ease: "easeOut",
    },
  },
};

const Counter = () => {
  const [count, setCount] = useState(0);
  const animationControls = useAnimation();

  useEffect(() => {
    const animate = async () => {
      await animationControls.start("counterVisible");
      await animationControls.start("counterHide");
    };

    animate();
  }, [animationControls]);

  useEffect(() => {
    const duration = 3700; // Total duration of the counting animation in milliseconds

    const easeOutBezier = (x) => {
      return 1 - Math.pow(1 - x, 2); // Custom easing function (slow -> fast -> fast -> slow)
    };

    let startTimestamp = null;
    let requestId = null;

    const step = (timestamp) => {
      if (!startTimestamp) startTimestamp = timestamp;

      const elapsedTime = timestamp - startTimestamp;
      const progress = Math.min(elapsedTime / duration, 1); // Calculate progress (between 0 and 1)
      const easedProgress = easeOutBezier(progress); // Apply the easing function

      const currentValue = Math.floor(easedProgress * 100); // Scale progress to count value (0 to 100)
      setCount(currentValue);

      if (progress < 1) {
        requestId = requestAnimationFrame(step);
      }
    };

    requestId = requestAnimationFrame(step);

    return () => cancelAnimationFrame(requestId);
  }, []);

  return (
    <motion.p
      initial="hidden"
      animate={animationControls}
      variants={counterVariants}
      className={styles.counter}
    >
      {count} %
    </motion.p>
  );
};
