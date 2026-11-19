import { Github, ExternalLink } from "lucide-react";

// Reusable project card — used on the Home and Projects pages.
export default function ProjectCard({ project }) {
  return (
    <article className="card project-card">
      {project.highlight && <span className="badge">{project.highlight}</span>}
      <h3>{project.title}</h3>
      <p>{project.description}</p>
      {project.details && (
        <ul className="project-details">
          {project.details.map((d) => (
            <li key={d}>{d}</li>
          ))}
        </ul>
      )}
      <div className="tech-tags">
        {project.tech.map((t) => (
          <span key={t} className="tech-tag">
            {t}
          </span>
        ))}
      </div>
      <div className="card-links">
        <a href={project.github} target="_blank" rel="noopener noreferrer">
          <Github size={16} /> GitHub
        </a>
        {project.liveDemo && (
          <a href={project.liveDemo} target="_blank" rel="noopener noreferrer">
            <ExternalLink size={16} /> Live Demo
          </a>
        )}
      </div>
    </article>
  );
}
