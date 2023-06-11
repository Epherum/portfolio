import styles from "@/styles/Nav.module.scss";
import Image from "next/image";

function Nav() {
  return (
    <nav className={styles.nav}>
      <ul className={styles.leftNav}>
        <li>
          <a href="/" className={styles.logo}>
            <Image src="/logo.svg" alt="My Image" width={31} height={31} />
          </a>
        </li>
        <li>
          <button className={styles.request}>send a request</button>
        </li>
      </ul>
      <p className={styles.wassim}>WASSIM</p>
      <ul className={styles.rightNav}>
        <li>
          <a href="/" className={styles.link}>
            home
          </a>
        </li>
        <li>
          <a href="/about" className={styles.link}>
            about
          </a>
        </li>
        <li>
          <a href="/projects" className={styles.link}>
            projects
          </a>
        </li>
        <li>
          <a href="/contact" className={styles.link}>
            contact
          </a>
        </li>
      </ul>
    </nav>
  );
}
export default Nav;
