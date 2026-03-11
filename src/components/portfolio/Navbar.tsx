import { Menu, X } from "lucide-react";
import { AnimatePresence, motion } from "motion/react";
import { useCallback, useEffect, useState } from "react";

const NAV_LINKS = [
  { label: "Home", href: "#hero", ocid: "nav.home.link" },
  { label: "About", href: "#about", ocid: "nav.about.link" },
  { label: "Projects", href: "#projects", ocid: "nav.projects.link" },
  { label: "Experience", href: "#experience", ocid: "nav.experience.link" },
  { label: "Contact", href: "#footer", ocid: "nav.contact.link" },
];

const SECTION_IDS = ["hero", "about", "projects", "experience", "footer"];

function scrollToSection(href: string) {
  const id = href.replace("#", "");
  const el = document.getElementById(id);
  if (el) {
    el.scrollIntoView({ behavior: "smooth" });
  }
}

export function Navbar() {
  const [activeSection, setActiveSection] = useState("");
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  const handleScroll = useCallback(() => {
    setIsScrolled(window.scrollY > 20);
  }, []);

  useEffect(() => {
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, [handleScroll]);

  useEffect(() => {
    const observers: IntersectionObserver[] = [];

    for (const id of SECTION_IDS) {
      const el = document.getElementById(id);
      if (!el) continue;
      const observer = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) {
            setActiveSection(id);
          }
        },
        { threshold: 0.35, rootMargin: "0px 0px -40% 0px" },
      );
      observer.observe(el);
      observers.push(observer);
    }

    return () => {
      for (const o of observers) o.disconnect();
    };
  }, []);

  const handleNavClick = (href: string) => {
    scrollToSection(href);
    setMobileOpen(false);
  };

  return (
    <>
      <motion.header
        initial={{ y: -80, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, ease: "easeOut", delay: 0.2 }}
        className="fixed top-0 left-0 right-0 z-50"
        style={{
          background: isScrolled
            ? "rgba(242, 237, 227, 0.96)"
            : "rgba(242, 237, 227, 0)",
          backdropFilter: isScrolled ? "blur(16px)" : "none",
          borderBottom: isScrolled
            ? "1px solid var(--border-color)"
            : "1px solid transparent",
          boxShadow: isScrolled ? "0 1px 20px rgba(44, 33, 24, 0.06)" : "none",
          transition:
            "background 0.3s ease, backdrop-filter 0.3s ease, border-color 0.3s ease, box-shadow 0.3s ease",
        }}
      >
        <nav className="max-w-6xl mx-auto px-6 lg:px-8 h-16 flex items-center justify-between">
          {/* Logo */}
          <button
            type="button"
            onClick={() => handleNavClick("#hero")}
            className="flex items-center gap-2 group"
            style={{ background: "none", border: "none", cursor: "pointer" }}
          >
            <span
              className="font-sans text-lg tracking-tight"
              style={{ color: "var(--text-primary)", fontWeight: 400 }}
            >
              JD
            </span>
            <span
              className="w-1 h-1"
              style={{ background: "var(--accent-primary)" }}
            />
          </button>

          {/* Desktop Nav */}
          <ul className="hidden md:flex items-center gap-1">
            {NAV_LINKS.map((link) => {
              const isActive = activeSection === link.href.replace("#", "");

              return (
                <li key={link.href}>
                  <motion.button
                    type="button"
                    initial="initial"
                    whileHover="hover"
                    data-ocid={link.ocid}
                    onClick={() => handleNavClick(link.href)}
                    className="relative px-4 py-2 text-sm tracking-wide transition-colors duration-300"
                    style={{
                      background: "none",
                      border: "none",
                      cursor: "pointer",
                      fontWeight: 300,
                      fontFamily: '"Outfit", system-ui, sans-serif',
                      color: isActive
                        ? "var(--accent-primary)"
                        : "var(--text-muted)",
                    }}
                  >
                    {link.label}

                    {/* Animated Underline / Dot */}
                    <motion.span
                      variants={{
                        initial: {
                          scaleX: isActive ? 0.1 : 0,
                          height: isActive ? "4px" : "1px",
                          width: isActive ? "4px" : "100%",
                          borderRadius: isActive ? "50%" : "0%",
                          bottom: isActive ? "2px" : "0px",
                        },
                        hover: {
                          scaleX: 1,
                          height: "1px",
                          width: "100%",
                          borderRadius: "0%",
                          bottom: "0px",
                        },
                      }}
                      transition={{
                        type: "spring",
                        stiffness: 300,
                        damping: 25,
                      }}
                      className="absolute left-0 right-0 mx-auto"
                      style={{
                        background: "var(--accent-primary)",
                        originX: 0.5, // Ensures expansion starts from center
                      }}
                    />
                  </motion.button>
                </li>
              );
            })}
          </ul>

          {/* CTA + Hamburger */}
          <div className="flex items-center gap-3">
            <button
              type="button"
              data-ocid="nav.view_work.button"
              onClick={() => handleNavClick("#projects")}
              className="hidden md:flex items-center gap-2 px-4 py-2 text-sm tracking-widest uppercase transition-all duration-200"
              style={{
                border: "1px solid var(--accent-primary)",
                color: "var(--accent-primary)",
                background: "transparent",
                cursor: "pointer",
                fontFamily: '"Outfit", system-ui, sans-serif',
                fontWeight: 400,
                letterSpacing: "0.1em",
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.background = "var(--accent-primary)";
                e.currentTarget.style.color = "#fff";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.background = "transparent";
                e.currentTarget.style.color = "var(--accent-primary)";
              }}
            >
              View Work
            </button>

            <button
              type="button"
              data-ocid="nav.mobile_menu.toggle"
              className="md:hidden flex items-center justify-center w-10 h-10"
              onClick={() => setMobileOpen((v) => !v)}
              style={{
                background: "none",
                border: "1px solid var(--border-color)",
                cursor: "pointer",
                color: "var(--text-primary)",
              }}
              aria-label={mobileOpen ? "Close menu" : "Open menu"}
            >
              {mobileOpen ? (
                <X size={18} strokeWidth={1} />
              ) : (
                <Menu size={18} strokeWidth={1} />
              )}
            </button>
          </div>
        </nav>
      </motion.header>

      {/* Mobile Overlay */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.25, ease: "easeOut" }}
            className="fixed top-16 left-0 right-0 z-40 md:hidden"
            style={{
              background: "rgba(242, 237, 227, 0.98)",
              backdropFilter: "blur(16px)",
              borderBottom: "1px solid var(--border-color)",
            }}
          >
            <nav className="px-6 py-8 flex flex-col gap-1">
              {NAV_LINKS.map((link, i) => (
                <motion.button
                  key={link.href}
                  type="button"
                  data-ocid={link.ocid}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.07, duration: 0.3 }}
                  onClick={() => handleNavClick(link.href)}
                  className="text-left py-4 text-xl font-light tracking-tight"
                  style={{
                    background: "none",
                    border: "none",
                    borderBottom: "1px solid var(--border-color)",
                    cursor: "pointer",
                    fontFamily: '"Outfit", system-ui, sans-serif',
                    fontWeight: 300,
                    color:
                      activeSection === link.href.replace("#", "")
                        ? "var(--accent-primary)"
                        : "var(--text-primary)",
                  }}
                >
                  {link.label}
                </motion.button>
              ))}
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
