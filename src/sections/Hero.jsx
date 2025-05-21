import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { Terminal } from "lucide-react";

const slogans = [
  "Teen dev, pro results.",
  "Fast, cheap, clean — choose 3.",
  "Coding since 13. Freelancing at 17.",
  "No fix? No fee.",
];

function getRandomTypingDelay(char) {
  if (char === " ") return 150 + Math.random() * 100;
  return 40 + Math.random() * 40;
}

export default function Hero() {
  const [index, setIndex] = useState(0);
  const [displayedText, setDisplayedText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);
  const [, setCursorVisible] = useState(true);
  const shouldBlink =
    !isDeleting && displayedText.length === slogans[index].length;

  useEffect(() => {
    const cursorInterval = setInterval(() => {
      setCursorVisible((prev) => !prev);
    }, 500);
    return () => clearInterval(cursorInterval);
  }, []);

  useEffect(() => {
    const fullText = slogans[index];
    const currentLength = displayedText.length;

    let timeout;

    if (isDeleting) {
      timeout = setTimeout(() => {
        setDisplayedText(fullText.substring(0, currentLength - 1));
      }, 30);
      if (currentLength === 0) {
        setIsDeleting(false);
        setIndex((prev) => (prev + 1) % slogans.length);
      }
    } else {
      const nextChar = fullText[currentLength];
      timeout = setTimeout(() => {
        setDisplayedText(fullText.substring(0, currentLength + 1));
      }, getRandomTypingDelay(nextChar));
      if (currentLength === fullText.length) {
        setTimeout(() => setIsDeleting(true), 2500);
      }
    }

    return () => clearTimeout(timeout);
  }, [displayedText, isDeleting, index]);

  return (
    <motion.section
      className="relative min-h-screen w-full flex flex-col justify-center items-center bg-black text-white overflow-hidden"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 1 }}
      id="hero"
    >
      <div className="absolute inset-0 w-full bg-gradient-to-b from-zinc-900 to-black opacity-80 z-0" />

      {/* BACKGROUND GLOW EFFECTS */}
      <motion.div
        className="absolute top-0 left-0 w-[500px] h-[500px] bg-purple-500/20 blur-[120px] rounded-full"
        animate={{ x: [0, 20, -20, 0], y: [0, -30, 30, 0] }}
        transition={{ repeat: Infinity, duration: 20, ease: "easeInOut" }}
      />
      <motion.div
        className="absolute bottom-0 right-0 w-[400px] h-[400px] bg-teal-400/20 blur-[100px] rounded-full"
        animate={{ x: [0, -30, 30, 0], y: [0, 20, -20, 0] }}
        transition={{ repeat: Infinity, duration: 25, ease: "easeInOut" }}
      />

      <div className="relative z-10 w-full text-center space-y-8 font-mono">
        <motion.div
          className="relative z-10 w-full text-left space-y-8 font-mono px-6 md:pl-[15%] xl:pl-[15%]"
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          <h1 className="text-2xl sm:text-4xl md:text-5xl font-bold text-white tracking-tight break-words transition-all duration-500 ease-in-out">
            <span className="text-teal-400">alex@portfolio:~$</span>{" "}
            <span>{displayedText}</span>
            <span
              className={`inline-block bg-teal-600 w-[1ch] h-[1.2em] ml-1 align-middle ${
                shouldBlink ? "animate-blink" : ""
              }`}
            ></span>
          </h1>
        </motion.div>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1, duration: 1 }}
          className="text-lg text-gray-400"
        >
          Developer, Innovator, Freelancer. Based in France. Available
          worldwide.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.5, duration: 0.8 }}
          className="flex flex-col sm:flex-row justify-center gap-4"
        >
          <a
            href="#projects"
            className="bg-teal-500 hover:bg-teal-600 text-white py-3 px-6 rounded-xl font-semibold transition-all duration-300"
          >
            See My Work
          </a>
          <a
            href="#freelance"
            className="border border-teal-500 text-teal-400 hover:bg-teal-500 hover:text-white py-3 px-6 rounded-xl font-semibold transition-all duration-300"
          >
            Hire Me
          </a>
        </motion.div>
      </div>
      <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 text-gray-600 text-sm opacity-50">
        <Terminal className="inline-block w-4 h-4 mr-1" /> Built with React,
        Tailwind & passion
      </div>
    </motion.section>
  );
}
