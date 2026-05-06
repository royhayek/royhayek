"use client";
import { useRef } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { FiExternalLink } from "react-icons/fi";
import AnimatedDivider from "./AnimatedDivider";

/* ─── Project card with 3D tilt on hover ─── */
function ProjectCard({ item, index, viewLabel }) {
  const cardRef = useRef(null);

  // 3-D tilt on hover (desktop only — no touch events on mobile)
  const onMove = (e) => {
    const card = e.currentTarget;
    const rect = card.getBoundingClientRect();
    const tiltX = ((e.clientY - rect.top) / rect.height - 0.5) * -10;
    const tiltY = ((e.clientX - rect.left) / rect.width - 0.5) * 10;
    card.style.transform = `perspective(900px) rotateX(${tiltX}deg) rotateY(${tiltY}deg) scale3d(1.02,1.02,1.02)`;
  };
  const onLeave = (e) => {
    e.currentTarget.style.transform = "perspective(900px) rotateX(0) rotateY(0) scale3d(1,1,1)";
  };

  // Alternating slide-in direction per row
  const fromLeft = index % 2 === 0;

  return (
    <motion.div
      ref={cardRef}
      initial={{ opacity: 0, x: fromLeft ? -60 : 60, y: 30 }}
      whileInView={{ opacity: 1, x: 0, y: 0 }}
      viewport={{ once: true, amount: 0.05 }}
      transition={{ duration: 0.65, delay: (index % 2) * 0.06, ease: [0.22, 1, 0.36, 1] }}
    >
      <div
        className="glass-card rounded-2xl overflow-hidden cursor-pointer group h-full"
        style={{ transition: "transform 0.25s ease, box-shadow 0.3s ease", transformStyle: "preserve-3d" }}
        onMouseMove={onMove}
        onMouseLeave={onLeave}
        onClick={() => window.open(item.website, "_blank")}
      >
        {/* Image */}
        <div className="relative overflow-hidden h-52 sm:h-80" style={{ background: "var(--card-bg)" }}>
          <div className="absolute inset-0">
            <Image
              className="object-contain w-full h-full transition-transform duration-700 group-hover:scale-105"
              fill
              sizes="(max-width: 768px) 100vw, 50vw"
              src={item.src}
              alt={item.title}
            />
          </div>

          {/* Hover overlay */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end justify-end p-4">
            <span className="flex items-center gap-1.5 text-teal-400 text-sm font-medium bg-black/40 px-3 py-1.5 rounded-lg backdrop-blur-sm">
              {viewLabel} <FiExternalLink />
            </span>
          </div>

          {/* Index pill */}
          <div className="absolute top-4 left-4">
            <span className="text-[10px] font-mono text-teal-100 bg-black/40 backdrop-blur-sm px-2.5 py-1 rounded-md tracking-[0.2em]">
              {String(index + 1).padStart(2, "0")}
            </span>
          </div>
        </div>

        {/* Content */}
        <div className="p-6">
          <h3
            className="text-lg font-semibold mb-2 group-hover:text-teal-500 transition-colors"
            style={{ color: "var(--text-primary)" }}
          >
            {item.title}
          </h3>
          <p className="text-sm leading-relaxed line-clamp-3" style={{ color: "var(--text-secondary)" }}>
            {item.description}
          </p>
        </div>
      </div>
    </motion.div>
  );
}

/* ─── Vertical portfolio section ─── */
export default function Portfolio({ portfolio, tx }) {
  return (
    <section id="portfolio" className="max-w-6xl mx-auto px-6 md:px-10 py-16 pb-24">
      <AnimatedDivider className="mb-16" />

      <motion.div
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.1 }}
        transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
        className="mb-12"
      >
        <p className="text-teal-500 dark:text-teal-400 text-sm font-medium tracking-widest uppercase mb-3">
          {tx.portfolio_label}
        </p>
        <h2 className="text-3xl md:text-5xl font-bold mb-4 leading-tight" style={{ color: "var(--text-primary)" }}>
          {tx.portfolio_title}
        </h2>
        <p className="max-w-2xl leading-relaxed text-sm md:text-base" style={{ color: "var(--text-secondary)" }}>
          {tx.portfolio_desc}
        </p>
      </motion.div>

      <div className="grid sm:grid-cols-2 gap-7">
        {portfolio.map((item, i) => (
          <ProjectCard key={i} item={item} index={i} viewLabel={tx.portfolio_view} />
        ))}
      </div>
    </section>
  );
}
