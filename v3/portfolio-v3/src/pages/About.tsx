import { motion } from 'framer-motion';
import { Award, Building2, Cloud, Code2, Download, GraduationCap, Mail, MapPinned, ShieldCheck } from 'lucide-react';
import LiquidButton from '../components/LiquidButton.tsx';
import PageWrapper from '../components/PageWrapper.tsx';
import { PORTFOLIO_DATA } from '../data/info.ts';

const pillars = [
  {
    icon: Code2,
    title: 'Developer',
    desc: 'I turn requirements into maintainable interfaces, APIs and integrations with a product-minded approach.',
  },
  {
    icon: ShieldCheck,
    title: 'Security mindset',
    desc: 'Authentication, authorization, data protection and OWASP practices are part of the way I build.',
  },
  {
    icon: Cloud,
    title: 'Cloud curious',
    desc: 'I work with AWS and containerized workflows to understand how systems behave beyond localhost.',
  },
];

const interests = [
  'Secure web development',
  'Cloud security',
  'Identity and access management',
  'Infrastructure reliability',
  'Penetration testing fundamentals',
  'Clean product interfaces',
];

const certifications = [
  {
    title: 'AWS Academy Graduate - Cloud Web Application Builder',
    date: 'January 2026',
    tags: ['AWS', 'Architecture', 'Web Applications'],
  },
  {
    title: 'AWS Academy Graduate - Cloud Foundations',
    date: 'January 2026',
    tags: ['Cloud Computing', 'AWS Fundamentals', 'Infrastructure'],
  },
];

export default function About() {
  return (
    <PageWrapper className="flex flex-col gap-16">
      <section className="grid gap-8 lg:grid-cols-[1fr_0.82fr] lg:items-center">
        <div>
          <p className="section-eyebrow">
            <MapPinned size={14} />
            About
          </p>
          <h1 className="section-title max-w-3xl text-5xl md:text-6xl">A builder with a security reflex.</h1>
          <p className="mt-6 max-w-2xl text-lg leading-8 text-muted">
            I am a third-year Epitech student specializing in cybersecurity, cloud security and secure web development. My goal is simple: build systems that feel polished on the surface and solid underneath.
          </p>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <LiquidButton href="/CVHugo.pdf" download variant="primary">
              <Download size={17} />
              Download CV
            </LiquidButton>
            <LiquidButton to="/contact">
              <Mail size={17} />
              Contact me
            </LiquidButton>
          </div>
        </div>

        <div className="panel p-6">
          <p className="text-sm font-bold uppercase text-subtle">Current focus</p>
          <div className="mt-5 space-y-5">
            {[
              ['Cloud security', 'AWS foundations, IAM, encryption and deployment practices.'],
              ['Secure platforms', 'File transfer, access control, auditability and data handling.'],
              ['Frontend polish', 'Readable interfaces, motion, responsive layouts and design systems.'],
            ].map(([title, desc]) => (
              <div key={title} className="border-b border-[var(--line)] pb-5 last:border-b-0 last:pb-0">
                <h2 className="font-bold text-primary">{title}</h2>
                <p className="mt-2 leading-7 text-muted">{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="grid grid-cols-1 gap-4 md:grid-cols-3">
        {pillars.map((pillar, index) => {
          const Icon = pillar.icon;

          return (
            <motion.article
              key={pillar.title}
              initial={{ opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-70px' }}
              transition={{ delay: index * 0.06, duration: 0.42 }}
              className="panel interactive-panel p-6"
            >
              <div className={index === 1 ? 'icon-tile icon-tile-secondary' : index === 2 ? 'icon-tile icon-tile-warm' : 'icon-tile'}>
                <Icon size={22} />
              </div>
              <h2 className="mt-6 text-xl font-bold text-primary">{pillar.title}</h2>
              <p className="mt-3 leading-7 text-muted">{pillar.desc}</p>
            </motion.article>
          );
        })}
      </section>

      <section className="grid gap-6 lg:grid-cols-[0.8fr_1.2fr]">
        <div>
          <p className="section-eyebrow">
            <Building2 size={14} />
            Experience
          </p>
          <h2 className="section-title text-4xl">Journey</h2>
          <p className="mt-4 leading-8 text-muted">
            I like environments where software quality, security and real constraints meet. That is where good engineering becomes visible.
          </p>
        </div>

        <div className="panel p-6">
          <div className="relative space-y-8 pl-8">
            <div className="timeline-line" />
            {PORTFOLIO_DATA.experience.map((experience) => (
              <article key={`${experience.company}-${experience.date}`} className="relative">
                <span className="absolute -left-[2.08rem] top-1.5 h-3 w-3 rounded-full bg-[var(--accent)] shadow-[0_0_0_6px_color-mix(in_srgb,var(--accent)_14%,transparent)]" />
                <p className="text-sm font-bold text-subtle">{experience.date}</p>
                <h3 className="mt-2 text-xl font-bold text-primary">{experience.role}</h3>
                <p className="mt-1 text-sm font-bold accent">{experience.company}</p>
                <p className="mt-3 leading-7 text-muted">{experience.desc}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="grid gap-6 lg:grid-cols-2">
        <div className="panel p-6">
          <p className="section-eyebrow">
            <GraduationCap size={14} />
            Education
          </p>
          <div className="space-y-5">
            {PORTFOLIO_DATA.education.map((item) => (
              <div key={item.degree} className="border-b border-[var(--line)] pb-5 last:border-b-0 last:pb-0">
                <h3 className="text-xl font-bold text-primary">{item.degree}</h3>
                <p className="mt-2 font-semibold accent">{item.school}</p>
                <p className="mt-1 text-sm text-muted">{item.date}</p>
              </div>
            ))}
            <div>
              <h3 className="text-xl font-bold text-primary">Baccalaureat</h3>
              <p className="mt-2 font-semibold accent">Lycee Maurice Genevoix, Montrouge</p>
              <p className="mt-1 text-sm text-muted">Mathematics and Computer Science specialties</p>
            </div>
          </div>
        </div>

        <div className="panel p-6">
          <p className="section-eyebrow">
            <Award size={14} />
            Certifications
          </p>
          <div className="space-y-5">
            {certifications.map((certification) => (
              <div key={certification.title} className="border-b border-[var(--line)] pb-5 last:border-b-0 last:pb-0">
                <h3 className="font-bold text-primary">{certification.title}</h3>
                <p className="mt-1 text-sm text-muted">Amazon Web Services - {certification.date}</p>
                <div className="mt-4 flex flex-wrap gap-2">
                  {certification.tags.map((tag) => (
                    <span key={tag} className="chip">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="panel p-6">
        <div className="grid gap-8 lg:grid-cols-[0.7fr_1.3fr] lg:items-start">
          <div>
            <p className="section-eyebrow">Interests</p>
            <h2 className="section-title text-4xl">Where I am growing</h2>
          </div>
          <div className="grid gap-3 sm:grid-cols-2">
            {interests.map((interest) => (
              <div key={interest} className="flex items-center gap-3 rounded-[8px] border border-[var(--line)] bg-[var(--surface-hover)] p-4">
                <span className="status-dot" />
                <span className="font-semibold text-primary">{interest}</span>
              </div>
            ))}
          </div>
        </div>
      </section>
    </PageWrapper>
  );
}
