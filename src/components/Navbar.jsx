"use client";
import Link from "next/link";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { HiDownload } from "react-icons/hi";
import { HiSun, HiMoon } from "react-icons/hi2";
import { useApp } from "@/context/AppContext";
import { t } from "@/lib/translations";

const Navbar = () => {
  const { darkMode, toggleTheme, lang, setLanguage } = useApp();
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  const tx = t[lang];
  const cvFile = lang === "fr"
    ? "/docs/CV_Roy_El_Hayek_CDI_FR.pdf"
    : "/docs/CV_Roy_El_Hayek_CDI_EN.pdf";

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", handler);
    return () => window.removeEventListener("scroll", handler);
  }, []);

  const links = [
    { label: tx.nav_about, href: "#about" },
    { label: tx.nav_portfolio, href: "#portfolio" },
    { label: tx.nav_experience, href: "#experience" },
    { label: tx.nav_contact, href: "#contact" },
  ];

  /* Two separate language buttons, each explicitly sets the language */
  const LangToggle = ({ mobile = false }) => (
    <div className={`flex items-center rounded-xl overflow-hidden border ${mobile ? "text-xs" : "text-xs"}`}
      style={{ borderColor: "var(--card-border)" }}>
      {["fr", "en"].map((l) => (
        <button
          key={l}
          onClick={() => setLanguage(l)}
          className={`px-3 py-1.5 font-semibold uppercase tracking-wide transition-all duration-200 ${
            lang === l
              ? "bg-teal-500 text-white"
              : "hover:text-teal-500"
          }`}
          style={lang !== l ? { color: "var(--text-muted)", background: "var(--card-bg)" } : {}}
          aria-label={l === "fr" ? "Passer en français" : "Switch to English"}
        >
          {l.toUpperCase()}
        </button>
      ))}
    </div>
  );

  return (
    <motion.nav
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled ? "py-3 backdrop-blur-2xl border-b shadow-lg" : "py-5 bg-transparent"
      }`}
      style={
        scrolled
          ? { backgroundColor: "var(--nav-bg)", borderColor: "var(--nav-border)", boxShadow: "0 4px 24px rgba(0,0,0,0.1)" }
          : {}
      }
    >
      <div className="max-w-6xl mx-auto px-6 md:px-10 flex justify-between items-center">
        {/* Logo */}
        <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
          <Link href="/" className="text-2xl font-space-grotesk font-bold gradient-text select-none">
            Portfolio
          </Link>
        </motion.div>

        {/* Desktop controls */}
        <ul className="hidden md:flex items-center gap-5">
          {links.map((link, i) => (
            <motion.li
              key={link.href}
              initial={{ opacity: 0, y: -12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 * i + 0.3 }}
            >
              <Link
                href={link.href}
                className="text-sm hover:text-teal-500 transition-colors duration-200 relative group"
                style={{ color: "var(--text-secondary)" }}
              >
                {link.label}
                <span className="absolute -bottom-0.5 left-0 w-0 h-px bg-gradient-to-r from-teal-500 to-cyan-400 group-hover:w-full transition-all duration-300" />
              </Link>
            </motion.li>
          ))}

          {/* Language toggle */}
          <motion.li initial={{ opacity: 0, y: -12 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.55 }}>
            <LangToggle />
          </motion.li>

          {/* Theme toggle */}
          <motion.li initial={{ opacity: 0, y: -12 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.65 }}>
            <button
              onClick={toggleTheme}
              className="toggle-btn"
              aria-label={darkMode ? "Switch to light mode" : "Switch to dark mode"}
            >
              <AnimatePresence mode="wait" initial={false}>
                {darkMode ? (
                  <motion.span key="sun" initial={{ rotate: -90, opacity: 0 }} animate={{ rotate: 0, opacity: 1 }} exit={{ rotate: 90, opacity: 0 }} transition={{ duration: 0.2 }}>
                    <HiSun className="text-base" />
                  </motion.span>
                ) : (
                  <motion.span key="moon" initial={{ rotate: 90, opacity: 0 }} animate={{ rotate: 0, opacity: 1 }} exit={{ rotate: -90, opacity: 0 }} transition={{ duration: 0.2 }}>
                    <HiMoon className="text-base" />
                  </motion.span>
                )}
              </AnimatePresence>
            </button>
          </motion.li>

          {/* Resume */}
          <motion.li initial={{ opacity: 0, y: -12 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.75 }}>
            <Link
              href={cvFile}
              download
              title={tx.nav_resume}
              className="group relative inline-flex items-center gap-2 px-4 py-2 text-sm font-medium text-white rounded-lg overflow-hidden border border-teal-500/30 hover:border-teal-400/60 transition-all duration-300 hover:shadow-[0_0_20px_rgba(20,184,166,0.25)]"
            >
              <span className="absolute inset-0 bg-gradient-to-r from-teal-600/20 to-cyan-600/20 group-hover:from-teal-600/35 group-hover:to-cyan-600/35 transition-all duration-300" />
              <HiDownload className="relative z-10 text-teal-400" />
              <span className="relative z-10">{tx.nav_resume_short}</span>
            </Link>
          </motion.li>
        </ul>

        {/* Mobile right side */}
        <div className="md:hidden flex items-center gap-2">
          <LangToggle mobile />
          <button onClick={toggleTheme} className="toggle-btn" aria-label="Toggle theme">
            {darkMode ? <HiSun className="text-base" /> : <HiMoon className="text-base" />}
          </button>
          <button className="flex flex-col gap-1.5 p-1" onClick={() => setMenuOpen(!menuOpen)} aria-label="Toggle menu">
            <span className={`block w-5 h-0.5 bg-teal-500 transition-all duration-300 ${menuOpen ? "rotate-45 translate-y-2" : ""}`} />
            <span className={`block w-5 h-0.5 bg-teal-500 transition-opacity duration-300 ${menuOpen ? "opacity-0" : ""}`} />
            <span className={`block w-5 h-0.5 bg-teal-500 transition-all duration-300 ${menuOpen ? "-rotate-45 -translate-y-2" : ""}`} />
          </button>
        </div>
      </div>

      {/* Mobile drawer */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.25 }}
            className="md:hidden overflow-hidden backdrop-blur-2xl border-b"
            style={{ backgroundColor: "var(--nav-bg)", borderColor: "var(--nav-border)" }}
          >
            <div className="px-6 py-5 flex flex-col gap-4">
              {links.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={() => setMenuOpen(false)}
                  className="hover:text-teal-500 transition-colors py-1 text-sm"
                  style={{ color: "var(--text-secondary)" }}
                >
                  {link.label}
                </Link>
              ))}
              <Link
                href={cvFile}
                download
                className="inline-flex items-center gap-2 text-teal-500 border border-teal-500/30 rounded-lg px-4 py-2 w-fit text-sm"
              >
                <HiDownload />
                {tx.nav_resume_short}
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
};

export default Navbar;
