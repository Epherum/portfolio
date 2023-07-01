import "swiper/swiper-bundle.min.css";
import styles from "@/styles/Projects.module.scss";

function Projects() {
  return (
    <section
      data-scroll-section
      id="projects-section"
      className={styles.projects}
    >
      <div
        className={styles.projectOne}
        // data-scroll-sticky
        // data-scroll
        data-scroll-target="projects-section"
      >
        <div className={styles.container1}>
          <h2 className={styles.subtitle}>
            Redesign of the popular e-commerce shop MISSGUIDED
          </h2>
          <h2 className={styles.title}>MISSGUIDED</h2>
          <div className={styles.video}>
            <video src="/missguided.mp4" alt="missguided" autoPlay loop muted />
          </div>
          <div className={styles.projectdesc}>
            <div className={styles.links}>
              <a href="https://wassim-missguided.web.app/" target="_blank">
                LIVE SITE
              </a>
              <a href="https://github.com/Epherum/Missguided" target="_blank">
                GITHUB
              </a>
            </div>
            <p className={styles.description}>
              With captivating animations, I built an e-commerce website that
              keeps users engaged. Bold transitions, interactive showcases, and
              smooth scrolling create a visually appealing and intuitive
              experience. These animations guide attention, enhance navigation,
              and leave a lasting impression. Built with React, Firebase
            </p>
          </div>
        </div>
      </div>
      <div className={styles.projectThree} data-scroll-sticky data-scroll>
        <div className={styles.container2}>
          <h2 className={styles.subtitle}>
            Interactive issue tracking application
          </h2>
          <h2 className={styles.title}>ZAPPER</h2>
          <div className={styles.video}>
            <video src="/zapper.mp4" alt="zapper" autoPlay loop muted />
          </div>
          <div className={styles.projectdesc}>
            <div className={styles.links}>
              <a href="https://zapperr.vercel.app/" target="_blank">
                LIVE SITE
              </a>
              <a href="https://github.com/Epherum/Zapper" target="_blank">
                GITHUB
              </a>
            </div>
            <p className={styles.description}>
              Designed with cleanliness and subtle animations, this bug tracker
              provides an enjoyable experience. The intuitive interface allows
              users to navigate effortlessly and manage bug reports effectively.
              Thoughtful animations enhance the overall usability, making the
              bug tracker a joy to use. Built with Nextjs, Firebase
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Projects;
