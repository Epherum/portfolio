import styles from "@/styles/Contact.module.scss";

function Contact() {
  return (
    <section data-scroll-section className={styles.contact}>
      <div className={styles.main}>
        <p className={styles.headline}>
          Interested In <br /> Working Together?
        </p>
        <p className={styles.drop}>Drop me an email</p>
        <a href="mailto:wassimfekih2@gmail.com" className={styles.email}>
          wassimfekih2@gmail.com
        </a>
      </div>
      <div className={styles.left}>
        <p>Design by Martin Briceon</p>
        <p>Developed by Wassim Fekih</p>
      </div>
      <div className={styles.right}>
        <p>back to top</p>
        <p>2023 - All Rights Reserved</p>
      </div>
      <div className={styles.buttons}>
        <button className={styles.button}>LINKEDIN</button>
        <button className={styles.button}>GITHUB</button>
        <button className={styles.button}>RESUME</button>
      </div>
    </section>
  );
}

export default Contact;
