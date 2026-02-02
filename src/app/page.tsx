"use client";

import ThemeToggle from "@/components/ThemeToggle";
import Link from "next/link";
import RevealOnScroll from "@/components/animations/RevealOnScroll";
import TextScramble from "@/components/animations/TextScramble";
import AuroraBackground from "@/components/animations/AuroraBackground";
import AnimatedCounter from "@/components/animations/AnimatedCounter";
import StaggerChildren, { StaggerItem } from "@/components/animations/StaggerChildren";
import MagneticButton from "@/components/animations/MagneticButton";
import PageTransition from "@/components/animations/PageTransition";

const techStack = {
  Frontend: ["React", "Next.js", "Electron", "Tailwind CSS"],
  Backend: ["NestJS", "FastAPI", "Node.js"],
  "AI / ML": ["LangChain", "LangGraph", "Langfuse"],
  Infra: ["AWS", "GCP", "Kubernetes", "Cloudflare", "Jenkins", "Grafana"],
  Database: ["MongoDB", "Supabase", "PostgreSQL", "Redis"],
  Languages: ["C/C++"],
};

const experiences = [
  {
    year: "2026",
    title: "desk of einstein",
    role: "Co-founder",
    description:
      "Building an infinite whiteboard-based workspace where all your thinking — tabs, AI chats, notes — lives in one spatial canvas.",
    href: "/experience/doe",
  },
  {
    year: "2025",
    title: "mefriend.ai",
    role: "Co-founder",
    description:
      "YouTube of AI Characters — a UGC platform where anyone can create, share, and talk to AI personas. 300K+ users in 5 months.",
    href: "/experience/mefriend",
  },
  {
    year: "2024",
    title: "naly.ai",
    role: "Co-founder",
    description:
      "An AI companion speaker with a ferrofluid-based living interface. Custom hardware with Qualcomm QCS405, embedded Linux, on-device inference.",
    href: "/experience/naly",
  },
];

