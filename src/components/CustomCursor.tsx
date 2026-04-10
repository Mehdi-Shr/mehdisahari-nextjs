"use client";

import { useEffect, useState } from "react";

const CustomCursor = () => {
  const [pos, setPos] = useState({ x: 0, y: 0 });
  const [hovering, setHovering] = useState(false);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const move = (e: MouseEvent) => {
      setPos({ x: e.clientX, y: e.clientY });
      setVisible(true);
    };

    const over = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      if (
        target.closest("a, button, select, input, textarea, [role='button'], article, .glass-card, [class*='rounded-2xl'], [class*='rounded-xl']")
      ) {
        setHovering(true);
      } else {
        setHovering(false);
      }
    };

    const leave = () => setVisible(false);

    window.addEventListener("mousemove", move);
    window.addEventListener("mouseover", over);
    window.addEventListener("mouseout", leave);

    return () => {
      window.removeEventListener("mousemove", move);
      window.removeEventListener("mouseover", over);
      window.removeEventListener("mouseout", leave);
    };
  }, []);

  // Hide on touch devices
  if (typeof window !== "undefined" && "ontouchstart" in window) return null;

  return (
    <div
      className="fixed pointer-events-none z-[9999] rounded-full bg-primary"
      style={{
        left: pos.x,
        top: pos.y,
        width: hovering ? 40 : 10,
        height: hovering ? 40 : 10,
        transform: "translate(-50%, -50%)",
        opacity: visible ? (hovering ? 0.25 : 0.7) : 0,
        transition: "width 0.2s ease, height 0.2s ease, opacity 0.2s ease",
        boxShadow: hovering ? "var(--neon-glow-strong)" : "var(--neon-glow)",
      }}
    />
  );
};

export default CustomCursor;
