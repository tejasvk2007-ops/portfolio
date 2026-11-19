import { profile, about } from "../../data/portfolio";

export const metadata = { title: `About — ${profile.name}` };

export default function About() {
  return (
    <>
      <h1>About Me</h1>
      <p className="lead">{about.intro}</p>

      <section className="section">
        <h2>Personal Information</h2>
        <div className="card">
          <p><strong>Name:</strong> {profile.name}</p>
          <p><strong>Education:</strong> Engineering student, 3rd semester</p>
          <p><strong>GitHub:</strong> <a href={profile.github} target="_blank" rel="noopener noreferrer">{profile.githubUsername}</a></p>
          <p><strong>Email:</strong> <a href={`mailto:${profile.email}`}>{profile.email}</a></p>
        </div>
      </section>

      <section className="section">
        <h2>Interests</h2>
        <ul className="check-list">
          {about.interests.map((i) => (
            <li key={i}>{i}</li>
          ))}
        </ul>
      </section>

      <section className="section">
        <h2>Career Goal</h2>
        <div className="card">
          <p>{about.careerGoal}</p>
        </div>
      </section>
    </>
  );
}
