import { ArrowUpRight, ExternalLink, Github } from "lucide-react";
import { motion } from "motion/react";

interface Project {
  id: number;
  name: string;
  description: string;
  longDesc: string;
  tech: string[];
  category: string;
  link: string;
}

const PROJECTS: Project[] = [
  {
    id: 1,
    name: "Suvarna",
    description: "Pawn Shop Management System",
    longDesc:
      "An end-to-end digital ecosystem for collateral-based lending. Automates complex interest calculations and inventory tracking to transform traditional pawn shop operations into a streamlined, digital workflow.",
    tech: ["ReactJS", "Springboot", "PostgreSQL", "Supabase"],
    category: "Business Management System",
    link: "https://github.com/Jatinn-D/PawnShopManagementSystem",
  },
  {
    id: 2,
    name: "AirFlow",
    description: "Master Data Quality Management System",
    longDesc:
      "An automated Master Data Quality Management (MDQM) engine designed to enforce data integrity. Uses advanced validation and cleansing protocols to transform raw, fragmented datasets into high-fidelity master data.",
    tech: ["FastAPI", "ReactJS", "postgreSQL", "Python"],
    category: "Data Engineering",
    link: "https://github.com/Jatinn-D/MDM",
  },
  {
    id: 3,
    name: "Law-AI",
    description: "Automated legal drafting and clause optimization",
    longDesc:
      "An AI-powered productivity suite for legal professionals designed to automate document processing. Integrates the Gemini AI API to transform complex case files into actionable insights and standardized legal drafts.",
    tech: ["Django", "Python", "GeminiAI"],
    category: "AI & LegalTech",
    link: "https://github.com/Jatinn-D/Law-AI/",
  },
  {
    id: 4,
    name: "Cipher Chat",
    description: "Code based room chat app",
    longDesc:
      "A secure, room-based communication platform featuring private session management. Enables real-time synchronization between users through unique room-key authentication.",
    tech: ["Django Channels", "Python"],
    category: "Networking & WebSockets",
    link: "https://github.com/Jatinn-D/ChatApp",
  },
];

const containerVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.1 } },
} as const;

const cardVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: "easeOut" as const },
  },
};

