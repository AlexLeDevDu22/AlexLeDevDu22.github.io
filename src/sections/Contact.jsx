import { motion } from "framer-motion";
import { Mail, Send, User, MessageSquare } from "lucide-react";

export default function Contact() {
  return (
    <section
      id="contact"
      className="min-h-screen bg-zinc-950 text-white py-20 px-6"
    >
      <div className="max-w-4xl mx-auto">
        <motion.h2
          className="text-4xl sm:text-5xl font-bold text-center mb-10"
          initial={{ opacity: 0, y: -30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          📬 Let's Connect
        </motion.h2>

        <motion.p
          className="text-center text-zinc-400 mb-14 max-w-xl mx-auto"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.3 }}
        >
          Got an idea, a bug to fix, or just want to say hi? Drop me a line
          below and I’ll get back fast. No bots — just me.
        </motion.p>

        <motion.form
          action="https://getform.io/f/bwnwglla" // 🔁 Remplace par ton ID formspree
          method="POST"
          className="grid gap-6 bg-zinc-900 p-8 rounded-2xl shadow-lg border border-zinc-800"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <label className="flex flex-col gap-2">
            <span className="text-sm font-medium flex items-center gap-2">
              <User className="w-4 h-4" /> Your Name
            </span>
            <input
              type="text"
              name="name"
              required
              className="bg-zinc-800 text-white px-4 py-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
              placeholder="Steve, John Doe..."
            />
          </label>

          <label className="flex flex-col gap-2">
            <span className="text-sm font-medium flex items-center gap-2">
              <Mail className="w-4 h-4" /> Email
            </span>
            <input
              type="email"
              name="email"
              required
              className="bg-zinc-800 text-white px-4 py-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
              placeholder="you@example.com"
            />
          </label>

          <label className="flex flex-col gap-2">
            <span className="text-sm font-medium flex items-center gap-2">
              <MessageSquare className="w-4 h-4" /> Message
            </span>
            <textarea
              name="message"
              rows="5"
              required
              className="bg-zinc-800 text-white px-4 py-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
              placeholder="Tell me about your project or idea..."
            />
          </label>

          <motion.button
            type="submit"
            className="flex items-center justify-center gap-2 bg-green-500 hover:bg-green-600 text-black font-semibold py-3 rounded-full shadow-md transition-all duration-300"
            whileHover={{
              scale: 1.05,
              boxShadow: "0 8px 15px rgba(72, 187, 120, 0.6)",
              y: -3,
            }}
            whileTap={{ scale: 0.95 }}
          >
            <Send className="w-4 h-4" /> Send Message
          </motion.button>
        </motion.form>
      </div>
    </section>
  );
}
