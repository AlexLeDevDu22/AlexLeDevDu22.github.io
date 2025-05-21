import React, { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";

// Timeline de code réaliste avec comportement humain et plusieurs fichiers
const fileStructure = {
  "App.jsx": [
    // Imports - début rapide
    { code: "import", color: "text-purple-400", delay: 180 },
    { code: " React", color: "text-blue-400", delay: 140 },
    { code: ", { ", color: "text-white", delay: 120 },
    { code: "useState", color: "text-blue-400", delay: 160 },
    { code: ", ", color: "text-white", delay: 90 },
    { code: "useEffect", color: "text-blue-400", delay: 170 },
    { code: " }", color: "text-white", delay: 100 },
    { code: " from ", color: "text-white", delay: 120 },
    { code: "'react'", color: "text-green-400", delay: 180 },
    { code: ";\n", color: "text-white", delay: 200 },

    { code: "import ", color: "text-purple-400", delay: 150 },
    {
      code: "{ motion, AnimatePresence }",
      color: "text-yellow-400",
      delay: 200,
    },
    { code: " from ", color: "text-white", delay: 120 },
    { code: "'framer-motion'", color: "text-green-400", delay: 220 },
    { code: ";\n", color: "text-white", delay: 250 },

    { code: "import ", color: "text-purple-400", delay: 160 },
    { code: "Navbar", color: "text-blue-400", delay: 180 },
    { code: " from ", color: "text-white", delay: 120 },
    { code: "'./components/Navbar'", color: "text-green-400", delay: 200 },
    { code: ";\n", color: "text-white", delay: 200 },

    { code: "import ", color: "text-purple-400", delay: 160 },
    { code: "Hero", color: "text-blue-400", delay: 150 },
    { code: " from ", color: "text-white", delay: 120 },
    { code: "'./components/Hero'", color: "text-green-400", delay: 200 },
    { code: ";\n", color: "text-white", delay: 200 },

    { code: "import ", color: "text-purple-400", delay: 160 },
    { code: "./styles/App.css", color: "text-green-400", delay: 200 },
    { code: ";\n\n", color: "text-white", delay: 300, trigger: "navbar" },

    // Déclaration du composant
    { code: "const ", color: "text-purple-400", delay: 140 },
    { code: "DevApp ", color: "text-blue-400", delay: 180 },
    { code: "= () => {\n", color: "text-white", delay: 200 },

    // État - hésitation humaine avec proper indentation
    { code: "  const [", color: "text-white", delay: 180 },
    { code: "isLoading", color: "text-orange-400", delay: 200 },
    { code: ", set", color: "text-white", delay: 120 },
    { code: "IsLoading", color: "text-orange-400", delay: 160 },
    { code: "] = ", color: "text-white", delay: 100 },
    { code: "useState", color: "text-blue-400", delay: 150 },
    { code: "(", color: "text-white", delay: 90 },
    { code: "false", color: "text-orange-400", delay: 120 },
    { code: ");\n", color: "text-white", delay: 200 },

    { code: "  const [", color: "text-white", delay: 170 },
    { code: "user", color: "text-orange-400", delay: 140 },
    { code: ", ", color: "text-white", delay: 80 },
    { code: "setUser", color: "text-orange-400", delay: 160 },
    { code: "] = ", color: "text-white", delay: 100 },
    { code: "useState", color: "text-blue-400", delay: 150 },
    { code: "(", color: "text-white", delay: 90 },
    { code: "null", color: "text-orange-400", delay: 120 },
    { code: ");\n", color: "text-white", delay: 200 },

    { code: "  const [", color: "text-white", delay: 170 },
    { code: "theme", color: "text-orange-400", delay: 140 },
    { code: ", ", color: "text-white", delay: 80 },
    { code: "setTheme", color: "text-orange-400", delay: 160 },
    { code: "] = ", color: "text-white", delay: 100 },
    { code: "useState", color: "text-blue-400", delay: 150 },
    { code: "(", color: "text-white", delay: 90 },
    { code: "'dark'", color: "text-green-400", delay: 120 },
    { code: ");\n\n", color: "text-white", delay: 400, trigger: "hero" },

    // useEffect - développeur qui réfléchit
    { code: "  ", color: "text-white", delay: 800 }, // pause de réflexion
    { code: "useEffect", color: "text-blue-400", delay: 180 },
    { code: "(() => {\n", color: "text-white", delay: 150 },
    { code: "    ", color: "text-white", delay: 300 }, // hésitation
    {
      code: "// Simuler le chargement des données utilisateur\n",
      color: "text-gray-500",
      delay: 250,
    },
    { code: "    ", color: "text-white", delay: 180 },
    { code: "setIsLoading", color: "text-orange-400", delay: 200 },
    { code: "(", color: "text-white", delay: 80 },
    { code: "true", color: "text-orange-400", delay: 110 },
    {
      code: ");\n\n",
      color: "text-white",
      delay: 200,
      trigger: "loadingSpinner",
    },

    // Simulation d'API - détails réalistes avec proper tabs
    { code: "    ", color: "text-white", delay: 180 },
    { code: "setTimeout", color: "text-blue-400", delay: 180 },
    { code: "(() => {\n", color: "text-white", delay: 150 },
    { code: "      ", color: "text-white", delay: 120 },
    { code: "fetch", color: "text-blue-400", delay: 150 },
    { code: "(", color: "text-white", delay: 80 },
    { code: "'/api/user/profile'", color: "text-green-400", delay: 220 },
    { code: ")\n", color: "text-white", delay: 150 },
    { code: "        .", color: "text-white", delay: 120 },
    { code: "then", color: "text-blue-400", delay: 140 },
    { code: "(", color: "text-white", delay: 80 },
    { code: "response", color: "text-orange-400", delay: 120 },
    { code: " => ", color: "text-white", delay: 100 },
    { code: "response", color: "text-orange-400", delay: 100 },
    { code: ".", color: "text-white", delay: 80 },
    { code: "json", color: "text-blue-400", delay: 130 },
    { code: "())\n", color: "text-white", delay: 150 },
    { code: "        .", color: "text-white", delay: 120 },
    { code: "then", color: "text-blue-400", delay: 140 },
    { code: "(", color: "text-white", delay: 80 },
    { code: "userData", color: "text-orange-400", delay: 120 },
    {
      code: " => {\n",
      color: "text-white",
      delay: 150,
      trigger: "profileCard",
    },

    { code: "          ", color: "text-white", delay: 180 },
    { code: "setUser", color: "text-orange-400", delay: 160 },
    { code: "(", color: "text-white", delay: 80 },
    { code: "userData", color: "text-orange-400", delay: 120 },
    { code: ");\n", color: "text-white", delay: 150 },
    { code: "          ", color: "text-white", delay: 180 },
    { code: "setIsLoading", color: "text-orange-400", delay: 180 },
    { code: "(", color: "text-white", delay: 80 },
    { code: "false", color: "text-orange-400", delay: 120 },
    { code: ");\n", color: "text-white", delay: 200 },
    { code: "        });\n", color: "text-white", delay: 150 },
    { code: "    }, ", color: "text-white", delay: 120 },
    { code: "2000", color: "text-orange-400", delay: 140 },
    { code: ");\n", color: "text-white", delay: 150 },
    {
      code: "  }, []);\n\n",
      color: "text-white",
      delay: 300,
      trigger: "statsGrid",
    },

    // Handler functions avec proper indentation
    { code: "  const ", color: "text-white", delay: 200 },
    { code: "handleThemeToggle ", color: "text-blue-400", delay: 180 },
    { code: "= ", color: "text-white", delay: 100 },
    { code: "() => {\n", color: "text-white", delay: 180 },
    { code: "    ", color: "text-white", delay: 400 },
    { code: "setTheme", color: "text-orange-400", delay: 160 },
    { code: "(", color: "text-white", delay: 80 },
    { code: "prev", color: "text-orange-400", delay: 120 },
    { code: " => ", color: "text-white", delay: 100 },
    { code: "prev", color: "text-orange-400", delay: 100 },
    { code: " === ", color: "text-white", delay: 100 },
    { code: "'dark'", color: "text-green-400", delay: 140 },
    { code: " ? ", color: "text-white", delay: 100 },
    { code: "'light'", color: "text-green-400", delay: 140 },
    { code: " : ", color: "text-white", delay: 100 },
    { code: "'dark'", color: "text-green-400", delay: 140 },
    { code: ");\n", color: "text-white", delay: 150, trigger: "themeToggle" },
    { code: "  };\n\n", color: "text-white", delay: 200 },

    { code: "  const ", color: "text-white", delay: 200 },
    { code: "handleNotification ", color: "text-blue-400", delay: 180 },
    { code: "= ", color: "text-white", delay: 100 },
    { code: "async ", color: "text-purple-400", delay: 150 },
    { code: "(", color: "text-white", delay: 80 },
    { code: "message", color: "text-orange-400", delay: 140 },
    { code: ") => {\n", color: "text-white", delay: 180 },
    { code: "    ", color: "text-white", delay: 300 },
    {
      code: "// TODO: Implémenter système de notifications\n",
      color: "text-gray-500",
      delay: 280,
    },
    { code: "    ", color: "text-white", delay: 180 },
    { code: "console", color: "text-blue-400", delay: 160 },
    { code: ".", color: "text-white", delay: 80 },
    { code: "log", color: "text-blue-400", delay: 120 },
    { code: "(", color: "text-white", delay: 80 },
    { code: "'📱 Notification:'", color: "text-green-400", delay: 200 },
    { code: ", ", color: "text-white", delay: 80 },
    { code: "message", color: "text-orange-400", delay: 140 },
    { code: ");\n", color: "text-white", delay: 150, trigger: "notification" },
    { code: "  };\n\n", color: "text-white", delay: 200, trigger: "sidebar" },

    // Return JSX - indentation propre
    { code: "  return (\n", color: "text-white", delay: 250 },
    { code: "    <", color: "text-red-400", delay: 120 },
    { code: "div ", color: "text-red-400", delay: 140 },
    { code: "className", color: "text-yellow-400", delay: 160 },
    { code: "=", color: "text-white", delay: 80 },
    { code: "{`app-container ${theme}`}", color: "text-green-400", delay: 200 },
    { code: ">\n", color: "text-red-400", delay: 150 },

    // Conditional rendering avec proper indentation
    { code: "      <", color: "text-red-400", delay: 120 },
    { code: "AnimatePresence", color: "text-blue-400", delay: 180 },
    { code: ">\n", color: "text-red-400", delay: 120 },
    { code: "        {", color: "text-white", delay: 120 },
    { code: "isLoading", color: "text-orange-400", delay: 160 },
    { code: " ? (\n", color: "text-white", delay: 140 },
    { code: "          <", color: "text-red-400", delay: 120 },
    { code: "motion.div\n", color: "text-blue-400", delay: 160 },
    { code: "            ", color: "text-white", delay: 120 },
    { code: "initial", color: "text-yellow-400", delay: 150 },
    { code: "={{ ", color: "text-white", delay: 100 },
    { code: "opacity: 0 ", color: "text-orange-400", delay: 160 },
    { code: "}}\n", color: "text-white", delay: 120 },
    { code: "            ", color: "text-white", delay: 120 },
    { code: "animate", color: "text-yellow-400", delay: 150 },
    { code: "={{ ", color: "text-white", delay: 100 },
    { code: "opacity: 1 ", color: "text-orange-400", delay: 160 },
    { code: "}}\n", color: "text-white", delay: 120 },
    { code: "            ", color: "text-white", delay: 120 },
    { code: "className", color: "text-yellow-400", delay: 160 },
    { code: "=", color: "text-white", delay: 80 },
    { code: '"loading-screen"\n', color: "text-green-400", delay: 180 },
    { code: "          >\n", color: "text-red-400", delay: 120 },
    { code: "            ", color: "text-white", delay: 140 },
    { code: "Loading amazing content...\n", color: "text-white", delay: 220 },
    { code: "          </", color: "text-red-400", delay: 140 },
    { code: "motion.div", color: "text-blue-400", delay: 120 },
    { code: ">\n", color: "text-red-400", delay: 120 },
    { code: "        ) : (\n", color: "text-white", delay: 140 },
    {
      code: "          <>\n",
      color: "text-red-400",
      delay: 120,
      trigger: "mainContent",
    },

    // Main content avec proper tabs
    { code: "            <", color: "text-red-400", delay: 120 },
    { code: "Navbar \n", color: "text-blue-400", delay: 160 },
    { code: "              ", color: "text-white", delay: 120 },
    { code: "user", color: "text-yellow-400", delay: 120 },
    { code: "=", color: "text-white", delay: 80 },
    { code: "{", color: "text-white", delay: 80 },
    { code: "user", color: "text-orange-400", delay: 120 },
    { code: "}\n", color: "text-white", delay: 120 },
    { code: "              ", color: "text-white", delay: 120 },
    { code: "onThemeToggle", color: "text-yellow-400", delay: 180 },
    { code: "=", color: "text-white", delay: 80 },
    { code: "{", color: "text-white", delay: 80 },
    { code: "handleThemeToggle", color: "text-orange-400", delay: 180 },
    { code: "}\n", color: "text-white", delay: 120 },
    {
      code: "            />\n\n",
      color: "text-white",
      delay: 150,
      trigger: "floatingCard",
    },

    { code: "            <", color: "text-red-400", delay: 140 },
    { code: "Hero \n", color: "text-blue-400", delay: 160 },
    { code: "              ", color: "text-white", delay: 120 },
    { code: "onNotify", color: "text-yellow-400", delay: 150 },
    { code: "=", color: "text-white", delay: 80 },
    { code: "{", color: "text-white", delay: 80 },
    { code: "handleNotification", color: "text-orange-400", delay: 180 },
    { code: "}\n", color: "text-white", delay: 120 },
    {
      code: "            />\n",
      color: "text-white",
      delay: 150,
      trigger: "dashboard",
    },

    // Fermeture avec proper indentation
    { code: "          </>\n", color: "text-red-400", delay: 140 },
    { code: "        )}\n", color: "text-white", delay: 140 },
    { code: "      </", color: "text-red-400", delay: 140 },
    { code: "AnimatePresence", color: "text-blue-400", delay: 170 },
    { code: ">\n", color: "text-red-400", delay: 120 },
    { code: "    </", color: "text-red-400", delay: 140 },
    { code: "div", color: "text-red-400", delay: 120 },
    { code: ">\n", color: "text-red-400", delay: 120 },
    { code: "  );\n", color: "text-white", delay: 150 },
    { code: "};\n\n", color: "text-white", delay: 200, trigger: "footer" },

    // Export
    { code: "export default ", color: "text-purple-400", delay: 200 },
    { code: "DevApp", color: "text-blue-400", delay: 160 },
    { code: ";", color: "text-white", delay: 120, switchFile: "Navbar.jsx" },
  ],

  "Navbar.jsx": [
    {
      code: "import React from 'react';\n",
      color: "text-purple-400",
      delay: 180,
    },
    {
      code: "import { motion } from 'framer-motion';\n\n",
      color: "text-purple-400",
      delay: 200,
    },

    {
      code: "const Navbar = ({ user, onThemeToggle }) => {\n",
      color: "text-white",
      delay: 200,
    },
    { code: "  return (\n", color: "text-white", delay: 150 },
    { code: "    <motion.nav\n", color: "text-red-400", delay: 140 },
    { code: "      initial={{ y: -100 }}\n", color: "text-white", delay: 140 },
    { code: "      animate={{ y: 0 }}\n", color: "text-white", delay: 140 },
    {
      code: '      className="navbar-container"\n',
      color: "text-white",
      delay: 160,
    },
    { code: "    >\n", color: "text-red-400", delay: 120 },
    {
      code: '      <div className="nav-content">\n',
      color: "text-white",
      delay: 150,
    },
    {
      code: "        <h2>DevSpace Pro</h2>\n",
      color: "text-white",
      delay: 180,
    },
    {
      code: "        <button onClick={onThemeToggle}>\n",
      color: "text-white",
      delay: 160,
    },
    {
      code: "          🌙/☀️\n        </button>\n",
      color: "text-white",
      delay: 200,
    },
    { code: "      </div>\n", color: "text-white", delay: 140 },
    { code: "    </motion.nav>\n", color: "text-red-400", delay: 140 },
    { code: "  );\n};\n\n", color: "text-white", delay: 180 },
    {
      code: "export default Navbar;",
      color: "text-purple-400",
      delay: 160,
      switchFile: "styles.css",
    },
  ],

  "styles.css": [
    { code: ".app-container {\n", color: "text-blue-400", delay: 180 },
    { code: "  min-height: 100vh;\n", color: "text-white", delay: 140 },
    { code: "  transition: all 0.3s ease;\n", color: "text-white", delay: 150 },
    { code: "}\n\n", color: "text-white", delay: 200 },

    { code: ".navbar-container {\n", color: "text-blue-400", delay: 160 },
    {
      code: "  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);\n",
      color: "text-white",
      delay: 200,
    },
    { code: "  padding: 1rem 2rem;\n", color: "text-white", delay: 140 },
    {
      code: "  box-shadow: 0 4px 20px rgba(0,0,0,0.1);\n",
      color: "text-white",
      delay: 180,
    },
    { code: "}\n\n", color: "text-white", delay: 200, trigger: "animation" },

    { code: "@keyframes pulse {\n", color: "text-purple-400", delay: 160 },
    {
      code: "  0% { transform: scale(1); }\n",
      color: "text-white",
      delay: 140,
    },
    {
      code: "  50% { transform: scale(1.05); }\n",
      color: "text-white",
      delay: 140,
    },
    {
      code: "  100% { transform: scale(1); }\n",
      color: "text-white",
      delay: 140,
    },
    { code: "}", color: "text-white", delay: 120 },
  ],
};

// Composants UI améliorés avec plus de style et d'éléments
const UIComponents = {
  navbar: (
    <motion.nav
      initial={{ y: -50, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ type: "spring", stiffness: 80 }}
      className="bg-gradient-to-r from-purple-600 via-blue-600 to-purple-700 p-4 rounded-xl mb-4 shadow-2xl border border-purple-300"
    >
      <div className="flex justify-between items-center">
        <div className="flex items-center gap-3">
          <div className="w-8 h-8 bg-white rounded-full flex items-center justify-center">
            ⚡
          </div>
          <div className="text-white font-bold text-xl bg-clip-text text-transparent bg-gradient-to-r from-white to-purple-200">
            DevSpace Pro
          </div>
        </div>
        <div className="flex gap-6 items-center text-white">
          <span className="hover:text-purple-200 cursor-pointer transition-all">
            Dashboard
          </span>
          <span className="hover:text-purple-200 cursor-pointer transition-all">
            Projects
          </span>
          <span className="hover:text-purple-200 cursor-pointer transition-all">
            Team
          </span>
          <div className="w-8 h-8 bg-gradient-to-br from-pink-400 to-purple-500 rounded-full"></div>
        </div>
      </div>
    </motion.nav>
  ),

  hero: (
    <motion.div
      initial={{ scale: 0, opacity: 0, rotateX: 90 }}
      animate={{ scale: 1, opacity: 1, rotateX: 0 }}
      transition={{ type: "spring", stiffness: 100, duration: 0.8 }}
      className="bg-gradient-to-br from-indigo-500 via-purple-600 to-pink-600 p-10 rounded-2xl mb-6 text-center text-white relative overflow-hidden"
    >
      <div className="absolute top-0 left-0 w-full h-full bg-white opacity-10 animate-pulse"></div>
      <motion.div
        animate={{ rotate: 360 }}
        transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
        className="absolute top-4 right-4 text-4xl"
      >
        ✨
      </motion.div>
      <h1 className="text-4xl font-bold mb-4 relative z-10">
        Welcome to DevSpace Pro
      </h1>
      <p className="text-purple-100 text-lg mb-6 relative z-10">
        Build the future with cutting-edge technology
      </p>
      <div className="flex gap-4 justify-center relative z-10">
        <div className="bg-white bg-opacity-20 px-4 py-2 rounded-full text-sm">
          🚀 React
        </div>
        <div className="bg-white bg-opacity-20 px-4 py-2 rounded-full text-sm">
          ⚡ Node.js
        </div>
        <div className="bg-white bg-opacity-20 px-4 py-2 rounded-full text-sm">
          🎨 Design
        </div>
      </div>
    </motion.div>
  ),

  loadingSpinner: (
    <motion.div
      initial={{ scale: 0 }}
      animate={{ scale: 1 }}
      className="fixed top-4 left-4 bg-blue-500 text-white p-3 rounded-xl shadow-xl flex items-center gap-2"
    >
      <motion.div
        animate={{ rotate: 360 }}
        transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
        className="w-4 h-4 border-2 border-white border-t-transparent rounded-full"
      />
      Loading...
    </motion.div>
  ),

  profileCard: (
    <motion.div
      initial={{ x: 300, opacity: 0 }}
      animate={{ x: 0, opacity: 1 }}
      transition={{ type: "spring", stiffness: 60 }}
      className="bg-white text-gray-800 p-6 rounded-2xl shadow-2xl mb-4 border-l-4 border-green-500"
    >
      <div className="flex items-center gap-4 mb-4">
        <div className="w-12 h-12 bg-gradient-to-br from-blue-400 to-purple-500 rounded-full flex items-center justify-center text-white font-bold">
          JD
        </div>
        <div>
          <h3 className="font-bold text-lg">John Developer</h3>
          <p className="text-gray-600">Full-stack Engineer</p>
        </div>
      </div>
      <div className="flex gap-2">
        <span className="bg-green-100 text-green-800 px-2 py-1 rounded-full text-xs">
          Active
        </span>
        <span className="bg-blue-100 text-blue-800 px-2 py-1 rounded-full text-xs">
          Pro Member
        </span>
      </div>
    </motion.div>
  ),

  statsGrid: (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ staggerChildren: 0.1 }}
      className="grid grid-cols-4 gap-3 mb-4"
    >
      {[
        {
          value: "42",
          label: "Projects",
          color: "from-red-400 to-red-600",
          icon: "🚀",
        },
        {
          value: "98%",
          label: "Success",
          color: "from-green-400 to-green-600",
          icon: "✅",
        },
        {
          value: "1.2k",
          label: "Users",
          color: "from-blue-400 to-blue-600",
          icon: "👥",
        },
        {
          value: "24/7",
          label: "Support",
          color: "from-purple-400 to-purple-600",
          icon: "💬",
        },
      ].map((stat, index) => (
        <motion.div
          key={index}
          initial={{ scale: 0, rotate: 180 }}
          animate={{ scale: 1, rotate: 0 }}
          transition={{ delay: index * 0.1 }}
          className={`bg-gradient-to-br ${stat.color} text-white p-4 rounded-xl text-center shadow-lg hover:shadow-xl transition-all cursor-pointer`}
        >
          <div className="text-2xl mb-1">{stat.icon}</div>
          <div className="text-xl font-bold">{stat.value}</div>
          <div className="text-xs opacity-90">{stat.label}</div>
        </motion.div>
      ))}
    </motion.div>
  ),

  themeToggle: (
    <motion.div
      initial={{ rotate: -180, scale: 0 }}
      animate={{ rotate: 0, scale: 1 }}
      className="fixed top-4 right-4 bg-gradient-to-r from-yellow-400 to-orange-500 p-3 rounded-full shadow-xl z-10"
    >
      <motion.div
        animate={{ rotate: [0, 15, -15, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
        className="text-2xl"
      >
        🌙☀️
      </motion.div>
    </motion.div>
  ),

  notification: (
    <motion.div
      initial={{ x: 300, opacity: 0 }}
      animate={{ x: 0, opacity: 1 }}
      exit={{ x: 300, opacity: 0 }}
      className="relative top-0 right-0 bg-gradient-to-r from-green-500 to-emerald-600 text-white p-4 rounded-xl shadow-2xl z-10 max-w-sm"
    >
      <div className="flex items-center gap-3">
        <div className="text-2xl">📱</div>
        <div>
          <div className="font-bold">Notification System</div>
          <div className="text-sm opacity-90">Successfully implemented!</div>
        </div>
      </div>
    </motion.div>
  ),

  sidebar: (
    <motion.div
      initial={{ x: -300, opacity: 0 }}
      animate={{ x: 0, opacity: 1 }}
      className="absolute left-4 top-4 w-56 bg-gray-800 text-white p-6 rounded-2xl shadow-2xl z-5"
    >
      <h4 className="font-bold mb-4 text-lg flex items-center gap-2">
        <span className="text-2xl">🎯</span>
        Navigation
      </h4>
      <ul className="space-y-3">
        {["Dashboard", "Analytics", "Projects", "Team", "Settings"].map(
          (item, index) => (
            <motion.li
              key={item}
              initial={{ x: -20, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ delay: index * 0.1 }}
              className="flex items-center gap-3 p-2 rounded-lg hover:bg-gray-700 cursor-pointer transition-all"
            >
              <div className="w-2 h-2 bg-blue-400 rounded-full"></div>
              {item}
            </motion.li>
          )
        )}
      </ul>
    </motion.div>
  ),

  mainContent: (
    <motion.div
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      className="bg-gradient-to-br from-blue-50 to-indigo-100 p-6 rounded-2xl mb-4 border border-blue-200"
    >
      <div className="flex items-center gap-4 mb-4">
        <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-purple-600 rounded-full flex items-center justify-center text-white text-xl">
          🎨
        </div>
        <div>
          <h3 className="font-bold text-xl text-gray-800">Main Dashboard</h3>
          <p className="text-gray-600">Your development workspace</p>
        </div>
      </div>
      <div className="grid grid-cols-2 gap-4">
        <div className="bg-white p-4 rounded-xl shadow-sm">
          <div className="text-sm text-gray-600">Active Projects</div>
          <div className="text-2xl font-bold text-blue-600">12</div>
        </div>
        <div className="bg-white p-4 rounded-xl shadow-sm">
          <div className="text-sm text-gray-600">Code Quality</div>
          <div className="text-2xl font-bold text-green-600">A+</div>
        </div>
      </div>
    </motion.div>
  ),

  floatingCard: (
    <motion.div
      initial={{ y: 100, opacity: 0, rotate: 10 }}
      animate={{ y: 0, opacity: 1, rotate: 0 }}
      whileHover={{ scale: 1.05, rotate: -2 }}
      className="bg-gradient-to-r from-pink-500 via-red-500 to-yellow-500 p-6 rounded-2xl text-white shadow-2xl mb-4 relative overflow-hidden"
    >
      <div className="absolute inset-0 bg-black bg-opacity-10 backdrop-blur-sm"></div>
      <div className="relative z-10">
        <div className="flex items-center gap-3 mb-3">
          <motion.div
            animate={{ rotate: 360 }}
            transition={{ duration: 3, repeat: Infinity }}
            className="text-3xl"
          >
            🎪
          </motion.div>
          <h3 className="font-bold text-xl">Floating Component</h3>
        </div>
        <p className="opacity-90">
          Interactive elements with smooth animations
        </p>
        <div className="flex gap-2 mt-4">
          <div className="bg-white bg-opacity-20 px-3 py-1 rounded-full text-sm">
            ✨ Animated
          </div>
          <div className="bg-white bg-opacity-20 px-3 py-1 rounded-full text-sm">
            🎯 Interactive
          </div>
        </div>
      </div>
    </motion.div>
  ),

  dashboard: (
    <motion.div
      initial={{ clipPath: "circle(0% at 50% 50%)" }}
      animate={{ clipPath: "circle(100% at 50% 50%)" }}
      transition={{ duration: 0.8 }}
      className="bg-white rounded-2xl shadow-2xl p-6 mb-4 border-t-4 border-purple-500"
    >
      <div className="flex items-center justify-between mb-6">
        <h3 className="text-2xl font-bold text-gray-800 flex items-center gap-3">
          <div className="w-8 h-8 bg-gradient-to-br from-purple-500 to-pink-500 rounded-lg flex items-center justify-center text-white">
            📊
          </div>
          Analytics Dashboard
        </h3>
        <motion.button
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.95 }}
          className="bg-gradient-to-r from-purple-500 to-pink-500 text-white px-4 py-2 rounded-lg font-semibold shadow-lg"
        >
          View Details
        </motion.button>
      </div>

      <div className="grid grid-cols-3 gap-4 mb-4">
        {[
          {
            metric: "Revenue",
            value: "$24.5k",
            change: "+12%",
            color: "text-green-600",
          },
          {
            metric: "Users",
            value: "1,234",
            change: "+8%",
            color: "text-blue-600",
          },
          {
            metric: "Performance",
            value: "99.9%",
            change: "+0.1%",
            color: "text-purple-600",
          },
        ].map((item, index) => (
          <motion.div
            key={index}
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: index * 0.1 }}
            className="bg-gray-50 p-4 rounded-xl"
          >
            <div className="text-sm text-gray-600">{item.metric}</div>
            <div className="text-xl font-bold text-gray-800">{item.value}</div>
            <div className={`text-sm ${item.color} font-semibold`}>
              {item.change}
            </div>
          </motion.div>
        ))}
      </div>

      <div className="bg-gradient-to-r from-blue-500 to-purple-600 rounded-xl p-4 text-white">
        <div className="flex items-center gap-2 mb-2">
          <motion.div
            animate={{ scale: [1, 1.2, 1] }}
            transition={{ duration: 2, repeat: Infinity }}
          >
            ⚡
          </motion.div>
          <span className="font-semibold">Live Data Stream</span>
        </div>
        <div className="text-sm opacity-90">Real-time metrics updating...</div>
      </div>
    </motion.div>
  ),

  footer: (
    <motion.footer
      initial={{ y: 100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      className="bg-gradient-to-r from-gray-900 via-purple-900 to-gray-900 text-white p-8 rounded-2xl mt-auto relative overflow-hidden"
    >
      <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-purple-600 opacity-10"></div>
      <div className="relative z-10">
        <div className="text-center mb-6">
          <motion.div
            animate={{ rotate: [0, 360] }}
            transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
            className="text-4xl mb-4"
          >
            🚀
          </motion.div>
          <h4 className="text-2xl font-bold mb-2">DevSpace Pro</h4>
          <p className="text-purple-200">
            Building the future, one line of code at a time
          </p>
        </div>

        <div className="flex justify-center gap-8 mb-6">
          {[
            { name: "Twitter", icon: "🐦", color: "hover:text-blue-400" },
            { name: "GitHub", icon: "🐙", color: "hover:text-gray-300" },
            { name: "LinkedIn", icon: "💼", color: "hover:text-blue-300" },
            { name: "Discord", icon: "🎮", color: "hover:text-purple-400" },
          ].map((social, index) => (
            <motion.div
              key={social.name}
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ scale: 1.2, rotate: 10 }}
              className={`cursor-pointer transition-all ${social.color} flex items-center gap-2`}
            >
              <span className="text-2xl">{social.icon}</span>
              <span>{social.name}</span>
            </motion.div>
          ))}
        </div>

        <div className="text-center text-purple-300 text-sm">
          © 2024 DevSpace Pro. Made with ❤️ and lots of ☕
        </div>
      </div>
    </motion.footer>
  ),

  animation: (
    <motion.div
      initial={{ scale: 0 }}
      animate={{
        scale: [0, 1.5, 1],
        rotate: [0, 180, 360, 180, 0],
        borderRadius: ["50%", "0%", "50%"],
      }}
      transition={{ duration: 3, repeat: Infinity }}
      className="w-20 h-20 bg-gradient-to-r from-pink-500 via-yellow-500 to-purple-500 mx-auto mb-4 flex items-center justify-center shadow-2xl"
    >
      <motion.div
        animate={{
          scale: [1, 1.5, 1],
          rotate: [0, -360, 0],
        }}
        transition={{ duration: 2, repeat: Infinity }}
        className="text-3xl"
      >
        ✨
      </motion.div>
    </motion.div>
  ),
};

