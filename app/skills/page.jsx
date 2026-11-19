import { profile, skills } from "../../data/portfolio";

export const metadata = { title: `Skills — ${profile.name}` };

export default function Skills() {
  return (
    <>
      <h1>Skills</h1>
      <p className="lead">Technical skills and tools I use to build projects.</p>
      {skills.map((group) => (
        <section key={group.group} className="section skill-group">
          <h2>{group.group}</h2>
          <div className="skill-list">
            {group.items.map((s) => (
              <div key={s.name} className="skill-chip">
                <strong>{s.name}</strong>
                {s.note && <span>{s.note}</span>}
              </div>
            ))}
          </div>
        </section>
      ))}
    </>
  );
}
