import React from "react";
import Image from "next/image";
import styles from "@/styles/Projects.module.scss";
function Projects() {
  return (
    <section className={styles.projects}>
      <div className={styles.imageContainer}>
        <Image src="/image.png" width={1820} height={880} />
      </div>
    </section>
  );
}

export default Projects;
