"use client";

import { useEffect, useRef, useState } from "react";

/**
 * Horizontal scrolling container for arbitrary JSX items.
 * Pauses when offscreen or tab is hidden.
 * - items: JSX.Element[] (will be repeated to fill width)
 * - velocity: number (px per second; positive = left, negative = right)
 * - gap: tailwind gap classes (e.g., "gap-6")
 * - className: additional classes for the inner segment rows
 */
export default function ScrollVelocityContent({
  items = [],
  velocity = 40,
  gap = "gap-6",
  className = "",
}) {
  const containerRef = useRef(null);
  const segRef = useRef(null);
  const [segWidth, setSegWidth] = useState(0);
  const [offset, setOffset] = useState(0);
  const visibleRef = useRef(true);

  // Measure segment width
  useEffect(() => {
    const measure = () => {
      const el = segRef.current;
      if (!el) return;
      // Use scrollWidth to get the full content width (not clipped)
      const width = el.scrollWidth;
      setSegWidth(width || 0);
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

  // Track visibility
  useEffect(() => {
    const el = containerRef.current;
    if (!el) return;
    const io = new IntersectionObserver(
      (entries) => {
        for (const e of entries) visibleRef.current = e.isIntersecting;
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
    const prefersReduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (prefersReduced) return;

    let raf = 0;
    let last = performance.now();
    const loop = (t) => {
      raf = requestAnimationFrame(loop);
      if (!visibleRef.current) {
        last = t;
        return;
      }
      const dt = (t - last) / 1000;
      last = t;
      setOffset((prev) => {
        let next = prev - velocity * dt;
        if (segWidth > 0) {
          if (velocity >= 0 && next <= -segWidth) next += segWidth;
          if (velocity < 0 && next >= segWidth) next -= segWidth;
        }
        return next;
      });
    };
    raf = requestAnimationFrame(loop);
    return () => cancelAnimationFrame(raf);
  }, [velocity, segWidth]);

  const content = items.length ? items : [];
  const repeated = Array.from({ length: 2 }).flatMap(() => content);

  return (
    <div ref={containerRef} className="relative overflow-hidden" style={{ contain: 'content' }}>
      <div
        ref={segRef}
        className={`flex ${gap} items-stretch whitespace-nowrap will-change-transform ${className}`}
        style={{ transform: `translateX(${offset}px)` }}
      >
        {repeated.map((node, idx) => (
          <div key={`a-${idx}`} className="whitespace-normal flex-none shrink-0">
            {node}
          </div>
        ))}
      </div>
      {segWidth > 0 && (
        <div
          className={`flex ${gap} items-stretch whitespace-nowrap will-change-transform absolute top-0 left-0 ${className}`}
          style={{ transform: `translateX(${offset + (velocity >= 0 ? segWidth : -segWidth)}px)` }}
          aria-hidden
        >
          {repeated.map((node, idx) => (
            <div key={`b-${idx}`} className="whitespace-normal flex-none shrink-0">
              {node}
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

