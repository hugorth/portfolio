import { motion } from 'framer-motion';
import { Brain, Gamepad2, GitBranch, Github, Leaf, MapPin, Radar, ScanSearch, Truck, Workflow } from 'lucide-react';
import PageWrapper from '../components/PageWrapper.tsx';
import { PORTFOLIO_DATA } from '../data/info.ts';

const projectIcons = {
  Truck,
  Workflow,
  Share2: Leaf,
  Gamepad2,
  Brain,
  Sun: Radar,
  MapPin,
};

export default function Projects() {
  return (
    <PageWrapper>
      <section className="mb-12 grid gap-6 lg:grid-cols-[0.9fr_1.1fr] lg:items-end">
        <div>
          <p className="section-eyebrow">
            <GitBranch size={14} />
            Selected work
          </p>
          <h1 className="section-title text-5xl md:text-6xl">Projects with a practical edge.</h1>
        </div>
        <p className="max-w-2xl text-lg leading-8 text-muted lg:justify-self-end">
          A focused selection of academic, internship and personal work across secure platforms, automation, mobile, games and rendering.
        </p>
      </section>

      <div className="grid grid-cols-1 gap-5 md:grid-cols-2">
        {PORTFOLIO_DATA.projects.map((project, index) => {
          const Icon = projectIcons[project.icon as keyof typeof projectIcons] ?? ScanSearch;

          return (
            <motion.article
              key={project.id}
              initial={{ opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-70px' }}
              transition={{ delay: index * 0.05, duration: 0.44 }}
              className="panel interactive-panel group flex min-h-[280px] flex-col p-6"
            >
              <div className="flex items-start justify-between gap-5">
                <div className="icon-tile">
                  <Icon size={22} />
                </div>
                <a
                  href={project.githubUrl}
                  target="_blank"
                  rel="noreferrer"
                  aria-label={`Open ${project.title} on GitHub`}
                  className="grid h-10 w-10 place-items-center rounded-full border border-[var(--line)] text-muted transition hover:-translate-y-0.5 hover:border-[var(--line-strong)] hover:bg-[var(--surface-hover)] hover:text-primary group-hover:border-[var(--line-strong)] group-hover:text-primary"
                >
                  <Github size={17} />
                </a>
              </div>

              <div className="mt-8 flex-1">
                <p className="text-sm font-bold uppercase text-subtle">{String(index + 1).padStart(2, '0')}</p>
                <h2 className="mt-2 text-2xl font-bold text-primary">{project.title}</h2>
                <p className="mt-4 leading-7 text-muted">{project.desc}</p>
              </div>

              <div className="mt-8 flex flex-wrap gap-2">
                {project.tags.map((tag) => (
                  <span key={tag} className="chip">
                    {tag}
                  </span>
                ))}
              </div>
            </motion.article>
          );
        })}
      </div>
    </PageWrapper>
  );
}