function ProjectCard({ project, index }: { project: Project; index: number }) {
  return (
    <motion.article
      variants={cardVariants}
      data-ocid={`projects.item.${index + 1}`}
      className="group relative flex flex-col h-full card-hover"
      style={{
        background: "var(--bg-elevated)",
        border: "1px solid var(--border-color)",
      }}
      whileHover={{ y: -6 }}
      transition={{ duration: 0.25, ease: "easeOut" }}
    >
      {/* Card top accent bar — sage on hover */}
      <div
        className="absolute top-0 left-0 right-0 h-px transition-all duration-300"
        style={{ background: "var(--border-color)" }}
        aria-hidden="true"
      />
      <div
        className="absolute top-0 left-0 right-0 h-px opacity-0 group-hover:opacity-100 transition-opacity duration-300"
        style={{
          background:
            "linear-gradient(90deg, var(--accent-primary), var(--accent-secondary))",
        }}
        aria-hidden="true"
      />

      <div className="flex flex-col h-full p-7">
        {/* Category label */}
        <div className="flex items-center justify-between mb-6">
          <span
            className="text-xs tracking-[0.18em] uppercase"
            style={{
              color: "var(--accent-primary)",
              fontFamily: '"Outfit", system-ui, sans-serif',
              fontWeight: 400,
            }}
          >
            {project.category}
          </span>
          <span
            className="font-display text-xs"
            style={{ color: "var(--text-muted)", fontWeight: 300 }}
          >
            {String(project.id).padStart(2, "0")}
          </span>
        </div>

        {/* Project name */}
        <h3
          className="font-serif font-light text-2xl tracking-tight mb-3"
          style={{ color: "var(--text-primary)", fontWeight: 300 }}
        >
          {project.name}
        </h3>

        {/* Short description — slides up on hover */}
        <motion.p
          className="text-sm font-light mb-4"
          style={{
            color: "var(--accent-primary)",
            fontFamily: '"Outfit", system-ui, sans-serif',
            fontWeight: 300,
          }}
          initial={{ y: 0 }}
          whileHover={{ y: -4 }}
          transition={{ duration: 0.2 }}
        >
          {project.description}
        </motion.p>

        {/* Long description */}
        <p
          className="text-sm leading-relaxed flex-1 mb-8 font-light"
          style={{
            color: "var(--text-muted)",
            fontFamily: '"Outfit", system-ui, sans-serif',
            fontWeight: 300,
          }}
        >
          {project.longDesc}
        </p>

        {/* Tech stack */}
        <div className="flex flex-wrap gap-1.5 mb-6">
          {project.tech.map((t) => (
            <span
              key={t}
              className="px-2.5 py-1 text-xs tracking-wide font-light"
              style={{
                background: "rgba(122, 140, 110, 0.08)",
                border: "1px solid rgba(122, 140, 110, 0.25)",
                color: "var(--text-muted)",
                fontFamily: '"Outfit", system-ui, sans-serif',
                fontWeight: 300,
              }}
            >
              {t}
            </span>
          ))}
        </div>

        {/* Links */}
        <div className="flex items-center gap-3 mt-auto">
          <a
            href={project.link}
            data-ocid={`projects.item.${index + 1}.button`}
            className="group/btn flex items-center gap-2 px-5 py-2.5 text-xs tracking-widest uppercase transition-all duration-200"
            style={{
              border: "1px solid var(--accent-primary)",
              color: "var(--accent-primary)",
              textDecoration: "none",
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
            View Project
            <ArrowUpRight
              size={12}
              strokeWidth={1.5}
              className="group-hover/btn:translate-x-0.5 group-hover/btn:-translate-y-0.5 transition-transform"
            />
          </a>
          <a
            href={project.link}
            className="flex items-center justify-center w-9 h-9 transition-colors duration-200"
            style={{
              border: "1px solid var(--border-color)",
              color: "var(--text-muted)",
              textDecoration: "none",
            }}
            aria-label={`View ${project.name} on GitHub`}
            onMouseEnter={(e) => {
              e.currentTarget.style.borderColor = "var(--text-muted)";
              e.currentTarget.style.color = "var(--text-primary)";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.borderColor = "var(--border-color)";
              e.currentTarget.style.color = "var(--text-muted)";
            }}
          >
            <Github size={14} strokeWidth={1.5} />
          </a>
          <a
            href={project.link}
            className="flex items-center justify-center w-9 h-9 transition-colors duration-200"
            style={{
              border: "1px solid var(--border-color)",
              color: "var(--text-muted)",
              textDecoration: "none",
            }}
            aria-label={`View ${project.name} live`}
            onMouseEnter={(e) => {
              e.currentTarget.style.borderColor = "var(--text-muted)";
              e.currentTarget.style.color = "var(--text-primary)";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.borderColor = "var(--border-color)";
              e.currentTarget.style.color = "var(--text-muted)";
            }}
          >
            <ExternalLink size={14} strokeWidth={1.5} />
          </a>
        </div>
      </div>
    </motion.article>
  );
}

export function Projects() {
  return (
    <section
      id="projects"
      className="relative py-28 lg:py-36 section-rule"
      style={{
        background: "var(--bg)",
        borderTop: "1px solid var(--border-color)",
      }}
    >
      <div className="max-w-6xl mx-auto px-6 lg:px-8">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
          variants={containerVariants}
        >
          {/* Header */}
          <motion.div variants={cardVariants} className="mb-4">
            <span className="section-label">02 — Work</span>
          </motion.div>

          <motion.div
            variants={cardVariants}
            className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6"
          >
            <h2
              className="font-serif tracking-tight"
              style={{
                fontSize: "clamp(2.2rem, 5vw, 3.5rem)",
                color: "var(--text-primary)",
                fontWeight: 350,
              }}
            >
              Selected
              <br />
              <span
                style={{
                  background:
                    "linear-gradient(135deg, var(--accent-primary) 0%, var(--accent-secondary) 100%)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                  backgroundClip: "text",
                }}
              >
                Projects
              </span>
            </h2>
            <p
              className="max-w-sm text-sm leading-relaxed font-light"
              style={{
                color: "var(--text-muted)",
                fontFamily: '"Outfit", system-ui, sans-serif',
                fontWeight: 300,
              }}
            >
              A curated selection of projects I've built — spanning AI,
              LegalTech, Data Engineering, and FinTech. Each reflects my commitment
              to quality, performance, and thoughtful design.
            </p>
          </motion.div>

          {/* Project Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            {PROJECTS.map((project, i) => (
              <ProjectCard key={project.id} project={project} index={i} />
            ))}
          </div>

          {/* View all link */}
          <motion.div
            variants={cardVariants}
            className="mt-12 flex justify-center"
          >
            <button
              type="button"
              data-ocid="projects.view_all.button"
              className="flex items-center gap-3 px-8 py-3 text-sm tracking-widest uppercase transition-all duration-200"
              style={{
                border: "1px solid var(--border-color)",
                color: "var(--text-muted)",
                background: "transparent",
                cursor: "pointer",
                fontFamily: '"Outfit", system-ui, sans-serif',
                fontWeight: 400,
                letterSpacing: "0.1em",
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.borderColor = "var(--text-muted)";
                e.currentTarget.style.color = "var(--text-primary)";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.borderColor = "var(--border-color)";
                e.currentTarget.style.color = "var(--text-muted)";
              }}
            >
              View All Projects
              <ArrowUpRight size={14} strokeWidth={1.5} />
            </button>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
