import { motion } from "framer-motion";

const projects = [
  {
    title: "Drawwy – NSI Winner🏆️",
    image: "/assets/drawwy.png",
    description:
      "Multiplayer drawing game built in just 6 weeks with Python, Pygame, and WebSockets. Won 1st place in Brittany’s regional NSI contest.",
    stack: ["Python", "Pygame", "WebSocket", "Multithreading", "Git"],
    github: "https://github.com/AlexLeDevDu22/Drawwy",
  },
  {
    title: "Mouse T1",
    image: "/assets/mouse-t1.png",
    description:
      "A stealth microcontroller project using ESP32, Android, and a custom LCD interface. Built for wireless file transfer, image display, and system control over WiFi.",
    stack: ["ESP32", "C++", "Kotlin", "Android", "HTTP", "LCD"],
    github: "https://github.com/AlexLeDevDu22/Mouse-T1",
  },
  {
    title: "TikTok Publisher Bot",
    image: "/assets/tiktok-publisher.png",
    description:
      "A full-stack automation system that runs on a Raspberry Pi, managing multiple TikTok accounts, publishing content, scraping stats, and syncing live data to LED strips.",
    stack: ["Python", "JavaScript", "Web Scraping", "Raspberry Pi", "WS2812B"],
    github: "https://github.com/AlexLeDevDu22/Tiktok-Publicator-Auto",
  },
];

export default function Projects() {
  return (
    <section
      className="min-h-screen bg-gradient-to-b from-zinc-950 to-zinc-900 py-20 px-6 relative overflow-hidden"
      id="projects"
    >
      {/* BACKGROUND MOTION GLOW */}
      <motion.div
        className="absolute -top-32 -left-32 w-96 h-96 bg-green-500 opacity-20 rounded-full blur-3xl animate-pulse"
        animate={{ x: [0, 50, 0], y: [0, 50, 0] }}
        transition={{ repeat: Infinity, duration: 10 }}
      />
      <motion.div
        className="absolute -bottom-32 -right-32 w-96 h-96 bg-purple-500 opacity-20 rounded-full blur-3xl animate-pulse"
        animate={{ x: [0, -50, 0], y: [0, -50, 0] }}
        transition={{ repeat: Infinity, duration: 12 }}
      />

      <div className="max-w-6xl mx-auto relative z-10">
        <h2 className="text-3xl sm:text-5xl font-bold text-white mb-12 text-center">
          ⚙️ Side Projects in Motion
        </h2>
        <div className="grid md:grid-cols-3 gap-10">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              className="bg-zinc-800 rounded-2xl overflow-hidden shadow-lg border border-zinc-700 hover:scale-[1.02] transition-all duration-300"
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              viewport={{ once: true }}
            >
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-48 object-cover border-b border-zinc-700"
              />
              <div className="p-6 text-white space-y-3">
                <h3 className="text-xl font-semibold">{project.title}</h3>
                <p className="text-zinc-400 text-sm">{project.description}</p>
                <div className="flex flex-wrap gap-2 justify-center text-xs mt-4">
                  {project.stack.map((tech, i) => (
                    <span
                      key={i}
                      className="bg-green-600/20 border border-green-500 px-2 py-1 rounded-full"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                <a
                  href={project.github}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-block mt-4 text-green-400 hover:underline"
                >
                  View on GitHub →
                </a>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
