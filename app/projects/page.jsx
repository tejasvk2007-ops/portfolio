import { Github } from "lucide-react";
import ProjectCard from "../../components/ProjectCard";
import { profile, projects, moreOnGithub } from "../../data/portfolio";

export const metadata = { title: `Projects — ${profile.name}` };

export default function Projects() {
  return (
    <>
      <h1>Projects</h1>
      <p className="lead">
        Real projects I&apos;ve built — with code on GitHub. No fake demos: every project below links to its real repository.
      </p>
      <div className="grid grid-2" style={{ marginTop: 24 }}>
        {projects.map((p) => (
          <ProjectCard key={p.title} project={p} />
        ))}
      </div>
      <section className="section">
        <div className="card">
          <h3>More on GitHub</h3>
          <p>{moreOnGithub.text}</p>
          <a href={moreOnGithub.github} target="_blank" rel="noopener noreferrer">
            <Github size={16} /> {profile.githubUsername}
          </a>
        </div>
      </section>
    </>
  );
}
