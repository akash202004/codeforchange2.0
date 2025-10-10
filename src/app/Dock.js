"use client";

import {
  motion,
  useMotionValue,
  useSpring,
  useTransform,
  AnimatePresence,
} from "motion/react";
import React, { Children, cloneElement, useEffect, useMemo, useRef, useState } from "react";

import "./Dock.css";

// Dock item wrapper using Motion springs
function DockItem({
  children,
  className = "",
  onClick,
  mouseAxis,
  spring,
  distance,
  magnification,
  baseItemSize,
  orientation,
}) {
  const ref = useRef(null);
  const isHovered = useMotionValue(0);

  const mouseDistance = useTransform(mouseAxis, (val) => {
    const rect = ref.current?.getBoundingClientRect() ?? { x: 0, y: 0, width: baseItemSize, height: baseItemSize };
    const center = orientation === "vertical" ? rect.y + rect.height / 2 : rect.x + rect.width / 2;
    return val - center;
  });

  const targetSize = useTransform(
    mouseDistance,
    [-distance, 0, distance],
    [baseItemSize, magnification, baseItemSize]
  );
  const size = useSpring(targetSize, spring);

  return (
    <motion.div
      ref={ref}
      style={{ width: size, height: size }}
      onHoverStart={() => isHovered.set(1)}
      onHoverEnd={() => isHovered.set(0)}
      onFocus={() => isHovered.set(1)}
      onBlur={() => isHovered.set(0)}
      onClick={onClick}
      className={`dock-item ${className}`}
      tabIndex={0}
      role="button"
      aria-haspopup="true"
    >
      {Children.map(children, (child) => cloneElement(child, { isHovered }))}
    </motion.div>
  );
}

function DockLabel({ children, className = "", ...rest }) {
  const { isHovered } = rest;
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const unsubscribe = isHovered.on("change", (latest) => {
      setIsVisible(latest === 1);
    });
    return () => unsubscribe();
  }, [isHovered]);

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ opacity: 0, y: 0 }}
          animate={{ opacity: 1, y: -10 }}
          exit={{ opacity: 0, y: 0 }}
          transition={{ duration: 0.2 }}
          className={`dock-label ${className}`}
          role="tooltip"
          style={{ x: "-50%" }}
        >
          {children}
        </motion.div>
      )}
    </AnimatePresence>
  );
}

function DockIcon({ children, className = "" }) {
  return <div className={`dock-icon ${className}`}>{children}</div>;
}

export default function Dock({
  items,
  className = "",
  spring = { mass: 0.1, stiffness: 150, damping: 12 },
  magnification = 70,
  distance = 200,
  panelHeight = 68,
  dockHeight = 256,
  baseItemSize = 50,
  orientation = "horizontal",
}) {
  const mouseAxis = useMotionValue(Infinity);
  const isHovered = useMotionValue(0);

  const maxHeight = useMemo(
    () => Math.max(dockHeight, magnification + magnification / 2 + 4),
    [magnification, dockHeight]
  );
  const heightRow = useTransform(isHovered, [0, 1], [panelHeight, maxHeight]);
  const height = useSpring(heightRow, spring);

  const outerClasses = `dock-outer ${orientation === "vertical" ? "vertical" : ""}`;
  const panelClasses = `dock-panel ${orientation === "vertical" ? "vertical" : ""} ${className}`;

  return (
    <motion.div style={{ [orientation === "vertical" ? "width" : "height"]: height, scrollbarWidth: "none" }} className={outerClasses}>
      <motion.div
        onMouseMove={(e) => {
          isHovered.set(1);
          if (orientation === "vertical") {
            mouseAxis.set(e.pageY);
          } else {
            mouseAxis.set(e.pageX);
          }
        }}
        onMouseLeave={() => {
          isHovered.set(0);
          mouseAxis.set(Infinity);
        }}
        className={panelClasses}
        style={{ [orientation === "vertical" ? "width" : "height"]: panelHeight }}
        role="toolbar"
        aria-label="Application dock"
      >
        {items.map((item, index) => {
          const onClick = item.onClick || (item.href ? () => window.open(item.href, "_blank", "noopener,noreferrer") : undefined);
          return (
            <DockItem
              key={index}
              onClick={onClick}
              className={item.className}
              mouseAxis={mouseAxis}
              spring={spring}
              distance={distance}
              magnification={magnification}
              baseItemSize={baseItemSize}
              orientation={orientation}
            >
              <DockIcon>{item.icon}</DockIcon>
              <DockLabel>{item.label}</DockLabel>
            </DockItem>
          );
        })}
      </motion.div>
    </motion.div>
  );
}

