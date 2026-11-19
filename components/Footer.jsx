import Link from "next/link";
import { Github, Mail } from "lucide-react";
import { profile } from "../data/portfolio";

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container footer-inner">
        <p>© {new Date().getFullYear()} {profile.name}. Built with Next.js and React.</p>
        <div className="footer-links">
          <a href={profile.github} target="_blank" rel="noopener noreferrer" aria-label="GitHub">
            <Github size={20} /> GitHub
          </a>
          <a href={`mailto:${profile.email}`} aria-label="Email">
            <Mail size={20} /> {profile.email}
          </a>
          <Link href="/contact">Contact</Link>
        </div>
      </div>
    </footer>
  );
}
