import Head from "next/head";
import styles from "@/styles/Home.module.css";
import Hero from "@/components/Hero";
import Nav from "@/components/Nav";
import About from "@/components/About";
import Projects from "@/components/Projects";
import Contact from "@/components/Contact";
import { SmoothScrollProvider } from "@/SmoothScroll.context";

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
        <Nav />
        <Hero />
        <About />
        <Projects />
        <Contact />
      </main>
    </SmoothScrollProvider>
  );
}
