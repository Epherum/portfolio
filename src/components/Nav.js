import { motion } from "framer-motion";
import styles from "@/styles/Nav.module.scss";
import Image from "next/image";
import { SmoothScrollContext } from "@/SmoothScroll.context";
import { useContext } from "react";

function Nav() {
  const { scroll } = useContext(SmoothScrollContext);

  const goToAbout = (event) => {
    event.preventDefault();
    scroll && scroll.scrollTo("#about-section");
  };

  const goToProjects = (event) => {
    event.preventDefault();
    scroll && scroll.scrollTo("#projects-section");
  };

  const goToContact = (event) => {
    event.preventDefault();
    scroll && scroll.scrollTo("#contact-section");
  };

  const goToTop = (event) => {
    event.preventDefault();
    scroll && scroll.scrollTo(0);
  };

  const delay = 4.8;
  const navItems = [
    { text: "home" },
    { text: "projects" },
    { text: "about" },
    { text: "contact" },
  ];

  const navVariants = {
    hidden: { opacity: 0, y: 40 },
    visible: {
      delay: 2,
      opacity: 1,
      y: 0,
      transition: {
        delay: 0.1 + delay,
        duration: 0.5,
        ease: "easeOut",
      },
    },
  };

  const navItemVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        delay: 0.3 + delay,
        duration: 0.5,
        ease: "easeOut",
      },
    },
  };

  return (
    <nav className={styles.nav}>
      <ul className={styles.leftNav}>
        <motion.li
          variants={navItemVariants}
          initial="hidden"
          animate="visible"
        >
          <a onClick={goToTop} href="/" className={styles.logo}>
            <Image src="/logo.svg" alt="My Image" width={31} height={31} />
          </a>
        </motion.li>
        <motion.li
          variants={navItemVariants}
          initial="hidden"
          animate="visible"
        >
          <button onClick={goToContact} className={styles.request}>
            send a request
          </button>
        </motion.li>
      </ul>
      <motion.p
        className={styles.wassim}
        variants={navVariants}
        initial="hidden"
        animate="visible"
      >
        WASSIM
      </motion.p>
      <ul className={styles.rightNav}>
        {navItems.map((item, index) => (
          <motion.li
            key={index}
            variants={navItemVariants}
            initial="hidden"
            animate="visible"
            transition={{ delay: index * 0.1, ease: "easeOut", duration: 0.5 }}
          >
            <a
              onClick={
                item.text === "home"
                  ? goToTop
                  : item.text === "about"
                  ? goToAbout
                  : item.text === "projects"
                  ? goToProjects
                  : item.text === "contact"
                  ? goToContact
                  : null
              }
              href="#"
              className={styles.link}
            >
              {item.text}
            </a>
          </motion.li>
        ))}
      </ul>
    </nav>
  );
}

export default Nav;
