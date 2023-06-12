import Image from "next/image";

import styles from "@/styles/About.module.scss";
function About() {
  return (
    <section data-scroll-section className={styles.about}>
      <p className={styles.aboutMe}>ABOUT ME</p>
      <p className={styles.description}>
        I am passionate about everything that has to do with Digital Design and
        Art Direction, I enjoy working with agencies and enthusiastic people who
        want to solve problems through beautiful designs and experiences,
      </p>
      <div className={styles.imageContainer}>
        <Image src="/selfie.png" alt="My Image" width={250} height={250} />
      </div>
      <div className={styles.desc1}>
        <p>Mobile and Web Design</p>
        <p>
          I always strive to create memorable experiences that are aesthetically
          appealing. functional and distinctive. Whether it's inspiring
          marketing websites, convincing e- commerce sites or apps that are
          truly beneficial to users,
        </p>
      </div>
      <div className={styles.desc2}>
        <p>Mobile and Web Design</p>
        <p>
          I always strive to create memorable experiences that are aesthetically
          appealing. functional and distinctive. Whether it's inspiring
          marketing websites, convincing e- commerce sites or apps that are
          truly beneficial to users,
        </p>
      </div>
      <div className={styles.desc3}>
        <p>Mobile and Web Design</p>
        <p>
          I always strive to create memorable experiences that are aesthetically
          appealing. functional and distinctive. Whether it's inspiring
          marketing websites, convincing e- commerce sites or apps that are
          truly beneficial to users,
        </p>
      </div>
      <button className={styles.explore}>EXPLORE MY WORK</button>
    </section>
  );
}

export default About;
