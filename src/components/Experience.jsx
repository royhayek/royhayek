"use client";
import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import RevealSection from "./RevealSection";
import AnimatedDivider from "./AnimatedDivider";
import dynamic from "next/dynamic";

const CountryMap = dynamic(() => import("./CountryMap"), { ssr: false });

const COUNTRY_CODES = {
  "Cube Holdings Ltd": "LB",
  "Aljazira Capital": "SA",
  "CME": "LB",
  "Tac-Techs": "KW",
  "Monty Mobile": "LB",
};

function Dot() {
  return (
    <motion.div
      initial={{ scale: 0, opacity: 0 }}
      whileInView={{ scale: 1, opacity: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
      className="w-4 h-4 rounded-full bg-teal-500 border-[3px] border-white dark:border-[#0d1117] relative z-10 flex-shrink-0"
      style={{ boxShadow: "0 0 14px rgba(20,184,166,0.7)" }}
    />
  );
}

function Card({ exp, fromLeft }) {
  const countryCode = COUNTRY_CODES[exp.company];

  return (
    <motion.div
      initial={{ opacity: 0, x: fromLeft ? -50 : 50, y: 20 }}
      whileInView={{ opacity: 1, x: 0, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.75, ease: [0.22, 1, 0.36, 1] }}
      className="glass-card rounded-2xl p-6 w-full"
    >
      <div className="flex flex-wrap items-start justify-between gap-3 mb-4">
        <div>
          <h3 className="font-bold text-base md:text-lg leading-snug" style={{ color: "var(--text-primary)" }}>
            {exp.role}
          </h3>
          <p className="text-teal-500 dark:text-teal-400 text-sm font-medium mt-1">
            {exp.company}
          </p>
          <p className="text-xs mt-0.5" style={{ color: "var(--text-muted)" }}>
            {exp.location}
          </p>
        </div>
        <span
          className="text-xs font-mono px-3 py-1 rounded-full border flex-shrink-0"
          style={{ borderColor: "var(--card-border)", color: "var(--text-muted)" }}
        >
          {exp.period}
        </span>
      </div>

      {/* Mobile map */}
      {countryCode && (
        <div className="md:hidden mb-4 h-28 opacity-70">
          <CountryMap code={countryCode} cityName={exp.cityLabel} className="w-full h-full" />
        </div>
      )}

      <ul className="space-y-2">
        {exp.bullets.map((b, i) => (
          <li key={i} className="flex items-start gap-2 text-sm leading-relaxed" style={{ color: "var(--text-secondary)" }}>
            <span className="text-teal-500 dark:text-teal-400 mt-0.5 flex-shrink-0">›</span>
            {b}
          </li>
        ))}
      </ul>
    </motion.div>
  );
}

function MapPanel({ exp, fromLeft }) {
  const countryCode = COUNTRY_CODES[exp.company];

  return (
    <motion.div
      initial={{ opacity: 0, x: fromLeft ? -40 : 40 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
      className="flex items-center justify-center h-full min-h-[200px] opacity-70 hover:opacity-100 transition-opacity duration-500 overflow-visible"
    >
      {countryCode && (
        <CountryMap code={countryCode} cityName={exp.cityLabel} className="w-full max-w-[260px]" />
      )}
    </motion.div>
  );
}

function ExperienceItem({ exp, index }) {
  const isEven = index % 2 === 0;

  return (
    <div className="relative mb-10 last:mb-0">
      {/* Desktop alternating layout */}
      <div className="hidden md:grid md:grid-cols-[1fr_60px_1fr] md:items-center">
        <div className="pr-8 flex justify-end">
          {isEven ? <Card exp={exp} fromLeft={true} /> : <MapPanel exp={exp} fromLeft={true} />}
        </div>

        <div className="flex justify-center">
          <Dot />
        </div>

        <div className="pl-8">
          {!isEven ? <Card exp={exp} fromLeft={false} /> : <MapPanel exp={exp} fromLeft={false} />}
        </div>
      </div>

      {/* Mobile layout */}
      <div className="md:hidden pl-10 relative">
        <div className="absolute left-0 top-5">
          <Dot />
        </div>
        <Card exp={exp} fromLeft={false} />
      </div>
    </div>
  );
}

export default function Experience({ experiences, tx }) {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start 0.85", "end 0.15"],
  });
  const lineHeight = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);

  return (
    <RevealSection id="experience" className="max-w-6xl mx-auto px-6 md:px-10 py-16 pb-24">
      <AnimatedDivider className="mb-16" />

      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-80px" }}
        transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
        className="mb-14"
      >
        <p className="text-teal-500 dark:text-teal-400 text-sm font-medium tracking-widest uppercase mb-3">
          {tx.exp_label}
        </p>
        <h2 className="text-3xl md:text-5xl font-bold mb-4 leading-tight" style={{ color: "var(--text-primary)" }}>
          {tx.exp_title}
        </h2>
        <p className="max-w-2xl leading-relaxed text-sm md:text-base" style={{ color: "var(--text-secondary)" }}>
          {tx.exp_desc}
        </p>
      </motion.div>

      <div ref={containerRef} className="relative">
        {/* Desktop center line */}
        <div
          className="hidden md:block absolute left-1/2 -translate-x-px top-0 bottom-0 w-px overflow-hidden"
          style={{ background: "var(--card-border)" }}
        >
          <motion.div
            className="w-full bg-gradient-to-b from-teal-500 to-cyan-500"
            style={{ height: lineHeight }}
          />
        </div>

        {/* Mobile left line */}
        <div
          className="md:hidden absolute left-[7px] top-0 bottom-0 w-px overflow-hidden"
          style={{ background: "var(--card-border)" }}
        >
          <motion.div
            className="w-full bg-gradient-to-b from-teal-500 to-cyan-500"
            style={{ height: lineHeight }}
          />
        </div>

        {experiences.map((exp, i) => (
          <ExperienceItem key={i} exp={exp} index={i} />
        ))}
      </div>
    </RevealSection>
  );
}
