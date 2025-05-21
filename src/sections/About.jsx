import { useEffect, useState } from "react";
import { motion } from "framer-motion";

const terminalLines = [
  "alex@portfolio:~$ whoami",
  "Alex Garin, 17 y.o. French dev. Obsessed with code.",
  "",
  "alex@portfolio:~$ history",
  "> Started coding at 13 with OpenSCAD",
  "> Built an ENT client & learned web scraping",
  "> Mouse T1: ESP32 microcontroller & LCD hacks",
  "> TikTok Publisher: full-stack bot making 💰",
  "> Drawwy: NSI contest winner – multiplayer game",
  "",
  "alex@portfolio:~$ cat motivation.txt",
  "I code fast. I debug smart. I work hard.",
  "Pay only if satisfied. No risk. All reward.",
];

export default function About() {
  const [visibleLines, setVisibleLines] = useState([]);

  useEffect(() => {
    let i = 0;
    const interval = setInterval(() => {
      if (i < terminalLines.length) {
        setVisibleLines((prev) => [...prev, terminalLines[i]]);
        i++;
      } else {
        clearInterval(interval);
      }
    }, 500);
    return () => clearInterval(interval);
  }, []);

  const lineHeight = 24;
  const containerHeight = lineHeight * terminalLines.length * 1.2 + 32;

  return (
    <section
      className="bg-zinc-950 text-green-400 font-mono px-4 py-24 sm:py-32"
      id="about"
    >
      <div
        className="max-w-3xl mx-auto bg-zinc-900 rounded-2xl shadow-xl p-6 md:p-10 border border-green-700"
        style={{ height: containerHeight }}
      >
        <div className="text-sm sm:text-base space-y-2">
          {visibleLines.map((line, idx) => {
            let content;

            if (line.startsWith("alex@portfolio")) {
              const splitIndex = line.indexOf("$") + 1;
              const prompt = line.slice(0, splitIndex);
              const command = line.slice(splitIndex).trim();

              content = (
                <>
                  <span className="text-green-500 font-bold">{prompt} </span>
                  <span className="text-green-200 italic">{command}</span>
                </>
              );
            } else if (line.startsWith(">")) {
              content = <span className="text-white italic">{line}</span>;
            } else {
              content = <span className="text-white">{line}</span>;
            }

            return (
              <motion.p
                key={idx}
                initial={{ opacity: 0, x: -10 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.4, delay: idx * 0.05 }}
                className="whitespace-pre-wrap"
              >
                {content}
              </motion.p>
            );
          })}
        </div>
      </div>
    </section>
  );
}
