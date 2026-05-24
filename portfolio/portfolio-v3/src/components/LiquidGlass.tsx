import type { MouseEvent, ReactNode } from 'react';
import { useRef, useState } from 'react';
import { motion } from 'framer-motion';

interface LiquidGlassProps {
  children?: ReactNode;
  className?: string;
}

export default function LiquidGlass({ children, className = '' }: LiquidGlassProps) {
  const divRef = useRef<HTMLDivElement>(null);
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [opacity, setOpacity] = useState(0);

  const handleMouseMove = (event: MouseEvent<HTMLDivElement>) => {
    if (!divRef.current) {
      return;
    }

    const rect = divRef.current.getBoundingClientRect();
    setPosition({ x: event.clientX - rect.left, y: event.clientY - rect.top });
  };

  return (
    <motion.div
      ref={divRef}
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setOpacity(1)}
      onMouseLeave={() => setOpacity(0)}
      className={`panel ${className}`}
      whileHover={{ y: -4 }}
      transition={{ duration: 0.28, ease: [0.22, 1, 0.36, 1] }}
    >
      <div
        className="pointer-events-none absolute inset-0 transition-opacity duration-500"
        style={{
          opacity,
          background: `radial-gradient(520px circle at ${position.x}px ${position.y}px, color-mix(in srgb, var(--accent) 13%, transparent), transparent 52%)`,
        }}
      />
      <div className="relative z-10">{children}</div>
    </motion.div>
  );
}
