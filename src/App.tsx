import Lenis from "lenis";
import "lenis/dist/lenis.css";
import { MotionConfig } from "motion/react";
import { useEffect } from "react";
import { About } from "./components/site/About";
import { Contact } from "./components/site/Contact";
import { Experience } from "./components/site/Experience";
import { Header } from "./components/site/Header";
import { Hero } from "./components/site/Hero";
import { Process } from "./components/site/Process";
import { Work } from "./components/site/Work";

export default function App() {
  // Smooth, weighted scrolling. Skipped for people who ask for reduced motion.
  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    const lenis = new Lenis({
      autoRaf: true,
      duration: 1.1,
      anchors: true,
    });
    return () => lenis.destroy();
  }, []);

  return (
    <MotionConfig reducedMotion="user">
      <a className="skip-link" href="#work">
        Skip to projects
      </a>
      <Header />
      <main>
        <Hero />
        <Work />
        <Process />
        <Experience />
        <About />
      </main>
      <Contact />
    </MotionConfig>
  );
}
