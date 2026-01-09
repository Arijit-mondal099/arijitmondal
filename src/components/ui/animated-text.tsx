"use client";

import React, { useEffect } from "react";
import { gsap } from "gsap";

interface AnimatedTextProps {
  text: string;
  className?: string;
  textClassName?: string;
}

export function AnimatedText({
  text,
  className = "",
  textClassName = "",
}: AnimatedTextProps) {
  useEffect(() => {
    // Optional: Add entrance animation logic here if needed separate from the existing hooks
  }, []);

  const handleMouseEnter = (e: React.MouseEvent<HTMLSpanElement>) => {
    gsap.to(e.currentTarget, {
      scale: 1.3,
      y: -5,
      color: "var(--primary)", // Use a theme color or specific color
      duration: 0.3,
      ease: "back.out(2.5)",
      overwrite: true,
    });
  };

  const handleMouseLeave = (e: React.MouseEvent<HTMLSpanElement>) => {
    gsap.to(e.currentTarget, {
      scale: 1,
      y: 0,
      color: "currentColor",
      duration: 0.3,
      ease: "power2.out",
      overwrite: true,
    });
  };

  return (
    <span className={`${className}`}>
      {text.split("").map((char, index) => (
        <span
          key={index}
          className={`inline-block cursor-default transition-colors ${textClassName} ${
            char === " " ? "whitespace-pre" : ""
          }`}
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
        >
          {char === " " ? "\u00A0" : char}
        </span>
      ))}
    </span>
  );
}
