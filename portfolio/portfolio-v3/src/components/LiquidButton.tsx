import type { MouseEvent, ReactNode, Ref } from 'react';
import { useRef, useState } from 'react';
import { Link } from 'react-router-dom';

interface LiquidButtonProps {
  children: ReactNode;
  variant?: 'default' | 'primary';
  href?: string;
  to?: string;
  download?: boolean;
  onClick?: () => void;
  className?: string;
  type?: 'button' | 'submit';
}

export default function LiquidButton({
  children,
  variant = 'default',
  href,
  to,
  download,
  onClick,
  className = '',
  type = 'button',
}: LiquidButtonProps) {
  const ref = useRef<HTMLElement>(null);
  const [pos, setPos] = useState({ x: 0, y: 0 });
  const [opacity, setOpacity] = useState(0);

  const handleMouseMove = (e: MouseEvent<HTMLElement>) => {
    if (!ref.current) return;
    const rect = ref.current.getBoundingClientRect();
    setPos({ x: e.clientX - rect.left, y: e.clientY - rect.top });
  };

    const sharedClass = `liquid-btn${variant === 'primary' ? ' liquid-btn-primary' : ''} ${className}`;

  const inner = (
    <>
      <span
        className="liquid-btn-shine"
        style={{
          opacity,
          background: `radial-gradient(140px circle at ${pos.x}px ${pos.y}px, rgba(255,255,255,0.28), transparent 70%)`,
        }}
      />
      {children}
    </>
  );

  const events = {
    onMouseMove: handleMouseMove,
    onMouseEnter: () => setOpacity(1),
    onMouseLeave: () => setOpacity(0),
  };

  if (to) {
    return (
      <Link
        ref={ref as Ref<HTMLAnchorElement>}
        to={to}
        className={sharedClass}
        {...events}
      >
        {inner}
      </Link>
    );
  }

  if (href) {
    return (
      <a
        ref={ref as Ref<HTMLAnchorElement>}
        href={href}
        download={download}
        className={sharedClass}
        {...events}
      >
        {inner}
      </a>
    );
  }

  return (
    <button
      ref={ref as Ref<HTMLButtonElement>}
      type={type}
      onClick={onClick}
      className={sharedClass}
      {...events}
    >
      {inner}
    </button>
  );
}
