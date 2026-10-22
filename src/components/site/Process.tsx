import { motion, type Variants } from "motion/react";
import { PROCESS } from "../../content";
import { EASE, MaskText, Reveal } from "./motion";

const list: Variants = {
  hidden: {},
  show: { transition: { staggerChildren: 0.16, delayChildren: 0.35 } },
};
const item: Variants = {
  hidden: { opacity: 0, y: 26 },
  show: { opacity: 1, y: 0, transition: { duration: 0.75, ease: EASE } },
};

export function Process() {
  return (
    <section className="section" id="process" aria-labelledby="process-title">
      <div className="wrap">
        <div className="section-head">
          <h2 className="section-title" id="process-title">
            <MaskText text="How I work" />
          </h2>
          <Reveal delay={0.2}>
            <p className="section-intro">
              The same four steps run through every project, from a pawn shop ledger to a Tamil
              literary database.
            </p>
          </Reveal>
        </div>

        <motion.ol
          className="steps"
          variants={list}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "0px 0px -15% 0px" }}
        >
          <motion.span
            className="steps-rule"
            aria-hidden
            variants={{
              hidden: { scaleX: 0 },
              show: { scaleX: 1, transition: { duration: 1.2, ease: EASE } },
            }}
          />
          {PROCESS.map((step) => (
            <motion.li key={step.title} variants={item}>
              <h3>{step.title}</h3>
              <p>{step.body}</p>
            </motion.li>
          ))}
        </motion.ol>
      </div>
    </section>
  );
}
