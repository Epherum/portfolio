import Image from "next/image";
import styles from "@/styles/Hero.module.scss";
import ProfilePic from "../../public/selfie.jpeg";
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
      <div className={styles.mainLeft}>
        <h1 className={styles.title}>
          <motion.span
            variants={heyVariant}
            initial="hidden"
            animate="visible"
            className={styles.tricksword}
          >
            <motion.span variants={heyLettersVariant} className={styles.letter}>
              H
            </motion.span>
            <motion.span variants={heyLettersVariant} className={styles.letter}>
              E
            </motion.span>
            <motion.span variants={heyLettersVariant} className={styles.letter}>
              Y
            </motion.span>
            <motion.span variants={heyLettersVariant} className={styles.letter}>
              ,
            </motion.span>
          </motion.span>
          <br />
          <motion.span
            variants={imVariant}
            initial="hidden"
            animate="visible"
            className={styles.tricksword}
          >
            <motion.span variants={imLettersVariant} className={styles.letter}>
              I
            </motion.span>
            <motion.span variants={imLettersVariant} className={styles.letter}>
              '
            </motion.span>
            <motion.span variants={imLettersVariant} className={styles.letter}>
              M
            </motion.span>
          </motion.span>
          <motion.span
            variants={wassimVariant}
            initial="hidden"
            animate="visible"
            className={styles.tricksword}
          >
            <motion.span
              variants={wassimLettersVariant}
              className={styles.letter}
            >
              &nbsp;
            </motion.span>
            <motion.span
              variants={wassimLettersVariant}
              className={styles.letter}
            >
              W
            </motion.span>
            <motion.span
              variants={wassimLettersVariant}
              className={styles.letter}
            >
              A
            </motion.span>
            <motion.span
              variants={wassimLettersVariant}
              className={styles.letter}
            >
              S
            </motion.span>
            <motion.span
              variants={wassimLettersVariant}
              className={styles.letter}
            >
              S
            </motion.span>
            <motion.span
              variants={wassimLettersVariant}
              className={styles.letter}
            >
              I
            </motion.span>
            <motion.span
              variants={wassimLettersVariant}
              className={styles.letter}
            >
              M
            </motion.span>
          </motion.span>
        </h1>
        <motion.div
          variants={linksVariant}
          initial="hidden"
          animate="visible"
          className={styles.links}
        >
          <motion.a
            variants={linkVariant}
            href="https://www.linkedin.com/in/wassimfekih/"
            target="_blank"
            className={styles.link}
          >
            LINKEDIN
          </motion.a>
          <motion.a
            variants={linkVariant}
            href="https://github.com/Epherum"
            target="_blank"
            className={styles.link}
          >
            GITHUB
          </motion.a>
          <motion.a
            variants={linkVariant}
            href="#"
            target="_blank"
            className={styles.link}
          >
            RESUME
          </motion.a>
        </motion.div>
      </div>
      <div className={styles.images}>
        <motion.div
          variants={imageVariant}
          initial="hidden"
          animate="visible"
          className={styles.selfie}
        >
          <Image
            src={ProfilePic}
            alt="Wassim Fekih"
            placeholder="blur"
            quality={100}
          />
        </motion.div>
        <motion.img
          variants={bigCircleVariant}
          initial="hidden"
          animate={controls}
          src="/big-star.svg"
          alt="big star"
          className={styles.bigStar}
        />
        <motion.img
          variants={bigCircleVariant}
          initial="hidden"
          animate={controls}
          src="/star.svg"
          alt="small star"
          className={styles.smallStar}
        />
      </div>
      <div className={styles.mainRight}>
        <h2 className={styles.hero_h2}>
          <span className={styles.hero_h2_1}>
            <motion.span
              variants={subtitle1Variant}
              initial="hidden"
              animate="visible"
              className={styles.tricksword}
            >
              <motion.span
                variants={subtitleLettersVariant}
                className={styles.letter}
              >
                W
              </motion.span>
              <motion.span
                variants={subtitleLettersVariant}
                className={styles.letter}
              >
                E
              </motion.span>
              <motion.span
                variants={subtitleLettersVariant}
                className={styles.letter}
              >
                B
              </motion.span>
            </motion.span>
            <br />
          </span>
          <span className={styles.hero_h2_2}>
            <motion.span
              variants={subtitle2Variant}
              initial="hidden"
              animate="visible"
              className={styles.tricksword}
            >
              <motion.span
                variants={subtitleLettersVariant}
                className={styles.letter}
              >
                E
              </motion.span>
              <motion.span
                variants={subtitleLettersVariant}
                className={styles.letter}
              >
                X
              </motion.span>
              <motion.span
                variants={subtitleLettersVariant}
                className={styles.letter}
              >
                P
              </motion.span>
              <motion.span
                variants={subtitleLettersVariant}
                className={styles.letter}
              >
                E
              </motion.span>
              <motion.span
                variants={subtitleLettersVariant}
                className={styles.letter}
              >
                R
              </motion.span>
              <motion.span
                variants={subtitleLettersVariant}
                className={styles.letter}
              >
                I
              </motion.span>
              <motion.span
                variants={subtitleLettersVariant}
                className={styles.letter}
              >
                E
              </motion.span>
              <motion.span
                variants={subtitleLettersVariant}
                className={styles.letter}
              >
                N
              </motion.span>
              <motion.span
                variants={subtitleLettersVariant}
                className={styles.letter}
              >
                C
              </motion.span>
              <motion.span
                variants={subtitleLettersVariant}
                className={styles.letter}
              >
                E
              </motion.span>
            </motion.span>
            <br />
          </span>
          <span className={styles.hero_h2_3}>
            <motion.span
              variants={subtitle3Variant}
              initial="hidden"
              animate="visible"
              className={styles.tricksword}
            >
              <motion.span
                variants={subtitleLettersVariant}
                className={styles.letter}
              >
                D
              </motion.span>
              <motion.span
                variants={subtitleLettersVariant}
                className={styles.letter}
              >
                E
              </motion.span>
              <motion.span
                variants={subtitleLettersVariant}
                className={styles.letter}
              >
                V
              </motion.span>
              <motion.span
                variants={subtitleLettersVariant}
                className={styles.letter}
              >
                E
              </motion.span>
              <motion.span
                variants={subtitleLettersVariant}
                className={styles.letter}
              >
                L
              </motion.span>
              <motion.span
                variants={subtitleLettersVariant}
                className={styles.letter}
              >
                O
              </motion.span>
              <motion.span
                variants={subtitleLettersVariant}
                className={styles.letter}
              >
                P
              </motion.span>
              <motion.span
                variants={subtitleLettersVariant}
                className={styles.letter}
              >
                E
              </motion.span>
              <motion.span
                variants={subtitleLettersVariant}
                className={styles.letter}
              >
                R
              </motion.span>
            </motion.span>
          </span>
        </h2>
        <motion.div
          variants={descriptionVariant}
          initial="hidden"
          animate="visible"
          className={styles.description}
        >
          I'm a web developer who creates seamless and intuitive digital
          solutions.
        </motion.div>
      </div>
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

{
  /* <motion.h1
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

      <div className={styles.images}>
        <motion.div
          variants={imageVariant}
          initial="hidden"
          animate="visible"
          className={styles.imageContainer}
        >
          <Image src={ProfilePic} alt="My Image" priority />
        </motion.div>
        <motion.div
          variants={bigCircleVariant}
          initial="hidden"
          animate={controls}
          className={styles.bigStarContainer}
        >
          <Image src={bigStar} alt="My Image" />
        </motion.div>
      </div>
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
      */
}
