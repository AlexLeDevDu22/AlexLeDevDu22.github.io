import { motion } from "framer-motion";

const freelanceOffers = [
  {
    title: "⚡ Bug Fix / Improvement within 24h!",
    description:
      "Improvement spotted / Glitch to fix in your app or website? I’ll fix it fast. You only pay if I meet your needs.",
    stack: ["Debugging", "Frontend - Backend", "C/C++", "API", "Python"],
  },
  {
    title: "🛠️ Feature Booster — rapid delivery",
    description:
      "Need a quick new feature or adjustment? I handle front/back dev, API integration, UI/UX tuning and more.",
    stack: ["React", "Node.js", "Flutter", "Python", "Databases"],
  },
  {
    title: "🚀 Full Build – from idea to code",
    description:
      "Have a project in mind? I can help plan, prototype, and develop it from the ground up.",
    stack: ["Fullstack", "MVP", "Product Design", "Deployment"],
  },
];

export default function Freelance() {
  return (
    <section
      className="bg-zinc-950 text-green-400 font-mono px-4 py-24 sm:py-32"
      id="freelance"
    >
      <div className="max-w-5xl mx-auto text-white">
        <motion.h2
          className="text-3xl sm:text-5xl font-bold text-center mb-14"
          initial={{ opacity: 0, y: -30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          🧑‍💼 Freelance Offers
        </motion.h2>

        <div className="grid md:grid-cols-3 gap-10">
          {freelanceOffers.map((offer, index) => (
            <motion.div
              key={index}
              className="bg-gradient-to-br from-zinc-800 to-zinc-900 p-6 rounded-2xl shadow-xl border border-zinc-700 hover:scale-[1.02] transition-all duration-300"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              viewport={{ once: true }}
            >
              <h3 className="text-xl font-semibold mb-3">{offer.title}</h3>
              <p className="text-zinc-400 mb-4 text-sm">{offer.description}</p>
              <div className="flex flex-wrap gap-2 justify-center">
                {offer.stack.map((tech, i) => (
                  <span
                    key={i}
                    className="bg-green-600/20 border border-green-500 text-xs px-2 py-1 rounded-full"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        <div className="text-center mt-16">
          <motion.a
            href="#contact"
            className="inline-block bg-green-500 text-black px-6 py-3 rounded-full text-lg font-semibold shadow-lg hover:scale-105 transition transform duration-300"
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.6, duration: 0.4 }}
          >
            Let's work together →
          </motion.a>
        </div>
      </div>
    </section>
  );
}
