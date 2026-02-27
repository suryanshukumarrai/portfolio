import { Github, Linkedin, Mail } from "lucide-react";
import { profile } from "../data/profile.js";

const Footer = () => (
  <footer className="border-t border-white/10 py-10">
    <div className="max-w-6xl mx-auto px-6 flex flex-col gap-6 lg:flex-row lg:items-center lg:justify-between">
      <div>
        <p className="text-sm uppercase tracking-[0.3em] text-frost">
          {profile.name}
        </p>
        <p className="text-sm text-mist mt-2">{profile.title}</p>
      </div>
      <div className="flex items-center gap-4 text-mist">
        <a
          href={`mailto:${profile.email}`}
          className="flex items-center gap-2 text-sm hover:text-frost transition"
        >
          <Mail size={16} /> Email
        </a>
        <a
          href={profile.links.github}
          target="_blank"
          rel="noreferrer"
          className="flex items-center gap-2 text-sm hover:text-frost transition"
        >
          <Github size={16} /> GitHub
        </a>
        <a
          href={profile.links.linkedin}
          target="_blank"
          rel="noreferrer"
          className="flex items-center gap-2 text-sm hover:text-frost transition"
        >
          <Linkedin size={16} /> LinkedIn
        </a>
      </div>
    </div>
  </footer>
);

export default Footer;
