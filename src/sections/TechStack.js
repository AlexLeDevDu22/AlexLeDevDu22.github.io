// src/components/TechStack.jsx
import { motion } from "framer-motion";
import { VscVscodeInsiders } from "react-icons/vsc";
import {
  SiPython,
  SiHtml5,
  SiCss3,
  SiJavascript,
  SiC,
  SiCplusplus,
  SiGnubash,
  SiGit,
  SiKotlin,
  SiXml,
  SiLinux,
  SiNodedotjs,
  SiExpress,
  SiReact,
} from "react-icons/si";

const techs = [
  { name: "VS Code", icon: <VscVscodeInsiders /> },
  { name: "Python", icon: <SiPython /> },
  { name: "HTML", icon: <SiHtml5 /> },
  { name: "CSS", icon: <SiCss3 /> },
  { name: "JavaScript", icon: <SiJavascript /> },
  { name: "C", icon: <SiC /> },
  { name: "C++", icon: <SiCplusplus /> },
  { name: "Kotlin", icon: <SiKotlin /> },
  { name: "XML", icon: <SiXml /> },
  { name: "Bash", icon: <SiGnubash /> },
  { name: "Git", icon: <SiGit /> },
  { name: "Linux", icon: <SiLinux /> },
  { name: "Node.js", icon: <SiNodedotjs /> },
  { name: "Express.js", icon: <SiExpress /> },
  { name: "React.js", icon: <SiReact /> },
];

export default function TechStack() {
  return (
    <section
      className="bg-gradient-to-b from-zinc-950 to-zinc-900 py-20 px-6 text-white relative overflow-hidden"
      id="stack"
    >
      {/* Animated Glow Background */}
      <div className="absolute inset-0 pointer-events-none opacity-10">
        <div className="absolute w-96 h-96 bg-green-500 blur-3xl rounded-full top-1/2 left-1/3 animate-pulse opacity-20" />
      </div>

      <div className="max-w-6xl mx-auto text-center relative z-10">
        <motion.h2
          className="text-4xl font-bold mb-10 gradient-text"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          🧰 My Tech Stack
        </motion.h2>

        <motion.div
          className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6"
          initial="hidden"
          whileInView="visible"
          variants={{
            visible: {
              transition: {
                staggerChildren: 0.1,
              },
            },
          }}
        >
          {techs.map((tech, index) => (
            <motion.div
              key={index}
              className="bg-zinc-900 hover:bg-zinc-800 transition rounded-xl p-6 flex flex-col items-center justify-center shadow-md hover:shadow-green-500/20 group cursor-default"
              whileHover={{ scale: 1.08 }}
              variants={{
                hidden: { opacity: 0, y: 20 },
                visible: { opacity: 1, y: 0 },
              }}
              transition={{ duration: 0.4 }}
            >
              <motion.div
                className="text-4xl text-green-400 mb-2 group-hover:animate-wiggle"
                whileHover={{ rotate: [0, -10, 10, 0] }}
                transition={{ duration: 0.4 }}
              >
                {tech.icon}
              </motion.div>
              <p className="text-sm">{tech.name}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
