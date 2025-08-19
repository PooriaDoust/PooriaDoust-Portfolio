"use client";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaBars, FaTimes } from "react-icons/fa";
import GradientText from "./GradientText";

const navLinks = [
  { label: "Home", to: "hero" },
  { label: "About", to: "about" },
  { label: "Skills", to: "skills" },
  { label: "Certifications", to: "certifications" },
  { label: "Projects", to: "projects" },
  { label: "Contact", to: "contact" },
];

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [active, setActive] = useState("hero");

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
      // Update active link based on scroll position
      const offsets = navLinks.map(({ to }) => {
        const el = document.getElementById(to);
        return el ? { to, top: el.getBoundingClientRect().top + window.scrollY } : null;
      }).filter(Boolean);
      const scrollPos = window.scrollY + 120; // offset for navbar height
      let current = "hero";
      for (let i = 0; i < offsets.length; i++) {
        if (scrollPos >= (offsets[i]?.top ?? 0)) {
          current = offsets[i]?.to ?? "hero";
        }
      }
      // If at the bottom of the page, highlight Contact
      if ((window.innerHeight + window.scrollY) >= document.body.offsetHeight - 2) {
        current = "contact";
      }
      setActive(current);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Smooth scroll handler
  const handleNavClick = (to: string) => (e: React.MouseEvent) => {
    e.preventDefault();
    setMenuOpen(false);
    const el = document.getElementById(to);
    el?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <motion.nav
      initial={{ opacity: 0, y: -32 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${scrolled ? "backdrop-blur-md bg-white/70 dark:bg-[#18192a]/70 shadow-lg border-b border-gradient-to-r from-indigo-200 via-purple-200 to-transparent" : "bg-transparent"}`}
      style={{ WebkitBackdropFilter: "blur(12px)" }}
      aria-label="Main navigation"
    >
      <div className="w-full flex items-center justify-between px-4 py-3 md:py-2">
        <a href="#hero" className="font-bold text-xl bg-gradient-to-r from-indigo-500 to-purple-600 bg-clip-text text-transparent focus:outline-none focus:ring-2 focus:ring-indigo-400" aria-label="Go to home">
          <GradientText colors={["#40ffaa", "#4079ff", "#40ffaa", "#4079ff", "#40ffaa"]} animationSpeed={3} showBorder={false}>
            Pooria
          </GradientText>
        </a>
        {/* Desktop nav */}
        <div className="hidden md:flex gap-2 items-center">
          {navLinks.map(({ label, to }) => (
            <a
              key={to}
              href={`#${to}`}
              onClick={handleNavClick(to)}
              className={`px-3 py-2 rounded-md font-medium transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-indigo-400 ${active === to ? "border-b-2 border-indigo-500 text-indigo-600 dark:text-purple-400" : "text-primary dark:text-accent hover:text-indigo-500 dark:hover:text-purple-400"}`}
              aria-current={active === to ? "page" : undefined}
              tabIndex={0}
            >
              <GradientText colors={["#40ffaa", "#4079ff", "#40ffaa", "#4079ff", "#40ffaa"]} animationSpeed={3} showBorder={false}>
                {label}
              </GradientText>
            </a>
          ))}
        </div>
        {/* Mobile hamburger */}
        <button
          className="md:hidden p-2 rounded focus:outline-none focus:ring-2 focus:ring-indigo-400"
          aria-label={menuOpen ? "Close menu" : "Open menu"}
          onClick={() => setMenuOpen((v) => !v)}
        >
          {menuOpen ? <FaTimes className="text-2xl" /> : <FaBars className="text-2xl" />}
        </button>
      </div>
      {/* Mobile menu */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -24 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -24 }}
            transition={{ duration: 0.3 }}
            className="md:hidden bg-white/90 dark:bg-[#18192a]/90 backdrop-blur-md border-b border-gradient-to-r from-indigo-200 via-purple-200 to-transparent shadow-lg px-4 py-6 flex flex-col gap-2 z-40"
          >
            {navLinks.map(({ label, to }) => (
              <a
                key={to}
                href={`#${to}`}
                onClick={handleNavClick(to)}
                className={`px-3 py-2 rounded-md font-medium transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-indigo-400 ${active === to ? "border-b-2 border-indigo-500 text-indigo-600 dark:text-purple-400" : "text-primary dark:text-accent hover:text-indigo-500 dark:hover:text-purple-400"}`}
                aria-current={active === to ? "page" : undefined}
                tabIndex={0}
              >
                <GradientText colors={["#40ffaa", "#4079ff", "#40ffaa", "#4079ff", "#40ffaa"]} animationSpeed={3} showBorder={false}>
                  {label}
                </GradientText>
              </a>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
      {/* Soft gradient border/shadow under navbar */}
      <div className={`h-0.5 w-full ${scrolled ? "opacity-100" : "opacity-0"} transition-opacity duration-300 bg-indigo-400`} />
    </motion.nav>
  );
};

export default Navbar; 