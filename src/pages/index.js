import Head from "next/head";
import styles from "@/styles/Home.module.scss";
import Hero from "@/components/Hero";
import Nav from "@/components/Nav";
import About from "@/components/About";
import Projects from "@/components/Projects";
import Contact from "@/components/Contact";
import Loader from "@/components/Loader";
import { SmoothScrollProvider } from "@/SmoothScroll.context";
import Marquee from "react-fast-marquee";
import { motion } from "framer-motion";

const FeaturedProjectsVariant1 = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.05,
      delayChildren: 0.1,
    },
  },
};
const FeaturedProjectsVariant2 = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.05,
      delayChildren: 0.3,
    },
  },
};
const FeaturedProjectsLettersVariant = {
  hidden: {
    opacity: 0,
    y: 50,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
      ease: "easeOut",
    },
  },
};

export default function Home() {
  return (
    <SmoothScrollProvider options={{ smooth: true }}>
      <Head>
        <title>Wassim Fekih</title>
        <meta name="description" content="Wassim Fekih web portfolio" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={styles.main}>
        <Loader />
        <Nav />
        <Hero />
        <Marqueee />
        <About />
        <FeaturedProjects />
        <Projects />
        <Contact />
      </main>
    </SmoothScrollProvider>
  );
}

const Marqueee = () => {
  return (
    <div data-scroll-section className={styles.marquee} id="about-section">
      <Marquee speed={100}>
        <div className={styles.marquee__inner}>
          <span>
            DESIGNER &nbsp; • &nbsp; CONTENT CREATOR &nbsp; • &nbsp; UX
            RESEARCHER &nbsp; • &nbsp; UX DESIGNER &nbsp; • &nbsp; CONTENT
            CREATOR &nbsp; • &nbsp; UX RESEARCHER &nbsp; • &nbsp; UX DESIGNER
            &nbsp; • &nbsp; CONTENT CREATOR &nbsp; • &nbsp; UX RESEARCHER &nbsp;
            • &nbsp;
          </span>
        </div>
      </Marquee>
    </div>
  );
};

const FeaturedProjects = () => {
  return (
    <section data-scroll-section className={styles.featured}>
      <div>
        <motion.p
          variants={FeaturedProjectsVariant1}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          <motion.span variants={FeaturedProjectsLettersVariant}>F</motion.span>
          <motion.span variants={FeaturedProjectsLettersVariant}>E</motion.span>
          <motion.span variants={FeaturedProjectsLettersVariant}>A</motion.span>
          <motion.span variants={FeaturedProjectsLettersVariant}>T</motion.span>
          <motion.span variants={FeaturedProjectsLettersVariant}>U</motion.span>
          <motion.span variants={FeaturedProjectsLettersVariant}>R</motion.span>
          <motion.span variants={FeaturedProjectsLettersVariant}>E</motion.span>
          <motion.span variants={FeaturedProjectsLettersVariant}>D</motion.span>
        </motion.p>
        <br />
        <motion.p
          variants={FeaturedProjectsVariant2}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          <motion.span variants={FeaturedProjectsLettersVariant}>P</motion.span>
          <motion.span variants={FeaturedProjectsLettersVariant}>R</motion.span>
          <motion.span variants={FeaturedProjectsLettersVariant}>O</motion.span>
          <motion.span variants={FeaturedProjectsLettersVariant}>J</motion.span>
          <motion.span variants={FeaturedProjectsLettersVariant}>E</motion.span>
          <motion.span variants={FeaturedProjectsLettersVariant}>C</motion.span>
          <motion.span variants={FeaturedProjectsLettersVariant}>T</motion.span>
          <motion.span variants={FeaturedProjectsLettersVariant}>S</motion.span>
        </motion.p>
      </div>
    </section>
  );
};
