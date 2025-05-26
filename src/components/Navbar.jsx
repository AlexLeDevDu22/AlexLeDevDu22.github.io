import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Shell from "./Shell";

const navLinks = [
  { id: "hero", label: "Home" },
  { id: "about", label: "About" },
  { id: "freelance", label: "Freelance" },
  { id: "projects", label: "Projects" },
  { id: "blog", label: "Blog" },
  { id: "contact", label: "Contact" },
];
if (window.innerWidth > 768)
  navLinks.splice(3, 0, { id: "demo", label: "Demo" });

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    function onScroll() {
      setScrolled(window.scrollY > 40);
    }
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <>
      <motion.nav
        initial={{ y: -80, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className={`fixed top-0 left-0 right-0 z-10 backdrop-blur-md border-b border-green-500 bg-black/30
          ${
            scrolled ? "bg-black/70 shadow-xl" : "bg-transparent shadow-none"
          } transition-all duration-500`}
      >
        <div className="max-w-7xl mx-auto flex items-center justify-between px-6 py-4">
          <div className="flex items-center space-x-4">
            <a
              href="#hero"
              className="text-3xl font-extrabold select-none relative inline-block text-green-400 hover:text-green-500 transition-all duration-300
                after:absolute after:-bottom-1 after:left-0 
                after:w-0 after:h-[2px] after:bg-green-400 
                after:transition-all after:duration-300 
                hover:after:w-full"
            >
              AlexGarin
            </a>
            <div className="hidden md:block">
              <Shell />
            </div>
          </div>

          <ul className="hidden md:flex space-x-10 text-green-400 font-semibold tracking-wide select-none">
            {navLinks.map((link) => (
              <li key={link.id}>
                <a
                  href={`#${link.id}`}
                  className="hover:text-green-500 transition-all duration-300 relative after:absolute after:-bottom-1 after:left-0 after:w-0 after:h-[2px] after:bg-green-400 after:transition-all after:duration-300 hover:after:w-full"
                  onClick={() => setOpen(false)}
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>

          {/* Mobile menu button */}
          <button
            className="md:hidden text-green-400 focus:outline-none z-50"
            onClick={() => setOpen(!open)}
            aria-label="Toggle menu"
          >
            <motion.svg
              className="w-8 h-8"
              fill="none"
              stroke="currentColor"
              strokeWidth="3"
              viewBox="0 0 24 24"
              strokeLinecap="round"
              strokeLinejoin="round"
              animate={open ? { rotate: 45 } : { rotate: 0 }}
              transition={{ duration: 0.3 }}
            >
              {open ? (
                <motion.path
                  d="M6 18L18 6M6 6l12 12"
                  initial={{ pathLength: 0 }}
                  animate={{ pathLength: 1 }}
                  transition={{ duration: 0.4 }}
                />
              ) : (
                <>
                  <motion.path
                    d="M3 12h18"
                    initial={{ pathLength: 0 }}
                    animate={{ pathLength: 1 }}
                    transition={{ duration: 0.3 }}
                  />
                  <motion.path
                    d="M3 6h18"
                    initial={{ pathLength: 0 }}
                    animate={{ pathLength: 1 }}
                    transition={{ duration: 0.3, delay: 0.1 }}
                  />
                  <motion.path
                    d="M3 18h18"
                    initial={{ pathLength: 0 }}
                    animate={{ pathLength: 1 }}
                    transition={{ duration: 0.3, delay: 0.2 }}
                  />
                </>
              )}
            </motion.svg>
          </button>
        </div>

        {/* Mobile menu */}
        <AnimatePresence>
          {open && (
            <motion.ul
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: "auto", opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{ duration: 0.4 }}
              className="md:hidden bg-black/90 border-t border-green-500 text-green-400 font-semibold flex flex-col space-y-4 px-6 py-6"
            >
              {navLinks.map((link) => (
                <li key={link.id}>
                  <a
                    href={`#${link.id}`}
                    className="relative inline-block text-green-400 hover:text-green-500 transition-all duration-300 
                      after:absolute after:-bottom-1 after:left-0 
                      after:w-0 after:h-[2px] after:bg-green-400 
                      after:transition-all after:duration-300 
                      hover:after:w-full"
                    onClick={() => setOpen(false)}
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </motion.ul>
          )}
        </AnimatePresence>
      </motion.nav>
    </>
  );
}
