import { motion } from "framer-motion";
import MainLayout from "../layouts/MainLayout.jsx";
import Hero from "../sections/Hero.jsx";
import About from "../sections/About.jsx";
import Skills from "../sections/Skills.jsx";
import Experience from "../sections/Experience.jsx";
import Projects from "../sections/Projects.jsx";
import Certifications from "../sections/Certifications.jsx";
import Education from "../sections/Education.jsx";
import Contact from "../sections/Contact.jsx";

const Home = () => (
  <MainLayout>
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.6 }}
    >
      <Hero />
      <About />
      <Skills />
      <Experience />
      <Projects />
      <Certifications />
      <Education />
      <Contact />
    </motion.div>
  </MainLayout>
);

export default Home;
