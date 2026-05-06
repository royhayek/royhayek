"use client";
import Image from "next/image";
import { motion } from "framer-motion";
import { TypeAnimation } from "react-type-animation";
import { AiFillLinkedin } from "react-icons/ai";
import { FiArrowDown } from "react-icons/fi";
import {
  SiReact,
  SiTypescript,
  SiNextdotjs,
  SiTailwindcss,
  SiNodedotjs,
  SiPython,
  SiPytorch,
  SiJavascript,
  SiPostgresql,
  SiMongodb,
  SiMui,
} from "react-icons/si";
import dynamic from "next/dynamic";
import AnimatedDivider from "@/components/AnimatedDivider";
import ScrambleText from "@/components/ScrambleText";
import Magnetic from "@/components/Magnetic";

// ParticleBackground and ContactForm need ssr:false (browser-only APIs: canvas, emailjs)
// Portfolio/Experience are content sections — must be SSR'd so the HTML exists before JS loads
const ParticleBackground = dynamic(() => import("@/components/ParticleBackground"), { ssr: false });
const TechMarquee = dynamic(() => import("@/components/TechMarquee"), { ssr: false });
const Portfolio = dynamic(() => import("@/components/Portfolio"));
const Experience = dynamic(() => import("@/components/Experience"));
const ContactForm = dynamic(() => import("@/components/ContactForm"), { ssr: false });
import { useApp } from "@/context/AppContext";
import { t } from "@/lib/translations";

import web1 from "../../public/web1.png";
import web2 from "../../public/web2.png";
import mob1 from "../../public/mob1.png";
import mob2 from "../../public/mob2.png";
import mob3 from "../../public/mob3.png";
import mob4 from "../../public/mob4.png";
import mob5 from "../../public/mob5.png";
import mob6 from "../../public/mob6.png";
import mob7 from "../../public/mob7.png";
import mob8 from "../../public/mob8.png";
import mob9 from "../../public/mob9.png";
import avatar from "../../public/avatar.jpg";

const portfolioImages = [mob9, mob8, web1, mob7, mob1, mob2, web2, mob3, mob4, mob5, mob6];
const portfolioWebsites = [
  "https://apps.apple.com/fr/app/buitanda/id1500280115",
  "https://www.mojo.com.lb/",
  "https://www.aljaziratadawul.com/",
  "https://apps.apple.com/qa/app/aljazira-capital/id6445973979",
  "https://apps.apple.com/us/app/hello-curious/id1642046057",
  "https://apps.apple.com/us/app/avandra-ai-trip-planner/id6502790120",
  "https://avandraapp.com/cms",
  "https://apps.apple.com/lb/app/roadster-diner/id1350373136/",
  "https://apps.apple.com/lb/app/deek-duke-go/id1205636562",
  "https://apps.apple.com/lb/app/bartartine/id1534420141",
  "https://apps.apple.com/lb/app/zaatar-w-zeit/id1166494577?platform=iphone",
];

const skills = [
  { icon: <SiJavascript />, label: "JavaScript" },
  { icon: <SiTypescript />, label: "TypeScript" },
  { icon: <SiReact />, label: "React" },
  { icon: <SiReact />, label: "React Native" },
  { icon: <SiNextdotjs />, label: "Next.js" },
  { icon: <SiPython />, label: "Python" },
  { icon: <SiPytorch />, label: "PyTorch" },
  { icon: <SiNodedotjs />, label: "Node.js" },
  { icon: <SiPostgresql />, label: "PostgreSQL" },
  { icon: <SiMongodb />, label: "MongoDB" },
  { icon: <SiTailwindcss />, label: "Tailwind CSS" },
  { icon: <SiMui />, label: "Material UI" },
];

