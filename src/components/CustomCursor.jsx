"use client";
import { useEffect, useRef } from "react";

export default function CustomCursor() {
  const dotRef = useRef(null);
  const ringRef = useRef(null);
  const mouse = useRef({ x: 0, y: 0 });
  const ring = useRef({ x: 0, y: 0 });
  const rafRef = useRef(null);

  useEffect(() => {
    const dot = dotRef.current;
    const ringEl = ringRef.current;
    if (!dot || !ringEl) return;

    const onMove = (e) => {
      mouse.current = { x: e.clientX, y: e.clientY };
      dot.style.left = e.clientX - 5 + "px";
      dot.style.top = e.clientY - 5 + "px";
    };

    const animate = () => {
      ring.current.x += (mouse.current.x - ring.current.x) * 0.13;
      ring.current.y += (mouse.current.y - ring.current.y) * 0.13;
      ringEl.style.left = ring.current.x - 17 + "px";
      ringEl.style.top = ring.current.y - 17 + "px";
      rafRef.current = requestAnimationFrame(animate);
    };

    const expand = () => {
      dot.style.transform = "scale(2.5)";
      ringEl.style.transform = "scale(1.7)";
      ringEl.style.borderColor = "rgba(20,184,166,0.85)";
    };
    const reset = () => {
      dot.style.transform = "scale(1)";
      ringEl.style.transform = "scale(1)";
      ringEl.style.borderColor = "rgba(20,184,166,0.5)";
    };

    window.addEventListener("mousemove", onMove);
    rafRef.current = requestAnimationFrame(animate);

    const addListeners = () => {
      document.querySelectorAll("a,button,[role='button'],.cursor-pointer").forEach((el) => {
        el.addEventListener("mouseenter", expand);
        el.addEventListener("mouseleave", reset);
      });
    };
    addListeners();

    return () => {
      window.removeEventListener("mousemove", onMove);
      cancelAnimationFrame(rafRef.current);
    };
  }, []);

  return (
    <>
      <div ref={dotRef} className="c-cursor hidden md:block" />
      <div ref={ringRef} className="c-follower hidden md:block" />
    </>
  );
}
