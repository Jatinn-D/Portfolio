import { motion } from "motion/react";
import { useEffect } from "react";
import { About } from "./components/portfolio/About";
import { Experience } from "./components/portfolio/Experience";
import { Footer } from "./components/portfolio/Footer";
import { Hero } from "./components/portfolio/Hero";
import { Navbar } from "./components/portfolio/Navbar";
import { Projects } from "./components/portfolio/Projects";

// Lenis smooth scroll instance interface
interface LenisInstance {
  raf: (time: number) => void;
  destroy: () => void;
}

export default function App() {
  // Lenis smooth scrolling — loaded dynamically, graceful degradation
  useEffect(() => {
    let animationFrameId: number;
    let lenisInstance: LenisInstance | null = null;

    function raf(time: number) {
      if (lenisInstance) lenisInstance.raf(time);
      animationFrameId = requestAnimationFrame(raf);
    }

    // Using dynamic import with unknown to avoid missing module errors at compile time
    const tryImport = (pkg: string) =>
      (import(/* @vite-ignore */ pkg) as Promise<unknown>).then(
        (mod: unknown) => {
          const m = mod as Record<string, unknown>;
          return (m.default ?? m.Lenis ?? m) as new (
            opts: unknown,
          ) => LenisInstance;
        },
      );

    async function initLenis() {
      try {
        let LenisClass: new (opts: unknown) => LenisInstance;
        try {
          LenisClass = await tryImport("lenis");
        } catch {
          LenisClass = await tryImport("@studio-freight/lenis");
        }
        lenisInstance = new LenisClass({
          duration: 1.2,
          easing: (t: number) => Math.min(1, 1.001 - 2 ** (-10 * t)),
          smoothWheel: true,
        });
        animationFrameId = requestAnimationFrame(raf);
      } catch {
        // Lenis not available — native scroll is fine
      }
    }

    initLenis();

    return () => {
      if (animationFrameId) cancelAnimationFrame(animationFrameId);
      if (lenisInstance) lenisInstance.destroy();
    };
  }, []);

  return (
    <motion.div
      className="min-h-screen"
      style={{ background: "var(--bg)", color: "var(--text-primary)" }}
      initial={{ opacity: 0, y: 12 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
    >
      <Navbar />
      <main>
        <Hero />
        <About />
        <Projects />
        <Experience />
      </main>
      <Footer />
    </motion.div>
  );
}
