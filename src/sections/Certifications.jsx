import SectionHeader from "../components/SectionHeader.jsx";
import { certifications } from "../data/certifications.js";

const Certifications = () => (
  <section id="certifications" className="section-padding">
    <div className="max-w-6xl mx-auto px-6">
      <SectionHeader
        eyebrow="Certifications"
        title="Focused learning and validation"
        description="Credentialed progress across algorithms, full-stack engineering, and AI."
      />
      <div className="grid gap-4 md:grid-cols-2">
        {certifications.map((cert) => (
          <div key={cert.title} className="glass rounded-2xl p-5">
            <h3 className="text-lg font-semibold text-frost">{cert.title}</h3>
            <p className="text-sm text-mist mt-2">{cert.issuer}</p>
            <p className="text-xs uppercase tracking-[0.3em] text-mist mt-4">
              {cert.date}
            </p>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default Certifications;
