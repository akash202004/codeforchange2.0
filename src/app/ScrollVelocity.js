"use client";

import { useEffect, useRef, useState } from "react";

/**
 * Smooth, accessible, and performant horizontal scrolling text.
 * Pauses when offscreen or tab is hidden to reduce jank.
 *
 * Props:
 * - texts: string[]
 * - velocity: number (px per second)
 * - className: string (applied to each text span)
 */
export default function ScrollVelocity({
  texts = ["SEE YOU SOON!!!!"],
  velocity = 60,
  className = "",
}) {
  const containerRef = useRef(null);
  const segRef = useRef(null);
  const [segWidth, setSegWidth] = useState(0);
  const [offset, setOffset] = useState(0);
  const visibleRef = useRef(true);

  // Measure once mounted and on resize
  useEffect(() => {
    const measure = () => {
      const el = segRef.current;
      if (!el) return;
      const rect = el.getBoundingClientRect();
      setSegWidth(rect.width || 0);
    };
    measure();
    const ro = new ResizeObserver(measure);
    if (containerRef.current) ro.observe(containerRef.current);
    if (segRef.current) ro.observe(segRef.current);
    window.addEventListener("resize", measure);
    return () => {
      ro.disconnect();
      window.removeEventListener("resize", measure);
    };
  }, []);

  // Track visibility (IntersectionObserver + Page Visibility)
  useEffect(() => {
    const el = containerRef.current;
    if (!el) return;
    const io = new IntersectionObserver(
      (entries) => {
        for (const e of entries) {
          visibleRef.current = e.isIntersecting;
        }
      },
      { root: null, threshold: 0.05 }
    );
    io.observe(el);

    const onVis = () => {
      visibleRef.current = document.visibilityState === "visible";
    };
    document.addEventListener("visibilitychange", onVis);
    return () => {
      io.disconnect();
      document.removeEventListener("visibilitychange", onVis);
    };
  }, []);

  // Animation loop
  useEffect(() => {
    const prefersReduced = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;
    if (prefersReduced) return; // Respect user preference

    let raf = 0;
    let last = performance.now();

    const loop = (t) => {
      raf = requestAnimationFrame(loop);
      if (!visibleRef.current) {
        last = t; // reset timer while paused
        return;
      }
      const dt = (t - last) / 1000; // seconds
      last = t;
      setOffset((prev) => {
        let next = prev - velocity * dt;
        if (segWidth > 0 && next <= -segWidth) next += segWidth;
        return next;
      });
    };

    raf = requestAnimationFrame(loop);
    return () => cancelAnimationFrame(raf);
  }, [velocity, segWidth]);

  const items = texts.length ? texts : ["SEE YOU SOON!!!!"];
  const repeated = Array.from({ length: 6 }).flatMap(() => items);

  return (
    <div ref={containerRef} className="relative overflow-hidden">
      {/* Segment A */}
      <div
        ref={segRef}
        className="flex items-center gap-8 whitespace-nowrap will-change-transform"
        style={{ transform: `translateX(${offset}px)` }}
        aria-hidden={false}
      >
        {repeated.map((text, idx) => (
          <span
            key={`a-${idx}`}
            className={className}
            style={{ fontFamily: "Michroma, sans-serif" }}
          >
            {text}
          </span>
        ))}
      </div>

      {/* Segment B - follows Segment A for seamless loop */}
      <div
        className="flex items-center gap-8 whitespace-nowrap will-change-transform absolute inset-0"
        style={{ transform: `translateX(${offset + segWidth}px)` }}
        aria-hidden
      >
        {repeated.map((text, idx) => (
          <span
            key={`b-${idx}`}
            className={className}
            style={{ fontFamily: "Michroma, sans-serif" }}
          >
            {text}
          </span>
        ))}
      </div>
    </div>
  );
}
