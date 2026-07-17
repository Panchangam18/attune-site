"use client";

import { useEffect, useRef } from "react";

function randomColor() {
  const hue = Math.floor(Math.random() * 360);
  return `hsl(${hue} 74% 66%)`;
}

function applyNextWave(element: HTMLSpanElement) {
  element.style.setProperty("--wave-a", randomColor());
  element.style.setProperty("--wave-b", randomColor());
  element.style.setProperty("--wave-c", randomColor());
  element.style.setProperty("--wave-d", randomColor());
}

export function AttuneWord() {
  const wordRef = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    const word = wordRef.current;
    if (!word) return;

    applyNextWave(word);
    const timer = window.setInterval(() => applyNextWave(word), 900);
    return () => window.clearInterval(timer);
  }, []);

  return (
    <span className="attune-word" ref={wordRef}>
      Attune
    </span>
  );
}
