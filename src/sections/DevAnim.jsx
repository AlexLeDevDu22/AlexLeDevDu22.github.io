import React, { useState, useEffect, useRef, useMemo } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { is } from "date-fns/locale";

// Timeline de code réaliste avec comportement humain et plusieurs fichiers
const fileStructure = {
  "App.jsx": [
    { code: "  import", color: "text-purple-400" },
    { code: " React", color: "text-blue-400" },
    { code: ", { ", color: "text-white" },
    { code: "useState", color: "text-blue-400" },
    { code: ", ", color: "text-white" },
    { code: "useEffect", color: "text-blue-400" },
    { code: " }", color: "text-white" },
    { code: " from ", color: "text-white" },
    { code: "'react'", color: "text-green-400" },
    { code: ";\n", color: "text-white" },
    { code: "  import ", color: "text-purple-400" },
    {
      code: "{ motion, AnimatePresence }",
      color: "text-yellow-400",
    },
    { code: " from ", color: "text-white" },
    { code: "'framer-motion'", color: "text-green-400" },
    { code: ";\n", color: "text-white" },
    { code: "  import ", color: "text-purple-400" },
    { code: "Navbar", color: "text-blue-400" },
    { code: " from ", color: "text-white" },
    { code: "'./components/Navbar'", color: "text-green-400" },
    { code: ";\n", color: "text-white" },
    { code: "  import ", color: "text-purple-400" },
    { code: "Hero", color: "text-blue-400" },
    { code: " from ", color: "text-white" },
    { code: "'./components/Hero'", color: "text-green-400" },
    { code: ";\n", color: "text-white" },
    { code: "  import ", color: "text-purple-400" },
    { code: "./styles/App.css", color: "text-green-400" },
    { code: ";\n\n", color: "text-white", trigger: "navbar" },
    { code: "  const ", color: "text-purple-400" },
    { code: "DevApp ", color: "text-blue-400" },
    { code: "= () => {\n", color: "text-white" },
    { code: "  const [", color: "text-white" },
    { code: "isLoading", color: "text-orange-400" },
    { code: ", ", color: "text-white" },
    { code: "setIsLoading", color: "text-orange-400" },
    { code: "] = ", color: "text-white" },
    { code: "useState", color: "text-blue-400" },
    { code: "(", color: "text-white" },
    { code: "false", color: "text-orange-400" },
    { code: ");\n", color: "text-white" },
    { code: "  const [", color: "text-white" },
    { code: "user", color: "text-orange-400" },
    { code: ", ", color: "text-white" },
    { code: "setUser", color: "text-orange-400" },
    { code: "] = ", color: "text-white" },
    { code: "useState", color: "text-blue-400" },
    { code: "(", color: "text-white" },
    { code: "null", color: "text-orange-400" },
    { code: ");\n", color: "text-white" },
    { code: "  const [", color: "text-white" },
    { code: "theme", color: "text-orange-400" },
    { code: ", ", color: "text-white" },
    { code: "setTheme", color: "text-orange-400" },
    { code: "] = ", color: "text-white" },
    { code: "useState", color: "text-blue-400" },
    { code: "(", color: "text-white" },
    { code: "'dark'", color: "text-green-400" },
    { code: ");\n\n", color: "text-white", trigger: "hero" },
    { code: "  ", color: "text-white" },
    { code: "useEffect", color: "text-blue-400" },
    { code: "(() => {\n", color: "text-white" },
    { code: "    ", color: "text-white" },
    {
      code: "// Simuler le chargement des données utilisateur\n",
      color: "text-gray-500",
    },
    { code: "    ", color: "text-white" },
    { code: "setIsLoading", color: "text-orange-400" },
    { code: "(", color: "text-white" },
    { code: "true", color: "text-orange-400" },
    {
      code: ");\n\n",
      color: "text-white",
      trigger: "loadingSpinner",
    },
    { code: "    ", color: "text-white" },
    { code: "setTimeout", color: "text-blue-400" },
    { code: "(() => {\n", color: "text-white" },
    { code: "      ", color: "text-white" },
    { code: "fetch", color: "text-blue-400" },
    { code: "(", color: "text-white" },
    { code: "'/api/user/profile'", color: "text-green-400" },
    { code: ")\n", color: "text-white" },
    { code: "        .", color: "text-white" },
    { code: "then", color: "text-blue-400" },
    { code: "(", color: "text-white" },
    { code: "response", color: "text-orange-400" },
    { code: " => ", color: "text-white" },
    { code: "response", color: "text-orange-400" },
    { code: ".", color: "text-white" },
    { code: "json", color: "text-blue-400" },
    { code: "())\n", color: "text-white" },
    { code: "        .", color: "text-white" },
    { code: "then", color: "text-blue-400" },
    { code: "(", color: "text-white" },
    { code: "userData", color: "text-orange-400" },
    {
      code: " => {\n",
      color: "text-white",

      trigger: "profileCard",
    },
    { code: "          ", color: "text-white" },
    { code: "setUser", color: "text-orange-400" },
    { code: "(", color: "text-white" },
    { code: "userData", color: "text-orange-400" },
    { code: ");\n", color: "text-white" },
    { code: "          ", color: "text-white" },
    { code: "setIsLoading", color: "text-orange-400" },
    { code: "(", color: "text-white" },
    { code: "false", color: "text-orange-400" },
    { code: ");\n", color: "text-white" },
    { code: "        });\n", color: "text-white" },
    { code: "    }, ", color: "text-white" },
    { code: "2000", color: "text-orange-400" },
    { code: ");\n", color: "text-white" },
    {
      code: "  }, []);\n\n",
      color: "text-white",

      trigger: "statsGrid",
    },
    { code: "  const ", color: "text-white" },
    { code: "handleThemeToggle ", color: "text-blue-400" },
    { code: "= () => {\n", color: "text-white" },
    { code: "    ", color: "text-white" },
    { code: "setTheme", color: "text-orange-400" },
    { code: "(", color: "text-white" },
    { code: "prev", color: "text-orange-400" },
    { code: " => ", color: "text-white" },
    { code: "prev", color: "text-orange-400" },
    { code: " === ", color: "text-white" },
    { code: "'dark'", color: "text-green-400" },
    { code: " ? ", color: "text-white" },
    { code: "'light'", color: "text-green-400" },
    { code: " : ", color: "text-white" },
    { code: "'dark'", color: "text-green-400" },
    { code: ");\n", color: "text-white", trigger: "themeToggle" },
    { code: "  };\n\n", color: "text-white" },
    { code: "  const ", color: "text-white" },
    { code: "handleNotification ", color: "text-blue-400" },
    { code: "= ", color: "text-white" },
    { code: "async ", color: "text-purple-400" },
    { code: "(", color: "text-white" },
    { code: "message", color: "text-orange-400" },
    { code: ") => {\n", color: "text-white" },
    { code: "    ", color: "text-white" },
    {
      code: "// TODO: Implement Notification\n",
      color: "text-gray-500",
    },
    { code: "    ", color: "text-white" },
    { code: "console", color: "text-blue-400" },
    { code: ".", color: "text-white" },
    { code: "log", color: "text-blue-400" },
    { code: "(", color: "text-white" },
    { code: "'📱 Notification:'", color: "text-green-400" },
    { code: ", ", color: "text-white" },
    { code: "message", color: "text-orange-400" },
    { code: ");\n", color: "text-white", trigger: "notification" },
    { code: "  };\n\n", color: "text-white", trigger: "sidebar" },
    { code: "  return (\n", color: "text-white" },
    { code: "    <", color: "text-red-400" },
    { code: "div ", color: "text-red-400" },
    { code: "className", color: "text-yellow-400" },
    { code: "=", color: "text-white" },
    {
      code: "{`app-container $" + "{theme}`}",
      color: "text-green-400",
    },
    { code: ">\n", color: "text-red-400" },
    { code: "      <", color: "text-red-400" },
    { code: "AnimatePresence", color: "text-blue-400" },
    { code: ">\n", color: "text-red-400" },
    { code: "        {", color: "text-white" },
    { code: "isLoading", color: "text-orange-400" },
    { code: " ? (\n", color: "text-white" },
    { code: "          <", color: "text-red-400" },
    { code: "motion.div\n", color: "text-blue-400" },
    { code: "            ", color: "text-white" },
    { code: "initial", color: "text-yellow-400" },
    { code: "={{ ", color: "text-white" },
    { code: "opacity: 0 ", color: "text-orange-400" },
    { code: "}}\n", color: "text-white" },
    { code: "            ", color: "text-white" },
    { code: "animate", color: "text-yellow-400" },
    { code: "={{ ", color: "text-white" },
    { code: "opacity: 1 ", color: "text-orange-400" },
    { code: "}}\n", color: "text-white" },
    { code: "            ", color: "text-white" },
    { code: "className", color: "text-yellow-400" },
    { code: "=", color: "text-white" },
    { code: '"loading-screen"\n', color: "text-green-400" },
    { code: "          >\n", color: "text-red-400" },
    { code: "            ", color: "text-white" },
    { code: "Loading amazing content...\n", color: "text-white" },
    { code: "          </", color: "text-red-400" },
    { code: "motion.div", color: "text-blue-400" },
    { code: ">\n", color: "text-red-400" },
    { code: "        ) : (\n", color: "text-white" },
    {
      code: "          <section>\n",
      color: "text-red-400",

      trigger: "mainContent",
    },
    { code: "            <", color: "text-red-400" },
    { code: "Navbar\n", color: "text-blue-400" },
    { code: "              ", color: "text-white" },
    { code: "user", color: "text-yellow-400" },
    { code: "=", color: "text-white" },
    { code: "{", color: "text-white" },
    { code: "user", color: "text-orange-400" },
    { code: "}\n", color: "text-white" },
    { code: "              ", color: "text-white" },
    { code: "onThemeToggle", color: "text-yellow-400" },
    { code: "=", color: "text-white" },
    { code: "{", color: "text-white" },
    { code: "handleThemeToggle", color: "text-orange-400" },
    { code: "}\n", color: "text-white" },
    {
      code: "            />\n\n",
      color: "text-white",

      trigger: "floatingCard",
    },
    { code: "            <", color: "text-red-400" },
    { code: "Hero\n", color: "text-blue-400" },
    { code: "              ", color: "text-white" },
    { code: "onNotify", color: "text-yellow-400" },
    { code: "=", color: "text-white" },
    { code: "{", color: "text-white" },
    { code: "handleNotification", color: "text-orange-400" },
    { code: "}\n", color: "text-white" },
    {
      code: "            />\n",
      color: "text-white",

      trigger: "dashboard",
    },
    { code: "          </section>\n", color: "text-red-400" },
    { code: "        )}\n", color: "text-white" },
    { code: "      </", color: "text-red-400" },
    { code: "AnimatePresence", color: "text-blue-400" },
    { code: ">\n", color: "text-red-400" },
    { code: "    </", color: "text-red-400" },
    { code: "div", color: "text-red-400" },
    { code: ">\n", color: "text-red-400" },
    { code: "  );\n", color: "text-white" },
    {
      code: "};\n\n",
      color: "text-white",
      trigger: "footer",
    },
    { code: "export default ", color: "text-purple-400" },
    { code: "DevApp", color: "text-blue-400" },
    { code: ";", color: "text-white", switchFile: "Navbar.jsx" },
  ],

  "Navbar.jsx": [
    {
      code: "import React from 'react';\n",
      color: "text-purple-400",
    },
    {
      code: "import { motion } from 'framer-motion';\n\n",
      color: "text-purple-400",
    },
    {
      code: "const Navbar = ({ user, onThemeToggle }) => {\n",
      color: "text-white",
    },
    { code: "  return (\n", color: "text-white" },
    { code: "    <", color: "text-red-400" },
    { code: "motion.nav\n", color: "text-blue-400" },
    { code: "      ", color: "text-white" },
    { code: "initial", color: "text-yellow-400" },
    { code: "={{ ", color: "text-white" },
    { code: "y: -100 ", color: "text-orange-400" },
    { code: "}}\n", color: "text-white" },
    { code: "      ", color: "text-white" },
    { code: "animate", color: "text-yellow-400" },
    { code: "={{ ", color: "text-white" },
    { code: "y: 0 ", color: "text-orange-400" },
    { code: "}}\n", color: "text-white" },
    { code: "      ", color: "text-white" },
    { code: "className", color: "text-yellow-400" },
    { code: "=", color: "text-white" },
    { code: '"navbar-container"\n', color: "text-green-400" },
    { code: "    >\n", color: "text-red-400" },
    { code: "      <", color: "text-red-400" },
    { code: "div ", color: "text-red-400" },
    { code: "className", color: "text-yellow-400" },
    { code: "=", color: "text-white" },
    { code: '"nav-content"', color: "text-green-400" },
    { code: ">\n", color: "text-red-400" },
    { code: "        <", color: "text-red-400" },
    { code: "h2", color: "text-red-400" },
    { code: ">", color: "text-red-400" },
    { code: "DevSpace Pro", color: "text-white" },
    { code: "</", color: "text-red-400" },
    { code: "h2", color: "text-red-400" },
    { code: ">\n", color: "text-red-400" },
    { code: "        <", color: "text-red-400" },
    { code: "button ", color: "text-red-400" },
    { code: "onClick", color: "text-yellow-400" },
    { code: "=", color: "text-white" },
    { code: "{", color: "text-white" },
    { code: "onThemeToggle", color: "text-orange-400" },
    { code: "}", color: "text-white" },
    { code: ">\n", color: "text-red-400" },
    { code: "          🌙/☀️\n", color: "text-white" },
    { code: "        </", color: "text-red-400" },
    { code: "button", color: "text-red-400" },
    { code: ">\n", color: "text-red-400" },
    { code: "      </", color: "text-red-400" },
    { code: "div", color: "text-red-400" },
    { code: ">\n", color: "text-red-400" },
    { code: "    </", color: "text-red-400" },
    { code: "motion.nav", color: "text-blue-400" },
    { code: ">\n", color: "text-red-400" },
    { code: "  );\n", color: "text-white" },
    { code: "};\n\n", color: "text-white" },
    {
      code: "export default Navbar;",
      color: "text-purple-400",

      switchFile: "styles.css",
    },
  ],

  "styles.css": [
    { code: ".app-container {\n", color: "text-blue-400" },
    { code: "  min-height: 100vh;\n", color: "text-white" },
    { code: "  transition: all 0.3s ease;\n", color: "text-white" },
    { code: "}\n  \n  ", color: "text-white" },
    { code: ".navbar-container {\n  ", color: "text-blue-400" },
    {
      code: "  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);\n",
      color: "text-white",
    },
    { code: "  padding: 1rem 2rem;\n", color: "text-white" },
    {
      code: "  box-shadow: 0 4px 20px rgba(0,0,0,0.1);\n",
      color: "text-white",
    },
    {
      code: "}\n    \n    ",
      color: "text-white",
      trigger: "animation",
    },
    {
      code: "@keyframes pulse {\n    ",
      color: "text-purple-400",
    },
    {
      code: "  0% { transform: scale(1); }\n",
      color: "text-white",
    },
    {
      code: "  50% { transform: scale(1.05); }\n",
      color: "text-white",
    },
    {
      code: "  100% { transform: scale(1); }\n",
      color: "text-white",
    },
    { code: "}", color: "text-white" },
  ],
};

