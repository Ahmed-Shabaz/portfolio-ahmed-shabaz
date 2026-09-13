import { createFileRoute } from "@tanstack/react-router";
import {
  ArrowDown,
  ArrowUpRight,
  Award,
  BriefcaseBusiness,
  Code2,
  Download,
  GraduationCap,
  Linkedin,
  Mail,
  MapPin,
  Terminal,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import resumeAsset from "@/assets/Shabaz_Ahmed_Automation_Engineer.pdf.asset.json";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Shabaz Ahmed | Automation Engineer Portfolio" },
      { name: "description", content: "Explore Shabaz Ahmed's automation engineering work across Python, Selenium, Flask, data pipelines, and computer vision." },
      { property: "og:title", content: "Shabaz Ahmed | Automation Engineer" },
      { property: "og:description", content: "Automation systems that reduce manual work, improve data accuracy, and keep operations moving." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Index,
});

const projects = [
  {
    number: "01",
    title: "AI Image Quality Classification",
    description: "A multithreaded desktop pipeline that detects blur, watermarks, shadows, low quality, and non-white backgrounds while logging results to Excel.",
    tools: ["Python", "YOLOv8", "OpenCV", "EasyOCR", "Tesseract"],
    impact: "Faster image validation",
  },
  {
    number: "02",
    title: "Daily Production Report System",
    description: "Role-based reporting across desktop and web, combining dynamic forms, attendance tracking, SQL processing, and automated Excel workflows.",
    tools: ["Flask", "SQLite", "Tkinter", "OpenPyXL"],
    impact: "85% reporting efficiency gain",
  },
  {
    number: "03",
    title: "Work Distribution System",
    description: "A synchronized production and QC workflow with dynamic database creation from Excel schemas and live file monitoring for data consistency.",
    tools: ["Python", "PostgreSQL", "Tkinter", "Excel"],
    impact: "Real-time team synchronization",
  },
  {
    number: "04",
    title: "Employee Management System",
    description: "A centralized platform for payroll, attendance, performance, salary slips, and employee records across a 150+ person organization.",
    tools: ["Python", "SQL", "OpenPyXL", "ReportLab"],
    impact: "60% HR efficiency gain",
  },
];

const skillGroups = [
  { label: "Core", items: ["Python", "JavaScript", "SQL", "HTML / CSS", "OOP"] },
  { label: "Automation", items: ["Selenium", "BeautifulSoup", "Pandas", "ETL", "Multithreading", "OpenPyXL"] },
  { label: "Web & Data", items: ["Flask", "Jinja2", "PostgreSQL", "MySQL", "SQLite", "SQLAlchemy"] },
  { label: "Vision & Tools", items: ["OpenCV", "YOLOv8", "EasyOCR", "Git", "GitHub", "Tkinter"] },
];

