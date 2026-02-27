import { Mail, Github, Linkedin } from "lucide-react";
import { useState } from "react";
import SectionHeader from "../components/SectionHeader.jsx";
import { profile } from "../data/profile.js";

const Contact = () => {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [error, setError] = useState("");

  const handleChange = (event) => {
    setForm((prev) => ({ ...prev, [event.target.name]: event.target.value }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    setError("");

    if (!form.name.trim() || !form.email.trim() || !form.message.trim()) {
      setError("Please complete all fields before sending.");
      return;
    }

    const mailto = `mailto:${profile.email}?subject=Portfolio%20Inquiry%20from%20${encodeURIComponent(
      form.name
    )}&body=${encodeURIComponent(form.message)}%0A%0AFrom:%20${encodeURIComponent(
      form.email
    )}`;

    window.location.href = mailto;
  };

  return (
    <section id="contact" className="section-padding pb-20">
      <div className="max-w-6xl mx-auto px-6">
        <SectionHeader
          eyebrow="Contact"
          title="Let’s build something reliable"
          description="Open to full-time Java full stack roles, internships, and impactful collaborations."
        />
        <div className="grid gap-8 lg:grid-cols-[1fr_1.1fr]">
          <div className="glass rounded-3xl p-6 space-y-6">
            <div>
              <p className="text-sm uppercase tracking-[0.3em] text-mist">
                Reach out
              </p>
              <h3 className="text-2xl font-semibold text-frost mt-3">
                {profile.email}
              </h3>
              <p className="text-sm text-mist mt-2">{profile.phone}</p>
              <p className="text-mist mt-3">
                Based in {profile.location}. Available for remote or on-site
                opportunities.
              </p>
            </div>
            <div className="flex flex-col gap-3 text-sm text-mist">
              <a
                href={`mailto:${profile.email}`}
                className="flex items-center gap-2 hover:text-frost transition"
              >
                <Mail size={16} /> Email
              </a>
              <a
                href={`tel:${profile.phone.replace(/\s/g, "")}`}
                className="flex items-center gap-2 hover:text-frost transition"
              >
                <Mail size={16} /> Phone
              </a>
              <a
                href={profile.links.github}
                target="_blank"
                rel="noreferrer"
                className="flex items-center gap-2 hover:text-frost transition"
              >
                <Github size={16} /> GitHub
              </a>
              <a
                href={profile.links.linkedin}
                target="_blank"
                rel="noreferrer"
                className="flex items-center gap-2 hover:text-frost transition"
              >
                <Linkedin size={16} /> LinkedIn
              </a>
            </div>
          </div>
          <form
            onSubmit={handleSubmit}
            className="glass rounded-3xl p-6 space-y-4"
          >
            <div>
              <label className="text-xs uppercase tracking-[0.3em] text-mist">
                Name
              </label>
              <input
                type="text"
                name="name"
                value={form.name}
                onChange={handleChange}
                className="mt-2 w-full rounded-xl bg-ash px-4 py-3 text-sm text-frost outline-none focus:ring-2 focus:ring-neon"
              />
            </div>
            <div>
              <label className="text-xs uppercase tracking-[0.3em] text-mist">
                Email
              </label>
              <input
                type="email"
                name="email"
                value={form.email}
                onChange={handleChange}
                className="mt-2 w-full rounded-xl bg-ash px-4 py-3 text-sm text-frost outline-none focus:ring-2 focus:ring-neon"
              />
            </div>
            <div>
              <label className="text-xs uppercase tracking-[0.3em] text-mist">
                Message
              </label>
              <textarea
                name="message"
                value={form.message}
                onChange={handleChange}
                rows="4"
                className="mt-2 w-full rounded-xl bg-ash px-4 py-3 text-sm text-frost outline-none focus:ring-2 focus:ring-neon"
              />
            </div>
            {error && <p className="text-xs text-glow">{error}</p>}
            <button
              type="submit"
              className="w-full rounded-full bg-neon/20 px-4 py-3 text-xs uppercase tracking-[0.35em] text-frost border border-neon/40 hover:bg-neon/30 transition"
            >
              Send Message
            </button>
            <p className="text-xs text-mist">
              Form opens your mail client. Backend integration can be enabled on
              request.
            </p>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
