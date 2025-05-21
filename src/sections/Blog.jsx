import { motion } from "framer-motion";
import { FaRocket, FaWrench, FaCodeBranch } from "react-icons/fa";

const blogUpdates = [
  {
    title: "   TikTok Automation Launch",
    date: "Jan 2024",
    icon: <FaRocket />,
    description:
      "Launched my automated TikTok repost system. Fully autonomous, profitable, and live on Raspberry Pi. Managed multi-account stats and LED feedback system!",
  },
  {
    title: "   Mouse T1 Prototype",
    date: "Aug 2024",
    icon: <FaWrench />,
    description:
      "Built a device combining ESP32, LCD, and Android app to exchange images & data via HTTP/Wi-Fi. Showcased C++, root Android features, and microcontroller work.",
  },
  {
    title: "   Drawwy \u2013 NSI Game",
    date: "Mar 2025",
    icon: <FaCodeBranch />,
    description:
      "Developed an online multiplayer game with networking, Pygame, and Python. Won best regional project (Troph\u00e9es NSI) with my team.",
  },
];

export default function Blog() {
  return (
    <section
      id="blog"
      className="bg-zinc-950 text-white font-mono px-4 py-24 sm:py-32"
    >
      <div className="max-w-4xl mx-auto">
        <motion.h2
          className="text-4xl sm:text-5xl font-bold text-center mb-16"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <span className="text-green-400">⌛ </span> Blog Updates
        </motion.h2>

        <div className="relative border-l border-zinc-700 ml-4">
          {blogUpdates.map((entry, index) => (
            <motion.div
              key={index}
              className="mb-10 ml-6 relative"
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              viewport={{ once: true }}
            >
              <span className="absolute -left-4 top-1.5 text-green-400 text-lg">
                {entry.icon}
              </span>
              <h3 className="text-xl font-semibold mb-1 ml-2 text-green-300">
                {entry.title}
              </h3>
              <p className="text-sm text-zinc-400 mb-2">{entry.date}</p>
              <p className="text-zinc-200 text-sm leading-relaxed">
                {entry.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