// Composants UI améliorés avec plus de style et d'éléments
const UIComponents = {
  // Main Navigation
  navbar: (
    <motion.nav
      initial={{ y: -50, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ type: "spring", stiffness: 100, damping: 20 }}
      className="bg-gradient-to-r from-emerald-600 via-teal-600 to-cyan-600 p-4 rounded-2xl mb-6 shadow-2xl border border-emerald-200 relative overflow-hidden"
    >
      <div className="absolute inset-0 bg-white opacity-5 animate-pulse"></div>
      <div className="flex justify-between items-center relative z-10">
        <motion.div
          className="flex items-center gap-3"
          whileHover={{ scale: 1.05 }}
        >
          <motion.div
            className="w-10 h-10 bg-white rounded-full flex items-center justify-center shadow-lg"
            animate={{ rotate: [0, 360] }}
            transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
          >
            🏪
          </motion.div>
          <div className="text-white font-bold text-xl">CommerceHub Pro</div>
        </motion.div>
        <div className="flex gap-6 items-center text-white">
          {["Dashboard", "Sales", "Stock", "Clients"].map((item, index) => (
            <motion.span
              key={item}
              className="hover:text-emerald-200 cursor-pointer transition-all font-medium"
              whileHover={{ scale: 1.1, y: -2 }}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
            >
              {item}
            </motion.span>
          ))}
          <motion.div
            className="w-10 h-10 bg-gradient-to-br from-yellow-400 to-orange-500 rounded-full border-2 border-white shadow-lg"
            whileHover={{ scale: 1.1 }}
          ></motion.div>
        </div>
      </div>
    </motion.nav>
  ),

  // Hero Banner
  hero: (
    <motion.div
      initial={{ scale: 0, opacity: 0, rotateY: 90 }}
      animate={{ scale: 1, opacity: 1, rotateY: 0 }}
      transition={{ type: "spring", stiffness: 80, duration: 1 }}
      className="bg-gradient-to-br from-blue-600 via-purple-600 to-pink-600 p-8 rounded-3xl mb-6 text-center text-white relative overflow-hidden"
    >
      <motion.div
        className="absolute inset-0 bg-white opacity-10"
        animate={{ opacity: [0.1, 0.2, 0.1] }}
        transition={{ duration: 3, repeat: Infinity }}
      ></motion.div>
      <motion.div
        animate={{ rotate: 360, scale: [1, 1.2, 1] }}
        transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
        className="absolute top-6 right-6 text-4xl"
      >
        ✨
      </motion.div>
      <motion.h1
        className="text-4xl font-bold mb-4 relative z-10"
        initial={{ y: 20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.3 }}
      >
        Manage your business with ease
      </motion.h1>
      <motion.p
        className="text-purple-100 text-lg mb-6 relative z-10"
        initial={{ y: 20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.5 }}
      >
        Complete solution for modern small businesses
      </motion.p>
      <motion.div
        className="flex gap-4 justify-center relative z-10 flex-wrap"
        initial={{ y: 20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.7 }}
      >
        {[
          { icon: "💰", text: "Sales" },
          { icon: "📦", text: "Stock" },
          { icon: "👥", text: "Clients" },
          { icon: "📊", text: "Analytics" },
        ].map((item, index) => (
          <motion.div
            key={item.text}
            className="bg-white bg-opacity-20 px-4 py-2 rounded-full text-sm backdrop-blur-sm"
            whileHover={{ scale: 1.1, bg: "rgba(255,255,255,0.3)" }}
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ delay: 0.8 + index * 0.1 }}
          >
            {item.icon} {item.text}
          </motion.div>
        ))}
      </motion.div>
    </motion.div>
  ),

  // Indicateur de chargement moderne
  loadingSpinner: (
    <motion.div
      initial={{ scale: 0, rotate: -180 }}
      animate={{ scale: 1, rotate: 0 }}
      className="relative top-6 left-6 bg-gradient-to-r from-blue-500 to-purple-600 text-white p-4 rounded-2xl shadow-2xl flex items-center gap-3 z-50"
    >
      <motion.div
        animate={{ rotate: 360 }}
        transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
        className="w-5 h-5 border-2 border-white border-t-transparent rounded-full"
      />
      <span className="font-medium">Syncing...</span>
    </motion.div>
  ),

  // Carte de profil utilisateur
  profileCard: (
    <motion.div
      initial={{ x: 300, opacity: 0, rotateY: 90 }}
      animate={{ x: 0, opacity: 1, rotateY: 0 }}
      transition={{ type: "spring", stiffness: 60, damping: 15 }}
      className="bg-white text-gray-800 p-6 rounded-2xl shadow-2xl mb-4 border-l-4 border-emerald-500 relative overflow-hidden"
    >
      <div className="absolute top-0 right-0 w-20 h-20 bg-emerald-100 rounded-full -translate-y-10 translate-x-10"></div>
      <div className="flex items-center gap-4 mb-4 relative z-10">
        <motion.div
          className="w-14 h-14 bg-gradient-to-br from-emerald-400 to-teal-500 rounded-full flex items-center justify-center text-white font-bold text-lg shadow-lg"
          whileHover={{ scale: 1.1, rotate: 5 }}
        >
          MC
        </motion.div>
        <div>
          <h3 className="font-bold text-lg">Marie Merchant</h3>
          <p className="text-gray-600">Owner - Fashion Store</p>
        </div>
      </div>
      <div className="flex gap-2 relative z-10">
        <motion.span
          className="bg-emerald-100 text-emerald-800 px-3 py-1 rounded-full text-xs font-medium"
          whileHover={{ scale: 1.05 }}
        >
          ● Online
        </motion.span>
        <motion.span
          className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-xs font-medium"
          whileHover={{ scale: 1.05 }}
        >
          Premium
        </motion.span>
      </div>
    </motion.div>
  ),

  // Grille de statistiques
  statsGrid: (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ staggerChildren: 0.1 }}
      className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-6"
    >
      {[
        {
          value: "€2.8k",
          label: "Daily Revenue",
          color: "from-emerald-400 to-emerald-600",
          icon: "💰",
        },
        {
          value: "156",
          label: "Sales",
          color: "from-blue-400 to-blue-600",
          icon: "🛒",
        },
        {
          value: "89%",
          label: "Stock OK",
          color: "from-orange-400 to-orange-600",
          icon: "📦",
        },
        {
          value: "24",
          label: "New Customers",
          color: "from-purple-400 to-purple-600",
          icon: "👥",
        },
      ].map((stat, index) => (
        <motion.div
          key={index}
          initial={{ scale: 0, rotate: 180 }}
          animate={{ scale: 1, rotate: 0 }}
          transition={{ delay: index * 0.1, type: "spring", stiffness: 100 }}
          whileHover={{ scale: 1.05, y: -5 }}
          className={`bg-gradient-to-br ${stat.color} text-white p-4 rounded-2xl text-center shadow-lg cursor-pointer relative overflow-hidden`}
        >
          <div className="absolute inset-0 bg-white opacity-0 hover:opacity-10 transition-opacity"></div>
          <motion.div
            className="text-3xl mb-2"
            whileHover={{ scale: 1.2, rotate: 10 }}
          >
            {stat.icon}
          </motion.div>
          <div className="text-xl font-bold">{stat.value}</div>
          <div className="text-xs opacity-90 font-medium">{stat.label}</div>
        </motion.div>
      ))}
    </motion.div>
  ),

  // Notification système
  notification: (
    <motion.div
      initial={{ x: 400, opacity: 0, scale: 0.8 }}
      animate={{ x: 0, opacity: 1, scale: 1 }}
      exit={{ x: 400, opacity: 0, scale: 0.8 }}
      className="absolute top-3 right-4 bg-gradient-to-r from-emerald-500 to-teal-600 text-white p-4 rounded-2xl shadow-2xl z-40 max-w-sm"
    >
      <div className="flex items-center gap-3">
        <motion.div
          className="text-2xl"
          animate={{ scale: [1, 1.2, 1] }}
          transition={{ duration: 1, repeat: Infinity }}
        >
          🔔
        </motion.div>
        <div>
          <div className="font-bold">New sale!</div>
          <div className="text-sm opacity-90">Order #1247 - €45.90</div>
        </div>
      </div>
    </motion.div>
  ),

  // Menu latéral amélioré
  sidebar: (
    <motion.div
      initial={{ x: -350, opacity: 0 }}
      animate={{ x: 0, opacity: 1 }}
      transition={{ type: "spring", stiffness: 70, damping: 20 }}
      className="absolute left-3 top-3 w-64 bg-white text-gray-800 p-6 rounded-2xl shadow-2xl z-30 border border-gray-100"
    >
      <motion.h4
        className="font-bold mb-6 text-lg flex items-center gap-3 text-gray-700"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.3 }}
      >
        <span className="text-2xl">🏪</span>
        Navigation
      </motion.h4>
      <ul className="space-y-2">
        {[
          { name: "Dashboard", icon: "📊", color: "text-blue-500" },
          { name: "Sales", icon: "💰", color: "text-emerald-500" },
          { name: "Products", icon: "📦", color: "text-orange-500" },
          { name: "Clients", icon: "👥", color: "text-purple-500" },
          { name: "Reports", icon: "📈", color: "text-pink-500" },
          { name: "Settings", icon: "⚙️", color: "text-gray-500" },
        ].map((item, index) => (
          <motion.li
            key={item.name}
            initial={{ x: -20, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ delay: index * 0.1 + 0.4 }}
            whileHover={{ x: 5, backgroundColor: "rgba(59, 130, 246, 0.1)" }}
            className="flex items-center gap-3 p-3 rounded-xl cursor-pointer transition-all group"
          >
            <span
              className={`text-lg ${item.color} group-hover:scale-110 transition-transform`}
            >
              {item.icon}
            </span>
            <span className="font-medium group-hover:text-blue-600">
              {item.name}
            </span>
          </motion.li>
        ))}
      </ul>
    </motion.div>
  ),

  // Contenu principal du dashboard
  mainContent: (
    <motion.div
      initial={{ opacity: 0, scale: 0.95, y: 20 }}
      animate={{ opacity: 1, scale: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      className="bg-gradient-to-br from-blue-50 to-indigo-100 p-8 rounded-3xl mb-6 border border-blue-200 relative overflow-hidden"
    >
      <div className="absolute top-4 right-4 w-32 h-32 bg-blue-200 rounded-full opacity-20 -translate-y-16 translate-x-16"></div>
      <div className="flex items-center gap-4 mb-6 relative z-10">
        <motion.div
          className="w-16 h-16 bg-gradient-to-br from-blue-500 to-purple-600 rounded-2xl flex items-center justify-center text-white text-2xl shadow-lg"
          whileHover={{ rotate: 10, scale: 1.1 }}
        >
          📊
        </motion.div>
        <div>
          <h3 className="font-bold text-2xl text-gray-800">Dashboard</h3>
          <p className="text-gray-600">Overview of your activity</p>
        </div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 relative z-10">
        {[
          {
            label: "Today's Orders",
            value: "23",
            color: "text-blue-600",
            bg: "bg-blue-50",
          },
          {
            label: "Weekly Revenue",
            value: "€12.4k",
            color: "text-emerald-600",
            bg: "bg-emerald-50",
          },
          {
            label: "Satisfaction Rate",
            value: "98.5%",
            color: "text-purple-600",
            bg: "bg-purple-50",
          },
        ].map((item, index) => (
          <motion.div
            key={item.label}
            className={`${item.bg} p-6 rounded-2xl shadow-sm border border-white relative overflow-hidden`}
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: index * 0.1 + 0.3 }}
            whileHover={{ scale: 1.02, y: -2 }}
          >
            <div className="text-sm text-gray-600 font-medium">
              {item.label}
            </div>
            <div className={`text-3xl font-bold ${item.color} mt-2`}>
              {item.value}
            </div>
          </motion.div>
        ))}
      </div>
    </motion.div>
  ),

  // Carte flottante interactive
  floatingCard: (
    <motion.div
      initial={{ y: 100, opacity: 0, rotate: 15 }}
      animate={{ y: 0, opacity: 1, rotate: 0 }}
      whileHover={{ scale: 1.03, rotate: -1, y: -5 }}
      transition={{ type: "spring", stiffness: 100 }}
      className="bg-gradient-to-r from-pink-500 via-red-500 to-yellow-500 p-6 rounded-3xl text-white shadow-2xl mb-6 relative overflow-hidden cursor-pointer"
    >
      <motion.div
        className="absolute inset-0 bg-black opacity-10"
        whileHover={{ opacity: 0.05 }}
      ></motion.div>
      <div className="relative">
        <div className="flex items-center gap-4 mb-4">
          <motion.div
            animate={{ rotate: 360, scale: [1, 1.1, 1] }}
            transition={{ duration: 4, repeat: Infinity }}
            className="text-4xl"
          >
            🎯
          </motion.div>
          <h3 className="font-bold text-xl">Active Promotions</h3>
        </div>
        <p className="opacity-90 mb-4">
          Manage your special offers and discounts in real time
        </p>
        <div className="flex gap-2 flex-wrap">
          {[
            { icon: "🔥", text: "Flash Sale" },
            { icon: "🎉", text: "Sales" },
            { icon: "💝", text: "Loyalty" },
          ].map((item, index) => (
            <motion.div
              key={item.text}
              className="bg-white bg-opacity-20 px-3 py-1 rounded-full text-sm backdrop-blur-sm"
              whileHover={{
                scale: 1.1,
                backgroundColor: "rgba(255,255,255,0.3)",
              }}
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ delay: index * 0.1 }}
            >
              {item.icon} {item.text}
            </motion.div>
          ))}
        </div>
      </div>
    </motion.div>
  ),

  // Animation décorative
  animation: (
    <motion.div
      initial={{ scale: 0 }}
      animate={{
        scale: [0, 1.3, 1],
        rotate: [0, 180, 360, 180, 0],
        borderRadius: ["50%", "20%", "50%"],
      }}
      transition={{ duration: 4, repeat: Infinity }}
      className="w-24 h-24 bg-gradient-to-r from-emerald-500 via-teal-500 to-cyan-500 mx-auto mb-6 flex items-center justify-center shadow-2xl"
    >
      <motion.div
        animate={{
          scale: [1, 1.4, 1],
          rotate: [0, -360, 0],
        }}
        transition={{ duration: 3, repeat: Infinity }}
        className="text-4xl"
      >
        🚀
      </motion.div>
    </motion.div>
  ),

  // Mini-widgets supplémentaires
  quickStats: (
    <motion.div
      initial={{ opacity: 0, scale: 0.8 }}
      animate={{ opacity: 1, scale: 1 }}
      className="bg-white p-4 rounded-xl shadow-lg mb-4 border border-gray-100"
    >
      <div className="flex justify-between items-center">
        <div>
          <div className="text-sm text-gray-600">Today's Sales</div>
          <div className="text-xl font-bold text-emerald-600">€892</div>
        </div>
        <motion.div
          animate={{ rotate: [0, 10, -10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="text-2xl"
        >
          📈
        </motion.div>
      </div>
    </motion.div>
  ),

  weatherWidget: (
    <motion.div
      initial={{ y: 20, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      whileHover={{ scale: 1.02 }}
      className="bg-gradient-to-br from-sky-400 to-blue-500 text-white p-4 rounded-xl shadow-lg mb-4"
    >
      <div className="flex items-center gap-3">
        <motion.div
          animate={{ rotate: 360 }}
          transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
          className="text-3xl"
        >
          ☀️
        </motion.div>
        <div>
          <div className="font-semibold">Paris, 23°C</div>
          <div className="text-sky-100 text-sm">Sunny</div>
        </div>
      </div>
    </motion.div>
  ),

  taskWidget: (
    <motion.div
      initial={{ x: -20, opacity: 0 }}
      animate={{ x: 0, opacity: 1 }}
      className="bg-white p-4 rounded-xl shadow-lg mb-4 border-l-4 border-orange-500"
    >
      <h4 className="font-semibold text-gray-800 mb-2 flex items-center gap-2">
        <span>📋</span> Today's Tasks
      </h4>
      <div className="space-y-2">
        {["Stock inventory", "Reply to emails", "Prepare orders"].map(
          (task, index) => (
            <motion.div
              key={task}
              initial={{ opacity: 0, x: -10 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ x: 5 }}
              className="flex items-center gap-2 text-sm text-gray-600 cursor-pointer"
            >
              <div className="w-2 h-2 bg-orange-400 rounded-full"></div>
              {task}
            </motion.div>
          )
        )}
      </div>
    </motion.div>
  ),

  clockWidget: (
    <motion.div
      initial={{ scale: 0, rotate: 180 }}
      animate={{ scale: 1, rotate: 0 }}
      className="bg-gradient-to-br from-purple-500 to-pink-500 text-white p-4 rounded-xl shadow-lg mb-4 text-center"
    >
      <motion.div
        animate={{ rotate: 360 }}
        transition={{ duration: 60, repeat: Infinity, ease: "linear" }}
        className="text-3xl mb-2"
      >
        🕐
      </motion.div>
      <div className="font-bold text-lg">14:32</div>
      <div className="text-purple-100 text-sm">Monday, May 22</div>
    </motion.div>
  ),

  socialWidget: (
    <motion.div
      initial={{ y: 30, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      whileHover={{ scale: 1.02 }}
      className="bg-gradient-to-r from-pink-500 to-rose-500 text-white p-4 rounded-xl shadow-lg mb-4"
    >
      <div className="flex items-center justify-between mb-3">
        <h4 className="font-semibold">Social Networks</h4>
        <motion.div
          animate={{ scale: [1, 1.2, 1] }}
          transition={{ duration: 2, repeat: Infinity }}
        >
          📱
        </motion.div>
      </div>
      <div className="grid grid-cols-2 gap-2 text-sm">
        <div className="bg-white bg-opacity-20 p-2 rounded-lg text-center">
          <div className="font-bold">156</div>
          <div className="text-pink-100">Likes</div>
        </div>
        <div className="bg-white bg-opacity-20 p-2 rounded-lg text-center">
          <div className="font-bold">23</div>
          <div className="text-pink-100">Shares</div>
        </div>
      </div>
    </motion.div>
  ),

  inventoryAlert: (
    <motion.div
      initial={{ opacity: 0, scale: 0.8 }}
      animate={{ opacity: 1, scale: 1 }}
      className="bg-gradient-to-r from-red-500 to-orange-500 text-white p-4 rounded-xl shadow-lg mb-4 relative overflow-hidden"
    >
      <motion.div
        animate={{ opacity: [0.3, 0.7, 0.3] }}
        transition={{ duration: 2, repeat: Infinity }}
        className="absolute inset-0 bg-white"
      ></motion.div>
      <div className="relative z-10">
        <div className="flex items-center gap-3 mb-2">
          <motion.div
            animate={{ rotate: [0, 10, -10, 0] }}
            transition={{ duration: 1, repeat: Infinity }}
          >
            ⚠️
          </motion.div>
          <span className="font-semibold">Low Stock</span>
        </div>
        <div className="text-sm opacity-90">3 products need restocking</div>
      </div>
    </motion.div>
  ),

  customerFeedback: (
    <motion.div
      initial={{ rotateY: 90, opacity: 0 }}
      animate={{ rotateY: 0, opacity: 1 }}
      transition={{ duration: 0.8 }}
      className="bg-white p-4 rounded-xl shadow-lg mb-4 border border-gray-100"
    >
      <div className="flex items-center gap-3 mb-3">
        <motion.div
          animate={{ rotate: [0, 360] }}
          transition={{ duration: 4, repeat: Infinity, ease: "linear" }}
        >
          💬
        </motion.div>
        <h4 className="font-semibold text-gray-800">Customer Review</h4>
      </div>
      <div className="bg-yellow-50 p-3 rounded-lg border-l-4 border-yellow-400">
        <div className="flex items-center gap-1 mb-1">
          {[...Array(5)].map((_, i) => (
            <motion.span
              key={i}
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ delay: i * 0.1 }}
              className="text-yellow-500"
            >
              ⭐
            </motion.span>
          ))}
        </div>
        <div className="text-sm text-gray-600">"Excellent service!"</div>
        <div className="text-xs text-gray-500 mt-1">- Marie D.</div>
      </div>
    </motion.div>
  ),

  deliveryTracker: (
    <motion.div
      initial={{ x: 50, opacity: 0 }}
      animate={{ x: 0, opacity: 1 }}
      whileHover={{ scale: 1.02 }}
      className="bg-gradient-to-r from-green-500 to-emerald-500 text-white p-4 rounded-xl shadow-lg mb-4"
    >
      <div className="flex items-center gap-3 mb-3">
        <motion.div
          animate={{ x: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
        >
          🚚
        </motion.div>
        <h4 className="font-semibold">Deliveries</h4>
      </div>
      <div className="space-y-2">
        <div className="bg-white bg-opacity-20 p-2 rounded-lg text-sm">
          <div className="font-medium">Order #1234</div>
          <div className="text-green-100">In delivery</div>
        </div>
        <div className="bg-white bg-opacity-20 p-2 rounded-lg text-sm">
          <div className="font-medium">5 deliveries</div>
          <div className="text-green-100">Scheduled for today</div>
        </div>
      </div>
    </motion.div>
  ),

  promotionBanner: (
    <motion.div
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      className="bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 text-white p-6 rounded-2xl shadow-2xl mb-6 relative overflow-hidden"
    >
      <motion.div
        animate={{
          background: [
            "linear-gradient(45deg, rgba(255,255,255,0.1) 0%, rgba(255,255,255,0.3) 50%, rgba(255,255,255,0.1) 100%)",
            "linear-gradient(225deg, rgba(255,255,255,0.1) 0%, rgba(255,255,255,0.3) 50%, rgba(255,255,255,0.1) 100%)",
          ],
        }}
        transition={{ duration: 3, repeat: Infinity, repeatType: "reverse" }}
        className="absolute inset-0"
      ></motion.div>
      <div className="relative z-10">
        <div className="flex items-center gap-4 mb-4">
          <motion.div
            animate={{ rotate: 360 }}
            transition={{ duration: 5, repeat: Infinity, ease: "linear" }}
            className="text-4xl"
          >
            🎉
          </motion.div>
          <div>
            <h3 className="text-xl font-bold">Special Promotion</h3>
            <p className="text-purple-100">Limited offer - 30% off</p>
          </div>
        </div>
        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="bg-white text-purple-600 px-6 py-2 rounded-full font-semibold shadow-lg"
        >
          Activate now
        </motion.button>
      </div>
    </motion.div>
  ),

  miniChart: (
    <motion.div
      initial={{ scale: 0.8, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      className="bg-white p-4 rounded-xl shadow-lg mb-4 border border-gray-100"
    >
      <div className="flex items-center justify-between mb-3">
        <h4 className="font-semibold text-gray-800">Sales Trend</h4>
        <motion.div
          animate={{ rotate: [0, 360] }}
          transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
        >
          📊
        </motion.div>
      </div>
      <div className="flex items-end gap-1 h-16">
        {[40, 65, 45, 80, 60, 90, 75].map((height, index) => (
          <motion.div
            key={index}
            initial={{ scaleY: 0 }}
            animate={{ scaleY: 1 }}
            transition={{ delay: index * 0.1, duration: 0.5 }}
            className="bg-gradient-to-t from-blue-500 to-purple-500 rounded-t flex-1"
            style={{ height: `${height}%` }}
          ></motion.div>
        ))}
      </div>
    </motion.div>
  ),
};

export default function CinematicDevAnimation() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [displayedCode, setDisplayedCode] = useState([]);
  const [activeComponents, setActiveComponents] = useState([]);
  const [currentFile, setCurrentFile] = useState("App.jsx");
  const [isFinished, setIsFinished] = useState(false);
  const codeRef = useRef(null);
  const previewRef = useRef(null);

  const fullTimeline = useMemo(() => {
    const allCodeArrays = Object.values(fileStructure).flat();
    return explodeCodeToCharacters(allCodeArrays);
  }, []);

  function explodeCodeToCharacters(codeArray) {
    const result = [];
    for (const item of codeArray) {
      const { code, color } = item;
      Array.from(code).forEach((char, index) => {
        result.push({
          code: char,
          color,
          trigger: index === code.length - 1 ? item.trigger : null,
          switchFile: index === code.length - 1 ? item.switchFile : null,
        });
      });
    }
    return result;
  }

  useEffect(() => {
    if (currentIndex >= fullTimeline.length) {
      setIsFinished(true);
      return;
    }

    const currentItem = fullTimeline[currentIndex];

    const timeout = setTimeout(() => {
      // switchFile = changement de fichier = reset affichage
      if (currentItem.switchFile) {
        console.log(`Switching to file: ${currentItem.switchFile}`);
        setCurrentFile(currentItem.switchFile);
        setDisplayedCode([]);
      } else {
        setDisplayedCode((prev) => [...prev, currentItem]);
      }
      if (currentItem.trigger) {
        setActiveComponents((prev) => {
          const newComponents = [...prev, currentItem.trigger];
          return newComponents.slice(-8);
        });
      }

      setCurrentIndex((prev) => prev + 1);
    }, 0);

    return () => clearTimeout(timeout);
  }, [currentIndex, fullTimeline]);

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
    <div
      className="min-h-screen bg-gradient-to-br from-gray-900 via-purple-900 to-gray-900 text-white p-6"
      id="demo"
    >
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
                    onClick={() => {
                      if (isFinished) {
                        setCurrentFile(fileName);
                        setDisplayedCode(fileStructure[fileName]);
                      }
                    }}
                  >
                    {fileName}
                  </div>
                ))}
              </div>
            </div>

            <div
              ref={codeRef}
              className="p-6 font-mono text-sm overflow-y-auto h-96 bg-gray-900 relative whitespace-pre"
            >
              <div className="block leading-relaxed">
                {displayedCode.map((item, index) => (
                  <motion.span
                    key={index}
                    initial={{ opacity: 0, y: 2 }}
                    animate={{ opacity: 1, y: 0 }}
                    className={`${item.color}`}
                  >
                    {item.code}
                  </motion.span>
                ))}
                <motion.span
                  animate={{ opacity: [0, 1, 0] }}
                  transition={{ repeat: Infinity, duration: 0.6 }}
                  className="text-purple-400 font-bold"
                >
                  █
                </motion.span>
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
              <div className="absolute inset-0 bg-purple-500 opacity-20 animate-pulse"></div>
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
                {displayedCode.filter((obj) => obj.code.includes("\n")).length}
              </div>
              <div className="text-xs text-gray-400">Lines</div>
            </div>
            <div className="bg-gray-700 rounded-lg p-3">
              <div className="text-purple-400 font-bold">{currentFile}</div>
              <div className="text-xs text-gray-400">Current File</div>
            </div>
            <div className="bg-gray-700 rounded-lg p-3">
              <div className="text-yellow-400 font-bold">
                {isFinished ? "⚡" : "✓"}
              </div>
              <div className="text-xs text-gray-400">Status</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
