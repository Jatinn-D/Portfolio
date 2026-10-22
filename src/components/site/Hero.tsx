import { ArrowDown, Download } from "lucide-react";
import { PROFILE, PROJECTS } from "../../content";
import { BrowserFrame } from "./BrowserFrame";

const FACTS = [
  { value: "5", label: "internships" },
  { value: "3×", label: "hackathon finalist" },
  { value: "9.65", label: "CGPA" },
];

export function Hero() {
  const suvarna = PROJECTS[0];

  return (
    <section className="hero" id="top" aria-labelledby="hero-name">
      <div className="wrap">
        <div>
          <h1 className="hero-name" id="hero-name">
            Jatin
            <br />
            Dilip
          </h1>
          <p className="hero-lede">
            I build tools that take the slow, repetitive parts out of people's work, and I design
            them so they're easy to use.
          </p>
          <p className="hero-role">
            Full-stack developer and UI/UX designer. Final-year Computer Science student at SRM
            Institute of Science and Technology, Chennai.
          </p>

          <ul className="hero-facts" aria-label="Highlights">
            {FACTS.map((f) => (
              <li key={f.label}>
                <strong>{f.value}</strong>
                <span>{f.label}</span>
              </li>
            ))}
          </ul>

          <div className="hero-actions">
            <a href="#work" className="btn btn-solid">
              <ArrowDown size={16} aria-hidden />
              See live projects
            </a>
            <a href={PROFILE.resume} download="Jatin-Dilip-Resume.pdf" className="btn btn-line">
              <Download size={16} aria-hidden />
              Download CV
            </a>
          </div>
        </div>

        <div className="hero-visual">
          <BrowserFrame
            src={suvarna.image}
            alt={suvarna.imageAlt}
            url={suvarna.displayUrl}
            href={`#${suvarna.id}`}
            label="Jump to Suvarna, with its demo login"
            priority
          />
          <p className="pencil-note">
            <svg viewBox="0 0 54 64" aria-hidden>
              <path className="stroke" d="M6 60 C 10 34, 22 16, 46 8" />
              <path className="stroke" d="M46 8 L33 5 M46 8 L40 20" />
            </svg>
            <span className="note-text">
              Suvarna is live with 3 pawn businesses.{" "}
              <a href={`#${suvarna.id}`}>Try it with the demo login.</a>
            </span>
          </p>
        </div>
      </div>
    </section>
  );
}
