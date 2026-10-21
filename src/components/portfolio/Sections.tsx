import { useMemo, useState } from "react";
import {
  ArrowRight, ArrowUpRight, Briefcase, Code2, Database, Download, Github, GitBranch, Globe, Layers,
  Layout, Server, Sparkles, Wrench, Check, Cpu, Workflow, Rocket, ShieldCheck, Brain,
} from "lucide-react";
import portrait from "@/assets/3.jpg";
import { journey, profile, projects, services, skillGroups, type Project, type ProjectCategory } from "@/data/portfolio";
import { Reveal, SectionHeader } from "./Reveal";
import { scrollToId } from "./Nav";
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle } from "@/components/ui/dialog";

const icons = { Layout, Server, Database, Code2, GitBranch, Globe, Layers, Briefcase, Sparkles, Wrench } as const;
const ext = { target: "_blank", rel: "noopener noreferrer" } as const;

export function Hero() {
  return (
    <section id="home" className="relative overflow-hidden pt-28 pb-20 sm:pt-36 lg:pb-28">
      <div aria-hidden className="grid-bg pointer-events-none absolute inset-0" />
      <div aria-hidden className="pointer-events-none absolute -top-40 right-0 size-[36rem] rounded-full bg-[var(--glow)] blur-3xl" />
      <div className="relative mx-auto grid max-w-6xl items-center gap-14 px-5 lg:grid-cols-[1.15fr_0.85fr]">
        <div>
          <p className="rise mb-5 font-mono text-xs uppercase tracking-[0.25em] text-primary">Hello, I'm Robel</p>
          <h1 className="rise text-4xl font-extrabold leading-[1.08] tracking-tight text-balance sm:text-5xl lg:text-[3.5rem]" style={{ animationDelay: "80ms" }}>
            I Build <span className="text-primary">Digital Products</span> That Solve <span className="text-gold">Real Problems.</span>
          </h1>
          <p className="rise mt-6 font-semibold text-foreground" style={{ animationDelay: "160ms" }}>
            Full-Stack Software Developer <span className="text-muted-foreground">|</span> Founder of MD's Software Solutions
          </p>
          <p className="rise mt-3 max-w-xl text-lg text-muted-foreground text-pretty" style={{ animationDelay: "220ms" }}>
            From elegant user interfaces to powerful backend systems, I turn ideas into reliable digital experiences.
          </p>
          <div className="rise mt-9 flex flex-wrap gap-3" style={{ animationDelay: "300ms" }}>
            <button onClick={() => scrollToId("projects")} className="group inline-flex items-center gap-2 rounded-full bg-primary px-6 py-3.5 font-semibold text-primary-foreground transition hover:-translate-y-0.5 hover:shadow-xl">
              Explore My Work <ArrowRight className="size-4 transition group-hover:translate-x-0.5" />
            </button>
            <button onClick={() => scrollToId("contact")} className="inline-flex items-center gap-2 rounded-full border border-border bg-card/60 px-6 py-3.5 font-semibold transition hover:-translate-y-0.5 hover:border-primary">
              Let's Build Something
            </button>
            {profile.cvUrl ? (
              <a href={profile.cvUrl} download className="inline-flex items-center gap-2 rounded-full px-5 py-3.5 font-semibold text-muted-foreground hover:text-foreground">
                <Download className="size-4" /> Download CV
              </a>
            ) : (
              <button disabled title="CV coming soon" className="inline-flex cursor-not-allowed items-center gap-2 rounded-full px-5 py-3.5 font-semibold text-muted-foreground/60">
              
              </button>
            )}
          </div>
        </div>

        <div className="rise relative mx-auto w-full max-w-sm" style={{ animationDelay: "200ms" }}>
          <div className="absolute -inset-3 rounded-[2rem] border border-border" aria-hidden />
          <div className="relative overflow-hidden rounded-[1.75rem] bg-ink ring-1 ring-border">
            <img src={portrait} alt="Portrait of Robel Haftu" width={896} height={1120} fetchPriority="high" className="aspect-[4/5] w-full object-cover" />
            <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-ink via-ink/70 to-transparent p-5 pt-16">
              <div className="rounded-xl border border-ink-foreground/10 bg-ink/70 p-3.5 font-mono text-[11px] leading-relaxed text-ink-foreground/80 backdrop-blur">
                <span className="text-gold">const</span> robel = {"{"} role: <span className="text-primary">"full-stack"</span>, builds: <span className="text-primary">"real solutions"</span> {"}"};
              </div>
            </div>
          </div>
          <span className="absolute -left-4 top-10 hidden rounded-full border border-border bg-card px-3 py-1.5 text-xs font-semibold shadow-lg sm:block">React · Next.js</span>
          <span className="absolute -right-4 top-1/3 hidden rounded-full border border-border bg-card px-3 py-1.5 text-xs font-semibold shadow-lg sm:block">Node · Laravel</span>
        </div>
      </div>
    </section>
  );
}

