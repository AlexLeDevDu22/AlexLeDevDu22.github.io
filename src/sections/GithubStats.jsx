// src/sections/GithubStats.jsx
import GitHubCalendar from "react-github-calendar";

export default function GithubStats() {
  return (
    <section className="bg-zinc-950 text-white py-20 px-6" id="github">
      <div className="max-w-5xl mx-auto text-center">
        <h2 className="text-3xl sm:text-5xl font-bold mb-10">
          🧑‍💻 GitHub Insights
        </h2>

        <div className="flex flex-col md:flex-row items-center justify-center gap-6">
          <img
            src="https://github-readme-stats.vercel.app/api?username=AlexLeDevDu22&show_icons=true&theme=github_dark&hide_border=true&count_private=true"
            alt="GitHub Stats"
            className="w-full max-w-md rounded-xl shadow"
          />

          <img
            src="https://github-readme-stats.vercel.app/api/top-langs/?username=AlexLeDevDu22&layout=compact&theme=github_dark&langs_count=6&hide_progress=true"
            alt="Top Languages"
            className="w-full max-w-sm mx-auto mt-4 rounded-xl shadow"
          />
        </div>

        <div className="bg-zinc-900 rounded-xl p-6 mt-10 shadow-inner border border-zinc-800 max-w-3xl mx-auto">
          <h3 className="text-lg font-semibold mb-4 text-zinc-400">
            Contributions récentes
          </h3>
          <GitHubCalendar
            username="AlexLeDevDu22"
            blockSize={10}
            blockMargin={4}
            fontSize={14}
            colorScheme="dark"
          />
        </div>
      </div>
    </section>
  );
}
