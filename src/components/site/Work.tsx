import { Check, Copy, ExternalLink } from "lucide-react";
import { motion, type Variants } from "motion/react";
import { useEffect, useRef, useState } from "react";
import { SiGithub } from "react-icons/si";
import { PROFILE, PROJECTS, type Project } from "../../content";
import { BrowserFrame } from "./BrowserFrame";
import { EASE, Magnetic, MaskText, Reveal } from "./motion";

async function copyText(text: string) {
  try {
    await navigator.clipboard.writeText(text);
    return true;
  } catch {
    // Fallback for browsers that block the Clipboard API
    const field = document.createElement("textarea");
    field.value = text;
    field.setAttribute("readonly", "");
    field.style.position = "absolute";
    field.style.left = "-9999px";
    document.body.appendChild(field);
    field.select();
    const ok = document.execCommand("copy");
    field.remove();
    return ok;
  }
}

function CopyField({ label, value }: { label: string; value: string }) {
  const [copied, setCopied] = useState(false);
  const timer = useRef<number | undefined>(undefined);

  useEffect(() => () => window.clearTimeout(timer.current), []);

  const onCopy = async () => {
    if (await copyText(value)) {
      setCopied(true);
      window.clearTimeout(timer.current);
      timer.current = window.setTimeout(() => setCopied(false), 1800);
    }
  };

  return (
    <div className="demo-row">
      <span>{label}</span>
      <code>{value}</code>
      <button
        type="button"
        className="copy-btn"
        onClick={onCopy}
        data-copied={copied}
        aria-label={copied ? `${label} copied` : `Copy ${label.toLowerCase()}`}
      >
        {copied ? <Check size={14} aria-hidden /> : <Copy size={14} aria-hidden />}
        {copied ? "Copied" : "Copy"}
      </button>
    </div>
  );
}

function DemoLogin({ demo }: { demo: NonNullable<Project["demo"]> }) {
  return (
    <div className="demo">
      <p className="demo-title">Try it yourself</p>
      <p className="demo-hint">
        Log in with this demo account. It holds sample data only.
      </p>
      <CopyField label="Mobile number" value={demo.mobile} />
      <CopyField label="Password" value={demo.password} />
    </div>
  );
}

const textCol: Variants = {
  hidden: {},
  show: { transition: { staggerChildren: 0.08, delayChildren: 0.15 } },
};
const textItem: Variants = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0, transition: { duration: 0.7, ease: EASE } },
};

function ProjectRow({ project, index }: { project: Project; index: number }) {
  return (
    <article className="project" id={project.id} aria-labelledby={`${project.id}-name`}>
      <BrowserFrame
        src={project.image}
        alt={project.imageAlt}
        url={project.displayUrl}
        href={project.url}
        external
        priority={index === 0}
        label={`Open ${project.name} live site in a new tab`}
        reveal
        hoverLabel="Open site"
      />

      <motion.div
        variants={textCol}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, margin: "0px 0px -12% 0px" }}
      >
        <motion.h3 className="project-name" id={`${project.id}-name`} variants={textItem}>
          {project.name}
        </motion.h3>
        <motion.p className="project-summary" variants={textItem}>
          {project.summary}
        </motion.p>

        <motion.dl className="project-facts" variants={textItem}>
          <div>
            <dt>The problem</dt>
            <dd>{project.problem}</dd>
          </div>
          <div>
            <dt>What I built</dt>
            <dd>{project.built}</dd>
          </div>
          {project.result && (
            <div>
              <dt>Result</dt>
              <dd>{project.result}</dd>
            </div>
          )}
        </motion.dl>

        <motion.div variants={textItem}>
          <p className="project-meta">{project.context}</p>
          {project.stack.length > 0 && (
            <ul className="stack" aria-label="Built with">
              {project.stack.map((t) => (
                <li key={t}>{t}</li>
              ))}
            </ul>
          )}
        </motion.div>

        {project.demo && (
          <motion.div variants={textItem}>
            <DemoLogin demo={project.demo} />
          </motion.div>
        )}

        <motion.div className="project-actions" variants={textItem}>
          <Magnetic>
            <a
              className="btn btn-solid btn-sm"
              href={project.url}
              target="_blank"
              rel="noopener noreferrer"
            >
              <ExternalLink size={15} aria-hidden className="nudge-up" />
              Open live site
            </a>
          </Magnetic>
          {project.github && (
            <Magnetic>
              <a
                className="btn btn-line btn-sm"
                href={project.github}
                target="_blank"
                rel="noopener noreferrer"
              >
                <SiGithub size={15} aria-hidden />
                View code
              </a>
            </Magnetic>
          )}
        </motion.div>
      </motion.div>
    </article>
  );
}

export function Work() {
  return (
    <section className="section" id="work" aria-labelledby="work-title">
      <div className="wrap">
        <div className="section-head">
          <h2 className="section-title" id="work-title">
            <MaskText text="Live projects" />
          </h2>
          <Reveal delay={0.2}>
            <p className="section-intro">
              Every project here is live, and each one started with a real problem. Click a
              screenshot to open the site.
            </p>
          </Reveal>
        </div>

        <div className="projects">
          {PROJECTS.map((p, i) => (
            <ProjectRow key={p.id} project={p} index={i} />
          ))}
        </div>

        <Reveal>
          <p className="more-code">
            More of my code, including data-quality and AI experiments, is on{" "}
            <a href={PROFILE.github} target="_blank" rel="noopener noreferrer">
              GitHub
            </a>
            .
          </p>
        </Reveal>
      </div>
    </section>
  );
}
