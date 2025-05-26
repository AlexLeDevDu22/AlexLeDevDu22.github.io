import { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";

// commands

const fullHelp = [
  "Available commands:",
  "help ............ Show this full help menu",
  "quick ........... Show quick commands summary",
  "about ........... About me and my skills",
  "skills .......... List my main skills",
  "projects ........ Overview of projects I worked on",
  "blog ............ Read latest blog posts",
  "contact ......... How to contact me",
  "my-age .......... How old am I?",
  "whyhireyou ...... Why should you hire me?",
  "clear ........... Clear the shell output",
  "github .......... Link to my GitHub profile",
  "linkedin ........ Link to my LinkedIn profile",
  "resume .......... Download my CV",
  "echo [text] ..... Repeat what you type",
  "date ............ Show current date & time",
  "quote ........... Show a motivational quote",
  "calc [expr] ..... Simple calculator",
  "ascii ........... Show ASCII art",
];

const quickSummary = [
  "🔥 Quick Infos:",
  "- about: who I am & what I do",
  "- projects: see my best work",
  "- whyhireyou: why you should hire me",
  "- tips: random dev tip",
  "- contact: how to reach me",
  "- github/linkedin: find me online",
  "- skills: what I can do for you",
  "- my-age: how old am I?",
  "- blog: read my latest posts",
  "\n",
  "Type 'help' for all commands",
];

const aboutResponse = [
  "👋 Hey! I'm Alex Garin, a fullstack developer who loves building performant, animated, and clean UIs.",
  "I'm focused on React, TailwindCSS, Framer Motion, and accessibility best practices.",
  "I enjoy working on projects that combine creativity and technical depth.",
];

const skillsResponse = [
  "🚀 Skills:",
  "- Vanilla, React, Tailwind",
  "- Framer Motion, GSAP",
  "- REST APIs, GraphQL",
  "- TypeScript, Zustand, Redux",
  "- Testing (Jest, RTL), SEO, Accessibility",
];

const projectsResponse = [
  "💼 Projects:",
  "- Portfolio website (this one!) built with React & Tailwind",
  "- E-commerce SPA with Next.js, Stripe, and CMS",
  "- Real-time chat app with Firebase and Framer Motion",
  "- Blog platform using Markdown and static generation",
];

const blogResponse = [
  "📝 Latest blog posts:",
  "1. 'React animations: tips & tools' - May 2025",
  "2. 'How I designed my dev portfolio' - Apr 2025",
  "3. 'Building better forms in React' - Mar 2025",
  "(More on the blog section of the site)",
];

const contactResponse = [
  "📬 Contact info:",
  "Email: alex@AlexLeDevDu22.com",
  "LinkedIn: https://www.linkedin.com/in/alexandre-garin-73428a367/",
  "GitHub: github.com/alexgarin",
  "Or use the contact form below on the website.",
];

const githubResponse = ["🔗 GitHub: https://github.com/AlexLeDevDu22"];

const linkedinResponse = [
  "🔗 LinkedIn: https://www.linkedin.com/in/alexandre-garin-73428a367/",
];

const resumeResponse = ["📄 No Resume yet sorry 😅..."];

const birthDate = new Date("2008-05-22");

function calculateAge(birthDate) {
  const today = new Date();
  let age = today.getFullYear() - birthDate.getFullYear();
  const monthDiff = today.getMonth() - birthDate.getMonth();
  const dayDiff = today.getDate() - birthDate.getDate();

  // Si le mois ou le jour d’anniversaire n’est pas encore passé cette année, on retire 1
  if (monthDiff < 0 || (monthDiff === 0 && dayDiff < 0)) {
    age--;
  }
  return age;
}

const myAgeResponse = [
  "I was born on " +
    birthDate.toLocaleDateString() +
    ", so I'm " +
    calculateAge(birthDate) +
    " years old.",
];

export default function Shell() {
  const [shellOpen, setShellOpen] = useState(false);
  const [shellInput, setShellInput] = useState("");
  const [shellOutput, setShellOutput] = useState([
    "Type 'help' and press Enter",
  ]);
  const shellRef = useRef(null);
  const inputRef = useRef(null);

  useEffect(() => {
    // Scroll automatique vers le bas
    if (shellRef.current) {
      shellRef.current.scrollTop = shellRef.current.scrollHeight;
    }
  }, [shellOutput]);

  const runShellCommand = (cmd) => {
    const [baseCmd, ...args] = cmd.toLowerCase().split(" ");
    const argStr = args.join(" ");

    switch (baseCmd) {
      case "help":
        setShellOutput((prev) => [...prev, `> ${cmd}`, ...fullHelp]);
        break;

      case "quick":
        setShellOutput((prev) => [...prev, `> ${cmd}`, ...quickSummary]);
        break;

      case "about":
        setShellOutput((prev) => [...prev, `> ${cmd}`, ...aboutResponse]);
        break;

      case "skills":
        setShellOutput((prev) => [...prev, `> ${cmd}`, ...skillsResponse]);
        break;

      case "projects":
        setShellOutput((prev) => [...prev, `> ${cmd}`, ...projectsResponse]);
        break;
      case "blog":
        setShellOutput((prev) => [...prev, `> ${cmd}`, ...blogResponse]);
        break;
      case "my-age":
        setShellOutput((prev) => [...prev, `> ${cmd}`, ...myAgeResponse]);
        break;

      case "whyhireyou":
        setShellOutput((prev) => [
          ...prev,
          `> ${cmd}`,
          "🚀 Because I deliver fast, clean, and scalable code — and I care about your product as much as you do.",
        ]);
        break;
      case "tips":
      case "randomtip":
        const tips = [
          "💡 CSS Tip: Prefer utility-first CSS (like Tailwind) to keep your code clean.",
          "💡 React Tip: Use useMemo and useCallback wisely to avoid unnecessary re-renders.",
          "💡 Git Tip: Commit often and write meaningful messages.",
        ];
        const random = tips[Math.floor(Math.random() * tips.length)];
        setShellOutput((prev) => [...prev, `> ${cmd}`, random]);
        break;

      case "github":
        setShellOutput((prev) => [...prev, `> ${cmd}`, ...githubResponse]);
        break;

      case "linkedin":
        setShellOutput((prev) => [...prev, `> ${cmd}`, ...linkedinResponse]);
        break;

      case "resume":
        setShellOutput((prev) => [...prev, `> ${cmd}`, ...resumeResponse]);
        break;

      case "contact":
        setShellOutput((prev) => [...prev, `> ${cmd}`, ...contactResponse]);
        break;

      case "echo":
        setShellOutput((prev) => [...prev, `> ${cmd}`, `${argStr}`]);
        break;

      case "date":
        setShellOutput((prev) => [
          ...prev,
          `> ${cmd}`,
          `🕒 Current date/time: ${new Date().toLocaleString()}`,
        ]);
        break;

      case "quote":
        setShellOutput((prev) => [
          ...prev,
          `> ${cmd}`,
          `"Code is like humor. When you have to explain it, it’s bad." — Cory House`,
        ]);
        break;
      case "hello":
        setShellOutput((prev) => [...prev, `> ${cmd}`, `"Hello!👋`]);
        break;
      case "hi":
        setShellOutput((prev) => [...prev, `> ${cmd}`, `"Hi!👋`]);
        break;
      case "hey":
        setShellOutput((prev) => [...prev, `> ${cmd}`, `"Hey!👋`]);
        break;
      case "hello world":
        setShellOutput((prev) => [...prev, `> ${cmd}`, `"Hello Developer!👋`]);
        break;
      case "calc":
        // safe eval: https://stackoverflow.com/questions/52383387/safely-evaluate-math-expression-in-javascript
        try {
          // eslint-disable-next-line no-new-func
          const result = Function(`"use strict";return (${argStr})`)();
          setShellOutput((prev) => [
            ...prev,
            `> ${cmd}`,
            `🧮 Result: ${result}`,
          ]);
        } catch {
          setShellOutput((prev) => [
            ...prev,
            `> ${cmd}`,
            "Error: invalid expression",
          ]);
        }
        break;
      case "ascii":
        setShellOutput((prev) => [
          ...prev,
          `> ${cmd}`,

          "♫♪.ılılıll|̲̅̅●̲̅̅|̲̅̅=̲̅̅|̲̅̅●̲̅̅|llılılı.♫♪",
        ]);
        break;

      case "clear":
        setShellOutput([]);
        break;

      default:
        setShellOutput((prev) => [
          ...prev,
          `> ${cmd}`,
          `Command not found: '${cmd}'. Try 'help'.`,
        ]);
        break;
    }
  };

  const handleShellSubmit = (e) => {
    e.preventDefault();
    if (!shellInput.trim()) return;
    runShellCommand(shellInput.trim());
    setShellInput("");
  };

  return (
    <div className="hidden md:block relative z-10">
      <motion.input
        ref={inputRef}
        type="text"
        placeholder=">_"
        value={shellInput}
        onChange={(e) => setShellInput(e.target.value)}
        onFocus={() => setShellOpen(true)}
        onBlur={() => setTimeout(() => setShellOpen(false), 300)}
        onKeyDown={(e) => e.key === "Enter" && handleShellSubmit(e)}
        className="bg-black text-green-400 font-mono rounded-md px-3 py-1 w-20 focus:w-64 
             border border-green-600 focus:border-green-400 
             focus:outline-none focus:ring-2 focus:ring-green-500 
             transition-all duration-300 caret-green-400"
        spellCheck={false}
        autoComplete="off"
        autoCorrect="off"
        autoCapitalize="off"
      />

      <AnimatePresence>
        {shellOpen && (
          <motion.div
            initial={{ opacity: 0, scale: 0.9, y: 10 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.9, y: 10 }}
            transition={{ duration: 0.25 }}
            className="absolute top-full left-[-50px] mt-2 w-[500px] max-h-72 bg-black border border-green-500 rounded-md shadow-lg overflow-auto font-mono text-green-400 z-50 p-5"
            ref={shellRef}
          >
            {shellOutput.length === 0 ? (
              <div className="text-green-600 italic">
                Shell is empty. Type a command!
              </div>
            ) : (
              shellOutput.map((line, i) =>
                line.startsWith(">") ? (
                  <pre
                    key={i}
                    className="whitespace-pre-wrap text-green-300 font-semibold"
                  >
                    {line}
                  </pre>
                ) : (
                  <pre
                    key={i}
                    className="whitespace-pre-wrap text-green-500 pl-4"
                  >
                    {line}
                  </pre>
                )
              )
            )}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
