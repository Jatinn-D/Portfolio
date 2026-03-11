import { motion } from "motion/react";
import { SiGithub, SiInstagram, SiX } from "react-icons/si";
import { FaLinkedinIn } from "react-icons/fa";

const NAV_LINKS = [
  { label: "Home", href: "#hero", ocid: "footer.home.link" },
  { label: "About", href: "#about", ocid: "footer.about.link" },
  { label: "Projects", href: "#projects", ocid: "footer.projects.link" },
  { label: "Experience", href: "#experience", ocid: "footer.experience.link" },
];

const SOCIAL_LINKS = [
  {
    label: "GitHub",
    href: "https://github.com/Jatinn-D",
    icon: SiGithub,
    ocid: "footer.github.link",
  },
  {
    label: "LinkedIn",
    href: "https://www.linkedin.com/in/jaatinnn/",
    icon: FaLinkedinIn,
    ocid: "footer.linkedin.link",
  },
  {
    label: "Instagram",
    href: "https://www.instagram.com/jatinn_d/",
    icon: SiInstagram,
    ocid: "footer.instagram.link",
  },
];

function scrollToTop() {
  const hero = document.getElementById("hero");
  if (hero) hero.scrollIntoView({ behavior: "smooth" });
}

function scrollToSection(href: string) {
  const id = href.replace("#", "");
  const el = document.getElementById(id);
  if (el) el.scrollIntoView({ behavior: "smooth" });
}