export function About() {
  const points = [
    { icon: Layout, t: "Responsive, user-friendly interfaces" },
    { icon: Server, t: "Maintainable backends and REST APIs" },
    { icon: Database, t: "Database-driven management systems" },
    { icon: Brain, t: "AI-powered applications and automation" },
    { icon: Workflow, t: "Bridging technical work and business needs" },
  ];
  return (
    <section id="about" className="py-24">
      <div className="mx-auto grid max-w-6xl gap-14 px-5 lg:grid-cols-[0.8fr_1.2fr] lg:items-center">
        <Reveal className="mx-auto w-full max-w-xs lg:max-w-none">
          <div className="card-surface overflow-hidden p-2">
            <img src={portrait} alt="Robel Haftu" width={896} height={1120} loading="lazy" className="aspect-square w-full rounded-2xl object-cover object-top" />
          </div>
        </Reveal>
        <div>
          <SectionHeader eyebrow="About me" title="A Developer Who Thinks Beyond Code" />
          <Reveal>
            <p className="text-lg text-muted-foreground text-pretty">
              I'm Robel Haftu, a Full-Stack Software Developer and founder of <strong className="text-foreground">MD's Software Solutions</strong>. I design and build modern websites, scalable web applications, business management systems, and AI-powered solutions that solve real-world problems.
            </p>
            <p className="mt-4 text-muted-foreground">
              My work spans frontend development, backend engineering, database design, API integration and practical software — always starting from what the product needs to achieve.
            </p>
          </Reveal>
          <ul className="mt-8 grid gap-3 sm:grid-cols-2">
            {points.map((p, i) => (
              <Reveal key={p.t} delay={i * 60}>
                <li className="flex items-start gap-3 rounded-xl border border-border bg-card/50 p-4">
                  <p.icon className="mt-0.5 size-5 shrink-0 text-primary" />
                  <span className="text-sm font-medium">{p.t}</span>
                </li>
              </Reveal>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}

export function Skills() {
  return (
    <section id="skills" className="bg-secondary/50 py-24">
      <div className="mx-auto max-w-6xl px-5">
        <SectionHeader eyebrow="Technical skills" title="The stack I build with" intro="Grouped by where they fit in a product — from the interface to the data layer." />
        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {skillGroups.map((g, i) => {
            const Icon = icons[g.icon];
            return (
              <Reveal key={g.title} delay={i * 70} className={i === 4 ? "sm:col-span-2 lg:col-span-1" : ""}>
                <div className="card-surface group h-full p-6 transition hover:-translate-y-1 hover:border-primary/50">
                  <div className="mb-5 flex items-center gap-3">
                    <span className="grid size-10 place-items-center rounded-lg bg-primary/10 text-primary"><Icon className="size-5" /></span>
                    <h3 className="font-bold">{g.title}</h3>
                  </div>
                  <ul className="flex flex-wrap gap-2">
                    {g.items.map((s) => (
                      <li key={s} className="rounded-md border border-border bg-background/60 px-2.5 py-1 text-sm transition group-hover:border-primary/30">{s}</li>
                    ))}
                  </ul>
                </div>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}

function ProjectVisual({ p, large }: { p: Project; large?: boolean }) {
  if (p.image) return <img src={p.image} alt={`${p.title} screenshot`} loading="lazy" className="h-full w-full object-cover" />;
  const Icon = p.category === "AI Projects" ? ShieldCheck : p.category === "Business Systems" ? Cpu : Globe;
  let host = "";
  try { host = p.live ? new URL(p.live).hostname.replace("www.", "") : ""; } catch { host = ""; }
  return (
    <div className="relative flex h-full w-full flex-col bg-ink text-ink-foreground">
      <div className="flex items-center gap-1.5 border-b border-ink-foreground/10 px-3 py-2">
        <span className="size-2 rounded-full bg-ink-foreground/25" /><span className="size-2 rounded-full bg-ink-foreground/25" /><span className="size-2 rounded-full bg-ink-foreground/25" />
        <span className="ml-2 truncate font-mono text-[10px] text-ink-foreground/50">{host || p.id + ".project"}</span>
      </div>
      <div className="grid-bg absolute inset-0 top-7 opacity-40" aria-hidden />
      <div className="relative flex flex-1 flex-col items-center justify-center gap-3 p-6 text-center">
        <Icon className={`${large ? "size-12" : "size-9"} text-primary`} />
        <span className={`${large ? "text-2xl" : "text-lg"} font-bold tracking-tight`}>{p.title}</span>
        
      </div>
    </div>
  );
}

function ProjectLinks({ p }: { p: Project }) {
  return (
    <div className="flex flex-wrap gap-2">
      {p.live && (
        <a href={p.live} {...ext} className="inline-flex items-center gap-1.5 rounded-full bg-primary px-4 py-2 text-sm font-semibold text-primary-foreground transition hover:-translate-y-0.5">
          Live Demo <ArrowUpRight className="size-4" />
        </a>
      )}
      
    </div>
  );
}

export function Projects() {
  const filters: ("All" | ProjectCategory)[] = ["All", "Websites", "Business Systems", "AI Projects"];
  const [filter, setFilter] = useState<(typeof filters)[number]>("All");
  const [selected, setSelected] = useState<Project | null>(null);
  const list = useMemo(() => projects.filter((p) => filter === "All" || p.category === filter), [filter]);

  return (
    <section id="projects" className="py-24">
      <div className="mx-auto max-w-6xl px-5">
        <SectionHeader eyebrow="Featured projects" title="Selected work" intro="Live websites, business systems and AI exploration. Screenshots are placeholders until real ones are added." />
        <div role="group" aria-label="Filter projects" className="mb-10 flex flex-wrap gap-2">
          {filters.map((f) => (
            <button
              key={f}
              onClick={() => setFilter(f)}
              aria-pressed={filter === f}
              className={`rounded-full px-4 py-2 text-sm font-semibold transition ${filter === f ? "bg-foreground text-background" : "border border-border text-muted-foreground hover:text-foreground"}`}
            >
              {f}
            </button>
          ))}
        </div>
        <div className="grid gap-6 md:grid-cols-2">
          {list.map((p) => (
            <article key={p.id} className="card-surface group flex flex-col overflow-hidden transition duration-300 hover:-translate-y-1 hover:border-primary/40">
              <div className="aspect-[16/9] overflow-hidden border-b border-border transition duration-500 group-hover:[&>*]:scale-[1.02]">
                <ProjectVisual p={p} />
              </div>
              <div className="flex flex-1 flex-col p-6">
                <div className="mb-3 flex flex-wrap items-center gap-2">
                  <span className="font-mono text-[11px] uppercase tracking-widest text-primary">{p.category}</span>
                  {p.status && <span className="rounded-full bg-gold/15 px-2.5 py-0.5 text-[11px] font-semibold text-gold">{p.status}</span>}
                </div>
                <h3 className="text-xl font-bold">{p.title}</h3>
                <p className="mt-2 flex-1 text-sm text-muted-foreground">{p.description}</p>
                <ul className="mt-4 flex flex-wrap gap-1.5">
                  {p.tags.map((t) => <li key={t} className="rounded-md bg-muted px-2 py-0.5 text-xs font-medium">{t}</li>)}
                </ul>
                <div className="mt-5 flex flex-wrap items-center justify-between gap-3">
                  <ProjectLinks p={p} />
                  
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
      <Dialog open={!!selected} onOpenChange={(o) => !o && setSelected(null)}>
        <DialogContent className="max-h-[90vh] overflow-y-auto sm:max-w-2xl">
          {selected && (
            <>
              <div className="-mx-6 -mt-6 mb-2 aspect-[16/8] overflow-hidden rounded-t-lg"><ProjectVisual p={selected} large /></div>
              <DialogHeader>
                <p className="font-mono text-[11px] uppercase tracking-widest text-primary">{selected.category}</p>
                <DialogTitle className="text-2xl">{selected.title}</DialogTitle>
                <DialogDescription className="text-base">{selected.details}</DialogDescription>
              </DialogHeader>
              <div className="space-y-5">
                <div>
                  <h4 className="mb-1.5 text-sm font-bold uppercase tracking-wide">Background</h4>
                  <p className="text-sm text-muted-foreground">{selected.description}</p>
                </div>
                <div>
                  <h4 className="mb-1.5 text-sm font-bold uppercase tracking-wide">Key features</h4>
                  <ul className="space-y-1.5">
                    {selected.features.map((f) => (
                      <li key={f} className="flex gap-2 text-sm"><Check className="mt-0.5 size-4 shrink-0 text-primary" aria-hidden />{f}</li>
                    ))}
                  </ul>
                </div>
                <div>
                  <h4 className="mb-1.5 text-sm font-bold uppercase tracking-wide">Tech stack</h4>
                  {selected.stack?.length ? (
                    <ul className="flex flex-wrap gap-1.5">{selected.stack.map((t) => <li key={t} className="rounded-md bg-muted px-2 py-0.5 text-xs font-medium">{t}</li>)}</ul>
                  ) : (
                    <p className="text-sm text-muted-foreground">Stack details coming soon.</p>
                  )}
                </div>
                <div>
                  <h4 className="mb-1.5 text-sm font-bold uppercase tracking-wide">Status</h4>
                  <p className="text-sm font-semibold text-gold">{selected.status ?? (selected.live ? "Live" : "In progress")}</p>
                </div>
                <div>
                  <h4 className="mb-2 text-sm font-bold uppercase tracking-wide">Links</h4>
                  {selected.live || selected.repo ? null : <p className="text-sm text-muted-foreground">No public links yet.</p>}
              <ProjectLinks p={selected} />
                </div>
              </div>
            </>
          )}
        </DialogContent>
      </Dialog>
    </section>
  );
}

export function Experience() {
  return (
    <section id="experience" className="bg-secondary/50 py-24">
      <div className="mx-auto max-w-6xl px-5">
        <SectionHeader eyebrow="Experience & journey" title="Turning requirements into working products" intro="Project-based experience across websites, business systems and AI." />
        <ol className="relative ml-3 border-l border-border">
          {journey.map((j, i) => (
            <Reveal key={j.title} delay={i * 80}>
              <li className="relative mb-10 pl-8 last:mb-0">
                <span className="absolute -left-[7px] top-1.5 size-3.5 rounded-full border-2 border-background bg-primary ring-4 ring-primary/15" />
                <h3 className="text-lg font-bold">{j.title}</h3>
                <p className="text-sm font-semibold text-gold">{j.org}</p>
                <p className="mt-2 max-w-2xl text-muted-foreground">{j.text}</p>
              </li>
            </Reveal>
          ))}
        </ol>
      </div>
    </section>
  );
}

export function Services({ onPick }: { onPick: (s: string) => void }) {
  return (
    <section id="services" className="py-24">
      <div className="mx-auto max-w-6xl px-5">
        <SectionHeader eyebrow="Services" title="How I can help" />
        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((s, i) => {
            const Icon = icons[s.icon];
            return (
              <Reveal key={s.title} delay={i * 60}>
                <div className="card-surface flex h-full flex-col p-6 transition hover:-translate-y-1 hover:border-primary/40">
                  <Icon className="mb-4 size-6 text-primary" />
                  <h3 className="font-bold">{s.title}</h3>
                  <p className="mt-2 flex-1 text-sm text-muted-foreground">{s.description}</p>
                  <button onClick={() => onPick(s.title)} className="mt-5 inline-flex items-center gap-1 self-start text-sm font-semibold text-primary hover:underline">
                    Discuss This Project <ArrowRight className="size-4" />
                  </button>
                </div>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}

export function Founder({ onPick }: { onPick: (s: string) => void }) {
  return (
    <section id="founder" className="px-5 py-12">
      <Reveal className="mx-auto max-w-6xl">
        <div className="relative overflow-hidden rounded-3xl bg-ink p-8 text-ink-foreground ring-1 ring-gold/30 sm:p-14">
          <div aria-hidden className="pointer-events-none absolute -right-20 -top-20 size-80 rounded-full bg-gold/15 blur-3xl" />
          <div className="relative grid gap-10 lg:grid-cols-[1.3fr_1fr] lg:items-center">
            <div>
              <p className="font-mono text-xs uppercase tracking-[0.25em] text-gold">Founder</p>
              <h2 className="mt-3 text-3xl font-extrabold tracking-tight sm:text-4xl">MD's Software Solutions</h2>
              <p className="mt-3 text-xl font-semibold text-gold">Turning Ideas Into Real Solutions.</p>
              <p className="mt-5 max-w-xl text-ink-foreground/75">
                A software venture focused on building websites, custom software, business systems and digital solutions that help organizations work better.
              </p>
              <button onClick={() => onPick("Custom software with MD's Software Solutions")} className="mt-8 inline-flex items-center gap-2 rounded-full bg-gold px-6 py-3.5 font-semibold text-ink transition hover:-translate-y-0.5">
                <Rocket className="size-4" /> Discuss a Software Project
              </button>
            </div>
            <ul className="grid gap-3">
              {["Websites", "Custom software", "Business systems", "Digital solutions"].map((t) => (
                <li key={t} className="flex items-center gap-3 rounded-xl border border-gold/20 bg-ink-foreground/5 px-4 py-3">
                  <Check className="size-4 text-gold" /> <span className="font-medium">{t}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </Reveal>
    </section>
  );
}
