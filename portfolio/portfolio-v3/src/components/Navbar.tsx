import { NavLink } from 'react-router-dom';
import { motion } from 'framer-motion';
import { BriefcaseBusiness, FolderKanban, Home, Mail, Moon, Sparkles, Sun, UserRound, Wrench } from 'lucide-react';
import type { Theme } from '../App';

interface NavbarProps {
  theme: Theme;
  onThemeToggle: () => void;
}

const links = [
  { path: '/', label: 'Home', icon: Home },
  { path: '/about', label: 'About', icon: UserRound },
  { path: '/projects', label: 'Projects', icon: FolderKanban },
  { path: '/skills', label: 'Skills', icon: Wrench },
  { path: '/contact', label: 'Contact', icon: Mail },
];

export default function Navbar({ theme, onThemeToggle }: NavbarProps) {
  const ThemeIcon = theme === 'dark' ? Sun : Moon;

  return (
    <header className="fixed left-0 top-4 z-50 w-full px-3">
      <nav className="nav-shell mx-auto flex w-full max-w-5xl items-center justify-between gap-2 rounded-full px-2 py-2">
        <NavLink
          to="/"
          className="hidden items-center gap-2 rounded-full px-3 py-2 text-sm font-bold text-primary sm:inline-flex"
          aria-label="Hugo Rath portfolio"
        >
          <span className="grid h-8 w-8 place-items-center rounded-full bg-[color-mix(in_srgb,var(--accent)_18%,transparent)] text-[var(--accent)]">
            <BriefcaseBusiness size={16} />
          </span>
          <span>Hugo Rath</span>
        </NavLink>

        <div className="flex flex-1 items-center justify-center gap-1 overflow-x-auto px-1 sm:flex-none">
          {links.map(({ path, label, icon: Icon }) => (
            <NavLink
              key={path}
              to={path}
              className={({ isActive }) =>
                `nav-link ${isActive ? 'nav-link-active' : ''} relative inline-flex min-h-10 items-center gap-2 rounded-full px-3 text-sm font-semibold transition-colors sm:px-4`
              }
              aria-label={label}
            >
              {({ isActive }) => (
                <>
                  {isActive && (
                    <motion.span
                      layoutId="nav-pill"
                      className="absolute inset-0 -z-10 rounded-full border border-[var(--line)] bg-[var(--surface-hover)]"
                      transition={{ type: 'spring', stiffness: 430, damping: 34 }}
                    />
                  )}
                  <Icon size={16} />
                  <span className="hidden md:inline">{label}</span>
                </>
              )}
            </NavLink>
          ))}
        </div>

        <button
          type="button"
          onClick={onThemeToggle}
          className="group inline-flex min-h-10 items-center gap-2 rounded-full border border-[var(--line)] bg-[var(--surface)] px-3 text-sm font-bold text-primary transition hover:border-[var(--line-strong)] hover:bg-[var(--surface-hover)]"
          aria-label={theme === 'dark' ? 'Switch to light theme' : 'Switch to dark theme'}
        >
          <Sparkles size={14} className="hidden text-[var(--accent)] sm:block" />
          <ThemeIcon size={16} />
        </button>
      </nav>
    </header>
  );
}