/* ─── Page ─── */
export default function Home() {
  const { lang } = useApp();
  const tx = t[lang];

  const portfolio = tx.projects.map((proj, i) => ({
    ...proj,
    src: portfolioImages[i],
    website: portfolioWebsites[i],
  }));

  return (
    <main className="overflow-x-hidden">
      {/* ══════════ HERO ══════════ */}
      <section className="relative min-h-screen flex flex-col items-center justify-center text-center px-6 pt-20 pb-10">
        <ParticleBackground />

        <div className="pointer-events-none absolute inset-0 overflow-hidden hidden md:block">
          <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[600px] h-[600px] rounded-full bg-teal-500/5 blur-[80px]" />
          <div className="absolute top-1/3 left-1/4 w-[300px] h-[300px] rounded-full bg-cyan-500/5 blur-[60px]" />
        </div>

        <div className="relative z-10 flex flex-col items-center gap-6 max-w-3xl mx-auto">
          {/* Availability badge */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-teal-500/25 bg-teal-500/8 text-teal-500 dark:text-teal-400 text-xs font-medium"
          >
            <span className="w-1.5 h-1.5 rounded-full bg-teal-400 animate-pulse" />
            {tx.hero_badge}
          </motion.div>

          {/* Avatar */}
          <motion.div
            initial={{ opacity: 0, scale: 0.6 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
            style={{ animation: "float 6s ease-in-out infinite" }}
          >
            <div className="glow-ring w-36 h-36 rounded-full p-[3px] bg-gradient-to-br from-teal-500 via-cyan-400 to-indigo-500">
              <div className="w-full h-full rounded-full overflow-hidden" style={{ background: "var(--card-bg)" }}>
                <Image
                  src={avatar}
                  alt="Roy El Hayek"
                  width={144}
                  height={144}
                  className="object-cover w-full h-full"
                  style={{ objectPosition: "center 20%" }}
                  priority
                />
              </div>
            </div>
          </motion.div>

          {/* Name with scramble effect */}
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.25, ease: [0.22, 1, 0.36, 1] }}
            className="text-5xl md:text-7xl font-bold tracking-tight"
          >
            <span className="gradient-text inline-block pb-2">
              <ScrambleText text="Roy El Hayek" startDelayFrames={6} />
            </span>
          </motion.h1>

          {/* Typewriter */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="text-xl md:text-2xl font-light h-8"
            style={{ color: "var(--text-secondary)" }}
          >
            <TypeAnimation
              key={lang}
              sequence={tx.type}
              wrapper="span"
              repeat={Infinity}
              className="text-teal-500 dark:text-teal-400"
            />
          </motion.div>

          {/* Bio */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.55 }}
            className="leading-relaxed max-w-xl text-sm md:text-base"
            style={{ color: "var(--text-secondary)" }}
          >
            {tx.hero_bio_1}{" "}
            <span className="text-teal-500 dark:text-teal-400 font-medium">{tx.hero_bio_highlight}</span>{" "}
            {tx.hero_bio_2}
          </motion.p>

          {/* CTAs with magnetic effect */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.7 }}
            className="flex flex-wrap items-center justify-center gap-4"
          >
            <Magnetic strength={0.35}>
              <a
                href="#portfolio"
                className="group relative px-7 py-3 rounded-xl text-sm font-semibold text-white overflow-hidden transition-all duration-300 hover:shadow-[0_0_30px_rgba(20,184,166,0.4)]"
              >
                <span className="absolute inset-0 bg-gradient-to-r from-teal-600 to-cyan-600 transition-all duration-300 group-hover:from-teal-500 group-hover:to-cyan-500" />
                <span className="relative">{tx.hero_cta}</span>
              </a>
            </Magnetic>

            <Magnetic strength={0.25}>
              <a
                href="https://www.linkedin.com/in/roy-el-hayek-74979b152/"
                target="_blank"
                rel="noopener noreferrer"
                className="group inline-flex items-center gap-2 px-6 py-3 rounded-xl text-sm font-medium border transition-all duration-300 hover:text-teal-500 hover:border-teal-500/40"
                style={{ color: "var(--text-secondary)", borderColor: "var(--card-border)" }}
              >
                <AiFillLinkedin className="text-lg" />
                {tx.hero_linkedin}
              </a>
            </Magnetic>
          </motion.div>
        </div>

        {/* Scroll indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.4 }}
          className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1 text-xs"
          style={{ color: "var(--text-muted)" }}
        >
          <span>{tx.hero_scroll}</span>
          <motion.div animate={{ y: [0, 6, 0] }} transition={{ duration: 1.4, repeat: Infinity, ease: "easeInOut" }}>
            <FiArrowDown />
          </motion.div>
        </motion.div>
      </section>

      {/* ══════════ ABOUT ══════════ */}
      <section id="about" className="max-w-6xl mx-auto px-6 md:px-10 py-20">
        <AnimatedDivider className="mb-16" />

        <div className="grid md:grid-cols-2 gap-14 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.1 }}
            transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          >
            <p className="text-teal-500 dark:text-teal-400 text-sm font-medium tracking-widest uppercase mb-3">
              {tx.about_label}
            </p>
            <h2 className="text-3xl md:text-4xl font-bold mb-6 leading-snug" style={{ color: "var(--text-primary)" }}>
              {tx.about_title_1} <span className="gradient-text">{tx.about_title_highlight}</span> {tx.about_title_2}
            </h2>
            <p className="leading-relaxed mb-4 text-sm md:text-base" style={{ color: "var(--text-secondary)" }}>
              {tx.about_p1}
            </p>
            <p className="leading-relaxed text-sm md:text-base" style={{ color: "var(--text-secondary)" }}>
              {tx.about_p2}
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.1 }}
            transition={{ duration: 0.7, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
          >
            <p className="text-xs font-medium tracking-widest uppercase mb-5" style={{ color: "var(--text-muted)" }}>
              {tx.about_tech}
            </p>
            <div className="flex flex-wrap gap-3">
              {skills.map(({ icon, label }, i) => (
                <motion.div
                  key={label}
                  initial={{ opacity: 0, y: 12 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.1 + i * 0.04, duration: 0.4, ease: "easeOut" }}
                  whileHover={{ y: -3 }}
                  className="skill-badge flex items-center gap-2 px-4 py-2.5 rounded-xl text-sm"
                >
                  <span className="text-teal-500 dark:text-teal-400 text-base">{icon}</span>
                  {label}
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* ══════════ TECH MARQUEE ══════════ */}
      <TechMarquee />

      {/* ══════════ PORTFOLIO ══════════ */}
      <Portfolio portfolio={portfolio} tx={tx} />

      {/* ══════════ EXPERIENCE ══════════ */}
      <Experience experiences={tx.experiences} tx={tx} />

      {/* ══════════ CONTACT ══════════ */}
      <ContactForm />
    </main>
  );
}
