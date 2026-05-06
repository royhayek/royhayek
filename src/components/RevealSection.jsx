"use client";
import { useRef } from "react";
import { motion, useInView } from "framer-motion";

/*
  Cinematic section reveal: clip-path wipe from bottom + slide + scale.
  The whole section behaves as a single unit when entering the viewport.
*/
export default function RevealSection({
  children,
  className = "",
  direction = "bottom",
  delay = 0,
  ...rest
}) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-40px" });

  const clipFrom = {
    bottom: "inset(100% 0 0 0)",
    top: "inset(0 0 100% 0)",
    left: "inset(0 100% 0 0)",
    right: "inset(0 0 0 100%)",
  }[direction];
  const clipTo = "inset(0 0 0 0)";

  const yFrom = direction === "bottom" ? 60 : direction === "top" ? -60 : 0;
  const xFrom = direction === "left" ? 60 : direction === "right" ? -60 : 0;

  return (
    <motion.section
      ref={ref}
      initial={{ clipPath: clipFrom, y: yFrom, x: xFrom, scale: 0.96 }}
      animate={inView ? { clipPath: clipTo, y: 0, x: 0, scale: 1 } : {}}
      transition={{ duration: 1, ease: [0.22, 1, 0.36, 1], delay }}
      className={className}
      {...rest}
    >
      {children}
    </motion.section>
  );
}
