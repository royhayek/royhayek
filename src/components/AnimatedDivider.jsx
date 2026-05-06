"use client";
import { motion } from "framer-motion";

export default function AnimatedDivider({ className = "" }) {
  return (
    <motion.div
      initial={{ scaleX: 0, opacity: 0 }}
      whileInView={{ scaleX: 1, opacity: 1 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 1.1, ease: [0.22, 1, 0.36, 1] }}
      style={{ transformOrigin: "left" }}
      className={`divider ${className}`}
    />
  );
}
