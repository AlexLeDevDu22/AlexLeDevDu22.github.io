import { motion } from "framer-motion";

const mainOffers = [
  {
    title: "⚡ Fast Fixes & Urgent Patches",
    description:
      "Got a bug that’s breaking your site? Need a quick fix or improvement? I’ll handle it fast and clean—only pay if you’re satisfied.",
    stack: ["Debugging", "Frontend", "Backend", "API", "Python", "JavaScript"],
    theme:
      "from-yellow-500/20 to-yellow-600/10 border-yellow-400 text-yellow-300",
  },
  {
    title: "🛠️ Feature Upgrades & Tuning",
    description:
      "Want to add a feature, tweak your layout, integrate an API, or improve the user experience? I handle both frontend and backend adjustments.",
    stack: ["React", "Node.js", "UI/UX", "API", "Databases"],
    theme: "from-blue-500/20 to-blue-600/10 border-blue-400 text-blue-300",
  },
  {
    title: "🚀 Full Development — From Idea to Launch",
    description:
      "Have a concept or side project in mind? I can help you shape it, prototype it, and bring it to life. No tech background needed—just your vision and a goal.",
    stack: ["Fullstack", "MVP", "Product Design", "Deployment"],
    theme:
      "from-purple-500/20 to-purple-600/10 border-purple-400 text-purple-300",
  },
];

const automationOffer = {
  title: "🤖 Automation & Time-Saving",
  description:
    "Repeating the same digital task over and over? Wondering if it can be automated? Tell me about it—I'll evaluate it for free. If it's possible, I can help you save time and simplify your workflow with smart automation (emails, reports, API flows...).",
  stack: ["Automation", "APIs", "Scripts", "Zapier", "Node.js"],
  theme: "from-green-600/20 to-green-700/10 border-green-500 text-green-300",
};

const subjectMap = {
  "⚡ Fast Fixes & Urgent Patches": "⚡ Fast Fixes",
  "🛠️ Feature Upgrades & Tuning": "🛠️ Feature Upgrades",
  "🚀 Full Development — From Idea to Launch": "🚀 Full Development",
  "🤖 Automation & Time-Saving": "Automation",
};

export default function Freelance() {
  function handleOfferClick(title) {
    localStorage.setItem("contactSubject", subjectMap[title] || "");
    // Appelle un custom event pour prévenir Contact.jsx
    window.dispatchEvent(new Event("subjectUpdate"));
    window.location.hash = "#contact";
  }

  return (
    <section
      className="bg-zinc-950 text-white font-mono px-4 py-24 sm:py-32"
      id="freelance"
    >
      <div className="max-w-6xl mx-auto">
        <motion.h2
          className="text-4xl sm:text-5xl font-bold text-center mb-16"
          initial={{ opacity: 0, y: -30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          🧑‍💼 Freelance Services
        </motion.h2>

        <p className="max-w-3xl mx-auto text-center text-zinc-400 mb-20 px-4 sm:px-0 text-base sm:text-lg leading-relaxed">
          Whether you're a small business owner, solo entrepreneur, or someone
          with a side tech idea — I can help simplify your digital life and
          bring real value to your project. <br />
          <em className="text-green-500">
            No tech jargon. No bloated solutions. Just clean, practical
            development.
          </em>
        </p>

        {/* Main Offers */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-10 mb-28">
          {mainOffers.map((offer, index) => (
            <motion.div
              key={index}
              className={`bg-gradient-to-br ${offer.theme} p-6 rounded-2xl shadow-xl border hover:scale-[1.03] transition-all duration-300 cursor-pointer`}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              viewport={{ once: true }}
              onClick={() => handleOfferClick(offer.title)}
              tabIndex={0}
              role="button"
              onKeyPress={(e) => {
                if (e.key === "Enter") handleOfferClick(offer.title);
              }}
            >
              <h3 className="text-xl font-semibold mb-3">{offer.title}</h3>
              <p className="text-zinc-300 mb-6 text-sm leading-relaxed">
                {offer.description}
              </p>
              <div className="flex flex-wrap gap-2 justify-center">
                {offer.stack.map((tech, i) => (
                  <span
                    key={i}
                    className="bg-white/10 border border-white/20 text-xs px-2 py-1 rounded-full select-none"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Automation Section - Standalone */}
        <div
          className="bg-gradient-to-br from-green-900 to-green-60 rounded-3xl p-10 border border-green-700 shadow-2xl max-w-4xl mx-auto cursor-pointer"
          onClick={() => handleOfferClick(automationOffer.title)}
          tabIndex={0}
          role="button"
          onKeyPress={(e) => {
            if (e.key === "Enter") handleOfferClick(automationOffer.title);
          }}
        >
          <motion.div
            className="text-center"
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h3 className="text-2xl sm:text-3xl font-bold mb-4 text-green-300">
              {automationOffer.title}
            </h3>
            <p className="text-green-200 text-sm sm:text-base mb-6 max-w-xl mx-auto leading-relaxed">
              {automationOffer.description}
            </p>
            <div className="flex flex-wrap gap-2 justify-center mb-6">
              {automationOffer.stack.map((tech, i) => (
                <span
                  key={i}
                  className="bg-green-700/30 border border-green-400 text-xs px-2 py-1 rounded-full select-none text-green-100"
                >
                  {tech}
                </span>
              ))}
            </div>
            <button
              onClick={() =>
                (window.location.href = "mailto:alex.garin.pro@gmail.com")
              }
              className="mt-4 bg-green-500 hover:bg-green-400 text-black font-semibold px-6 py-2 rounded-full transition"
            >
              Request Free Automation Audit →
            </button>
          </motion.div>
        </div>

        {/* Call to action */}
        <div className="text-center mt-24">
          <motion.a
            href="#contact"
            className="inline-block bg-green-500 text-black px-8 py-3 rounded-full text-lg font-semibold shadow-lg hover:scale-105 transition transform duration-300"
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.4, duration: 0.4 }}
          >
            Let’s work together →
          </motion.a>
        </div>
      </div>
    </section>
  );
}
