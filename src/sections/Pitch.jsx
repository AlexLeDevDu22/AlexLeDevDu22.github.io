import { motion } from "framer-motion";
import { Handshake, Rocket, SmilePlus, DollarSign } from "lucide-react";

export default function FinalPitch() {
  return (
    <section
      id="final"
      className="min-h-[80vh] bg-zinc-950 text-white px-6 py-20 flex items-center justify-center"
    >
      <div className="max-w-4xl w-full text-center space-y-12 animate-fadeIn">
        <motion.h2
          className="text-4xl sm:text-5xl font-bold gradient-text"
          initial={{ opacity: 0, y: -30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          🚀 Why Me? Why Now?
        </motion.h2>

        <motion.p
          className="text-zinc-400 text-lg sm:text-xl leading-relaxed"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.2 }}
        >
          Are you a shop owner, craftsman, or project leader needing a{" "}
          <strong>tech boost</strong> for simple, effective, and affordable
          tweaks? That's where I come in.{" "}
          <span className="text-green-400 font-medium">
            Fast, clear, and cost-effective.
          </span>
        </motion.p>

        <div className="grid md:grid-cols-2 gap-8 text-left">
          {[
            {
              icon: <Handshake className="w-6 h-6 text-green-400" />,
              title: "Direct contact",
              desc: "No agencies, no middlemen. You talk to a responsive human developer who quickly understands your needs.",
            },
            {
              icon: <DollarSign className="w-6 h-6 text-green-400" />,
              title: "Reasonable prices",
              desc: "I adjust my work to your budget. Small changes? They shouldn't cost a fortune.",
            },
            {
              icon: <Rocket className="w-6 h-6 text-green-400" />,
              title: "Fast delivery",
              desc: "I move quickly and communicate well. Your project won’t get lost in a long queue.",
            },
            {
              icon: <SmilePlus className="w-6 h-6 text-green-400" />,
              title: "Simplicity & clarity",
              desc: "No unnecessary jargon. I guide you, explain everything, and help you become autonomous if you want.",
            },
          ].map(({ icon, title, desc }, i) => (
            <motion.div
              key={i}
              className="bg-zinc-900 border border-zinc-800 rounded-xl p-6 shadow-glow hover:scale-[1.02] transition-all duration-300"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 + i * 0.1 }}
            >
              <div className="flex items-center gap-3 mb-3">
                {icon}
                <h3 className="text-xl font-semibold">{title}</h3>
              </div>
              <p className="text-zinc-400">{desc}</p>
            </motion.div>
          ))}
        </div>

        <motion.div
          className="pt-8"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.8 }}
        >
          <a
            href="#contact"
            className="inline-block bg-green-500 hover:bg-green-600 text-black px-6 py-3 rounded-full font-semibold text-lg shadow-lg transition-all duration-300"
          >
            📬 Let's talk about your project
          </a>
        </motion.div>
      </div>
    </section>
  );
}
