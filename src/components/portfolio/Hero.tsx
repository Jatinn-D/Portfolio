import { ArrowDown, Mail } from "lucide-react";
import { motion } from "motion/react";

function scrollToSection(id: string) {
  const el = document.getElementById(id);
  if (el) el.scrollIntoView({ behavior: "smooth" });
}

const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.14,
      delayChildren: 0.35,
    },
  },
} as const;

const itemVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, ease: "easeOut" as const },
  },
};

export function Hero() {
  return (
    <section
      id="hero"
      className="relative flex items-center min-h-screen overflow-hidden"
      style={{ background: "var(--bg)" }}
    >
      {/* Atmospheric background */}
      <div className="absolute inset-0 pointer-events-none" aria-hidden="true">
        {/* Sage green radial glow — top right */}
        <div
          className="absolute"
          style={{
            top: "-10%",
            right: "-5%",
            width: "55vw",
            height: "55vw",
            maxWidth: 700,
            maxHeight: 700,
            background:
              "radial-gradient(ellipse at center, rgba(122, 140, 110, 0.15) 0%, rgba(122, 140, 110, 0.04) 50%, transparent 70%)",
          }}
        />
        {/* Warm brown glow — bottom left */}
        <div
          className="absolute"
          style={{
            bottom: "5%",
            left: "-5%",
            width: "40vw",
            height: "40vw",
            maxWidth: 500,
            maxHeight: 500,
            background:
              "radial-gradient(ellipse at center, rgba(139, 107, 74, 0.10) 0%, transparent 65%)",
          }}
        />
        {/* Grid lines */}
        <div
          className="absolute inset-0"
          style={{
            backgroundImage:
              "linear-gradient(var(--border-color) 1px, transparent 1px), linear-gradient(90deg, var(--border-color) 1px, transparent 1px)",
            backgroundSize: "80px",
            opacity: 0.2,
          }}
        />
        {/* Decorative large background letter — typographic ornament */}
        <div
          className="absolute select-none pointer-events-none hidden lg:block"
          style={{
            right: "-2%",
            bottom: "5%",
            fontFamily: '"Fraunces", Georgia, serif',
            fontSize: "clamp(16rem, 28vw, 24rem)",
            fontWeight: 300,
            fontStyle: "italic",
            color: "transparent",
            WebkitTextStroke: "1px rgba(44, 33, 24, 0.055)",
            lineHeight: 1,
            letterSpacing: "-0.05em",
            userSelect: "none",
          }}
          aria-hidden="true"
        >
          JD
        </div>
      </div>

      <div className="relative z-10 max-w-6xl mx-auto px-6 lg:px-8 w-full pt-24 pb-20">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="max-w-3xl"
        >
          {/* Pre-label */}
          <motion.div variants={itemVariants} className="mb-8">
            <span
              className="inline-flex items-center gap-3 text-xs tracking-[0.25em] uppercase"
              style={{
                color: "var(--accent-secondary)",
                fontFamily: '"Outfit", system-ui, sans-serif',
                fontWeight: 300,
              }}
            >
              <span
                className="inline-block w-10 h-px"
                style={{ background: "var(--accent-secondary)" }}
              />
              Portfolio
            </span>
          </motion.div>

          {/* Main name */}
          <motion.h1
            variants={itemVariants}
            className="font-sans leading-[0.92] tracking-tight mb-6"
            style={{
              fontSize: "clamp(4rem, 10vw, 8rem)",
              color: "var(--text-primary)",
              fontWeight: 400,
            }}
          >
            Jatin
            <br />
            <span
              style={{
                background:
                  "linear-gradient(145deg, var(--accent-primary) 30%, var(--accent-secondary) 80%)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                backgroundClip: "text",
              }}
            >
            Dilip
            </span>
          </motion.h1>

          {/* Subtitle */}
          <motion.p
            variants={itemVariants}
            className="text-xl lg:text-2xl font-light tracking-tight mb-6"
            style={{
              color: "var(--text-muted)",
              fontFamily: '"Outfit", system-ui, sans-serif',
              fontWeight: 300,
            }}
          >
            Full-Stack Developer &amp;{" "}
            <span style={{ color: "var(--accent-primary)" }}>
              Creative Technologist
            </span>
          </motion.p>

          {/* Tagline */}
          <motion.p
            variants={itemVariants}
            className="text-base lg:text-lg leading-relaxed mb-12 max-w-xl font-light"
            style={{
              color: "var(--text-muted)",
              fontFamily: '"Outfit", system-ui, sans-serif',
              fontWeight: 300,
            }}
          >
            I build digital experiences that are fast, beautiful, and purposeful
            — where engineering precision meets creative vision.
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            variants={itemVariants}
            className="flex flex-wrap items-center gap-4"
          >
            <motion.button
              data-ocid="hero.primary_button"
              onClick={() => scrollToSection("projects")}
              className="group flex items-center gap-3 px-8 py-4 text-sm tracking-widest uppercase"
              style={{
                background: "var(--accent-primary)",
                color: "#fff",
                border: "1px solid var(--accent-primary)",
                cursor: "pointer",
                fontFamily: '"Outfit", system-ui, sans-serif',
                fontWeight: 400,
                letterSpacing: "0.12em",
              }}
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              transition={{ duration: 0.15 }}
            >
              View My Work
              <ArrowDown
                size={13}
                strokeWidth={1.5}
                className="group-hover:translate-y-0.5 transition-transform"
              />
            </motion.button>

            <motion.button
              data-ocid="hero.secondary_button"
              onClick={() => {
                window.location.href = "mailto:jatindilip25@gmail.com";
              }}
              className="group flex items-center gap-3 px-8 py-4 text-sm tracking-widest uppercase"
              style={{
                background: "transparent",
                color: "var(--text-primary)",
                border: "1px solid var(--border-color)",
                cursor: "pointer",
                fontFamily: '"Outfit", system-ui, sans-serif',
                fontWeight: 400,
                letterSpacing: "0.12em",
              }}
              whileHover={{
                borderColor: "var(--accent-secondary)",
                scale: 1.02,
              }}
              whileTap={{ scale: 0.98 }}
              transition={{ duration: 0.15 }}
            >
              <Mail size={13} strokeWidth={1.5} />
              Get In Touch
            </motion.button>
          </motion.div>

          {/* Scroll indicator */}
          <motion.div
            variants={itemVariants}
            className="mt-20 flex items-center gap-3"
          >
            <motion.div
              animate={{ y: [0, 6, 0] }}
              transition={{
                repeat: Number.POSITIVE_INFINITY,
                duration: 1.8,
                ease: "easeInOut",
              }}
              className="flex flex-col gap-1"
            >
              <span
                className="w-px h-10 block mx-auto"
                style={{ background: "var(--border-color)" }}
              />
              <ArrowDown
                size={13}
                strokeWidth={1.5}
                style={{ color: "var(--text-muted)" }}
              />
            </motion.div>
            <span
              className="text-xs tracking-widest uppercase"
              style={{
                color: "var(--text-muted)",
                fontFamily: '"Outfit", system-ui, sans-serif',
                fontWeight: 300,
              }}
            >
              Scroll to explore
            </span>
          </motion.div>
        </motion.div>

        {/* Right side floating stat blocks */}
        <motion.div
          initial={{ opacity: 0, x: 40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 1.0, ease: "easeOut" }}
          className="absolute right-8 top-1/2 -translate-y-1/2 hidden xl:flex flex-col gap-4"
        >
          {[
            { num: "4+", label: "Internships" },
            { num: "4+", label: "Projects" },
            { num: "9.58", label: "CGPA" },
          ].map((stat, i) => (
            <motion.div
              key={stat.label}
              animate={{ y: [0, -4, 0] }}
              transition={{
                repeat: Number.POSITIVE_INFINITY,
                duration: 4,
                ease: "easeInOut",
                delay: i * 0.8,
              }}
              className="p-5 text-right"
              style={{
                background: "var(--bg-elevated)",
                border: "1px solid var(--border-color)",
                minWidth: 140,
              }}
            >
              <div
                className="font-display text-2xl"
                style={{
                  color: "var(--accent-primary)",
                  fontWeight: 500,
                }}
              >
                {stat.num}
              </div>
              <div
                className="text-xs tracking-wide mt-1 font-light"
                style={{
                  color: "var(--text-muted)",
                  fontFamily: '"Outfit", system-ui, sans-serif',
                  fontWeight: 300,
                }}
              >
                {stat.label}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
