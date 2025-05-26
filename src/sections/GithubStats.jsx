// src/sections/GithubStats.jsx

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
            className="w-full max-w-sm mx-auto rounded-xl shadow"
          />
        </div>
      </div>
    </section>
  );
}
