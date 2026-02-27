import { ExternalLink, Star } from "lucide-react";
import { useGithubRepos } from "../hooks/useGithubRepos.js";

const GithubRepos = ({ username }) => {
  const { repos, status } = useGithubRepos(username);

  if (status === "loading") {
    return <p className="text-sm text-mist">Loading GitHub repositories...</p>;
  }

  if (status === "error") {
    return (
      <p className="text-sm text-mist">
        GitHub repositories are temporarily unavailable.
      </p>
    );
  }

  return (
    <div className="grid gap-4 md:grid-cols-2">
      {repos.map((repo) => (
        <a
          key={repo.id}
          href={repo.html_url}
          target="_blank"
          rel="noreferrer"
          className="glass rounded-2xl p-4 hover:border-neon transition border border-white/10"
        >
          <div className="flex items-start justify-between gap-4">
            <div>
              <h4 className="text-sm font-semibold text-frost">{repo.name}</h4>
              <p className="text-xs text-mist mt-2">
                {repo.description || "Production-ready repository"}
              </p>
            </div>
            <ExternalLink size={16} className="text-mist" />
          </div>
          <div className="mt-4 flex items-center gap-2 text-xs text-mist">
            <Star size={14} /> {repo.stargazers_count}
          </div>
        </a>
      ))}
    </div>
  );
};

export default GithubRepos;
