import { motion, useReducedMotion, type Variants } from "motion/react";
import { ACHIEVEMENTS, SKILLS } from "../../content";
import { EASE, MaskText, Reveal } from "./motion";

const chipList: Variants = {
  hidden: {},
  show: { transition: { staggerChildren: 0.035 } },
};
const chip: Variants = {
  hidden: { opacity: 0, y: 10, scale: 0.92 },
  show: { opacity: 1, y: 0, scale: 1, transition: { duration: 0.45, ease: EASE } },
};

export function About() {
  const reduce = useReducedMotion();

  return (
    <section className="section" id="about" aria-labelledby="about-title">
      <div className="wrap">
        <div className="section-head">
          <h2 className="section-title" id="about-title">
            <MaskText text="About me" />
          </h2>
        </div>

        <div className="about">
          <motion.div
            className="about-photo-wrap"
            initial={reduce ? false : { clipPath: "inset(100% 0% 0% 0% round 10px)" }}
            whileInView={{ clipPath: "inset(0% 0% 0% 0% round 10px)" }}
            viewport={{ once: true, margin: "0px 0px -15% 0px" }}
            transition={{ duration: 1.1, ease: EASE }}
          >
            <img
              className="about-photo"
              src="/profile.webp"
              alt="Jatin Dilip"
              width={360}
              height={360}
              loading="lazy"
            />
          </motion.div>

          <div>
            <Reveal className="about-bio">
              <p>
                I'm a final-year B.Tech student in Computer Science (Big Data Analytics) at SRM
                Institute of Science and Technology, Ramapuram, with a CGPA of 9.65.
              </p>
              <p>
                I work where engineering meets design. I like finding the step in someone's day
                that wastes their time, then designing and building the tool that removes it. I do
                both halves myself, from the Figma screens to the database underneath.
              </p>
              <p>I speak English, Tamil and Hindi.</p>
            </Reveal>

            <div className="about-grid">
              {SKILLS.map((s) => (
                <div className="about-block" key={s.group}>
                  <h3>{s.group}</h3>
                  <motion.ul
                    className="chips"
                    variants={chipList}
                    initial="hidden"
                    whileInView="show"
                    viewport={{ once: true, margin: "0px 0px -10% 0px" }}
                  >
                    {s.items.map((item) => (
                      <motion.li key={item} variants={chip}>
                        {item}
                      </motion.li>
                    ))}
                  </motion.ul>
                </div>
              ))}

              <Reveal className="about-block about-achievements">
                <h3>Achievements</h3>
                <ul className="plain-list">
                  {ACHIEVEMENTS.map((a) => (
                    <li key={a}>{a}</li>
                  ))}
                </ul>
              </Reveal>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
