import dynamic from "next/dynamic";
import Link from "next/link";
import { Github, Mail, Trophy, ArrowRight } from "lucide-react";
import Button from "../components/Button";
import ProjectCard from "../components/ProjectCard";
import { profile, projects, achievements } from "../data/portfolio";

// 3D hero is client-only (WebGL) — never rendered on the server.
const Hero3D = dynamic(() => import("../components/Hero3D"), {
  ssr: false,
});

export default function Home() {
  return (
    <>
      <section className="hero hero-grid">
        <div className="hero-text">
          <span className="badge">3rd Semester Engineering Student</span>
          <h1>
            Hi, I&apos;m <span>{profile.name}</span>
          </h1>
          <p className="lead">{profile.tagline}</p>
          <p>{profile.summary}</p>
          <div className="btn-row">
            <Button href="/projects">View My Projects</Button>
            <Button href="/contact" variant="outline">Contact Me</Button>
          </div>
          <div className="social-row">
            <a href={profile.github} target="_blank" rel="noopener noreferrer">
              <Github size={16} /> {profile.githubUsername}
            </a>
            <a href={`mailto:${profile.email}`}>
              <Mail size={16} /> {profile.email}
            </a>
          </div>
        </div>
        <Hero3D />
      </section>

      <section className="section">
        <h2 className="section-title">Featured Projects</h2>
        <div className="grid grid-2">
          {projects.map((p) => (
            <ProjectCard key={p.title} project={p} />
          ))}
        </div>
        <p style={{ marginTop: 16 }}>
          <Link href="/projects">
            See all projects <ArrowRight size={16} />
          </Link>
        </p>
      </section>

      <section className="section">
        <h2 className="section-title">Highlight</h2>
        <div className="card">
          <h3>
            <Trophy size={20} /> {achievements[0].title}
          </h3>
          <p>{achievements[0].description}</p>
          <Link href="/achievements">More achievements</Link>
        </div>
      </section>
    </>
  );
}
