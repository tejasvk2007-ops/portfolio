import { Trophy, Code } from "lucide-react";
import { profile, achievements } from "../../data/portfolio";

export const metadata = { title: `Achievements — ${profile.name}` };

export default function Achievements() {
  return (
    <>
      <h1>Achievements</h1>
      <p className="lead">Certifications, awards and competition participation.</p>
      <div className="grid" style={{ marginTop: 24 }}>
        {achievements.map((a) => (
          <article key={a.title} className="card">
            <h3>
              {a.icon === "trophy" ? <Trophy size={20} /> : <Code size={20} />} {a.title}
            </h3>
            <p className="meta" style={{ color: "var(--accent-soft)" }}>{a.org}</p>
            <p>{a.description}</p>
          </article>
        ))}
      </div>
    </>
  );
}
