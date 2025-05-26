import { motion } from "framer-motion";
import { Mail, Send, User, MessageSquare, Tag } from "lucide-react";
import { useEffect, useRef } from "react";

export default function Contact() {
  const subjectRef = useRef();

  function applySubjectFromStorage() {
    const stored = localStorage.getItem("contactSubject");
    if (stored && subjectRef.current) {
      subjectRef.current.value = stored;
      localStorage.removeItem("contactSubject");
    }
  }

  useEffect(() => {
    // Applique au montage
    applySubjectFromStorage();

    // Hashchange (pour navigation classique)
    window.addEventListener("hashchange", applySubjectFromStorage);
    window.addEventListener("subjectUpdate", applySubjectFromStorage);

    // Focus sur la section contact (utile si déjà sur #contact)
    const section = document.getElementById("contact");
    if (section) {
      section.addEventListener("focusin", applySubjectFromStorage);
    }

    return () => {
      window.removeEventListener("hashchange", applySubjectFromStorage);
      window.removeEventListener("subjectUpdate", applySubjectFromStorage);
      if (section) {
        section.removeEventListener("focusin", applySubjectFromStorage);
      }
    };
  }, []);

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
              placeholder="Steve Rogers, Jack Shephard..."
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
              placeholder="your@example.com"
            />
          </label>

          <label className="flex flex-col gap-2">
            <span className="text-sm font-medium flex items-center gap-2">
              <Tag className="w-4 h-4" /> Subject
            </span>
            <select
              name="subject"
              required
              ref={subjectRef}
              className="bg-zinc-800 text-white px-4 py-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
              defaultValue=""
            >
              <option value="" disabled>
                Choose a subject...
              </option>
              <option value="⚡ Fast Fixes">⚡ Fast Fixes</option>
              <option value="🛠️ Feature Upgrades">🛠️ Feature Upgrades</option>
              <option value="🚀 Full Development">🚀 Full Development</option>
              <option value="Automation">🤖 Automation</option>
              <option value="Other">💬 Other</option>
            </select>
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
