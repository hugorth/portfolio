import type { ChangeEvent, FormEvent } from 'react';
import { useState } from 'react';
import { motion } from 'framer-motion';
import { Clock, Github, Linkedin, Mail, MapPin, Send } from 'lucide-react';
import LiquidButton from '../components/LiquidButton.tsx';
import PageWrapper from '../components/PageWrapper.tsx';

type FormState = 'idle' | 'sending' | 'sent';

const initialForm = {
  name: '',
  email: '',
  subject: '',
  message: '',
};

const contacts = [
  {
    icon: Mail,
    label: 'Email',
    value: 'hugo.rath@epitech.eu',
    href: 'mailto:hugo.rath@epitech.eu',
  },
  {
    icon: Github,
    label: 'GitHub',
    value: 'github.com/hugorth',
    href: 'https://github.com/hugorth',
  },
  {
    icon: Linkedin,
    label: 'LinkedIn',
    value: 'linkedin.com/in/hugorath',
    href: 'https://www.linkedin.com/in/hugorath/',
  },
  {
    icon: MapPin,
    label: 'Location',
    value: 'Paris, France',
  },
  {
    icon: Clock,
    label: 'Availability',
    value: 'Open to internship and junior opportunities',
  },
];

export default function Contact() {
  const [form, setForm] = useState(initialForm);
  const [status, setStatus] = useState<FormState>('idle');

  const handleChange = (event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = event.target;
    setForm((currentForm) => ({ ...currentForm, [name]: value }));
  };

  const handleSubmit = async (event: FormEvent) => {
    event.preventDefault();
    setStatus('sending');
    await new Promise((resolve) => setTimeout(resolve, 900));
    setStatus('sent');
  };

  const resetForm = () => {
    setForm(initialForm);
    setStatus('idle');
  };

  return (
    <PageWrapper>
      <section className="mb-12 grid gap-6 lg:grid-cols-[0.9fr_1.1fr] lg:items-end">
        <div>
          <p className="section-eyebrow">
            <Mail size={14} />
            Contact
          </p>
          <h1 className="section-title text-5xl md:text-6xl">Let us talk about the next build.</h1>
        </div>
        <p className="max-w-2xl text-lg leading-8 text-muted lg:justify-self-end">
          An opportunity, a project or a technical conversation. Send a message and I will get back to you quickly.
        </p>
      </section>

      <div className="grid grid-cols-1 gap-6 lg:grid-cols-5">
        <motion.section
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.46 }}
          className="panel lg:col-span-3 p-6 md:p-8"
        >
          {status === 'sent' ? (
            <div className="flex min-h-[440px] flex-col items-center justify-center text-center">
              <div className="icon-tile mb-6 h-16 w-16">
                <Send size={28} />
              </div>
              <h2 className="text-3xl font-bold text-primary">Message sent.</h2>
              <p className="mt-3 max-w-md leading-7 text-muted">Thanks for reaching out. I will reply as soon as possible.</p>
              <div className="mt-7">
                <LiquidButton onClick={resetForm}>Send another message</LiquidButton>
              </div>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="grid gap-5">
              <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
                <label className="grid gap-2 text-sm font-bold text-primary">
                  Name
                  <input name="name" value={form.name} onChange={handleChange} required placeholder="Hugo Rath" className="input-field" />
                </label>
                <label className="grid gap-2 text-sm font-bold text-primary">
                  Email
                  <input name="email" type="email" value={form.email} onChange={handleChange} required placeholder="you@example.com" className="input-field" />
                </label>
              </div>

              <label className="grid gap-2 text-sm font-bold text-primary">
                Subject
                <input name="subject" value={form.subject} onChange={handleChange} required placeholder="Internship, project, collaboration" className="input-field" />
              </label>

              <label className="grid gap-2 text-sm font-bold text-primary">
                Message
                <textarea
                  name="message"
                  value={form.message}
                  onChange={handleChange}
                  required
                  rows={7}
                  placeholder="Hi Hugo, I am reaching out because..."
                  className="input-field resize-none"
                />
              </label>

              <div className="flex justify-end pt-2">
                <LiquidButton type="submit" variant="primary" className={status === 'sending' ? 'pointer-events-none opacity-70' : ''}>
                  {status === 'sending' ? (
                    <>
                      <span className="h-4 w-4 animate-spin rounded-full border-2 border-current border-t-transparent" />
                      Sending
                    </>
                  ) : (
                    <>
                      <Send size={17} />
                      Send message
                    </>
                  )}
                </LiquidButton>
              </div>
            </form>
          )}
        </motion.section>

        <aside className="lg:col-span-2">
          <div className="chip mb-4">
            <span className="status-dot" />
            Paris / Remote / Switzerland
          </div>
          <div className="grid gap-3">
            {contacts.map((contact, index) => {
              const Icon = contact.icon;
              const content = (
                <>
                  <div className={index % 2 === 0 ? 'icon-tile' : 'icon-tile icon-tile-secondary'}>
                    <Icon size={20} />
                  </div>
                  <div>
                    <p className="text-xs font-bold uppercase text-subtle">{contact.label}</p>
                    <p className="mt-1 break-words text-sm font-bold text-primary">{contact.value}</p>
                  </div>
                </>
              );

              if (contact.href) {
                return (
                  <a
                    key={contact.label}
                    href={contact.href}
                    target={contact.href.startsWith('http') ? '_blank' : undefined}
                    rel="noreferrer"
                    className="panel interactive-panel flex items-center gap-4 p-4"
                  >
                    {content}
                  </a>
                );
              }

              return (
                <div key={contact.label} className="panel flex items-center gap-4 p-4">
                  {content}
                </div>
              );
            })}
          </div>
        </aside>
      </div>
    </PageWrapper>
  );
}
