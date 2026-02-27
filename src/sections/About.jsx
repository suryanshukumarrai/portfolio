import { motion } from "framer-motion";
import SectionHeader from "../components/SectionHeader.jsx";

const About = () => (
  <section id="about" className="section-padding">
    <div className="max-w-6xl mx-auto px-6">
      <SectionHeader
        eyebrow="About"
        title="Engineering production-grade full-stack systems"
        description="I deliver resilient Java platforms with modern React experiences, built for scale, security, and measurable impact."
      />
      <div className="grid gap-6 lg:grid-cols-[1.1fr_0.9fr]">
        <motion.div
          className="glass rounded-3xl p-6 space-y-4"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <p className="text-mist leading-relaxed">
            My focus is Java 21 and Spring Boot with a system-design mindset. I
            emphasize secure APIs, consistent latency, and clear ownership
            models across services and interfaces. I have solved 350+ DSA
            problems and leverage that discipline to design fair, efficient
            algorithms in production.
          </p>
          <p className="text-mist leading-relaxed">
            Beyond execution, I bring leadership experience from student
            coordination roles and team-led product builds, keeping delivery
            aligned with product goals and engineering quality.
          </p>
        </motion.div>
        <motion.div
          className="glass rounded-3xl p-6 space-y-4"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
        >
          <h3 className="text-lg font-semibold text-frost">Core expertise</h3>
          <ul className="space-y-3 text-sm text-mist">
            <li>Java 21, Spring Boot, and Spring Security</li>
            <li>React, Tailwind CSS, and component-driven UI systems</li>
            <li>REST APIs, PostgreSQL, MongoDB, and system design</li>
            <li>Performance tuning, fairness algorithms, and SLA monitoring</li>
            <li>Leadership, team coordination, and product delivery discipline</li>
          </ul>
        </motion.div>
      </div>
    </div>
  </section>
);

export default About;
