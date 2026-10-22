import { Download, Mail, Phone } from "lucide-react";
import { FaLinkedinIn } from "react-icons/fa";
import { SiGithub } from "react-icons/si";
import { PROFILE } from "../../content";

export function Contact() {
  const year = new Date().getFullYear();

  return (
    <footer className="contact" id="contact" aria-labelledby="contact-title">
      <div className="wrap">
        <h2 className="contact-title" id="contact-title">
          Got a slow, repetitive task? Let's talk.
        </h2>
        <p className="contact-lede">
          I'm open to internships and full-time roles. Email is the fastest way to reach me.
        </p>

        <div className="contact-links">
          <a className="btn btn-solid" href={`mailto:${PROFILE.email}`}>
            <Mail size={16} aria-hidden />
            {PROFILE.email}
          </a>
          <a className="btn btn-line" href={PROFILE.phoneHref}>
            <Phone size={16} aria-hidden />
            {PROFILE.phone}
          </a>
          <a className="btn btn-line" href={PROFILE.resume} download="Jatin-Dilip-Resume.pdf">
            <Download size={16} aria-hidden />
            Download CV
          </a>
        </div>

        <div className="footer-line">
          <span>
            © {year} {PROFILE.name}. Designed and built by me, in Chennai.
          </span>
          <span className="footer-social">
            <a href={PROFILE.github} target="_blank" rel="noopener noreferrer">
              <SiGithub size={13} aria-hidden style={{ display: "inline", marginRight: 6 }} />
              GitHub
            </a>
            <a href={PROFILE.linkedin} target="_blank" rel="noopener noreferrer">
              <FaLinkedinIn size={13} aria-hidden style={{ display: "inline", marginRight: 6 }} />
              LinkedIn
            </a>
            <a href={PROFILE.instagram} target="_blank" rel="noopener noreferrer">
              Instagram
            </a>
          </span>
        </div>
      </div>
    </footer>
  );
}
