import SectionHeader from "../components/SectionHeader.jsx";
import SkillBadge from "../components/SkillBadge.jsx";
import { skills } from "../data/skills.js";

const SkillGroup = ({ title, items }) => (
  <div className="space-y-4">
    <h3 className="text-sm uppercase tracking-[0.3em] text-mist">{title}</h3>
    <div className="grid gap-4 md:grid-cols-2">
      {items.map((skill) => (
        <SkillBadge key={skill.name} name={skill.name} level={skill.level} />
      ))}
    </div>
  </div>
);

const Skills = () => (
  <section id="skills" className="section-padding">
    <div className="max-w-6xl mx-auto px-6">
      <SectionHeader
        eyebrow="Skills"
        title="Production-ready full-stack toolkit"
        description="A balanced stack across backend, frontend, data, and product tooling to ship reliable systems."
      />
      <div className="grid gap-8">
        <SkillGroup title="Languages" items={skills.languages} />
        <SkillGroup title="Frameworks" items={skills.frameworks} />
        <SkillGroup title="Databases" items={skills.databases} />
        <SkillGroup title="Tools" items={skills.tools} />
        <SkillGroup title="Design" items={skills.design} />
      </div>
    </div>
  </section>
);

export default Skills;
