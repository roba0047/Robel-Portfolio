import { useEffect, useState } from "react";
import { z } from "zod";
import { toast } from "sonner";
import { Copy, Github, Mail, Phone, Send } from "lucide-react";
import { navItems, profile } from "@/data/portfolio";
import { Reveal, SectionHeader } from "./Reveal";
import { scrollToId } from "./Nav";

const schema = z.object({
  name: z.string().trim().min(1, "Please enter your full name").max(100),
  email: z.string().trim().min(1, "Please enter your email").email("Please enter a valid email address").max(255),
  subject: z.string().trim().min(1, "Please add a subject or project type").max(150),
  message: z.string().trim().min(10, "Message should be at least 10 characters").max(2000),
});
type Fields = z.infer<typeof schema>;

export function buildMailto(f: Fields) {
  const body = `${f.message}\n\n— ${f.name} (${f.email})`;
  return `mailto:${profile.email}?subject=${encodeURIComponent(f.subject)}&body=${encodeURIComponent(body)}`;
}

export function Contact({ prefill }: { prefill: string }) {
  const [f, setF] = useState<Fields>({ name: "", email: "", subject: "", message: "" });
  const [errors, setErrors] = useState<Partial<Record<keyof Fields, string>>>({});
  const [opened, setOpened] = useState(false);

  useEffect(() => {
    if (prefill) setF((p) => ({ ...p, subject: prefill }));
  }, [prefill]);

  const submit = (e: React.FormEvent) => {
    e.preventDefault();
    const r = schema.safeParse(f);
    if (!r.success) {
      const errs: typeof errors = {};
      r.error.issues.forEach((i) => (errs[i.path[0] as keyof Fields] ??= i.message));
      setErrors(errs);
      setOpened(false);
      return;
    }
    setErrors({});
    window.location.href = buildMailto(r.data);
    setOpened(true);
  };

  const copy = async () => {
    try {
      await navigator.clipboard.writeText(profile.email);
      toast.success("Email address copied");
    } catch {
      toast.error("Couldn't copy — please select the address manually");
    }
  };

  const field = "w-full rounded-xl border border-input bg-background px-4 py-3 text-base outline-none transition focus:border-primary focus:ring-2 focus:ring-ring/30";
  const Err = ({ k }: { k: keyof Fields }) => errors[k] ? <p id={`${k}-err`} className="mt-1.5 text-sm text-destructive">{errors[k]}</p> : null;

  return (
    <section id="contact" className="py-24">
      <div className="mx-auto max-w-6xl px-5">
        <SectionHeader eyebrow="Contact" title="Have an Idea? Let's Make It Real." intro="Tell me about your project — I'll get back to you by email." />
        <div className="grid gap-8 lg:grid-cols-[0.9fr_1.1fr]">
          <Reveal>
            <div className="card-surface h-full p-7">
              <h3 className="text-xl font-bold">{profile.name}</h3>
              <p className="mt-1 text-sm text-muted-foreground">Full-Stack Software Developer and Founder of MD's Software Solutions</p>
              <div className="mt-7 space-y-3">
                <div className="flex items-center gap-2">
                  <a href={`mailto:${profile.email}`} className="flex min-w-0 flex-1 items-center gap-3 rounded-xl border border-border p-4 transition hover:border-primary">
                    <Mail className="size-5 shrink-0 text-primary" /><span className="truncate font-medium">{profile.email}</span>
                  </a>
                  <button onClick={copy} aria-label="Copy email address" className="grid size-14 shrink-0 place-items-center rounded-xl border border-border transition hover:border-primary hover:text-primary">
                    <Copy className="size-5" />
                  </button>
                </div>
                <a
  href="https://wa.me/251979120275"
  target="_blank"
  rel="noopener noreferrer"
  className="flex items-center gap-3 rounded-xl border border-border p-4 transition hover:border-primary"
>
  <Phone className="size-5 text-primary" />
  <span className="font-medium">{profile.phone}</span>
</a>
                <a href={profile.github} target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 rounded-xl border border-border p-4 transition hover:border-primary">
                  <Github className="size-5 text-primary" /><span className="font-medium">github.com/roba0047</span>
                </a>
                <a
  href="https://t.me/robin0394"
  target="_blank"
  rel="noopener noreferrer"
  className="flex items-center gap-3 rounded-xl border border-border p-4 transition hover:border-primary"
>
  <Send className="size-5 text-primary" />
  <span className="font-medium">t.me/robin0394</span>
</a>
              </div>
            </div>
          </Reveal>
          <Reveal delay={100}>
            <form onSubmit={submit} noValidate className="card-surface space-y-5 p-7">
              <div className="grid gap-5 sm:grid-cols-2">
                <div>
                  <label htmlFor="name" className="mb-1.5 block text-sm font-semibold">Full name</label>
                  <input id="name" autoComplete="name" className={field} value={f.name} onChange={(e) => setF({ ...f, name: e.target.value })} aria-invalid={!!errors.name} aria-describedby={errors.name ? "name-err" : undefined} />
                  <Err k="name" />
                </div>
                <div>
                  <label htmlFor="email" className="mb-1.5 block text-sm font-semibold">Email address</label>
                  <input id="email" type="email" autoComplete="email" className={field} value={f.email} onChange={(e) => setF({ ...f, email: e.target.value })} aria-invalid={!!errors.email} aria-describedby={errors.email ? "email-err" : undefined} />
                  <Err k="email" />
                </div>
                
<div>
  <label htmlFor="phone" className="mb-1.5 block text-sm font-semibold">
    Phone Number
  </label>
  <input
    id="phone"
    type="tel"
    autoComplete="tel"
    placeholder="+251 9XX XXX XXX"
    className={field}
    value={f.phone}
    onChange={(e) => setF({ ...f, phone: e.target.value })}
    aria-invalid={!!errors.phone}
    aria-describedby={errors.phone ? "phone-err" : undefined}
  />
  <Err k="phone" />
</div>

              </div>
              <div>
                <label htmlFor="subject" className="mb-1.5 block text-sm font-semibold">Subject or project type</label>
                <input id="subject" className={field} value={f.subject} onChange={(e) => setF({ ...f, subject: e.target.value })} aria-invalid={!!errors.subject} aria-describedby={errors.subject ? "subject-err" : undefined} />
                <Err k="subject" />
              </div>
              <div>
                <label htmlFor="message" className="mb-1.5 block text-sm font-semibold">Message</label>
                <textarea id="message" rows={5} className={field} value={f.message} onChange={(e) => setF({ ...f, message: e.target.value })} aria-invalid={!!errors.message} aria-describedby={errors.message ? "message-err" : undefined} />
                <Err k="message" />
              </div>
              
<button
  type="submit"
  className="inline-flex w-full items-center justify-center gap-2 rounded-full bg-primary px-6 py-3.5 font-semibold text-primary-foreground transition hover:-translate-y-0.5 sm:w-auto"
>
  <Send className="size-4" />
  Send via Telegram
</button>

<p className="text-xs text-muted-foreground" role="status" aria-live="polite">
  Fill in all fields to contact Robel directly via Telegram.
</p>

            </form>
          </Reveal>
        </div>
      </div>
    </section>
  );
}