export function Footer() {
  const year = new Date().getFullYear();
  const hostname =
    typeof window !== "undefined" ? window.location.hostname : "";
  const caffeineUrl = `https://caffeine.ai?utm_source=caffeine-footer&utm_medium=referral&utm_content=${encodeURIComponent(hostname)}`;

  return (
    <>
      <footer
        className="relative"
        id="footer"
        style={{
          background: "var(--bg)",
          borderTop: "1px solid var(--border-color)",
        }}
      >
        {/* Top gradient bar */}
        <div
          className="w-full h-px"
          style={{
            background:
              "linear-gradient(90deg, var(--accent-primary), var(--accent-secondary), var(--accent-primary))",
            opacity: 0.5,
          }}
          aria-hidden="true"
        />

        <div className="max-w-6xl mx-auto px-6 lg:px-8 py-20 lg:py-24">
          {/* Large name — click to scroll top */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="mb-16"
          >
            <button
              type="button"
              data-ocid="footer.name.button"
              onClick={scrollToTop}
              className="group relative block"
              style={{
                background: "none",
                border: "none",
                cursor: "pointer",
                padding: 0,
              }}
              aria-label="Scroll to top"
            >
              <span
                className="font-sans font-light tracking-tight block transition-all duration-300"
                style={{
                  fontSize: "clamp(3rem, 8vw, 6.5rem)",
                  color: "transparent",
                  WebkitTextStroke: "0.8px rgba(44, 33, 24, 0.12)",
                  letterSpacing: "-0.03em",
                  lineHeight: 1,
                  fontWeight: 300,
                }}
              >
                JATIN DILIP
              </span>
              <span
                className="font-sans font-light tracking-tight block absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                style={{
                  fontSize: "clamp(3rem, 8vw, 6.5rem)",
                  background:
                    "linear-gradient(135deg, var(--accent-primary) 0%, var(--accent-secondary) 100%)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                  backgroundClip: "text",
                  letterSpacing: "-0.03em",
                  lineHeight: 1,
                  fontWeight: 300,
                }}
                aria-hidden="true"
              >
                JATIN DILIP
              </span>
            </button>
            <p
              className="mt-4 text-sm tracking-widest uppercase font-light"
              style={{
                color: "var(--text-muted)",
                fontFamily: '"Outfit", system-ui, sans-serif',
                fontWeight: 300,
              }}
            >
              ↑ Back to top
            </p>
          </motion.div>

          {/* Middle section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.6, delay: 0.1, ease: "easeOut" }}
            className="flex flex-col md:flex-row md:items-start justify-between gap-12 mb-16"
          >
            {/* Left — tagline + social */}
            <div className="max-w-xs">
              <p
                className="text-sm leading-relaxed mb-8 font-light"
                style={{
                  color: "var(--text-muted)",
                  fontFamily: '"Outfit", system-ui, sans-serif',
                  fontWeight: 300,
                }}
              >
                Developer based in Chennai, India. Open to new opportunities.
              </p>

              {/* Social links */}
              <div className="flex items-center gap-3">
                {SOCIAL_LINKS.map((social) => {
                  const Icon = social.icon;
                  return (
                    <a
                      key={social.label}
                      href={social.href}
                      data-ocid={social.ocid}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={social.label}
                      className="flex items-center justify-center w-10 h-10 transition-all duration-200"
                      style={{
                        border: "1px solid var(--border-color)",
                        color: "var(--text-muted)",
                        textDecoration: "none",
                      }}
                      onMouseEnter={(e) => {
                        e.currentTarget.style.borderColor =
                          "var(--accent-primary)";
                        e.currentTarget.style.color = "var(--accent-primary)";
                        e.currentTarget.style.background =
                          "rgba(122, 140, 110, 0.08)";
                      }}
                      onMouseLeave={(e) => {
                        e.currentTarget.style.borderColor =
                          "var(--border-color)";
                        e.currentTarget.style.color = "var(--text-muted)";
                        e.currentTarget.style.background = "transparent";
                      }}
                    >
                      <Icon size={14} />
                    </a>
                  );
                })}
              </div>
            </div>

            {/* Right — Quick nav */}
            <nav>
              <p
                className="text-xs tracking-[0.2em] uppercase mb-5"
                style={{
                  color: "var(--text-muted)",
                  fontFamily: '"Outfit", system-ui, sans-serif',
                  fontWeight: 300,
                }}
              >
                Navigate
              </p>
              <ul className="space-y-3">
                {NAV_LINKS.map((link) => (
                  <li key={link.href}>
                    <button
                      type="button"
                      data-ocid={link.ocid}
                      onClick={() => scrollToSection(link.href)}
                      className="text-sm transition-colors duration-200 text-left font-light"
                      style={{
                        background: "none",
                        border: "none",
                        cursor: "pointer",
                        color: "var(--text-muted)",
                        fontFamily: '"Outfit", system-ui, sans-serif',
                        fontWeight: 300,
                        padding: 0,
                      }}
                      onMouseEnter={(e) => {
                        e.currentTarget.style.color = "var(--text-primary)";
                      }}
                      onMouseLeave={(e) => {
                        e.currentTarget.style.color = "var(--text-muted)";
                      }}
                    >
                      {link.label}
                    </button>
                  </li>
                ))}
              </ul>
            </nav>

            {/* Right — Contact */}
            <div>
              <p
                className="text-xs tracking-[0.2em] uppercase mb-5"
                style={{
                  color: "var(--text-muted)",
                  fontFamily: '"Outfit", system-ui, sans-serif',
                  fontWeight: 300,
                }}
              >
                Contact
              </p>
              <ul className="space-y-3">
                <li>
                  <a
                    href="mailto:jatindilip25@gmail.com"
                    className="text-sm transition-colors duration-200 font-light"
                    style={{
                      color: "var(--text-muted)",
                      textDecoration: "none",
                      fontFamily: '"Outfit", system-ui, sans-serif',
                      fontWeight: 300,
                    }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.color = "var(--accent-primary)";
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.color = "var(--text-muted)";
                    }}
                  >
                    jatindilip25@gmail.com
                  </a>
                </li>
                <li>
                  <a
                    href="tel:+918667293993"
                    className="text-sm transition-colors duration-200 font-light"
                    style={{
                      color: "var(--text-muted)",
                      textDecoration: "none",
                      fontFamily: '"Outfit", system-ui, sans-serif',
                      fontWeight: 300,
                    }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.color = "var(--accent-primary)";
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.color = "var(--text-muted)";
                    }}
                  >
                    +91 86672 93993
                  </a>
                </li>
              </ul>
            </div>
          </motion.div>

          {/* Bottom divider */}
          <div
            className="h-px mb-8"
            style={{ background: "var(--border-color)" }}
            aria-hidden="true"
          />

          {/* Copyright */}
          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3">
            <p
              className="text-xs font-light"
              style={{
                color: "var(--text-muted)",
                fontFamily: '"Outfit", system-ui, sans-serif',
                fontWeight: 300,
              }}
            >
              © {year} Jatin Dilip. Built with passion.
            </p>
          </div>
        </div>
      </footer>
    </>
  );
}
