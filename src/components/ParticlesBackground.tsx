"use client";

import React, { useEffect, useRef } from "react";
import { loadSlim } from "@tsparticles/slim";
import { tsParticles } from "@tsparticles/engine";

const ParticlesBackground: React.FC = () => {
  const particlesContainer = useRef<HTMLDivElement>(null);
  const hasInitialized = useRef(false);

  useEffect(() => {
    const initParticles = async () => {
      await loadSlim(tsParticles);
      console.log("Inicializando partículas...");
      await tsParticles.load({
        id: "tsparticles",
        options: {
          fullScreen: { enable: false },
          particles: {
            number: {
              value: 30,
            },
            color: { value: "#ffffff" },
            shape: { type: "circle" },
            opacity: { value: { min: 0.3, max: 0.7 } },
            size: { value: { min: 1, max: 3 } },
            move: {
              enable: true,
              direction: "top",
              speed: 1,
              outModes: { default: "out" }, // NO "destroy"
            },
            life: {
              duration: {
                value: { min: 2, max: 4 },
              },
              count: 0,
            },
          },
          emitters: {
            direction: "top",
            rate: {
              delay: 0.1,
              quantity: 2,
            },
            position: {
              y: 100,
              x: 50,
            },
            size: {
              width: 100,
              height: 0,
            },
          },
          background: {
            color: "transparent",
          },
        },
      });

      hasInitialized.current = true;
    };

    const observer = new IntersectionObserver(
      (entries) => {
        const particlesInstance = tsParticles.domItem(0);
        if (!particlesInstance) return;

        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            particlesInstance.play();
          } else {
            particlesInstance.pause();
          }
        });
      },
      { threshold: 0.1 },
    );

    if (particlesContainer.current) {
      observer.observe(particlesContainer.current);
    }

    if (!hasInitialized.current) {
      initParticles();
    }

    return () => {
      if (particlesContainer.current) {
        observer.unobserve(particlesContainer.current);
      }
    };
  }, []);

  return (
    <div
      id="tsparticles"
      ref={particlesContainer}
      className="absolute inset-0 z-0"
    />
  );
};

export default ParticlesBackground;
