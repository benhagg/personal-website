"use client";
import { useEffect, useRef, useState } from "react";
type Dot = {
  x: number;
  y: number;
  r: number;
  color: string;
};
export default function SvgBackground() {
  const colors = ["#a5b4fc", "#6366f1", "#38bdf8", "#0ea5e9"];
  const [dimensions, setDimensions] = useState({ width: 800, height: 800 });
  const [dots, setDots] = useState<Dot[]>([]); // Start empty, fill in useEffect
  const mouse = useRef({ x: -1000, y: -1000 });
  const animationRef = useRef<number | null>(null);

  // Update SVG size on resize
  useEffect(() => {
    const update = () =>
      setDimensions({
        width: window.innerWidth,
        height: window.innerHeight,
      });
    update();
    window.addEventListener("resize", update);
    return () => window.removeEventListener("resize", update);
  }, []);

  // Generate dots on mount and when dimensions change
  useEffect(() => {
    setDots(
      Array.from({ length: 300 }).map((_, i) => ({
        x: Math.random() * dimensions.width,
        y: Math.random() * dimensions.height,
        r: Math.random() * 2 + 1,
        color: colors[i % colors.length],
      }))
    );
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [dimensions.width, dimensions.height]);

  // Mouse move handler
  useEffect(() => {
    const handle = (e: MouseEvent) => {
      mouse.current = { x: e.clientX, y: e.clientY };
    };
    window.addEventListener("mousemove", handle);
    return () => window.removeEventListener("mousemove", handle);
  }, []);

  // Animation loop: move dots away from mouse
  useEffect(() => {
    function animate() {
      setDots((prevDots) =>
        prevDots.map((dot) => {
          const dx = dot.x - mouse.current.x;
          const dy = dot.y - mouse.current.y;
          const dist = Math.sqrt(dx * dx + dy * dy);
          const minDist = 60; // how close before dot runs away
          if (dist < minDist) {
            // Move dot away from mouse
            const angle = Math.atan2(dy, dx);
            const move = (minDist - dist) * 0.25;
            let newX = dot.x + Math.cos(angle) * move;
            let newY = dot.y + Math.sin(angle) * move;
            // Clamp to bounds
            newX = Math.max(0, Math.min(dimensions.width, newX));
            newY = Math.max(0, Math.min(dimensions.height, newY));
            return { ...dot, x: newX, y: newY };
          }
          return dot;
        })
      );
      animationRef.current = requestAnimationFrame(animate);
    }
    animationRef.current = requestAnimationFrame(animate);
    return () => {
      if (animationRef.current) cancelAnimationFrame(animationRef.current);
    };
  }, [dimensions.width, dimensions.height]);

  return (
    <div className="fixed inset-0 w-full h-full z-0 pointer-events-none">
      <svg
        width={dimensions.width}
        height={dimensions.height}
        viewBox={`0 0 ${dimensions.width} ${dimensions.height}`}
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        style={{ position: "absolute", inset: 0 }}
      >
        {/* Animated dots */}
        {dots.map((dot, i) => (
          <circle
            key={i}
            cx={dot.x}
            cy={dot.y}
            r={dot.r}
            fill={dot.color}
            opacity={1}
          />
        ))}
        {/* Gradients */}
        <defs>
          <radialGradient id="grad1" cx="50%" cy="50%" r="100%">
            <stop offset="0%" stopColor="#a5b4fc" />
            <stop offset="100%" stopColor="#6366f1" />
          </radialGradient>
          <radialGradient id="grad2" cx="50%" cy="50%" r="100%">
            <stop offset="0%" stopColor="#38bdf8" />
            <stop offset="100%" stopColor="#0ea5e9" />
          </radialGradient>
        </defs>
      </svg>
    </div>
  );
  // (no trailing brace needed)
  // (no trailing brace needed)
}
