"use client";
import { useRef, useState } from "react";
import { motion } from "framer-motion";

export default function Magnetic({ children, strength = 0.3, className = "" }) {
  const ref = useRef(null);
  const [pos, setPos] = useState({ x: 0, y: 0 });

  const handleMove = (e) => {
    const el = ref.current;
    if (!el) return;
    const rect = el.getBoundingClientRect();
    const cx = rect.left + rect.width / 2;
    const cy = rect.top + rect.height / 2;
    setPos({
      x: (e.clientX - cx) * strength,
      y: (e.clientY - cy) * strength,
    });
  };

  const handleLeave = () => setPos({ x: 0, y: 0 });

  return (
    <motion.div
      ref={ref}
      onMouseMove={handleMove}
      onMouseLeave={handleLeave}
      animate={pos}
      transition={{ type: "spring", stiffness: 180, damping: 14, mass: 0.4 }}
      className={`inline-flex ${className}`}
    >
      {children}
    </motion.div>
  );
}