// Timeline complète avec tous les fichiers et plus de déclencheurs
const fullTimeline = [
  ...fileStructure["App.jsx"],
  ...fileStructure["Navbar.jsx"],
  ...fileStructure["styles.css"],
];

export default function CinematicDevAnimation() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [displayedCode, setDisplayedCode] = useState([]);
  const [activeComponents, setActiveComponents] = useState([]);
  const [currentFile, setCurrentFile] = useState("App.jsx");
  const [isTyping, setIsTyping] = useState(false);
  const codeRef = useRef(null);
  const previewRef = useRef(null);

  useEffect(() => {
    if (currentIndex >= fullTimeline.length) return;

    const currentItem = fullTimeline[currentIndex];
    setIsTyping(true);

    const timer = setTimeout(() => {
      if (currentItem.switchFile) {
        setCurrentFile(currentItem.switchFile);
        setDisplayedCode([]);
      } else {
        setDisplayedCode((prev) => [...prev, currentItem]);
      }

      if (currentItem.trigger) {
        setActiveComponents((prev) => {
          const newComponents = [...prev, currentItem.trigger];
          // Limiter à 8 composants max pour éviter le spam
          return newComponents.slice(-8);
        });
      }

      setCurrentIndex((prev) => prev + 1);
      setIsTyping(false);
    }, currentItem.delay);

    return () => clearTimeout(timer);
  }, [currentIndex]);

  // Auto-scroll l'IDE
  useEffect(() => {
    if (codeRef.current) {
      codeRef.current.scrollTop = codeRef.current.scrollHeight;
    }
  }, [displayedCode]);

  // Auto-scroll la preview
  useEffect(() => {
    if (previewRef.current) {
      previewRef.current.scrollTop =
        previewRef.current.scrollHeight - previewRef.current.clientHeight;
    }
  }, [activeComponents]);

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-purple-900 to-gray-900 text-white p-6">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-8"
        >
          <h1 className="text-5xl font-bold mb-4 bg-gradient-to-r from-purple-400 via-pink-400 to-blue-400 bg-clip-text text-transparent">
            🎬 Live Code Cinema
          </h1>
          <p className="text-purple-300 text-lg">
            Watch code come to life in real-time
          </p>
        </motion.div>

        <div className="grid grid-cols-2 gap-8 mb-8">
          {/* IDE Panel */}
          <div className="bg-gray-800 rounded-2xl border border-gray-600 overflow-hidden shadow-2xl">
            <div className="bg-gray-700 px-6 py-3 flex items-center gap-4">
              <div className="flex gap-2">
                <div className="w-3 h-3 bg-red-500 rounded-full"></div>
                <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
                <div className="w-3 h-3 bg-green-500 rounded-full"></div>
              </div>
              <div className="flex gap-4">
                {Object.keys(fileStructure).map((fileName) => (
                  <div
                    key={fileName}
                    className={`px-3 py-1 rounded-t-lg text-sm transition-all ${
                      currentFile === fileName
                        ? "bg-gray-800 text-white border-t-2 border-purple-500"
                        : "text-gray-400 hover:text-white cursor-pointer"
                    }`}
                  >
                    {fileName}
                  </div>
                ))}
              </div>
            </div>

            <div
              ref={codeRef}
              className="p-6 font-mono text-sm overflow-y-auto h-96 bg-gray-900 relative"
            >
              <div className="flex flex-wrap leading-relaxed">
                {displayedCode.map((item, index) => (
                  <motion.span
                    key={index}
                    initial={{ opacity: 0, y: 2 }}
                    animate={{ opacity: 1, y: 0 }}
                    className={`${item.color} whitespace-pre`}
                  >
                    {item.code}
                  </motion.span>
                ))}
                {isTyping && (
                  <motion.span
                    animate={{ opacity: [0, 1, 0] }}
                    transition={{ repeat: Infinity, duration: 0.6 }}
                    className="text-purple-400 font-bold"
                  >
                    █
                  </motion.span>
                )}
              </div>
            </div>
          </div>

          {/* Live Preview Panel */}
          <div className="bg-white rounded-2xl border border-gray-300 overflow-hidden shadow-2xl">
            <div className="bg-gray-100 px-6 py-3 flex items-center gap-4">
              <div className="flex gap-2">
                <div className="w-3 h-3 bg-red-500 rounded-full"></div>
                <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
                <div className="w-3 h-3 bg-green-500 rounded-full"></div>
              </div>
              <span className="text-sm text-gray-600 font-semibold">
                🌐 Live Preview
              </span>
              <div className="ml-auto flex gap-2">
                <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
                <span className="text-xs text-green-600">Live</span>
              </div>
            </div>

            <div
              ref={previewRef}
              className="p-6 h-96 overflow-y-auto bg-gradient-to-br from-gray-50 to-blue-50 relative"
            >
              <AnimatePresence mode="popLayout">
                {activeComponents.map((componentKey, index) => (
                  <motion.div
                    key={`${componentKey}-${index}`}
                    layout
                    initial={{ opacity: 0, scale: 0.8, y: 20 }}
                    animate={{ opacity: 1, scale: 1, y: 0 }}
                    exit={{ opacity: 0, scale: 0.8, y: -20 }}
                    transition={{ duration: 0.6, type: "spring" }}
                  >
                    {UIComponents[componentKey]}
                  </motion.div>
                ))}
              </AnimatePresence>

              {activeComponents.length === 0 && (
                <div className="flex items-center justify-center h-full text-gray-400">
                  <div className="text-center">
                    <motion.div
                      animate={{ rotate: 360 }}
                      transition={{ duration: 2, repeat: Infinity }}
                      className="text-6xl mb-4"
                    >
                      ⚡
                    </motion.div>
                    <div className="text-xl font-semibold">Initializing...</div>
                    <div className="text-sm">
                      Waiting for components to load
                    </div>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>

        {/* Enhanced Progress Section */}
        <div className="bg-gray-800 rounded-2xl p-6 border border-gray-600">
          <div className="flex items-center justify-between mb-4">
            <div className="flex items-center gap-3">
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 2, repeat: Infinity }}
                className="text-2xl"
              >
                ⚙️
              </motion.div>
              <div>
                <div className="text-lg font-semibold">Build Progress</div>
                <div className="text-sm text-gray-400">
                  Compiling and rendering components
                </div>
              </div>
            </div>
            <div className="text-right">
              <div className="text-2xl font-bold text-purple-400">
                {Math.round((currentIndex / fullTimeline.length) * 100)}%
              </div>
              <div className="text-xs text-gray-400">Complete</div>
            </div>
          </div>

          <div className="bg-gray-700 rounded-full h-3 overflow-hidden mb-4">
            <motion.div
              className="bg-gradient-to-r from-purple-500 via-pink-500 to-blue-500 h-full relative"
              initial={{ width: 0 }}
              animate={{
                width: `${(currentIndex / fullTimeline.length) * 100}%`,
              }}
              transition={{ duration: 0.3 }}
            >
              <div className="absolute inset-0 bg-white opacity-20 animate-pulse"></div>
            </motion.div>
          </div>

          <div className="grid grid-cols-4 gap-4 text-center">
            <div className="bg-gray-700 rounded-lg p-3">
              <div className="text-green-400 font-bold">
                {activeComponents.length}
              </div>
              <div className="text-xs text-gray-400">Components</div>
            </div>
            <div className="bg-gray-700 rounded-lg p-3">
              <div className="text-blue-400 font-bold">
                {displayedCode.length}
              </div>
              <div className="text-xs text-gray-400">Lines</div>
            </div>
            <div className="bg-gray-700 rounded-lg p-3">
              <div className="text-purple-400 font-bold">{currentFile}</div>
              <div className="text-xs text-gray-400">Current File</div>
            </div>
            <div className="bg-gray-700 rounded-lg p-3">
              <div className="text-yellow-400 font-bold">
                {isTyping ? "⚡" : "✓"}
              </div>
              <div className="text-xs text-gray-400">Status</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
