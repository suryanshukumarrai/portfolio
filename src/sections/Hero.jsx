import { motion } from "framer-motion";
import { ArrowUpRight, Download, Github, Linkedin } from "lucide-react";
import { profile } from "../data/profile.js";
import TypingHeadline from "../components/TypingHeadline.jsx";
import StatPill from "../components/StatPill.jsx";

const Hero = () => (
  <section className="section-padding pt-16 lg:pt-24">
    <div className="max-w-6xl mx-auto px-6 grid gap-10 lg:grid-cols-[1.2fr_0.8fr] items-center">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="space-y-6"
      >
        <div className="space-y-4">
          <p className="text-xs uppercase tracking-[0.5em] text-neon">
            {profile.title}
          </p>
          <h1 className="text-4xl lg:text-6xl font-semibold text-frost">
            {profile.name}
          </h1>
          <TypingHeadline text={profile.headline} />
        </div>
        <div className="space-y-4 text-mist leading-relaxed">
          {profile.summary.map((line) => (
            <p key={line}>{line}</p>
          ))}
        </div>
        <div className="flex flex-wrap gap-3">
          <a
            href="#projects"
            className="inline-flex items-center gap-2 rounded-full bg-neon/20 px-4 py-2 text-xs uppercase tracking-[0.3em] text-frost border border-neon/40 hover:bg-neon/30 transition"
          >
            View Projects <ArrowUpRight size={14} />
          </a>
          <a
            href={profile.links.resume}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-2 rounded-full border border-white/10 px-4 py-2 text-xs uppercase tracking-[0.3em] text-frost hover:border-neon transition"
          >
            Download Resume <Download size={14} />
          </a>
          <a
            href={profile.links.github}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-2 rounded-full border border-white/10 px-4 py-2 text-xs uppercase tracking-[0.3em] text-frost hover:border-neon transition"
          >
            GitHub <Github size={14} />
          </a>
          <a
            href={profile.links.linkedin}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-2 rounded-full border border-white/10 px-4 py-2 text-xs uppercase tracking-[0.3em] text-frost hover:border-neon transition"
          >
            LinkedIn <Linkedin size={14} />
          </a>
        </div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, x: 20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.6, delay: 0.1 }}
        className="space-y-6"
      >
        <div className="glass rounded-3xl p-6 space-y-4">
          <p className="text-xs uppercase tracking-[0.3em] text-mist">
            Current focus
          </p>
          <h2 className="text-2xl font-semibold text-frost">
            Building high-trust systems with fairness, security, and speed.
          </h2>
          <p className="text-mist leading-relaxed">
            I specialize in Java 21, Spring Boot, and React to deliver scalable
            products that remain observable, secure, and performance-optimized
            in production.
          </p>
        </div>
        <div className="grid gap-4 sm:grid-cols-3">
          {profile.stats.map((stat) => (
            <StatPill key={stat.label} value={stat.value} label={stat.label} />
          ))}
        </div>
      </motion.div>
    </div>
  </section>
);

export default Hero;
