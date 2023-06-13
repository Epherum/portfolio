import React, { useRef, useEffect } from "react";
import Swiper from "swiper";
import "swiper/swiper-bundle.min.css";

import styles from "@/styles/Projects.module.scss";

function Projects() {
  const imageContainerRef = useRef(null);
  const videoRefs = useRef([]);

  useEffect(() => {
    const swiper = new Swiper(imageContainerRef.current, {
      slidesPerView: 1,
      spaceBetween: 30,
      loop: true,
      on: {
        slideChangeTransitionEnd: () => {
          const activeSlide = swiper.slides[swiper.activeIndex];
          const isMainSlide = activeSlide.classList.contains(styles.mainSlide);
          videoRefs.current.forEach((videoRef) => {
            if (isMainSlide) {
              videoRef.play();
            } else {
              videoRef.pause();
            }
          });
        },
      },
    });

    videoRefs.current = Array.from(
      imageContainerRef.current.querySelectorAll("video")
    );

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.play();
          } else {
            entry.target.pause();
          }
        });
      },
      {
        threshold: 0.5,
      }
    );

    videoRefs.current.forEach((videoRef) => {
      observer.observe(videoRef);
    });
  }, []);

  return (
    <section data-scroll-section className={styles.projects}>
      <div
        className={`swiper-container ${styles.imageContainer}`}
        ref={imageContainerRef}
      >
        <div className={`swiper-wrapper ${styles.wrapper}`}>
          <div className={`swiper-slide ${styles.slide} ${styles.mainSlide}`}>
            <video
              src="/missguided.mp4"
              muted
              loop
              playsInline
              ref={(videoRef) => {
                videoRefs.current[0] = videoRef;
              }}
              className={styles.video}
            />
          </div>
          <div className={`swiper-slide ${styles.slide}`}>
            <video
              src="/missguided copy.mp4"
              muted
              loop
              playsInline
              ref={(videoRef) => {
                videoRefs.current[1] = videoRef;
              }}
              className={styles.video}
            />
          </div>
          <div className={`swiper-slide ${styles.slide}`}>
            <video
              src="/missguided copy 2.mp4"
              muted
              loop
              playsInline
              ref={(videoRef) => {
                videoRefs.current[2] = videoRef;
              }}
              className={styles.video}
            />
          </div>
        </div>
      </div>
    </section>
  );
}

export default Projects;
