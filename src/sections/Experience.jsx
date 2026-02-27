import SectionHeader from "../components/SectionHeader.jsx";
import { experience } from "../data/experience.js";

const Experience = () => (
  <section id="experience" className="section-padding">
    <div className="max-w-6xl mx-auto px-6">
      <SectionHeader
        eyebrow="Experience"
        title="Enterprise-ready training and delivery"
        description="Hands-on full-stack training with real-world collaboration workflows."
      />
      <div className="grid gap-6">
        {experience.map((item) => (
          <div key={item.company} className="glass rounded-3xl p-6">
            <div className="flex flex-wrap items-center justify-between gap-4">
              <div>
                <h3 className="text-xl font-semibold text-frost">
                  {item.company}
                </h3>
                <p className="text-mist mt-1">{item.role}</p>
              </div>
              <span className="text-xs uppercase tracking-[0.3em] text-mist">
                {item.period}
              </span>
            </div>
            <ul className="mt-4 space-y-2 text-sm text-mist list-disc list-inside">
              {item.highlights.map((highlight) => (
                <li key={highlight}>{highlight}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default Experience;
