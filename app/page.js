"use client";
import styles from "./style.module.scss";
import Hero from "./components/Hero";
import "./globals.css";
import { useEffect, useState, useRef } from "react";
import { AnimatePresence } from "framer-motion";
import About from "./components/About";
import Preloader from "./components/PreLoader";
import Lenis from "@studio-freight/lenis";
import Footer from "./components/Footer";
import Experience from "./components/Experience";
import Projects from "./components/Projects";
export default function Home() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    (async () => {
      const lenis = new Lenis();
      const raf = (time) => {
        lenis.raf(time);
        requestAnimationFrame(raf);
      };
      requestAnimationFrame(raf);

      setTimeout(() => {
        setIsLoading(false);
        document.body.style.cursor = "default";
        window.scrollTo(0, 0);
      }, 100);
    })();
  }, []);

  return (
    <main className={styles.container}>
      <AnimatePresence mode="wait">
        {isLoading && <Preloader />}
      </AnimatePresence>

      <Hero />

      <About />

      <Projects />
      <Experience />

      <Footer />
    </main>
  );
}
