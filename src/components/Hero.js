import Image from "next/image";
import styles from "@/styles/Hero.module.scss";
import ProfilePic from "../../public/selfie2.jpeg";
import star from "../../public/star.svg";
import bigStar from "../../public/big-star.svg";
import { motion } from "framer-motion";

function Hero() {
  const delay = 4.7;

  const imageVariant = {
    hidden: { opacity: 0, y: 100 },
    visible: {
      delay: 2,
      opacity: 1,
      y: 0,
      transition: {
        delay: 0.2 + delay,
        duration: 0.7,
        ease: "easeOut",
      },
    },
  };

  const titleVariant = {
    hidden: { opacity: 0, y: 100 },
    visible: {
      delay: 2,
      opacity: 1,
      y: 0,
      transition: {
        delay: 0.4 + delay,
        duration: 0.7,
        ease: "easeOut",
      },
    },
  };

  const subtitleVariant = {
    hidden: { opacity: 0, y: 100 },
    visible: {
      delay: 2,
      opacity: 1,
      y: 0,
      transition: {
        delay: 0.6 + delay,
        duration: 0.7,
        ease: "easeOut",
      },
    },
  };
  const linksVariant = {
    hidden: { opacity: 0, y: 100 },
    visible: {
      delay: 2,
      opacity: 1,
      y: 0,
      transition: {
        delay: 0.7 + delay,
        duration: 0.7,
        ease: "easeOut",
      },
    },
  };
  const descriptionVariant = {
    hidden: { opacity: 0, y: 100 },
    visible: {
      delay: 2,
      opacity: 1,
      y: 0,
      transition: {
        delay: 0.7 + delay,
        duration: 0.7,
        ease: "easeOut",
      },
    },
  };
  const buttonVariant = {
    hidden: { opacity: 0, y: 100 },
    visible: {
      delay: 2,
      opacity: 1,
      y: 0,
      transition: {
        delay: 0.8 + delay,
        duration: 0.7,
        ease: "easeOut",
      },
    },
  };

  return (
    <section data-scroll-section className={styles.hero}>
      <motion.h1
        variants={titleVariant}
        initial="hidden"
        animate="visible"
        className={styles.title}
      >
        <span className={styles.hey}>HEY,</span> <br />
        <span className={styles.im}>I'M</span> WASSIM
      </motion.h1>
      <motion.ul
        variants={linksVariant}
        initial="hidden"
        animate="visible"
        className={styles.links}
      >
        <li>
          <a href="#" className={styles.link}>
            LINKEDIN
          </a>
        </li>
        <li>
          <a href="#" className={styles.link}>
            GITHUB
          </a>
        </li>
        <li>
          <a href="#" className={styles.link}>
            RESUME{" "}
          </a>
        </li>
      </motion.ul>

      <motion.div
        variants={imageVariant}
        initial="hidden"
        animate="visible"
        className={styles.imageContainer}
      >
        <Image src={ProfilePic} alt="My Image" priority />
      </motion.div>
      <motion.div
        variants={subtitleVariant}
        initial="hidden"
        animate="visible"
        className={styles.subtitles}
      >
        <p className={styles.subtitle1}>WEB</p>
        <p className={styles.subtitle2}>EXPERIENCE</p>
        <p className={styles.subtitle3}>DEVELOPER</p>
      </motion.div>
      <motion.p
        variants={descriptionVariant}
        initial="hidden"
        animate="visible"
        className={styles.description}
      >
        I'm a web developer who creates seamless and intuitive digital
        solutions.
      </motion.p>
      <motion.div
        variants={imageVariant}
        initial="hidden"
        animate="visible"
        className={styles.starContainer}
      >
        <Image src={star} alt="My Image" />
      </motion.div>
      <motion.div
        variants={imageVariant}
        initial="hidden"
        animate="visible"
        className={styles.bigStarContainer}
      >
        <Image src={bigStar} alt="My Image" />
      </motion.div>
      <motion.button
        variants={buttonVariant}
        initial="hidden"
        animate="visible"
        className={styles.black}
      >
        IN BLACK
      </motion.button>
      <motion.button
        variants={buttonVariant}
        initial="hidden"
        animate="visible"
        className={styles.color}
      >
        IN COLOR
      </motion.button>
    </section>
  );
}

export default Hero;
