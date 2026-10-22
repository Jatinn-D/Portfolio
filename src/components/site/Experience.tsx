import { motion } from "motion/react";
import { EXPERIENCE } from "../../content";
import { EASE, MaskText, Reveal } from "./motion";

export function Experience() {
  return (
    <section className="section" id="experience" aria-labelledby="experience-title">
      <div className="wrap">
        <div className="section-head">
          <h2 className="section-title" id="experience-title">
            <MaskText text="Experience" />
          </h2>
          <Reveal delay={0.2}>
            <p className="section-intro">
              Five internships and ongoing freelance design work, most recent first.
            </p>
          </Reveal>
        </div>

        <ol className="jobs">
          {EXPERIENCE.map((job) => (
            <motion.li
              className="job"
              key={`${job.org}-${job.role}`}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "0px 0px -10% 0px" }}
              transition={{ duration: 0.7, ease: EASE }}
            >
              <div className="job-when">
                {job.period}
                <br />
                {job.place}
              </div>
              <div>
                <h3 className="job-role">{job.role}</h3>
                <p className="job-org">{job.org}</p>
                <ul>
                  {job.points.map((p) => (
                    <li key={p}>{p}</li>
                  ))}
                </ul>
              </div>
            </motion.li>
          ))}
        </ol>
      </div>
    </section>
  );
}
