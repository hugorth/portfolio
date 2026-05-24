import { motion } from 'framer-motion';
import { ArrowRight, Cloud, Code2, Download, LockKeyhole, ShieldCheck, Sparkles } from 'lucide-react';
import LiquidButton from '../components/LiquidButton.tsx';
import LiquidGlass from '../components/LiquidGlass.tsx';
import PageWrapper from '../components/PageWrapper.tsx';

const strengths = [
  {
    icon: ShieldCheck,
    title: 'Security-first engineering',
    desc: 'OWASP habits, access control, encryption flows and threat-aware product decisions.',
    tone: 'accent',
  },
  {
    icon: Cloud,
    title: 'Cloud architecture',
    desc: 'AWS, Docker, CI/CD and pragmatic infrastructure choices for reliable delivery.',
    tone: 'secondary',
  },
  {
    icon: Code2,
    title: 'Full-stack delivery',
    desc: 'React frontends, Node APIs, databases and clean integration between product layers.',
    tone: 'warm',
  },
];

const metrics = [
  { value: '15+', label: 'projects shipped' },
  { value: '3+', label: 'years building' },
  { value: '2', label: 'AWS tracks' },
];

export default function Home() {
  return (
    <PageWrapper className="flex flex-col gap-16">
      <section className="grid min-h-[68vh] items-center gap-8 lg:grid-cols-[1.08fr_0.92fr]">
        <div>
          <motion.div
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.08, duration: 0.5 }}
            className="chip mb-6"
          >
            <span className="status-dot" />
            Available for an internship
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.14, duration: 0.62, ease: [0.22, 1, 0.36, 1] }}
            className="section-title max-w-4xl text-5xl leading-[0.98] md:text-7xl"
          >
            I design and build <span className="text-gradient">secure digital products</span>.
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.58 }}
            className="mt-7 max-w-2xl text-lg leading-8 text-muted md:text-xl"
          >
            Full-stack and cloud developer studying at Epitech Paris, focused on cybersecurity, robust systems and interfaces that feel precise.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.28, duration: 0.5 }}
            className="mt-9 flex flex-col gap-3 sm:flex-row"
          >
            <LiquidButton to="/projects" variant="primary">
              View projects <ArrowRight size={18} />
            </LiquidButton>
            <LiquidButton href="/CVHugo.pdf" download>
              Download CV <Download size={18} />
            </LiquidButton>
          </motion.div>
        </div>

        <LiquidGlass className="p-6 md:p-8">
          <div className="flex items-center justify-between gap-4 border-b border-[var(--line)] pb-5">
            <div>
              <p className="section-eyebrow mb-2">
                <Sparkles size={14} />
                Portfolio
              </p>
              <h2 className="text-2xl font-bold text-primary">Hugo Rath</h2>
            </div>
            <div className="icon-tile">
              <LockKeyhole size={22} />
            </div>
          </div>

          <div className="grid gap-4 py-6">
            {['Cybersecurity', 'AWS', 'React', 'Node.js', 'PostgreSQL'].map((item, index) => (
              <motion.div
                key={item}
                initial={{ opacity: 0, x: 16 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.34 + index * 0.06, duration: 0.42 }}
                className="flex items-center justify-between border-b border-[var(--line)] pb-3 last:border-b-0 last:pb-0"
              >
                <span className="text-sm font-semibold text-primary">{item}</span>
                <span className="h-2 w-24 overflow-hidden rounded-full bg-[var(--surface-hover)]">
                  <motion.span
                    initial={{ width: 0 }}
                    animate={{ width: `${82 + index * 3}%` }}
                    transition={{ delay: 0.48 + index * 0.05, duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
                    className="block h-full rounded-full bg-[linear-gradient(90deg,var(--accent),var(--accent-2))]"
                  />
                </span>
              </motion.div>
            ))}
          </div>

          <div className="grid grid-cols-3 gap-3">
            {metrics.map((metric) => (
              <div key={metric.label} className="rounded-[8px] border border-[var(--line)] bg-[var(--surface-hover)] p-4">
                <div className="text-2xl font-bold text-primary">{metric.value}</div>
                <p className="mt-1 text-xs font-semibold text-muted">{metric.label}</p>
              </div>
            ))}
          </div>
        </LiquidGlass>
      </section>

      <section className="grid grid-cols-1 gap-4 md:grid-cols-3">
        {strengths.map((feature, index) => {
          const Icon = feature.icon;
          const iconClass = feature.tone === 'secondary' ? 'icon-tile-secondary' : feature.tone === 'warm' ? 'icon-tile-warm' : '';

          return (
            <motion.article
              key={feature.title}
              initial={{ opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-80px' }}
              transition={{ delay: index * 0.06, duration: 0.45 }}
              className="panel interactive-panel p-6"
            >
              <div className={`icon-tile ${iconClass}`}>
                <Icon size={22} />
              </div>
              <h3 className="mt-6 text-xl font-bold text-primary">{feature.title}</h3>
              <p className="mt-3 leading-7 text-muted">{feature.desc}</p>
            </motion.article>
          );
        })}
      </section>
    </PageWrapper>
  );
}
