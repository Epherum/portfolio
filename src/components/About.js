import Image from "next/image";
import { motion } from "framer-motion";
import styles from "@/styles/About.module.scss";
import { SmoothScrollContext } from "@/SmoothScroll.context";
import { useContext } from "react";

function About() {
  const { scroll } = useContext(SmoothScrollContext);

  const goToProjects = (event) => {
    event.preventDefault();
    scroll && scroll.scrollTo("#projects-section");
  };
  return (
    <section data-scroll-section className={styles.about}>
      <motion.p
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true }}
        className={styles.aboutMe}
      >
        ABOUT ME
      </motion.p>
      <motion.p
        className={styles.description}
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true }}
      >
        I am passionate about everything that has to do with Digital Design and
        Art Direction, I enjoy working with agencies and enthusiastic people who
        want to solve problems through beautiful designs and experiences,
      </motion.p>
      {/* <motion.div
        className={styles.imageContainer}
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true }}
      >
        <Image src="/selfie2.png" alt="My Image" width={250} height={250} />
      </motion.div> */}
      <motion.div
        className={styles.desc1}
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true }}
      >
        <p>Mobile and Web Design</p>
        <p>
          I always strive to create memorable experiences that are aesthetically
          appealing. functional and distinctive. Whether it's inspiring
          marketing websites, convincing e- commerce sites or apps that are
          truly beneficial to users,
        </p>
      </motion.div>
      <motion.div
        className={styles.desc2}
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true }}
      >
        <p>Mobile and Web Design</p>
        <p>
          I always strive to create memorable experiences that are aesthetically
          appealing. functional and distinctive. Whether it's inspiring
          marketing websites, convincing e- commerce sites or apps that are
          truly beneficial to users,
        </p>
      </motion.div>
      <motion.div
        className={styles.desc3}
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true }}
      >
        <p>Mobile and Web Design</p>
        <p>
          I always strive to create memorable experiences that are aesthetically
          appealing. functional and distinctive. Whether it's inspiring
          marketing websites, convincing e- commerce sites or apps that are
          truly beneficial to users,
        </p>
      </motion.div>
      <motion.button
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true }}
        className={styles.explore}
        onClick={goToProjects}
      >
        EXPLORE MY WORK
      </motion.button>
    </section>
  );
}
export default About;
