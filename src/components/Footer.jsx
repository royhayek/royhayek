"use client";
import { motion } from "framer-motion";
import { AiFillLinkedin } from "react-icons/ai";
import { FiGithub, FiMail } from "react-icons/fi";
import { useApp } from "@/context/AppContext";
import { t } from "@/lib/translations";

const Footer = () => {
  const { lang } = useApp();
  const tx = t[lang];

  return (
    <footer className="relative mt-10 border-t" style={{ borderColor: "var(--nav-border)" }}>
      <div className="absolute inset-0 bg-gradient-to-t from-teal-500/5 to-transparent pointer-events-none" />

      <div className="max-w-6xl mx-auto px-6 md:px-10 py-12 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.55 }}
          className="flex flex-col md:flex-row items-center justify-between gap-8"
        >
          <div>
            <p className="text-2xl font-burtons gradient-text mb-1">Roy El Hayek</p>
            <p className="text-sm" style={{ color: "var(--text-muted)" }}>
              {tx.footer_role}
            </p>
          </div>

          <div className="flex items-center gap-5">
            {[
              {
                href: "https://www.linkedin.com/in/roy-el-hayek-74979b152/",
                icon: <AiFillLinkedin />,
                label: "LinkedIn",
              },
              { href: "https://github.com/royhayek", icon: <FiGithub />, label: "GitHub" },
              { href: "mailto:royhyk@outlook.com", icon: <FiMail />, label: "Email" },
            ].map(({ href, icon, label }) => (
              <motion.a
                key={label}
                href={href}
                target={href.startsWith("mailto") ? undefined : "_blank"}
                rel="noopener noreferrer"
                whileHover={{ scale: 1.2 }}
                whileTap={{ scale: 0.9 }}
                className="text-2xl transition-colors hover:text-teal-500"
                style={{ color: "var(--text-muted)" }}
                aria-label={label}
              >
                {icon}
              </motion.a>
            ))}
          </div>

          <p className="text-sm" style={{ color: "var(--text-muted)" }}>
            © {new Date().getFullYear()} {tx.footer_copy}
          </p>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;