function Index() {
  return (
    <main className="min-h-screen overflow-hidden bg-background/95 text-foreground">
      <header className="fixed inset-x-0 top-0 z-50 border-b border-border bg-background/90 backdrop-blur-xl">
        <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-5 lg:px-8">
          <a href="#top" className="font-display text-lg font-bold text-foreground" aria-label="Shabaz Ahmed home">
            SA<span className="text-primary">.</span>
          </a>
          <nav className="hidden items-center gap-7 font-mono text-xs text-muted-foreground md:flex" aria-label="Main navigation">
            <a className="transition-colors hover:text-primary" href="#work">Work</a>
            <a className="transition-colors hover:text-primary" href="#experience">Experience</a>
            <a className="transition-colors hover:text-primary" href="#skills">Skills</a>
            <a className="transition-colors hover:text-primary" href="#contact">Contact</a>
          </nav>
          <Button asChild variant="outline" size="sm" className="border-primary/50 bg-background/50 text-primary hover:bg-primary hover:text-primary-foreground">
            <a href={resumeAsset.url} download="Shabaz_Ahmed_Automation_Engineer.pdf"><Download /> Resume</a>
          </Button>
        </div>
      </header>

      <section id="top" className="relative mx-auto flex min-h-[94vh] max-w-7xl flex-col justify-end px-5 pb-16 pt-32 lg:px-8 lg:pb-24">
        <div className="pointer-events-none absolute right-8 top-28 hidden font-mono text-[11px] leading-6 text-muted-foreground/40 lg:block" aria-hidden="true">
          <p>SYS.STATUS // ONLINE</p><p>LOCATION // MYSORE, IN</p><p>FOCUS // AUTOMATION</p>
        </div>
        <div className="mb-8 flex items-center gap-3 font-mono text-xs uppercase text-primary">
          <span className="h-2 w-2 rounded-full bg-primary shadow-[0_0_18px_var(--color-primary)]" /> Available for opportunities
        </div>
        <h1 className="max-w-6xl font-display text-6xl font-semibold leading-[0.9] sm:text-7xl lg:text-[8.5rem]">
          Shabaz<br /><span className="text-muted-foreground">Ahmed</span><span className="text-primary">.</span>
        </h1>
        <div className="mt-10 grid gap-8 border-t border-border pt-8 lg:grid-cols-[1fr_1.4fr]">
          <div>
            <p className="font-mono text-sm uppercase text-accent">Automation Engineer</p>
            <p className="mt-2 flex items-center gap-2 text-sm text-muted-foreground"><MapPin className="size-4" /> Mysore, Karnataka, India</p>
          </div>
          <div>
            <p className="max-w-2xl text-lg leading-8 text-muted-foreground sm:text-xl">
              I build reliable Python automation, data extraction systems, and computer vision workflows that turn repetitive operations into measurable results.
            </p>
            <div className="mt-7 flex flex-wrap gap-3">
              <Button asChild size="lg"><a href="#work">Explore my work <ArrowDown /></a></Button>
              <Button asChild size="lg" variant="outline"><a href="mailto:shabazmys7@gmail.com">Start a conversation <ArrowUpRight /></a></Button>
            </div>
          </div>
        </div>
      </section>

      <section className="border-y border-border bg-card/80">
        <div className="mx-auto grid max-w-7xl grid-cols-2 lg:grid-cols-4">
          {[["3+", "Years experience"], ["100+", "Websites automated"], ["70%", "Manual effort reduced"], ["99%", "Pipeline uptime"]].map(([value, label]) => (
            <div key={label} className="border-b border-r border-border p-6 last:border-r-0 sm:p-8 lg:border-b-0">
              <p className="font-display text-4xl font-semibold text-primary sm:text-5xl">{value}</p>
              <p className="mt-2 font-mono text-[11px] uppercase text-muted-foreground">{label}</p>
            </div>
          ))}
        </div>
      </section>

      <section id="work" className="mx-auto max-w-7xl px-5 py-24 lg:px-8 lg:py-32">
        <SectionHeading index="01" title="Selected systems" text="Practical engineering built around speed, accuracy, and operational continuity." />
        <div className="mt-14 grid gap-px border border-border bg-border md:grid-cols-2">
          {projects.map((project) => (
            <article key={project.number} className="group min-h-80 bg-card p-7 transition-colors hover:bg-secondary/80 sm:p-9">
              <div className="flex items-center justify-between font-mono text-xs text-muted-foreground">
                <span>PROJECT / {project.number}</span><ArrowUpRight className="size-5 transition-transform group-hover:-translate-y-1 group-hover:translate-x-1 group-hover:text-primary" />
              </div>
              <h2 className="mt-10 max-w-lg font-display text-2xl font-semibold sm:text-3xl">{project.title}</h2>
              <p className="mt-4 max-w-xl leading-7 text-muted-foreground">{project.description}</p>
              <div className="mt-7 flex flex-wrap gap-2">
                {project.tools.map((tool) => <span key={tool} className="border border-border bg-background px-2.5 py-1 font-mono text-[10px] uppercase text-muted-foreground">{tool}</span>)}
              </div>
              <p className="mt-6 border-l-2 border-primary pl-3 font-mono text-xs text-primary">{project.impact}</p>
            </article>
          ))}
        </div>
      </section>

      <section id="experience" className="border-y border-border bg-card/85 py-24 lg:py-32">
        <div className="mx-auto max-w-7xl px-5 lg:px-8">
          <SectionHeading index="02" title="Experience" text="Building production automation at the intersection of Python, data, and operations." />
          <div className="mt-14 grid gap-10 border-t border-border pt-10 lg:grid-cols-[0.7fr_1.3fr]">
            <div>
              <p className="section-kicker">Aug 2022 — Present</p>
              <h2 className="mt-4 font-display text-3xl font-semibold">Bluemind Solutions</h2>
              <p className="mt-2 text-muted-foreground">Automation Engineer</p>
            </div>
            <ul className="space-y-7 text-base leading-7 text-muted-foreground">
              <ExperienceItem text="Developed scalable Python automation pipelines for 100+ websites using Selenium, BeautifulSoup, Pandas, and headless browsers—cutting manual effort by 70%." />
              <ExperienceItem text="Engineered resilient extraction workflows with CAPTCHA handling, rate limiting, and anti-bot strategies, sustaining 99% uptime for critical pipelines." />
              <ExperienceItem text="Deployed Flask and SQL reporting workflows that cut report generation time by 45% and accelerated daily reporting by 75%." />
              <ExperienceItem text="Optimized large-scale file processing with multithreading, reducing processing time by 80%." />
            </ul>
          </div>
        </div>
      </section>

      <section id="skills" className="mx-auto max-w-7xl px-5 py-24 lg:px-8 lg:py-32">
        <SectionHeading index="03" title="Technical toolkit" text="A practical stack for automating browsers, data, documents, internal tools, and visual inspection." />
        <div className="mt-14 grid gap-px border border-border bg-border sm:grid-cols-2 lg:grid-cols-4">
          {skillGroups.map((group, index) => (
            <div key={group.label} className="bg-background p-7">
              <div className="flex items-center gap-3"><span className="font-mono text-xs text-primary">0{index + 1}</span><h3 className="font-display text-xl font-semibold">{group.label}</h3></div>
              <ul className="mt-7 space-y-3 text-sm text-muted-foreground">{group.items.map((skill) => <li key={skill} className="flex items-center gap-2"><span className="h-px w-3 bg-primary" />{skill}</li>)}</ul>
            </div>
          ))}
        </div>
      </section>

      <section className="border-y border-border bg-secondary/70 py-24">
        <div className="mx-auto grid max-w-7xl gap-12 px-5 lg:grid-cols-2 lg:px-8">
          <div className="border-l border-border pl-6">
            <GraduationCap className="size-7 text-primary" /><p className="mt-7 section-kicker">Education</p>
            <h2 className="mt-3 font-display text-2xl font-semibold">Bachelor of Engineering</h2>
            <p className="mt-2 text-muted-foreground">Mechanical Engineering · Maharaja Institute of Technology Mysore</p>
            <p className="mt-2 font-mono text-xs text-primary">2018—2022 / CGPA 8.07</p>
          </div>
          <div className="border-l border-border pl-6">
            <Award className="size-7 text-accent" /><p className="mt-7 section-kicker">Recognition</p>
            <h2 className="mt-3 font-display text-2xl font-semibold">Star of the Month</h2>
            <p className="mt-2 text-muted-foreground">Bluemind Solutions · November 2024</p>
            <p className="mt-4 text-sm text-muted-foreground">2nd Place, State-Level Inter-Collegiate Project Exhibition</p>
          </div>
        </div>
      </section>

      <section id="contact" className="mx-auto max-w-7xl px-5 py-24 lg:px-8 lg:py-32">
        <p className="section-kicker">04 / Let&apos;s connect</p>
        <h2 className="mt-7 max-w-4xl font-display text-5xl font-semibold leading-tight sm:text-7xl">Have a repetitive process? Let&apos;s automate it<span className="text-primary">.</span></h2>
        <div className="mt-12 flex flex-wrap gap-3">
          <Button asChild size="lg"><a href="mailto:shabazmys7@gmail.com"><Mail /> Email me</a></Button>
          <Button asChild variant="outline" size="lg"><a href="https://linkedin.com/in/shabaz-ahmed-1163a021a" target="_blank" rel="noreferrer"><Linkedin /> LinkedIn</a></Button>
        </div>
      </section>

      <footer className="border-t border-border bg-card/85">
        <div className="mx-auto flex max-w-7xl flex-col gap-3 px-5 py-7 font-mono text-[11px] uppercase text-muted-foreground sm:flex-row sm:items-center sm:justify-between lg:px-8">
          <span>© 2026 Shabaz Ahmed</span><span className="flex items-center gap-2"><Terminal className="size-3.5 text-primary" /> Designed for reliable execution</span>
        </div>
      </footer>
    </main>
  );
}

function SectionHeading({ index, title, text }: { index: string; title: string; text: string }) {
  return <div className="grid gap-6 lg:grid-cols-[1fr_1fr] lg:items-end"><div><p className="section-kicker">{index} / Portfolio</p><h2 className="mt-5 font-display text-4xl font-semibold sm:text-6xl">{title}<span className="text-primary">.</span></h2></div><p className="max-w-xl text-lg leading-8 text-muted-foreground">{text}</p></div>;
}

function ExperienceItem({ text }: { text: string }) {
  return <li className="grid grid-cols-[24px_1fr] gap-3"><Code2 className="mt-1 size-4 text-primary" /><span>{text}</span></li>;
}
