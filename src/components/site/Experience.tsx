import { EXPERIENCE } from "../../content";

export function Experience() {
  return (
    <section className="section" id="experience" aria-labelledby="experience-title">
      <div className="wrap">
        <div className="section-head">
          <h2 className="section-title" id="experience-title">
            Experience
          </h2>
          <p className="section-intro">
            Five internships and ongoing freelance design work, most recent first.
          </p>
        </div>

        <ol className="jobs">
          {EXPERIENCE.map((job) => (
            <li className="job" key={`${job.org}-${job.role}`}>
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
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
