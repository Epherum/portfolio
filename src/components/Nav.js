import { motion } from "framer-motion";
import styles from "@/styles/Nav.module.scss";
import Image from "next/image";

function Nav() {
  const delay = 4.7;
  const navItems = [
    { text: "home", link: "/" },
    { text: "about", link: "/about" },
    { text: "contact", link: "/contact" },
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
          <a href="/" className={styles.logo}>
            <Image src="/logo.svg" alt="My Image" width={31} height={31} />
          </a>
        </motion.li>
        <motion.li
          variants={navItemVariants}
          initial="hidden"
          animate="visible"
        >
          <button className={styles.request}>send a request</button>
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
            <a href={item.link} className={styles.link}>
              {item.text}
            </a>
          </motion.li>
        ))}
      </ul>
    </nav>
  );
}

export default Nav;
