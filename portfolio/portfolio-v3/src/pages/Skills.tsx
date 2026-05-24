import { motion } from 'framer-motion';
import { CloudCog, Database, Gauge, Palette, Server, Shield, TerminalSquare, Wrench } from 'lucide-react';
import PageWrapper from '../components/PageWrapper.tsx';

const skillCategories = [
  {
    icon: Shield,
    title: 'Security & Cloud',
    desc: 'Security basics, cloud foundations and delivery workflows.',
    skills: [
      { name: 'AWS', level: 'Certified', pct: 85 },
      { name: 'Docker', level: 'Advanced', pct: 80 },
      { name: 'Cybersecurity', level: 'Advanced', pct: 75 },
      { name: 'CI/CD', level: 'Intermediate', pct: 70 },
    ],
  },
  {
    icon: Server,
    title: 'Backend',
    desc: 'APIs, services, scripting and lower-level programming.',
    skills: [
      { name: 'Node.js / Express', level: 'Advanced', pct: 85 },
      { name: 'Python', level: 'Advanced', pct: 80 },
      { name: 'C / C++', level: 'Advanced', pct: 80 },
      { name: 'REST API', level: 'Advanced', pct: 85 },
    ],
  },
  {
    icon: Palette,
    title: 'Frontend',
    desc: 'Interactive interfaces, typed React and responsive layouts.',
    skills: [
      { name: 'React', level: 'Advanced', pct: 85 },
      { name: 'Vue.js', level: 'Intermediate', pct: 70 },
      { name: 'TypeScript', level: 'Advanced', pct: 75 },
      { name: 'HTML / CSS', level: 'Advanced', pct: 90 },
    ],
  },
  {
    icon: Database,
    title: 'Databases',
    desc: 'Schema design, persistence and data access patterns.',
    skills: [
      { name: 'PostgreSQL', level: 'Advanced', pct: 80 },
      { name: 'MongoDB', level: 'Intermediate', pct: 70 },
      { name: 'Firebase', level: 'Intermediate', pct: 65 },
      { name: 'MySQL', level: 'Advanced', pct: 75 },
    ],
  },
];

const toolsSkills = [
  { name: 'Git / GitHub', level: 'Advanced', pct: 90 },
  { name: 'Linux', level: 'Advanced', pct: 80 },
  { name: 'VS Code', level: 'Expert', pct: 95 },
  { name: 'Figma', level: 'Intermediate', pct: 60 },
];

const specializations = [
  {
    icon: Shield,
    title: 'Cybersecurity',
    desc: 'OWASP practices, vulnerability thinking, access management and safer defaults.',
  },
  {
    icon: CloudCog,
    title: 'Cloud Architecture',
    desc: 'AWS services, deployment choices and infrastructure that stays understandable.',
  },
  {
    icon: TerminalSquare,
    title: 'Full-stack Development',
    desc: 'End-to-end product work, from interface details to API behavior and storage.',
  },
  {
    icon: Gauge,
    title: 'Problem Solving',
    desc: 'Algorithms, debugging and performance work for projects with real constraints.',
  },
];

function SkillBar({ pct }: { pct: number }) {
  return (
    <div className="mt-3 h-2 overflow-hidden rounded-full bg-[var(--surface-hover)]">
      <motion.div
        initial={{ width: 0 }}
        whileInView={{ width: `${pct}%` }}
        viewport={{ once: true }}
        transition={{ duration: 0.85, ease: [0.22, 1, 0.36, 1] }}
        className="h-full rounded-full bg-[linear-gradient(90deg,var(--accent),var(--accent-2))]"
      />
    </div>
  );
}

export default function Skills() {
  return (
    <PageWrapper className="flex flex-col gap-14">
      <section className="grid gap-6 lg:grid-cols-[0.9fr_1.1fr] lg:items-end">
        <div>
          <p className="section-eyebrow">
            <Wrench size={14} />
            Skills
          </p>
          <h1 className="section-title text-5xl md:text-6xl">A practical technical stack.</h1>
        </div>
        <p className="max-w-2xl text-lg leading-8 text-muted lg:justify-self-end">
          Skills shaped by school projects, internship constraints and personal curiosity around secure systems.
        </p>
      </section>

      <section className="grid grid-cols-2 gap-4 md:grid-cols-4">
        {[
          { value: '15+', label: 'Projects completed' },
          { value: '10+', label: 'Technologies' },
          { value: '2', label: 'AWS certifications' },
          { value: '3+', label: 'Years of experience' },
        ].map((stat, index) => (
          <motion.div
            key={stat.label}
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.05, duration: 0.42 }}
            className="panel p-5"
          >
            <div className="metric-number text-gradient">{stat.value}</div>
            <p className="mt-3 text-sm font-bold text-muted">{stat.label}</p>
          </motion.div>
        ))}
      </section>

      <section className="grid grid-cols-1 gap-5 md:grid-cols-2">
        {skillCategories.map((category, index) => {
          const Icon = category.icon;

          return (
            <motion.article
              key={category.title}
              initial={{ opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-70px' }}
              transition={{ delay: index * 0.05, duration: 0.42 }}
              className="panel p-6"
            >
              <div className="flex items-start gap-4">
                <div className={index % 2 === 0 ? 'icon-tile' : 'icon-tile icon-tile-secondary'}>
                  <Icon size={22} />
                </div>
                <div>
                  <h2 className="text-xl font-bold text-primary">{category.title}</h2>
                  <p className="mt-1 text-sm leading-6 text-muted">{category.desc}</p>
                </div>
              </div>

              <div className="mt-7 space-y-5">
                {category.skills.map((skill) => (
                  <div key={skill.name}>
                    <div className="flex items-center justify-between gap-4">
                      <span className="text-sm font-bold text-primary">{skill.name}</span>
                      <span className="text-xs font-bold accent">{skill.level}</span>
                    </div>
                    <SkillBar pct={skill.pct} />
                  </div>
                ))}
              </div>
            </motion.article>
          );
        })}
      </section>

      <section className="panel p-6">
        <div className="mb-7 flex items-center gap-4">
          <div className="icon-tile icon-tile-warm">
            <Wrench size={22} />
          </div>
          <div>
            <h2 className="text-xl font-bold text-primary">Tools & DevOps</h2>
            <p className="mt-1 text-sm text-muted">The daily tools that keep work clean and shippable.</p>
          </div>
        </div>
        <div className="grid gap-5 md:grid-cols-2">
          {toolsSkills.map((skill) => (
            <div key={skill.name}>
              <div className="flex items-center justify-between gap-4">
                <span className="text-sm font-bold text-primary">{skill.name}</span>
                <span className="text-xs font-bold accent">{skill.level}</span>
              </div>
              <SkillBar pct={skill.pct} />
            </div>
          ))}
        </div>
      </section>

      <section>
        <p className="section-eyebrow">Specializations</p>
        <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
          {specializations.map((spec, index) => {
            const Icon = spec.icon;

            return (
              <motion.article
                key={spec.title}
                initial={{ opacity: 0, y: 18 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-70px' }}
                transition={{ delay: index * 0.05, duration: 0.42 }}
                className="panel interactive-panel flex gap-5 p-6"
              >
                <div className={index % 2 === 0 ? 'icon-tile' : 'icon-tile icon-tile-secondary'}>
                  <Icon size={22} />
                </div>
                <div>
                  <h3 className="text-lg font-bold text-primary">{spec.title}</h3>
                  <p className="mt-2 leading-7 text-muted">{spec.desc}</p>
                </div>
              </motion.article>
            );
          })}
        </div>
      </section>
    </PageWrapper>
  );
}