export function Footer() {
  return (
    
<footer className="relative overflow-hidden border-t border-gold/20 bg-background">
  {/* Decorative top accent */}
  <div className="h-px w-full bg-gradient-to-r from-transparent via-gold to-transparent" />

  <div className="mx-auto max-w-6xl px-5">
    {/* Main footer */}
    <div className="grid gap-12 py-14 md:grid-cols-2 lg:grid-cols-4">

      {/* Brand */}
      <div className="lg:col-span-2">
        <a href="#home" className="inline-flex items-center gap-3">
          <span className="flex size-12 items-center justify-center rounded-xl border border-gold/30 bg-ink text-lg font-extrabold text-primary">
            R<span className="text-gold">H</span>
          </span>
          <span>
            <span className="block text-lg font-bold tracking-tight">
              {profile.name}
            </span>
            <span className="text-[10px] uppercase tracking-[0.25em] text-gold">
              Full-Stack Developer
            </span>
          </span>
        </a>

        <p className="mt-5 max-w-sm text-sm leading-7 text-muted-foreground">
          Turning ideas into powerful digital experiences through clean code,
          thoughtful design, and innovative technology.
        </p>

       
<p className="mt-5 text-sm italic tracking-wide text-gold">
  “Well done is better than well said.”
</p>

      </div>

      {/* Navigation */}
      <div>
        <h3 className="mb-5 text-xs font-bold uppercase tracking-[0.2em]">
          Explore
        </h3>
        <nav aria-label="Footer navigation">
          <ul className="space-y-3">
            {navItems.map((n) => (
              <li key={n.id}>
                <a
                  href={`#${n.id}`}
                  onClick={(e) => {
                    e.preventDefault();
                    scrollToId(n.id);
                  }}
                  className="group inline-flex items-center gap-2 text-sm text-muted-foreground transition-colors hover:text-gold"
                >
                  <span className="h-px w-0 bg-gold transition-all group-hover:w-4" />
                  {n.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>
      </div>

      {/* Contact */}
      <div>
        <h3 className="mb-5 text-xs font-bold uppercase tracking-[0.2em]">
          Let's Connect
        </h3>

        <div className="space-y-4">
          <a
            href={`mailto:${profile.email}`}
            className="flex items-center gap-3 text-sm text-muted-foreground transition-colors hover:text-gold"
          >
            <span className="flex size-9 items-center justify-center rounded-lg border border-border">
              <Mail className="size-4" />
            </span>
            <span className="break-all">{profile.email}</span>
          </a>

          <a
            href={profile.github}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-3 text-sm text-muted-foreground transition-colors hover:text-gold"
          >
            <span className="flex size-9 items-center justify-center rounded-lg border border-border">
              <Github className="size-4" />
            </span>
            GitHub Profile
          </a>

          <a
            href="https://t.me/robin0394"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-3 text-sm text-muted-foreground transition-colors hover:text-gold"
          >
            <span className="flex size-9 items-center justify-center rounded-lg border border-border">
              <Send className="size-4" />
            </span>
            Telegram
          </a>

          <a
            href="https://wa.me/251979120275"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-3 text-sm text-muted-foreground transition-colors hover:text-gold"
          >
            <span className="flex size-9 items-center justify-center rounded-lg border border-border">
              <Phone className="size-4" />
            </span>
            WhatsApp
          </a>
        </div>
      </div>
    </div>

    {/* Bottom bar */}
    <div className="flex flex-col gap-4 border-t border-border py-6 text-xs text-muted-foreground sm:flex-row sm:items-center sm:justify-between">
      <p>
        © {new Date().getFullYear()} {profile.name}. All rights reserved.
      </p>
      
    </div>
  </div>
</footer>

  );
}
