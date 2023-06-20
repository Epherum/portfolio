import Image from "next/image";
import styles from "@/styles/Hero.module.scss";
import ProfilePic from "../../public/selfie.jpeg";
import star from "../../public/star.svg";
import bigStar from "../../public/big-star.svg";
import { motion, useAnimation } from "framer-motion";
import animations from "@/animations/HeroAnimations";
import { useEffect } from "react";

function Hero() {
  const {
    heyVariant,
    heyLettersVariant,
    imVariant,
    imLettersVariant,
    wassimVariant,
    wassimLettersVariant,
    linksVariant,
    linkVariant,
    imageVariant,
    subtitle1Variant,
    subtitle2Variant,
    subtitle3Variant,
    subtitleLettersVariant,
    descriptionVariant,
    buttonVariant,
    bigCircleVariant,
  } = animations;

  const controls = useAnimation();
  useEffect(() => {
    const sequence = async () => {
      await controls.start(bigCircleVariant.visible);
      await controls.start(bigCircleVariant.spin);
    };
    sequence();
  }, [controls]);

  return (
    <section data-scroll-section className={styles.hero}>
      <motion.h1
        className={styles.title}
        // data-scroll
        // data-scroll-direction="vertical"
        // data-scroll-speed="-1"
      >
        <motion.p
          variants={heyVariant}
          initial="hidden"
          animate="visible"
          className={styles.hey}
        >
          <motion.span variants={heyLettersVariant}>H</motion.span>
          <motion.span variants={heyLettersVariant}>E</motion.span>
          <motion.span variants={heyLettersVariant}>Y</motion.span>
          <motion.span variants={heyLettersVariant}>,</motion.span>
        </motion.p>
        <br />
        <motion.p
          variants={imVariant}
          initial="hidden"
          animate="visible"
          className={styles.im}
        >
          <motion.span variants={imLettersVariant}>I</motion.span>
          <motion.span variants={imLettersVariant}>'</motion.span>
          <motion.span variants={imLettersVariant}>M</motion.span>
        </motion.p>
        <motion.p variants={wassimVariant} initial="hidden" animate="visible">
          <motion.span variants={wassimLettersVariant}>&nbsp; </motion.span>
          <motion.span variants={wassimLettersVariant}>W</motion.span>
          <motion.span variants={wassimLettersVariant}>A</motion.span>
          <motion.span variants={wassimLettersVariant}>S</motion.span>
          <motion.span variants={wassimLettersVariant}>S</motion.span>
          <motion.span variants={wassimLettersVariant}>I</motion.span>
          <motion.span variants={wassimLettersVariant}>M</motion.span>
        </motion.p>
      </motion.h1>
      <motion.ul
        variants={linksVariant}
        initial="hidden"
        animate="visible"
        className={styles.links}
      >
        <motion.li variants={linkVariant}>
          <a
            href="https://www.linkedin.com/in/wassimfekih/"
            className={styles.link}
          >
            LINKEDIN
          </a>
        </motion.li>
        <motion.li variants={linkVariant}>
          <a href="https://github.com/Epherum" className={styles.link}>
            GITHUB
          </a>
        </motion.li>
        <motion.li variants={linkVariant}>
          <a href="#" className={styles.link}>
            RESUME{" "}
          </a>
        </motion.li>
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
        // data-scroll
        // data-scroll-direction="vertical"
        // data-scroll-speed="-1"
        className={styles.subtitles}
      >
        <motion.p
          variants={subtitle1Variant}
          initial="hidden"
          animate="visible"
          className={styles.subtitle1}
        >
          <motion.span variants={subtitleLettersVariant}>W</motion.span>
          <motion.span variants={subtitleLettersVariant}>E</motion.span>
          <motion.span variants={subtitleLettersVariant}>B</motion.span>
        </motion.p>
        <motion.p
          variants={subtitle2Variant}
          initial="hidden"
          animate="visible"
          className={styles.subtitle2}
        >
          <motion.span variants={subtitleLettersVariant}>E</motion.span>
          <motion.span variants={subtitleLettersVariant}>X</motion.span>
          <motion.span variants={subtitleLettersVariant}>P</motion.span>
          <motion.span variants={subtitleLettersVariant}>E</motion.span>
          <motion.span variants={subtitleLettersVariant}>R</motion.span>
          <motion.span variants={subtitleLettersVariant}>I</motion.span>
          <motion.span variants={subtitleLettersVariant}>E</motion.span>
          <motion.span variants={subtitleLettersVariant}>N</motion.span>
          <motion.span variants={subtitleLettersVariant}>C</motion.span>
          <motion.span variants={subtitleLettersVariant}>E</motion.span>
        </motion.p>
        <motion.p
          variants={subtitle3Variant}
          initial="hidden"
          animate="visible"
          className={styles.subtitle3}
        >
          <motion.span variants={subtitleLettersVariant}>D</motion.span>
          <motion.span variants={subtitleLettersVariant}>E</motion.span>
          <motion.span variants={subtitleLettersVariant}>V</motion.span>
          <motion.span variants={subtitleLettersVariant}>E</motion.span>
          <motion.span variants={subtitleLettersVariant}>L</motion.span>
          <motion.span variants={subtitleLettersVariant}>O</motion.span>
          <motion.span variants={subtitleLettersVariant}>P</motion.span>
          <motion.span variants={subtitleLettersVariant}>E</motion.span>
          <motion.span variants={subtitleLettersVariant}>R</motion.span>
        </motion.p>
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
        variants={bigCircleVariant}
        initial="hidden"
        animate={controls}
        className={styles.starContainer}
      >
        <Image src={star} alt="My Image" />
      </motion.div>
      <motion.div
        variants={bigCircleVariant}
        initial="hidden"
        animate={controls}
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
