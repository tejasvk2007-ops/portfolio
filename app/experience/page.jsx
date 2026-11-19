import { profile, experience } from "../../data/portfolio";

export const metadata = { title: `Experience — ${profile.name}` };

export default function Experience() {
  return (
    <>
      <h1>Experience &amp; Activities</h1>
      <p className="lead">
        I&apos;m a 3rd semester student, so I don&apos;t have internships or a job yet.
        What I do have is real team and project experience — listed honestly below.
      </p>
      <div className="timeline" style={{ marginTop: 24 }}>
        {experience.map((e) => (
          <div key={e.title} className="timeline-item">
            <div className="meta">{e.type} · {e.org}</div>
            <h3>{e.title}</h3>
            <p>{e.description}</p>
          </div>
        ))}
      </div>
    </>
  );
}