export default function Home() {
  return (
    <PageTransition>
      <main className="min-h-screen">
        {/* Navigation */}
        <nav className="fixed top-0 left-0 right-0 z-50 backdrop-blur-md bg-[var(--background)]/80 border-b border-[var(--border)]">
          <div className="max-w-5xl mx-auto px-6 h-14 flex items-center justify-between">
            <span className="font-semibold text-sm tracking-tight">BSK</span>
            <div className="flex items-center gap-6">
              <a href="#about" className="text-sm text-[var(--muted)] hover:text-[var(--foreground)] transition-colors">
                About
              </a>
              <a href="#experience" className="text-sm text-[var(--muted)] hover:text-[var(--foreground)] transition-colors">
                Work
              </a>
              <a
                href="mailto:matthewkim20122012@gmail.com"
                className="text-sm text-[var(--muted)] hover:text-[var(--foreground)] transition-colors"
              >
                Resume
              </a>
              <ThemeToggle />
            </div>
          </div>
        </nav>

        {/* Hero Section */}
        <AuroraBackground className="pt-32 pb-20 px-6">
          <div className="max-w-5xl mx-auto">
            <div className="flex flex-col md:flex-row items-start gap-8">
              <div className="flex-1">
                <RevealOnScroll>
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-12 h-12 rounded-full bg-gradient-to-br from-blue-500 to-purple-600 flex items-center justify-center text-white font-bold text-lg">
                      B
                    </div>
                    <div>
                      <h1 className="text-lg font-semibold">BeomSeok Kim</h1>
                      <p className="text-sm text-[var(--muted)]">Founder & Lead Engineer</p>
                    </div>
                  </div>
                </RevealOnScroll>
                <RevealOnScroll delay={0.1}>
                  <h2 className="text-3xl md:text-4xl font-bold leading-tight mt-6 mb-4">
                    <TextScramble text="Building" delay={300} />{" "}
                    <span className="text-[var(--accent)]">
                      <TextScramble text="doe" delay={500} />
                    </span>{" "}
                    &{" "}
                    <span className="text-[var(--accent)]">
                      <TextScramble text="mefriend" delay={700} />
                    </span>
                  </h2>
                </RevealOnScroll>
                <RevealOnScroll delay={0.2}>
                  <p className="text-[var(--muted)] text-lg leading-relaxed max-w-xl mb-8">
                    Full-stack engineer and entrepreneur building scalable systems,
                    real-time distributed architectures, and AI-powered experiences.
                  </p>
                </RevealOnScroll>
                <RevealOnScroll delay={0.3}>
                  <div className="flex items-center gap-4">
                    <MagneticButton
                      as="a"
                      href="#experience"
                      className="px-5 py-2.5 bg-[var(--foreground)] text-[var(--background)] rounded-lg text-sm font-medium hover:opacity-90 transition-opacity cta-shine"
                    >
                      View Work
                    </MagneticButton>
                    <MagneticButton
                      as="a"
                      href="mailto:matthewkim20122012@gmail.com"
                      className="px-5 py-2.5 border border-[var(--border)] rounded-lg text-sm font-medium hover:bg-[var(--card)] transition-colors"
                    >
                      Get in Touch
                    </MagneticButton>
                  </div>
                </RevealOnScroll>
              </div>
            </div>

            {/* Stats */}
            <RevealOnScroll delay={0.4}>
              <div className="grid grid-cols-3 gap-6 mt-16 pt-8 border-t border-[var(--border)]">
                <div>
                  <p className="text-2xl md:text-3xl font-bold">
                    $<AnimatedCounter value="350K+" />
                  </p>
                  <p className="text-sm text-[var(--muted)] mt-1">Funding</p>
                </div>
                <div>
                  <p className="text-2xl md:text-3xl font-bold">
                    <AnimatedCounter value="300K+" />
                  </p>
                  <p className="text-sm text-[var(--muted)] mt-1">Users</p>
                </div>
                <div>
                  <p className="text-2xl md:text-3xl font-bold">
                    <AnimatedCounter value="3" />
                  </p>
                  <p className="text-sm text-[var(--muted)] mt-1">Ventures</p>
                </div>
              </div>
            </RevealOnScroll>
          </div>
        </AuroraBackground>

        {/* About Section */}
        <section id="about" className="py-20 px-6">
          <div className="max-w-5xl mx-auto">
            <RevealOnScroll>
              <h3 className="text-xs font-semibold uppercase tracking-widest text-[var(--muted)] mb-8">
                About
              </h3>
            </RevealOnScroll>
            <div className="grid md:grid-cols-2 gap-12">
              <RevealOnScroll delay={0.1}>
                <div>
                  <p className="text-[var(--muted)] leading-relaxed">
                    I&apos;m a full-stack engineer and serial entrepreneur based in Seoul, Korea.
                    Currently building <strong className="text-[var(--foreground)]">desk of einstein</strong> — a spatial workspace for messy minds,
                    and scaling <strong className="text-[var(--foreground)]">mefriend.ai</strong> — an AI character platform with 300K+ global users.
                  </p>
                  <p className="text-[var(--muted)] leading-relaxed mt-4">
                    Previously, I built <strong className="text-[var(--foreground)]">naly.ai</strong>, an AI companion speaker
                    with custom hardware, before pivoting to software to ship faster.
                  </p>
                </div>
              </RevealOnScroll>
              <RevealOnScroll delay={0.2}>
                <div>
                  <p className="text-[var(--muted)] leading-relaxed">
                    I care about shipping fast, building systems that scale,
                    and creating products that people actually want to use.
                    From custom PCBs to distributed backends to AI agents — I go deep wherever the problem leads.
                  </p>
                  <div className="mt-6 space-y-2">
                    <div className="flex items-center gap-3 text-sm">
                      <span className="text-[var(--muted)]">Location</span>
                      <span>Seoul, Korea</span>
                    </div>
                    <div className="flex items-center gap-3 text-sm">
                      <span className="text-[var(--muted)]">Education</span>
                      <span>Sungkyunkwan Univ. — B.S. EE (4.29/4.5)</span>
                    </div>
                  </div>
                </div>
              </RevealOnScroll>
            </div>
          </div>
        </section>

        {/* Arsenal / Tech Stack Section */}
        <section className="py-20 px-6 bg-[var(--card)]">
          <div className="max-w-5xl mx-auto">
            <RevealOnScroll>
              <h3 className="text-xs font-semibold uppercase tracking-widest text-[var(--muted)] mb-8">
                My Arsenal
              </h3>
            </RevealOnScroll>
            <StaggerChildren className="grid grid-cols-2 md:grid-cols-3 gap-8">
              {Object.entries(techStack).map(([category, techs]) => (
                <StaggerItem key={category}>
                  <div>
                    <h4 className="text-sm font-semibold mb-3">{category}</h4>
                    <div className="flex flex-wrap gap-2">
                      {techs.map((tech) => (
                        <span key={tech} className="tech-tag">
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                </StaggerItem>
              ))}
            </StaggerChildren>
          </div>
        </section>

        {/* Experience Section */}
        <section id="experience" className="py-20 px-6">
          <div className="max-w-5xl mx-auto">
            <RevealOnScroll>
              <h3 className="text-xs font-semibold uppercase tracking-widest text-[var(--muted)] mb-12">
                Selected Work
              </h3>
            </RevealOnScroll>
            <div className="space-y-0">
              {experiences.map((exp, i) => (
                <RevealOnScroll key={i} delay={i * 0.1}>
                  <Link
                    href={exp.href}
                    className="experience-card group block border-t border-[var(--border)] py-8 hover:bg-[var(--card)] -mx-6 px-6 transition-colors"
                  >
                    <div className="flex flex-col md:flex-row md:items-start gap-4">
                      <span className="text-sm text-[var(--muted)] font-mono md:w-20 shrink-0">
                        {exp.year}
                      </span>
                      <div className="flex-1">
                        <div className="flex items-center gap-3 mb-2">
                          <h4 className="text-lg font-semibold group-hover:text-[var(--accent)] transition-colors">
                            {exp.title}
                          </h4>
                          <span className="text-xs text-[var(--muted)] border border-[var(--border)] px-2 py-0.5 rounded">
                            {exp.role}
                          </span>
                        </div>
                        <p className="text-[var(--muted)] text-sm leading-relaxed">
                          {exp.description}
                        </p>
                      </div>
                      <svg
                        className="w-5 h-5 text-[var(--muted)] group-hover:text-[var(--foreground)] group-hover:translate-x-1 transition-all shrink-0 mt-1"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        strokeWidth={2}
                      >
                        <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
                      </svg>
                    </div>
                  </Link>
                </RevealOnScroll>
              ))}
              <div className="border-t border-[var(--border)]" />
            </div>
          </div>
        </section>

        {/* Education Section */}
        <section className="py-20 px-6 bg-[var(--card)]">
          <div className="max-w-5xl mx-auto">
            <RevealOnScroll>
              <h3 className="text-xs font-semibold uppercase tracking-widest text-[var(--muted)] mb-8">
                Education
              </h3>
            </RevealOnScroll>
            <RevealOnScroll delay={0.1}>
              <div>
                <h4 className="text-lg font-semibold">Sungkyunkwan University</h4>
                <p className="text-[var(--muted)] text-sm mt-1">
                  B.S. Electronic & Electrical Engineering
                </p>
                <p className="text-sm mt-1">GPA: 4.29 / 4.5</p>
              </div>
            </RevealOnScroll>
          </div>
        </section>

        {/* Contact / Footer */}
        <footer className="py-20 px-6 border-t border-[var(--border)]">
          <div className="max-w-5xl mx-auto">
            <RevealOnScroll>
              <h3 className="text-xs font-semibold uppercase tracking-widest text-[var(--muted)] mb-8">
                Contact
              </h3>
            </RevealOnScroll>
            <RevealOnScroll delay={0.1}>
              <div className="flex flex-col md:flex-row gap-8">
                <a
                  href="mailto:matthewkim20122012@gmail.com"
                  className="text-[var(--muted)] hover:text-[var(--foreground)] transition-colors text-sm"
                >
                  matthewkim20122012@gmail.com
                </a>
                <a
                  href="https://github.com/matt1398"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[var(--muted)] hover:text-[var(--foreground)] transition-colors text-sm"
                >
                  GitHub
                </a>
                <span className="text-[var(--muted)] text-sm">010-5341-1441</span>
              </div>
            </RevealOnScroll>
            <RevealOnScroll delay={0.2}>
              <p className="text-xs text-[var(--muted)] mt-12">
                Seoul, Korea
              </p>
            </RevealOnScroll>
          </div>
        </footer>
      </main>
    </PageTransition>
  );
}
