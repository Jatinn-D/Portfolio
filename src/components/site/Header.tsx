import { Download, Menu, X } from "lucide-react";
import { useEffect, useState } from "react";
import { PROFILE } from "../../content";

const LINKS = [
  { id: "work", label: "Work" },
  { id: "process", label: "How I work" },
  { id: "experience", label: "Experience" },
  { id: "about", label: "About" },
  { id: "contact", label: "Contact" },
];

export function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState("");

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

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

  return (
    <header className={`site-header${scrolled ? " is-scrolled" : ""}`}>
      <div className="wrap">
        <a href="#top" className="brand" onClick={() => setOpen(false)}>
          {PROFILE.name}
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
            </a>
          ))}
          <a
            href={PROFILE.resume}
            download="Jatin-Dilip-Resume.pdf"
            className="btn btn-solid btn-sm"
          >
            <Download size={15} aria-hidden />
            Download CV
          </a>
        </nav>
      </div>
    </header>
  );
}
