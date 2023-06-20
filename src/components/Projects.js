import "swiper/swiper-bundle.min.css";
import styles from "@/styles/Projects.module.scss";

function Projects() {
  return (
    <section data-scroll-section id="section-1" className={styles.projects}>
      <div
        className={styles.projectOne}
        data-scroll-sticky
        data-scroll
        data-scroll-target="#section-1"
      >
        <div className={styles.container1}>
          <h2 className={styles.subtitle}>
            art direction,UX/UI design, visual design,
          </h2>
          <h2 className={styles.title}>MISSGUIDED</h2>
          <p className={styles.description}>
            What started as a simple app that matched students with companies,
            quickly grew to become a leading digital recruitment tool- Appart
            helped design and launch the brand and has been their go-to product
            and design partner since launch.
          </p>
          <div className={styles.video}>
            <video src="/missguided.mp4" alt="missguided" autoPlay loop muted />
          </div>
        </div>
      </div>
      <div className={styles.projectThree} data-scroll-sticky data-scroll>
        <div className={styles.container2}>
          <h2 className={styles.subtitle}>
            art direction,UX/UI design, visual design,
          </h2>
          <h2 className={styles.title}>ZAPPER</h2>
          <p className={styles.description}>
            What started as a simple app that matched students with companies,
            quickly grew to become a leading digital recruitment tool- Appart
            helped design and launch the brand and has been their go-to product
            and design partner since launch.
          </p>
          <div className={styles.video}>
            <video src="/zapper.mp4" alt="zapper" autoPlay loop muted />
          </div>
        </div>
      </div>
    </section>
  );
}

export default Projects;
