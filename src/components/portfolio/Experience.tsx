import { Calendar, MapPin } from "lucide-react";
import { motion } from "motion/react";

interface ExperienceItem {
  id: number;
  role: string;
  company: string;
  location: string;
  period: string;
  type: string;
  description: string;
  highlights: string[];
}

const EXPERIENCE: ExperienceItem[] = [
  {
    id: 1,
    role: "Product Development Intern",
    company: "Camomile HealthCare",
    location: "Mylapore, Chennai",
    period: "Feb 2026 — Present",
    type: "Internship",
    description:
      "Building digital infrastructure to help hospitals and clinics launch their online services.",
    highlights: [
      "Building an appointment booking portal for client websites by connecting them with Practo’s scheduling system.",
      "Developing a WhatsApp chatbot to help hospitals automate patient replies and manage appointments more easily.",
      "Creating reusable software tools that allow new hospitals to set up their digital architecture quickly and efficiently.",
    ],
  },
  {
    id: 2,
    role: "AI Engineer Intern",
    company: "Upstride",
    location: "Remote",
    period: "Jan 2026 — Mar 2026",
    type: "Internship",
    description:
      "Built backend systems for a pharmaceutical company and participated in professional career mentorship",
    highlights: [
      "Implemented enterprise-level monitoring solutions for pharmaceutical systems using Prometheus and Grafana to ensure high availability and real-time performance tracking.",
      "Developed a deep understanding of secure system communication by implementing API Gateways and JWT authentication protocols for protected data exchange.",
      "Participated in weekly career sessions on how to stand out to HRs, ace interviews, and build a professional brand.",
    ],
  },
  {
    id: 3,
    role: "Data Engineer Intern",
    company: "Analytix-Hub.ai",
    location: "Guindy, Chennai",
    period: "Dec 2025 — Mar 2026",
    type: "Internship",
    description:
      "Developed data tools and learned how large-scale enterprise data systems are managed.",
    highlights: [
      "Leveraged Pentaho for complex data integration tasks while developing a foundational understanding of Master Data Management (MDM) architectures.",
      "Engineered a custom data-cleaning platform that allows users to upload raw datasets and receive processed, high-fidelity outputs through automated validation rules.",
      "Successfully adapted to an enterprise environment, collaborating across teams to align data quality tools with broader business intelligence objectives.",
    ],
  },
  {
    id: 4,
    role: "UI Designer",
    company: "Buildify-Web",
    location: "Remote",
    period: "Aug 2025 — Present",
    type: "Freelance",
    description:
      "Working as a freelance designer creating professional UI designs and marketing visuals for various clients.",
    highlights: [
      "Designed the full user interface UI for a company’s ERP system using Figma to make complex data easy to manage.",
      "Created high-quality promotional posters for company events like Aayudha Pooja to drive seasonal offers.",
      "Designed engaging social media content and posts for an EdTech client to improve their online presence.",
    ],
  },
  {
    id: 5,
    role: "Web Developer",
    company: "Triland Animation Studio",
    location: "Chennai, India",
    period: "Jun 2025 — Aug 2025",
    type: "Internship",
    description:
      "Redesigned and built a responsive company website to showcase their projects.",
    highlights: [
      "Rebuilt the entire website using ReactJS to make it look modern and work perfectly on mobile devices.",
      "Added a custom opening reel animation that plays smoothly as users scroll down the page.",
      "Created dedicated sections to professionally display the team, their creative projects, and their sponsors.",
    ],
  },
];

const containerVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.12 } },
} as const;

const slideIn = {
  hidden: { opacity: 0, x: -30 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.6, ease: "easeOut" as const },
  },
};

const fadeUp = {
  hidden: { opacity: 0, y: 50 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: "easeOut" as const },
  },
};

