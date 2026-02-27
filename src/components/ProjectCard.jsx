import { ArrowUpRight, Github } from "lucide-react";
import { motion } from "framer-motion";
import StatPill from "./StatPill.jsx";

const ProjectCard = ({ project }) => (
  <motion.article
    className="glass gradient-border relative rounded-3xl p-6 lg:p-8 space-y-6"
    whileHover={{ y: -6 }}
    transition={{ type: "spring", stiffness: 220, damping: 18 }}
  >
    <div className="flex flex-wrap items-center justify-between gap-4">
      <div>
        <p className="text-xs uppercase tracking-[0.3em] text-mist">
          {project.period}
        </p>
        <h3 className="text-2xl font-semibold text-frost">{project.name}</h3>
      </div>
      <div className="flex gap-2">
        {project.demo && (
          <a
            href={project.demo}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-2 rounded-full border border-white/10 px-4 py-2 text-xs uppercase tracking-[0.25em] text-frost hover:border-neon transition"
          >
            Live Demo <ArrowUpRight size={14} />
          </a>
        )}
        {project.repo && (
          <a
            href={project.repo}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-2 rounded-full border border-white/10 px-4 py-2 text-xs uppercase tracking-[0.25em] text-frost hover:border-neon transition"
          >
            GitHub <Github size={14} />
          </a>
        )}
      </div>
    </div>

    <p className="text-mist leading-relaxed">{project.summary}</p>

    <div className="flex flex-wrap gap-2">
      {project.tech.map((item) => (
        <span
          key={item}
          className="rounded-full bg-white/5 px-3 py-1 text-xs uppercase tracking-[0.2em] text-mist"
        >
          {item}
        </span>
      ))}
    </div>

    <div className="grid gap-4 lg:grid-cols-[1.1fr_0.9fr]">
      <div className="space-y-3">
        <h4 className="text-sm font-semibold text-frost">Technical highlights</h4>
        <ul className="space-y-2 text-sm text-mist list-disc list-inside">
          {project.bullets.map((item) => (
            <li key={item}>{item}</li>
          ))}
        </ul>
      </div>
        <div className="space-y-4">
        <div className="space-y-2">
          <h4 className="text-sm font-semibold text-frost">Architecture focus</h4>
          <ul className="space-y-2 text-sm text-mist">
            {project.architecture.map((item) => (
              <li key={item} className="flex gap-2">
                <span className="text-neon">●</span>
                {item}
              </li>
            ))}
          </ul>
        </div>
          {project.security && (
            <div className="space-y-2">
              <h4 className="text-sm font-semibold text-frost">
                Security implementation
              </h4>
              <ul className="space-y-2 text-sm text-mist">
                {project.security.map((item) => (
                  <li key={item} className="flex gap-2">
                    <span className="text-glow">●</span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          )}
        <div className="grid grid-cols-1 gap-3">
          {project.metrics.map((metric) => (
            <StatPill
              key={metric.label}
              value={metric.value}
              label={metric.label}
            />
          ))}
        </div>
      </div>
    </div>
  </motion.article>
);

export default ProjectCard;
