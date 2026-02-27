import SectionHeader from "../components/SectionHeader.jsx";
import ProjectCard from "../components/ProjectCard.jsx";
import GithubRepos from "../components/GithubRepos.jsx";
import { projects } from "../data/projects.js";

const Projects = () => (
  <section id="projects" className="section-padding">
    <div className="max-w-6xl mx-auto px-6">
      <SectionHeader
        eyebrow="Projects"
        title="Product-grade Java systems with measurable impact"
        description="Case studies focused on fairness, security, concurrency, and scalable architecture."
      />
      <div className="grid gap-8">
        {projects.map((project) => (
          <ProjectCard key={project.name} project={project} />
        ))}
      </div>
      <div className="mt-12">
        <SectionHeader
          eyebrow="Open Source"
          title="Live GitHub activity"
          description="Latest public repositories with production-ready implementations."
        />
        <GithubRepos username="suryanshukumarrai" />
      </div>
    </div>
  </section>
);

export default Projects;
