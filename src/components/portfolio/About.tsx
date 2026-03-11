import { motion } from "motion/react";

const SKILLS = [
  "ReactJS",
  "Python",
  "C/C++",
  "PostgreSQL",
  "Supabase",
  "Springboot",
  "Figma",
  "Next.js",
  "Pentaho",
  "GSAP",
  "Framer-motion",
  "Django",
  "Tailwind CSS",
  "Prometheus",
  "RAG",
];

const sectionVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.1 } },
} as const;

const fadeUp = {
  hidden: { opacity: 0, y: 50 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.65, ease: "easeOut" as const },
  },
};

export function About() {
  return (
    <section
      id="about"
      data-ocid="about.section"
      className="relative py-28 lg:py-36 section-rule"
      style={{
        background: "var(--bg-elevated)",
        borderTop: "1px solid var(--border-color)",
      }}
    >
      {/* Top accent line */}
      <div
        className="absolute top-0 left-0 w-full h-px"
        style={{
          background:
            "linear-gradient(90deg, transparent, var(--accent-primary), transparent)",
          opacity: 0.5,
        }}
        aria-hidden="true"
      />

      <div className="max-w-6xl mx-auto px-6 lg:px-8">
        <motion.div
          variants={sectionVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
        >
          {/* Section label */}
          <motion.div variants={fadeUp} className="mb-4">
            <span className="section-label">01 — About</span>
          </motion.div>

          <motion.h2
            variants={fadeUp}
            className="font-serif tracking-tight mb-16"
            style={{
              fontSize: "clamp(2.2rem, 5vw, 3.5rem)",
              color: "var(--text-primary)",
              fontWeight: 350,
            }}
          >
            About Me
          </motion.h2>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-start">
            {/* Left — Profile image + stat strip */}
            <motion.div variants={fadeUp} className="flex flex-col gap-6">
              {/* Profile placeholder — warm parchment square */}
              <div
                className="relative w-full aspect-square max-w-sm"
                style={{
                  background:
                    "linear-gradient(135deg, var(--bg) 0%, #d4c9b5 50%, #c4b8a0 100%)",
                  border: "1px solid var(--border-color)",
                  overflow: "hidden",
                }}
              >
                {/* 1. YOUR IMAGE GOES HERE */}
                <img
                  src="/profile2.jpg"
                  alt="Jatin"
                  className="absolute inset-0 w-full h-full object-cover"
                  style={{ opacity: 0.9 }} // Adjust opacity if you want the background colors to tint the photo
                />
                
                {/* Sage top accent */}
                <div
                  className="absolute top-0 left-0 right-0 h-0.5"
                  style={{ background: "var(--accent-primary)" }}
                  aria-hidden="true"
                />
                {/* Sage glow */}
                <div
                  className="absolute"
                  style={{
                    top: "20%",
                    right: "-20%",
                    width: "60%",
                    height: "60%",
                    background:
                      "radial-gradient(circle, rgba(122, 140, 110, 0.2) 0%, transparent 70%)",
                  }}
                  aria-hidden="true"
                />
                {/* Initials */}
                <div className="absolute inset-0 flex items-center justify-center">
                  <span
                    className="font-serif select-none"
                    style={{
                      fontSize: "clamp(4rem, 12vw, 6rem)",
                      fontWeight: 300,
                      color: "rgba(44, 33, 24, 0.1)",
                      letterSpacing: "-0.04em",
                    }}
                  >
                    
                  </span>
                </div>
                {/* Bottom label */}
                <div
                  className="absolute bottom-0 left-0 right-0 px-5 py-4"
                  style={{
                    background:
                      "linear-gradient(to top, rgba(212, 202, 184, 0.95), transparent)",
                  }}
                >
                  <p
                    className="text-sm font-light"
                    style={{
                      color: "var(--text-primary)",
                      fontFamily: '"Outfit", system-ui, sans-serif',
                      fontWeight: 400,
                    }}
                  >
                    Jatin Dilip
                  </p>
                  <p
                    className="text-xs mt-0.5 font-light"
                    style={{
                      color: "var(--text-muted)",
                      fontFamily: '"Outfit", system-ui, sans-serif',
                      fontWeight: 400,
                    }}
                  >
                    Full-Stack Developer
                  </p>
                </div>
              </div>

              {/* Quick stat row */}
              <div
                className="grid grid-cols-3 divide-x"
                style={{
                  borderColor: "var(--border-color)",
                  border: "1px solid var(--border-color)",
                }}
              >
                {[
                  { n: "4+", label: "Internships" },
                  { n: "4+", label: "Projects" },
                  { n: "9.58", label: "CGPA" },
                ].map((s) => (
                  <div
                    key={s.label}
                    className="px-4 py-4 text-center"
                    style={{ borderColor: "var(--border-color)" }}
                  >
                    <div
                      className="font-display text-xl"
                      style={{
                        color: "var(--accent-primary)",
                        fontWeight: 500,
                      }}
                    >
                      {s.n}
                    </div>
                    <div
                      className="text-xs tracking-wide mt-0.5 font-light"
                      style={{
                        color: "var(--text-muted)",
                        fontFamily: '"Outfit", system-ui, sans-serif',
                        fontWeight: 300,
                      }}
                    >
                      {s.label}
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>

            {/* Right — Bio + Skills */}
            <motion.div
              variants={sectionVariants}
              className="flex flex-col gap-10"
            >
              <motion.div variants={fadeUp}>
                
                <div
                  className="space-y-4 text-base leading-relaxed font-light"
                  style={{
                    color: "var(--text-muted)",
                    fontFamily: '"Outfit", system-ui, sans-serif',
                    fontWeight: 300,
                  }}
                >
                  <p>
                    I'm a software developer building scalable web applications
                    and digital products. I thrive at the intersection of
                    engineering and design — writing clean, performant code
                    while keeping a sharp eye on user experience.
                  </p>
                  <p>
                    My stack spans React, JavaScript, and Node.js on the
                    frontend and backend with{" "}
                    <span
                      style={{ color: "var(--text-primary)", fontWeight: 400 }}
                    >
                      Python, PostgreSQL, and Supabase
                    </span>
                    . My portfolio includes real-time communication platforms,
                    automated financial dashboards, and AI-powered summarization
                    engines.
                  </p>
                  <p>
                    Outside of code, I’m likely experimenting with Framer
                    Motion, refining my GitHub repositories, or trying out new
                    AI tools.
                  </p>
                </div>
              </motion.div>

              {/* Skills */}
              <motion.div variants={fadeUp}>
                <h3
                  className="text-xs tracking-[0.2em] uppercase mb-5"
                  style={{
                    color: "var(--text-muted)",
                    fontFamily: '"Outfit", system-ui, sans-serif',
                    fontWeight: 600,
                  }}
                >
                  Technologies &amp; Tools
                </h3>
                <div className="flex flex-wrap gap-2">
                  {SKILLS.map((skill, i) => (
                    <motion.span
                      key={skill}
                      initial={{ opacity: 0, scale: 0.92 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      viewport={{ once: true, margin: "-80px" }}
                      transition={{ delay: i * 0.04, duration: 0.3 }}
                      className="px-3 py-1.5 text-xs tracking-wide font-light"
                      style={{
                        border: "1px solid var(--border-color)",
                        color: "var(--text-muted)",
                        background: "var(--bg)",
                        transition: "border-color 0.2s, color 0.2s",
                        cursor: "default",
                        fontFamily: '"Outfit", system-ui, sans-serif',
                        fontWeight: 300,
                      }}
                      onMouseEnter={(e) => {
                        e.currentTarget.style.borderColor =
                          "var(--accent-primary)";
                        e.currentTarget.style.color = "var(--accent-primary)";
                      }}
                      onMouseLeave={(e) => {
                        e.currentTarget.style.borderColor =
                          "var(--border-color)";
                        e.currentTarget.style.color = "var(--text-muted)";
                      }}
                    >
                      {skill}
                    </motion.span>
                  ))}
                </div>
              </motion.div>

              {/* Download CV */}
              <motion.div variants={fadeUp}>
                <button
                  type="button"
                  onClick={() => window.open("/Resume.pdf", "_blank")}
                  data-ocid="about.cv.button"
                  className="px-6 py-3 text-sm tracking-widest uppercase transition-all duration-200"
                  style={{
                    border: "1px solid var(--accent-secondary)",
                    color: "var(--accent-secondary)",
                    background: "transparent",
                    cursor: "pointer",
                    fontFamily: '"Outfit", system-ui, sans-serif',
                    fontWeight: 400,
                    letterSpacing: "0.12em",
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.background =
                      "var(--accent-secondary)";
                    e.currentTarget.style.color = "var(--bg)";
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.background = "transparent";
                    e.currentTarget.style.color = "var(--accent-secondary)";
                  }}
                >
                  Download CV
                </button>
              </motion.div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
