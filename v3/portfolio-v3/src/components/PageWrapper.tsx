import type { ReactNode } from 'react';
import { motion } from 'framer-motion';

interface PageWrapperProps {
  children: ReactNode;
  className?: string;
}

export default function PageWrapper({ children, className = '' }: PageWrapperProps) {
  return (
    <motion.main
      initial={{ opacity: 0, y: 18, filter: 'blur(8px)' }}
      animate={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
      exit={{ opacity: 0, y: -14, filter: 'blur(8px)' }}
      transition={{ duration: 0.46, ease: [0.22, 1, 0.36, 1] }}
      className={`page-shell ${className}`}
    >
      {children}
    </motion.main>
  );
}
