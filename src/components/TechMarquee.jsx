"use client";
import { motion } from "framer-motion";
import {
  SiReact,
  SiTypescript,
  SiNextdotjs,
  SiTailwindcss,
  SiNodedotjs,
  SiFigma,
  SiJavascript,
  SiGit,
  SiRedux,
  SiVercel,
  SiFirebase,
} from "react-icons/si";

const items = [
  { icon: <SiReact />, label: "React" },
  { icon: <SiNextdotjs />, label: "Next.js" },
  { icon: <SiTypescript />, label: "TypeScript" },
  { icon: <SiJavascript />, label: "JavaScript" },
  { icon: <SiTailwindcss />, label: "Tailwind" },
  { icon: <SiNodedotjs />, label: "Node.js" },
  { icon: <SiRedux />, label: "Redux" },
  { icon: <SiFirebase />, label: "Firebase" },
  { icon: <SiVercel />, label: "Vercel" },
  { icon: <SiGit />, label: "Git" },
  { icon: <SiFigma />, label: "Figma" },
];

function Row() {
  return (
    <>
      {items.map((it, i) => (
        <span
          key={i}
          className="inline-flex items-center gap-3 px-7 text-2xl whitespace-nowrap"
          style={{ color: "var(--text-muted)" }}
        >
          <span className="text-teal-500 dark:text-teal-400">{it.icon}</span>
          <span className="text-base font-medium tracking-wide">{it.label}</span>
          <span className="text-teal-500/40 px-3">·</span>
        </span>
      ))}
    </>
  );
}

export default function TechMarquee() {
  return (
    <div className="relative py-10 overflow-hidden select-none">
      {/* edge fade masks */}
      <div className="pointer-events-none absolute inset-y-0 left-0 w-32 z-10 bg-gradient-to-r from-[var(--bg)] to-transparent" />
      <div className="pointer-events-none absolute inset-y-0 right-0 w-32 z-10 bg-gradient-to-l from-[var(--bg)] to-transparent" />

      <motion.div
        animate={{ x: ["0%", "-50%"] }}
        transition={{ duration: 35, ease: "linear", repeat: Infinity }}
        className="flex w-max"
      >
        <Row />
        <Row />
      </motion.div>
    </div>
  );
}
