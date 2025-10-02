"use client";
import { ReactNode, useRef, useEffect, useState } from "react";

interface CardProps {
  children: ReactNode;
  className?: string;
}

export default function Card({ children, className = "" }: CardProps) {
  const ref = useRef<HTMLDivElement>(null);
  const [scale, setScale] = useState(0.85);
  const [opacity, setOpacity] = useState(0.75);

  useEffect(() => {
    const handleScroll = () => {
      if (!ref.current) return;
      const rect = ref.current.getBoundingClientRect();
      const windowHeight = window.innerHeight;

      // Calculate how much of the card is visible from the bottom
      const visible = Math.min(
        Math.max(windowHeight - rect.top, 0),
        rect.height
      );
      const percentVisible = visible / rect.height;

      // Scale: 0.75 to 1, Opacity: 0.75 to 1
      const newScale = 0.85 + 0.15 * Math.max(0, Math.min(percentVisible, 1));
      const newOpacity = 0.75 + 0.25 * Math.max(0, Math.min(percentVisible, 1));
      setScale(newScale);
      setOpacity(newOpacity);
    };

    handleScroll(); // Initial check

    window.addEventListener("scroll", handleScroll, { passive: true });
    window.addEventListener("resize", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("resize", handleScroll);
    };
  }, []);

  return (
    <div
      ref={ref}
      style={{
        transform: `scale(${scale})`,
        opacity: opacity,
        transition:
          "transform 0.4s cubic-bezier(0.22, 1, 0.36, 1), opacity 0.4s cubic-bezier(0.22, 1, 0.36, 1)",
      }}
      className={`relative bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow overflow-hidden ${className}`}
    >
      {/* Animated border */}
      <span className="animated-border" />
      <div className="relative z-10">{children}</div>
    </div>
  );
}
