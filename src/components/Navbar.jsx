import { Menu } from "lucide-react";
import { useState } from "react";
import ThemeToggle from "./ThemeToggle.jsx";

const navLinks = [
  { label: "About", href: "#about" },
  { label: "Skills", href: "#skills" },
  { label: "Experience", href: "#experience" },
  { label: "Projects", href: "#projects" },
  { label: "Certifications", href: "#certifications" },
  { label: "Education", href: "#education" },
  { label: "Contact", href: "#contact" }
];

const Navbar = () => {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-40 bg-night/80 backdrop-blur">
      <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
        <a href="#top" className="text-sm uppercase tracking-[0.35em] text-frost">
          Suryanshu
        </a>
        <nav className="hidden lg:flex items-center gap-6 text-xs uppercase tracking-[0.3em] text-mist">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="hover:text-frost transition"
            >
              {link.label}
            </a>
          ))}
        </nav>
        <div className="flex items-center gap-3">
          <ThemeToggle />
          <button
            type="button"
            onClick={() => setOpen((prev) => !prev)}
            className="glass rounded-full p-2 text-mist hover:text-frost lg:hidden"
            aria-label="Toggle navigation"
          >
            <Menu size={18} />
          </button>
        </div>
      </div>
      {open && (
        <div className="lg:hidden border-t border-white/10 bg-night/95">
          <div className="max-w-6xl mx-auto px-6 py-4 flex flex-col gap-3 text-xs uppercase tracking-[0.3em] text-mist">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setOpen(false)}
                className="hover:text-frost transition"
              >
                {link.label}
              </a>
            ))}
          </div>
        </div>
      )}
    </header>
  );
};

export default Navbar;
