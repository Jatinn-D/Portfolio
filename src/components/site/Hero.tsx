import { ArrowDown, Download } from "lucide-react";
import {
  motion,
  useMotionValue,
  useReducedMotion,
  useScroll,
  useSpring,
  useTransform,
} from "motion/react";
import { useRef, type PointerEvent } from "react";
import { PROFILE, PROJECTS } from "../../content";
import { BrowserFrame } from "./BrowserFrame";
import { CountUp, EASE, Magnetic, MaskText } from "./motion";

const FACTS = [
  { to: 5, decimals: 0, suffix: "", label: "internships" },
  { to: 3, decimals: 0, suffix: "×", label: "hackathon finalist" },
  { to: 9.65, decimals: 2, suffix: "", label: "CGPA" },
];

const fadeUp = (delay: number) => ({
  initial: { opacity: 0, y: 22 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.9, delay, ease: EASE },
});

export function Hero() {
  const suvarna = PROJECTS[0];
  const reduce = useReducedMotion();
  const sectionRef = useRef<HTMLElement>(null);

  // The screenshot tilts towards the mouse…
  const mx = useMotionValue(0);
  const my = useMotionValue(0);
  const rotateY = useSpring(useTransform(mx, [-0.5, 0.5], [-7, 7]), { stiffness: 120, damping: 16 });
  const rotateX = useSpring(useTransform(my, [-0.5, 0.5], [6, -6]), { stiffness: 120, damping: 16 });

  // …and drifts up a little as the page scrolls.
  const { scrollYProgress } = useScroll({ target: sectionRef, offset: ["start start", "end start"] });
  const drift = useTransform(scrollYProgress, [0, 1], [0, -80]);

  const onMove = (e: PointerEvent<HTMLDivElement>) => {
    if (reduce || e.pointerType !== "mouse") return;
    const r = e.currentTarget.getBoundingClientRect();
    mx.set((e.clientX - r.left) / r.width - 0.5);
    my.set((e.clientY - r.top) / r.height - 0.5);
  };
  const onLeave = () => {
    mx.set(0);
    my.set(0);
  };

  return (
    <section className="hero" id="top" aria-labelledby="hero-name" ref={sectionRef}>
      <div className="wrap">
        <div>
          <h1 className="hero-name" id="hero-name">
            <span className="hero-name-line">
              <MaskText text="Jatin" by="char" stagger={0.05} delay={0.15} onLoad />
            </span>
            <span className="hero-name-line">
              <MaskText text="Dilip" by="char" stagger={0.05} delay={0.4} onLoad />
            </span>
          </h1>
          <p className="hero-lede">
            <MaskText
              text="I build tools that take the slow, repetitive parts out of people's work, and I design them so they're easy to use."
              stagger={0.025}
              delay={0.7}
              onLoad
            />
          </p>
          <motion.p className="hero-role" {...fadeUp(1.2)}>
            Full-stack developer and UI/UX designer. Final-year Computer Science student at SRM
            Institute of Science and Technology, Chennai.
          </motion.p>

          <motion.ul className="hero-facts" aria-label="Highlights" {...fadeUp(1.35)}>
            {FACTS.map((f, i) => (
              <li key={f.label}>
                <strong>
                  <CountUp to={f.to} decimals={f.decimals} suffix={f.suffix} delay={1.4 + i * 0.12} />
                </strong>
                <span>{f.label}</span>
              </li>
            ))}
          </motion.ul>

          <motion.div className="hero-actions" {...fadeUp(1.5)}>
            <Magnetic>
              <a href="#work" className="btn btn-solid">
                <ArrowDown size={16} aria-hidden className="nudge-down" />
                See live projects
              </a>
            </Magnetic>
            <Magnetic>
              <a href={PROFILE.resume} download="Jatin-Dilip-Resume.pdf" className="btn btn-line">
                <Download size={16} aria-hidden className="nudge-down" />
                Download CV
              </a>
            </Magnetic>
          </motion.div>
        </div>

        <motion.div
          className="hero-visual"
          initial={{ opacity: 0, y: 60, rotate: 4 }}
          animate={{ opacity: 1, y: 0, rotate: 0 }}
          transition={{ duration: 1.2, delay: 0.5, ease: EASE }}
        >
          <motion.div style={{ y: reduce ? 0 : drift }}>
          <div className="tilt-stage" onPointerMove={onMove} onPointerLeave={onLeave}>
            <motion.div
              className="tilt-card"
              style={{ rotateX, rotateY, rotate: -1.2, transformPerspective: 1100 }}
            >
              <BrowserFrame
                src={suvarna.image}
                alt={suvarna.imageAlt}
                url={suvarna.displayUrl}
                href={`#${suvarna.id}`}
                label="Jump to Suvarna, with its demo login"
                priority
              />
            </motion.div>
          </div>
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
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
