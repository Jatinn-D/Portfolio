import { Download, Menu, X } from "lucide-react";
import { motion, useMotionValueEvent, useReducedMotion, useScroll } from "motion/react";
import { useEffect, useRef, useState } from "react";
import { PROFILE } from "../../content";
import { EASE, ScrollProgress } from "./motion";

const LINKS = [
  { id: "work", label: "Work" },
  { id: "process", label: "How I work" },
  { id: "experience", label: "Experience" },
  { id: "about", label: "About" },
  { id: "contact", label: "Contact" },
];

export function Header() {
  const reduce = useReducedMotion();
  const [scrolled, setScrolled] = useState(false);
  const [hidden, setHidden] = useState(false);
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState("");
  const lastY = useRef(0);
  const { scrollY } = useScroll();

  // Hide the header while scrolling down, bring it back on any scroll up.
  useMotionValueEvent(scrollY, "change", (y) => {
    const delta = y - lastY.current;
    lastY.current = y;
    setScrolled(y > 8);
    if (Math.abs(delta) < 4) return;
    setHidden(delta > 0 && y > 280);
  });

  useEffect(() => {
    const sections = LINKS.map((l) => document.getElementById(l.id)).filter(
      (el): el is HTMLElement => el !== null,
    );
    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) setActive(entry.target.id);
        }
      },
      { rootMargin: "-45% 0px -50% 0px" },
    );
    for (const s of sections) observer.observe(s);
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpen(false);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open]);

  const isHidden = hidden && !open && !reduce;

  return (
    <>
      <ScrollProgress />
      <motion.header
        className={`site-header${scrolled ? " is-scrolled" : ""}`}
        initial={reduce ? false : { y: -40, opacity: 0 }}
        animate={{ y: isHidden ? "-100%" : 0, opacity: 1 }}
        transition={{ duration: 0.45, ease: EASE }}
        onFocusCapture={() => setHidden(false)}
      >
        <div className="wrap">
          <a href="#top" className="brand" onClick={() => setOpen(false)}>
            {PROFILE.name}
            <span className="brand-dot" aria-hidden />
          </a>

          <button
            type="button"
            className="btn btn-line btn-sm menu-toggle"
            aria-expanded={open}
            aria-controls="site-nav"
            onClick={() => setOpen((v) => !v)}
          >
            {open ? <X size={16} aria-hidden /> : <Menu size={16} aria-hidden />}
            {open ? "Close" : "Menu"}
          </button>

          <nav id="site-nav" className={`nav${open ? " is-open" : ""}`} aria-label="Main">
            {LINKS.map((l) => (
              <a
                key={l.id}
                href={`#${l.id}`}
                className={active === l.id ? "is-active" : undefined}
                aria-current={active === l.id ? "true" : undefined}
                onClick={() => setOpen(false)}
              >
                {l.label}
                {active === l.id && (
                  <motion.span
                    className="nav-underline"
                    layoutId="nav-underline"
                    transition={{ type: "spring", stiffness: 420, damping: 34 }}
                    aria-hidden
                  />
                )}
              </a>
            ))}
            <a
              href={PROFILE.resume}
              download="Jatin-Dilip-Resume.pdf"
              className="btn btn-solid btn-sm"
            >
              <Download size={15} aria-hidden className="nudge-down" />
              Download CV
            </a>
          </nav>
        </div>
      </motion.header>
    </>
  );
}
