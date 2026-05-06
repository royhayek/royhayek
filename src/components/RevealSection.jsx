"use client";
import { motion } from "framer-motion";

export default function RevealSection({
  children,
  className = "",
  direction = "bottom",
  delay = 0,
  ...rest
}) {
  const yFrom = direction === "bottom" ? 30 : direction === "top" ? -30 : 0;
  const xFrom = direction === "left" ? 30 : direction === "right" ? -30 : 0;

  return (
    <motion.section
      initial={{ opacity: 0, y: yFrom, x: xFrom }}
      whileInView={{ opacity: 1, y: 0, x: 0 }}
      viewport={{ once: true, amount: 0.05 }}
      transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1], delay }}
      className={className}
      {...rest}
    >
      {children}
    </motion.section>
  );
}
