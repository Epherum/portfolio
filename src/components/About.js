import Image from "next/image";
import { motion } from "framer-motion";
import styles from "@/styles/About.module.scss";
import { SmoothScrollContext } from "@/SmoothScroll.context";
import { useContext } from "react";
//import down arrow from react icons
import { FaArrowDown } from "react-icons/fa";

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
        I am passionate about everything related to software development and
        building innovative solutions. I enjoy collaborating with teams and
        individuals who are driven to solve complex problems through clean and
        efficient code.
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
        <h2>Full Stack Development</h2>
        <p>
          I strive to create memorable experiences that are aesthetically
          appealing, functional, and user-centric. Whether it's crafting
          inspiring websites or developing impactful web applications, I am
          committed to delivering solutions that enhance the user's journey.
        </p>
      </motion.div>
      <motion.div
        className={styles.desc2}
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true }}
      >
        <h2>Technology Stack</h2>
        <p>
          With a dynamic technology stack, I create powerful and user-centric
          solutions. Utilizing React, Next.js, MongoDB, SQL, and more. From
          crafting inspiring websites to building impactful experiences, I am
          dedicated to delivering solutions that elevate the user's journey.
        </p>
      </motion.div>
      <motion.div
        className={styles.desc3}
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true }}
      >
        <h2>Continuous Learning</h2>
        <p>
          I am committed to continuous learning, always staying updated with the
          latest industry trends. By actively seeking out opportunities to
          expand my knowledge and skills, I ensure that I deliver innovative
          solutions.
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
        EXPLORE MY WORK <FaArrowDown />
      </motion.button>
    </section>
  );
}
export default About;
