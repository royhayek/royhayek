"use client";
import { useEffect, useState } from "react";
import Particles, { initParticlesEngine } from "@tsparticles/react";
import { loadSlim } from "@tsparticles/slim";

export default function ParticleBackground() {
  const [ready, setReady] = useState(false);

  useEffect(() => {
    // Skip particles entirely on touch/mobile - canvas + tsparticles is too heavy
    if (window.innerWidth < 768 || "ontouchstart" in window || navigator.maxTouchPoints > 0) {
      return;
    }
    initParticlesEngine(async (engine) => {
      await loadSlim(engine);
    }).then(() => setReady(true));
  }, []);

  if (!ready) return null;

  return (
    <Particles
      id="hero-particles"
      style={{ position: "absolute", inset: 0, zIndex: 0 }}
      options={{
        background: { color: { value: "transparent" } },
        fpsLimit: 30,
        interactivity: {
          events: {
            onHover: { enable: true, mode: "repulse" },
            resize: true,
          },
          modes: { repulse: { distance: 90, duration: 0.4 } },
        },
        particles: {
          color: { value: ["#14b8a6", "#06b6d4", "#818cf8"] },
          links: {
            color: "#14b8a6",
            distance: 130,
            enable: true,
            opacity: 0.1,
            width: 1,
          },
          move: {
            direction: "none",
            enable: true,
            outModes: { default: "bounce" },
            random: true,
            speed: 0.55,
          },
          number: {
            density: { enable: true, area: 850 },
            value: 25,
          },
          opacity: {
            value: { min: 0.08, max: 0.35 },
            animation: { enable: true, speed: 0.6, minimumValue: 0.05 },
          },
          shape: { type: "circle" },
          size: { value: { min: 1, max: 2.5 } },
        },
        detectRetina: false,
      }}
    />
  );
}