function ExperienceCard({
  item,
  index,
}: {
  item: ExperienceItem;
  index: number;
}) {
  const isCurrent = index === 0;

  return (
    <motion.div
      variants={slideIn}
      data-ocid={`experience.item.${index + 1}`}
      className="relative flex gap-8"
    >
      {/* Timeline dot + line */}
      <div className="relative flex flex-col items-center">
        <div
          className="w-3 h-3 shrink-0 mt-1.5"
          style={{
            background: isCurrent
              ? "var(--accent-primary)"
              : "var(--bg-elevated)",
            border: `2px solid ${isCurrent ? "var(--accent-primary)" : "var(--border-color)"}`,
            boxShadow: isCurrent
              ? "0 0 12px rgba(122, 140, 110, 0.45)"
              : "none",
          }}
        />
        {index < EXPERIENCE.length - 1 && (
          <motion.div
            className="flex-1 w-px mt-2"
            style={{ background: "var(--border-color)", originY: 0 }}
            initial={{ scaleY: 0 }}
            whileInView={{ scaleY: 1 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
          />
        )}
      </div>

      {/* Card */}
      <div className="flex-1 mb-12 group">
        <div
          className="p-7 transition-all duration-300"
          style={{
            background: "var(--bg-elevated)",
            border: "1px solid var(--border-color)",
          }}
          onMouseEnter={(e) => {
            const card = e.currentTarget;
            card.style.borderColor = "rgba(122, 140, 110, 0.4)";
            card.style.boxShadow = "0 4px 30px rgba(122, 140, 110, 0.12)";
          }}
          onMouseLeave={(e) => {
            const card = e.currentTarget;
            card.style.borderColor = "var(--border-color)";
            card.style.boxShadow = "none";
          }}
        >
          {/* Top row */}
          <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-3 mb-4">
            <div>
              <h3
                className="font-serif font-light text-xl tracking-tight"
                style={{ color: "var(--text-primary)", fontWeight: 300 }}
              >
                {item.role}
              </h3>
              <p
                className="text-base mt-1 font-light"
                style={{
                  color: "var(--accent-primary)",
                  fontFamily: '"Outfit", system-ui, sans-serif',
                  fontWeight: 400,
                }}
              >
                {item.company}
              </p>
            </div>
            <div className="flex flex-col items-start sm:items-end gap-1.5 shrink-0">
              <span
                className="inline-flex items-center gap-1.5 text-xs tracking-widest uppercase px-2.5 py-1 font-light"
                style={{
                  border: `1px solid ${isCurrent ? "var(--accent-primary)" : "var(--border-color)"}`,
                  color: isCurrent
                    ? "var(--accent-primary)"
                    : "var(--text-muted)",
                  background: isCurrent
                    ? "rgba(122, 140, 110, 0.08)"
                    : "transparent",
                  fontFamily: '"Outfit", system-ui, sans-serif',
                  fontWeight: 300,
                }}
              >
                {item.type}
              </span>
            </div>
          </div>

          {/* Meta */}
          <div
            className="flex flex-wrap gap-4 mb-5 text-xs font-light"
            style={{
              color: "var(--text-muted)",
              fontFamily: '"Outfit", system-ui, sans-serif',
              fontWeight: 300,
            }}
          >
            <span className="flex items-center gap-1.5">
              <Calendar size={11} strokeWidth={1.5} />
              {item.period}
            </span>
            <span className="flex items-center gap-1.5">
              <MapPin size={11} strokeWidth={1.5} />
              {item.location}
            </span>
          </div>

          {/* Description */}
          <p
            className="text-sm leading-relaxed mb-5 font-light"
            style={{
              color: "var(--text-muted)",
              fontFamily: '"Outfit", system-ui, sans-serif',
              fontWeight: 300,
            }}
          >
            {item.description}
          </p>

          {/* Highlights */}
          <ul className="space-y-2">
            {item.highlights.map((h) => (
              <li
                key={h}
                className="flex gap-3 text-sm leading-relaxed font-light"
                style={{
                  color: "var(--text-muted)",
                  fontFamily: '"Outfit", system-ui, sans-serif',
                  fontWeight: 300,
                }}
              >
                <span
                  className="mt-2 w-1 h-1 shrink-0"
                  style={{ background: "var(--accent-secondary)" }}
                />
                {h}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </motion.div>
  );
}

export function Experience() {
  return (
    <section
      id="experience"
      data-ocid="experience.section"
      className="relative py-28 lg:py-36 section-rule"
      style={{
        background: "var(--bg-elevated)",
        borderTop: "1px solid var(--border-color)",
      }}
    >
      {/* Top gradient accent */}
      <div
        className="absolute top-0 left-0 w-full h-px"
        style={{
          background:
            "linear-gradient(90deg, transparent, var(--accent-secondary), transparent)",
          opacity: 0.45,
        }}
        aria-hidden="true"
      />

      <div className="max-w-6xl mx-auto px-6 lg:px-8">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
          variants={containerVariants}
        >
          {/* Section header */}
          <motion.div variants={fadeUp} className="mb-4">
            <span className="section-label">03 — Career</span>
          </motion.div>

          <motion.div
            variants={fadeUp}
            className="flex flex-col md:flex-row md:items-end justify-between mb-20 gap-6"
          >
            <h2
              className="font-serif tracking-tight"
              style={{
                fontSize: "clamp(2.2rem, 5vw, 3.5rem)",
                color: "var(--text-primary)",
                fontWeight: 350,
              }}
            >
              Work{" "}
              <span
                style={{
                  background:
                    "linear-gradient(135deg, var(--accent-secondary) 0%, #b8945a 100%)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                  backgroundClip: "text",
                }}
              >
                Experience
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
              A chronological journey through my career — from freelance roots
              to leading engineering at scale.
            </p>
          </motion.div>

          {/* Timeline */}
          <div className="max-w-3xl">
            {EXPERIENCE.map((item, i) => (
              <ExperienceCard key={item.id} item={item} index={i} />
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
