import { PROCESS } from "../../content";

export function Process() {
  return (
    <section className="section" id="process" aria-labelledby="process-title">
      <div className="wrap">
        <div className="section-head">
          <h2 className="section-title" id="process-title">
            How I work
          </h2>
          <p className="section-intro">
            The same four steps run through every project, from a pawn shop ledger to a Tamil
            literary database.
          </p>
        </div>

        <ol className="steps">
          {PROCESS.map((step) => (
            <li key={step.title}>
              <h3>{step.title}</h3>
              <p>{step.body}</p>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
