import { useEffect, useState } from "react";

const BASE_URL = "https://api.github.com";

export const useGithubRepos = (username) => {
  const [repos, setRepos] = useState([]);
  const [status, setStatus] = useState("idle");

  useEffect(() => {
    if (!username) return;
    let isMounted = true;
    const controller = new AbortController();

    const loadRepos = async () => {
      setStatus("loading");
      try {
        const headers = {};
        if (import.meta.env.VITE_GITHUB_TOKEN) {
          headers.Authorization = `Bearer ${import.meta.env.VITE_GITHUB_TOKEN}`;
        }

        const response = await fetch(
          `${BASE_URL}/users/${username}/repos?per_page=12&sort=updated`,
          { headers, signal: controller.signal }
        );

        if (!response.ok) {
          throw new Error("Failed to fetch repos");
        }

        const data = await response.json();
        const sorted = [...data]
          .filter((repo) => !repo.fork)
          .sort((a, b) => b.stargazers_count - a.stargazers_count)
          .slice(0, 6);

        if (isMounted) {
          setRepos(sorted);
          setStatus("success");
        }
      } catch (error) {
        if (isMounted) {
          setStatus("error");
        }
      }
    };

    loadRepos();

    return () => {
      isMounted = false;
      controller.abort();
    };
  }, [username]);

  return { repos, status };
};
