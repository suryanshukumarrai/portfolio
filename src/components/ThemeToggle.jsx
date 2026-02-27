import { Moon, Sun } from "lucide-react";
import { useTheme } from "../hooks/useTheme.js";

const ThemeToggle = () => {
  const { theme, toggleTheme } = useTheme();

  return (
    <button
      type="button"
      onClick={toggleTheme}
      className="glass text-mist hover:text-frost transition flex items-center gap-2 rounded-full px-3 py-2 text-xs uppercase tracking-[0.3em]"
      aria-label="Toggle theme"
    >
      {theme === "dark" ? <Moon size={14} /> : <Sun size={14} />}
      {theme === "dark" ? "Dark" : "Light"}
    </button>
  );
};

export default ThemeToggle;
