import { useEffect, useState } from "react";
import { motion } from "framer-motion";

const terminalBlocks = [
  {
    type: "command",
    lines: ["alex@portfolio:~$ whoami"],
    output: ["Alex Garin, 17 y.o. French dev. Obsessed with code."],
  },
  {
    type: "command",
    lines: ["alex@portfolio:~$ cat history.txt"],
    output: [
      "> Started coding at 13 with OpenSCAD",
      "> Built an ENT client & learned web scraping",
      "> Mouse T1: ESP32 microcontroller & LCD hacks",
      "> TikTok Publisher: full-stack bot making 💰",
      "> Drawwy: NSI contest winner – multiplayer game",
    ],
  },
  {
    type: "command",
    lines: ["alex@portfolio:~$ echo $motivation"],
    output: [
      "I code fast. I debug smart. I work hard.",
      "Pay only if satisfied. No risk. All reward.",
    ],
  },
];

function wait(ms) {
  return new Promise((res) => setTimeout(res, ms));
}

export default function About() {
  const [visibleBlocks, setVisibleBlocks] = useState([]);

  useEffect(() => {
    let isMounted = true;

    const revealSequence = async () => {
      for (let block of terminalBlocks) {
        // Étape 1 : Montrer la commande seulement
        if (!isMounted) break;
        setVisibleBlocks((prev) => {
          if (
            prev.length &&
            JSON.stringify(prev[prev.length - 1].lines) ===
              JSON.stringify(block.lines)
          ) {
            return prev;
          }
          return [...prev, { ...block, showOutput: false }];
        });

        const commandLength = block.lines.join(" ").length; // pour approximer la durée du typing

        await wait(30 * commandLength + 300); // temps d'écriture + pause

        // Étape 2 : Révéler l'output
        if (!isMounted) break;
        setVisibleBlocks((prev) =>
          prev.map((b, idx) =>
            idx === prev.length - 1 ? { ...b, showOutput: true } : b
          )
        );

        await wait(600); // petit délai après output avant la suite
      }
    };

    revealSequence();

    return () => {
      isMounted = false;
    };
  }, []);

  return (
    <section
      className="bg-zinc-950 text-green-400 font-mono px-4 py-24 sm:py-32"
      id="about"
    >
      <div className="max-w-3xl mx-auto bg-zinc-900 rounded-2xl shadow-xl p-6 md:p-10 border border-green-700">
        <div className="text-sm sm:text-base space-y-2">
          {visibleBlocks.map((block, blockIdx) => (
            <div key={blockIdx} className="space-y-1">
              {block.lines.map((line, lineIdx) => {
                const promptEnd = line.indexOf("$") + 1;
                const prompt = line.slice(0, promptEnd);
                const command = line.slice(promptEnd).trim();
                return (
                  <TypingLine key={lineIdx} prompt={prompt} command={command} />
                );
              })}

              {block.showOutput &&
                block.output.map((outputLine, outputIdx) => (
                  <motion.p
                    key={outputIdx}
                    initial={{ opacity: 0, x: -10 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.4, delay: outputIdx * 0.05 }}
                    className={`whitespace-pre-wrap ${
                      outputLine.startsWith(">")
                        ? "text-white italic"
                        : "text-white"
                    }`}
                  >
                    {outputLine}
                  </motion.p>
                ))}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function TypingLine({ prompt, command }) {
  const [displayedText, setDisplayedText] = useState("");

  useEffect(() => {
    let i = 0;
    const interval = setInterval(() => {
      setDisplayedText(command.slice(0, i + 1));
      i++;
      if (i >= command.length) clearInterval(interval);
    }, 30);
    return () => clearInterval(interval);
  }, [command]);

  return (
    <p className="whitespace-pre-wrap">
      <span className="text-green-500 font-bold">{prompt} </span>
      <span className="text-green-200 italic">{displayedText}</span>
    </p>
  );
}
