import Image from "next/image";
import styles from "@/styles/Hero.module.scss";
import ProfilePic from "../../public/selfie.png";
import star from "../../public/star.svg";
import bigStar from "../../public/big-star.svg";

function Hero() {
  return (
    <section data-scroll-section className={styles.hero}>
      <h1 className={styles.title}>
        <span className={styles.hey}>HEY,</span> <br />
        <span className={styles.im}>I'M</span> WASSIM
      </h1>
      <ul className={styles.links}>
        <li>
          <a href="#" className={styles.link}>
            LINKEDIN
          </a>
        </li>
        <li>
          <a href="#" className={styles.link}>
            GITHUB
          </a>
        </li>
        <li>
          <a href="#" className={styles.link}>
            RESUME{" "}
          </a>
        </li>
      </ul>

      <div className={styles.imageContainer}>
        <Image
          src={ProfilePic}
          alt="My Image"
          // width={1000}
          // height={1000}
        />
      </div>
      <div className={styles.subtitles}>
        <p className={styles.subtitle1}>WEB</p>
        <p className={styles.subtitle2}>EXPERIENCE</p>
        <p className={styles.subtitle3}>DEVELOPER</p>
      </div>
      <p className={styles.description}>
        I'm a web developer who creates seamless and intuitive digital
        solutions.
      </p>
      <div className={styles.starContainer}>
        <Image src={star} alt="My Image" />
      </div>
      <div className={styles.bigStarContainer}>
        <Image src={bigStar} alt="My Image" />
      </div>
      <button className={styles.black}>IN BLACK</button>
      <button className={styles.color}>IN COLOR</button>
    </section>
  );
}

export default Hero;
