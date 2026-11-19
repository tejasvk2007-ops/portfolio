import { Github, Mail } from "lucide-react";
import ContactForm from "./ContactForm";
import { profile, socials } from "../../data/portfolio";

export const metadata = { title: `Contact — ${profile.name}` };

export default function Contact() {
  return (
    <>
      <h1>Contact</h1>
      <p className="lead">
        Want to talk about a project, a hackathon, or an internship? Send a message below or reach me directly.
      </p>

      <section className="section">
        <h2>Send a Message</h2>
        <ContactForm />
        <p className="form-note">
          This form runs in your browser only — there is no backend yet, so it shows a success message instead of sending an email. To reach me for real, use the email link below.
        </p>
      </section>

      <section className="section">
        <h2>Find Me Online</h2>
        <div className="social-row">
          <a href={socials[0].href} target="_blank" rel="noopener noreferrer">
            <Github size={16} /> GitHub — {profile.githubUsername}
          </a>
          <a href={socials[1].href}>
            <Mail size={16} /> {profile.email}
          </a>
        </div>
      </section>
    </>
  );
}
