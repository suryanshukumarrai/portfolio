import SectionHeader from "../components/SectionHeader.jsx";
import { education } from "../data/education.js";

const Education = () => (
  <section id="education" className="section-padding">
    <div className="max-w-6xl mx-auto px-6">
      <SectionHeader
        eyebrow="Education"
        title="Academic foundation"
        description="Computer science fundamentals with a focus on software engineering and systems."
      />
      <div className="grid gap-4">
        {education.map((item) => (
          <div key={item.institution} className="glass rounded-3xl p-6">
            <div className="flex flex-wrap items-center justify-between gap-4">
              <div>
                <h3 className="text-xl font-semibold text-frost">
                  {item.institution}
                </h3>
                {item.location && (
                  <p className="text-xs text-mist mt-1">{item.location}</p>
                )}
                <p className="text-mist mt-2">{item.degree}</p>
                <p className="text-sm text-mist mt-2">{item.detail}</p>
              </div>
              <span className="text-xs uppercase tracking-[0.3em] text-mist">
                {item.period}
              </span>
            </div>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default Education;
