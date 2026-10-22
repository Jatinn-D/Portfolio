import { ACHIEVEMENTS, SKILLS } from "../../content";

export function About() {
  return (
    <section className="section" id="about" aria-labelledby="about-title">
      <div className="wrap">
        <div className="section-head">
          <h2 className="section-title" id="about-title">
            About me
          </h2>
        </div>

        <div className="about">
          <img
            className="about-photo"
            src="/profile.webp"
            alt="Jatin Dilip"
            width={360}
            height={360}
            loading="lazy"
          />

          <div>
            <div className="about-bio">
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
            </div>

            <div className="about-grid">
              {SKILLS.map((s) => (
                <div className="about-block" key={s.group}>
                  <h3>{s.group}</h3>
                  <ul className="chips">
                    {s.items.map((item) => (
                      <li key={item}>{item}</li>
                    ))}
                  </ul>
                </div>
              ))}

              <div className="about-block" style={{ gridColumn: "1 / -1" }}>
                <h3>Achievements</h3>
                <ul className="plain-list">
                  {ACHIEVEMENTS.map((a) => (
                    <li key={a}>{a}</li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
