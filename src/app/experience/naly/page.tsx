import Link from "next/link";
import ThemeToggle from "@/components/ThemeToggle";

export default function NalyPage() {
  return (
    <main className="min-h-screen">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 backdrop-blur-md bg-[var(--background)]/80 border-b border-[var(--border)]">
        <div className="max-w-3xl mx-auto px-6 h-14 flex items-center justify-between">
          <Link
            href="/#experience"
            className="text-sm text-[var(--muted)] hover:text-[var(--foreground)] transition-colors flex items-center gap-2"
          >
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M15 18l-6-6 6-6" />
            </svg>
            Back
          </Link>
          <ThemeToggle />
        </div>
      </nav>

      <article className="pt-28 pb-20 px-6">
        <div className="max-w-3xl mx-auto">
          {/* Header */}
          <header className="mb-16">
            <p className="text-sm text-[var(--muted)] font-mono mb-3">2024</p>
            <h1 className="text-3xl md:text-4xl font-bold mb-4">naly.ai</h1>
            <p className="text-xl text-[var(--muted)] leading-relaxed">
              An AI companion that feels alive — not mechanical.
            </p>
          </header>

          {/* Section 01 - The Result */}
          <section className="mb-16">
            <p className="text-xs font-semibold uppercase tracking-widest text-[var(--muted)] mb-4">
              01 — The Result
            </p>
            <div className="rounded-xl overflow-hidden border border-[var(--border)] bg-[var(--card)]">
              <div className="aspect-video bg-gradient-to-br from-purple-900/20 to-pink-900/20 flex items-center justify-center">
                <div className="text-center">
                  <div className="w-20 h-20 mx-auto mb-4 rounded-full bg-gradient-to-br from-purple-500 to-pink-500 flex items-center justify-center">
                    <svg width="32" height="32" viewBox="0 0 24 24" fill="white">
                      <polygon points="5 3 19 12 5 21 5 3" />
                    </svg>
                  </div>
                  <p className="text-[var(--muted)] text-sm">
                    Naly MVP: Ferrofluid visualization reacting to AI voice
                  </p>
                </div>
              </div>
            </div>
          </section>

          {/* Section 02 - The Mission */}
          <section className="mb-16">
            <p className="text-xs font-semibold uppercase tracking-widest text-[var(--muted)] mb-4">
              02 — The Mission
            </p>
            <h2 className="text-2xl font-bold mb-6">
              Making AI feel alive
            </h2>
            <p className="text-[var(--muted)] leading-relaxed mb-8">
              2024 was the year of AI hardware — Rabbit R1, Friend, Humane AI Pin.
              Everyone was building AI devices. We wanted to build one that felt fundamentally
              different: an AI companion with a living, breathing interface.
            </p>

            <div className="grid md:grid-cols-3 gap-6">
              <div className="p-6 rounded-xl border border-[var(--border)] bg-[var(--card)]">
                <h3 className="font-semibold mb-2">Alive Interface</h3>
                <p className="text-sm text-[var(--muted)]">
                  Ferrofluid visualization responding to voice — creating an organic,
                  living visual language.
                </p>
              </div>
              <div className="p-6 rounded-xl border border-[var(--border)] bg-[var(--card)]">
                <h3 className="font-semibold mb-2">Proactive AI</h3>
                <p className="text-sm text-[var(--muted)]">
                  LLM-based agent that initiates conversations, not just responds.
                  Context-aware and emotionally intelligent.
                </p>
              </div>
              <div className="p-6 rounded-xl border border-[var(--border)] bg-[var(--card)]">
                <h3 className="font-semibold mb-2">Deep Tech</h3>
                <p className="text-sm text-[var(--muted)]">
                  Custom PCB with Qualcomm QCS405, embedded Linux,
                  on-device inference.
                </p>
              </div>
            </div>

            {/* Product Images */}
            <div className="grid md:grid-cols-2 gap-6 mt-8">
              <div className="rounded-xl overflow-hidden border border-[var(--border)] bg-[var(--card)] aspect-square flex items-center justify-center">
                <div className="text-center p-8">
                  <div className="w-32 h-32 mx-auto mb-4 rounded-full border-4 border-[var(--border)] bg-gradient-to-b from-gray-800 to-gray-900 flex items-center justify-center">
                    <div className="w-16 h-16 rounded-full bg-gradient-to-br from-purple-500 to-blue-500 animate-pulse" />
                  </div>
                  <p className="text-xs text-[var(--muted)]">Transparent enclosure with ferrofluid chamber</p>
                </div>
              </div>
              <div className="rounded-xl overflow-hidden border border-[var(--border)] bg-[var(--card)] aspect-square flex items-center justify-center">
                <div className="text-center p-8">
                  <div className="space-y-3">
                    <div className="flex items-center gap-3 text-xs text-[var(--muted)]">
                      <div className="w-3 h-3 rounded-full bg-purple-500" />
                      Ferrofluid Chamber
                    </div>
                    <div className="flex items-center gap-3 text-xs text-[var(--muted)]">
                      <div className="w-3 h-3 rounded-full bg-blue-500" />
                      Electromagnet Array
                    </div>
                    <div className="flex items-center gap-3 text-xs text-[var(--muted)]">
                      <div className="w-3 h-3 rounded-full bg-green-500" />
                      Custom PCB (QCS405)
                    </div>
                    <div className="flex items-center gap-3 text-xs text-[var(--muted)]">
                      <div className="w-3 h-3 rounded-full bg-yellow-500" />
                      Speaker Assembly
                    </div>
                    <div className="flex items-center gap-3 text-xs text-[var(--muted)]">
                      <div className="w-3 h-3 rounded-full bg-red-500" />
                      Microphone Array
                    </div>
                    <div className="flex items-center gap-3 text-xs text-[var(--muted)]">
                      <div className="w-3 h-3 rounded-full bg-orange-500" />
                      Power Management
                    </div>
                  </div>
                  <p className="text-xs text-[var(--muted)] mt-6">Exploded view — Internal architecture</p>
                </div>
              </div>
            </div>
          </section>

          {/* Section 03 - The Journey */}
          <section className="mb-16">
            <p className="text-xs font-semibold uppercase tracking-widest text-[var(--muted)] mb-4">
              03 — The Journey
            </p>
            <h2 className="text-2xl font-bold mb-6">
              10 months of building
            </h2>

            {/* Pre-launch Stats */}
            <div className="grid grid-cols-2 gap-6 mb-8 p-6 rounded-xl border border-[var(--border)] bg-[var(--card)]">
              <div className="text-center">
                <p className="text-2xl font-bold">₩8M</p>
                <p className="text-xs text-[var(--muted)] mt-1">Pre-orders</p>
              </div>
              <div className="text-center">
                <p className="text-2xl font-bold">25K+</p>
                <p className="text-xs text-[var(--muted)] mt-1">Demo video views</p>
              </div>
            </div>

            {/* Timeline */}
            <div className="space-y-8">
              <div className="relative pl-8 border-l-2 border-[var(--border)]">
                <div className="absolute left-[-9px] top-0 w-4 h-4 rounded-full bg-[var(--foreground)]" />
                <p className="text-sm font-semibold mb-1">Phase 01 — Jan–Apr 2024</p>
                <p className="text-xs text-[var(--muted)] mb-2">Hardware Foundations</p>
                <p className="text-sm text-[var(--muted)]">
                  Self-taught embedded systems. Built custom PCB using EasyEDA & KiCad.
                  Constructed a DIY reflow soldering station.
                </p>
              </div>
              <div className="relative pl-8 border-l-2 border-[var(--border)]">
                <div className="absolute left-[-9px] top-0 w-4 h-4 rounded-full bg-[var(--foreground)]" />
                <p className="text-sm font-semibold mb-1">Phase 02 — May–Jul 2024</p>
                <p className="text-xs text-[var(--muted)] mb-2">On-Device AI</p>
                <p className="text-sm text-[var(--muted)]">
                  TinyML wake-word detection. Secured office space and ₩10M grant.
                  First working prototype with ferrofluid response.
                </p>
              </div>
              <div className="relative pl-8 border-l-2 border-[var(--border)]">
                <div className="absolute left-[-9px] top-0 w-4 h-4 rounded-full bg-[var(--foreground)]" />
                <p className="text-sm font-semibold mb-1">Phase 03 — Aug–Oct 2024</p>
                <p className="text-xs text-[var(--muted)] mb-2">Competition & Reality</p>
                <p className="text-sm text-[var(--muted)]">
                  Won SKKU competition (₩10M prize). Paused before Kickstarter launch
                  due to broken unit economics.
                </p>
              </div>
            </div>

            {/* Funding */}
            <div className="mt-8 p-6 rounded-xl border border-[var(--border)] bg-[var(--card)] text-center">
              <p className="text-sm text-[var(--muted)]">Total Funding Raised</p>
              <p className="text-3xl font-bold mt-2">~₩100M (~$80K USD)</p>
            </div>
          </section>

          {/* Section 04 - The Reality */}
          <section className="mb-16">
            <p className="text-xs font-semibold uppercase tracking-widest text-[var(--muted)] mb-4">
              04 — The Reality
            </p>
            <h2 className="text-2xl font-bold mb-6">
              Three hard truths
            </h2>
            <div className="space-y-6">
              <div className="p-6 rounded-xl border border-[var(--border)] bg-[var(--card)]">
                <h3 className="font-semibold mb-2">Hard Tech Complexity</h3>
                <p className="text-sm text-[var(--muted)]">
                  Noise cancellation, durability testing, manufacturing optimization —
                  each problem spawned three more. Hardware doesn&apos;t forgive shortcuts.
                </p>
              </div>
              <div className="p-6 rounded-xl border border-[var(--border)] bg-[var(--card)]">
                <h3 className="font-semibold mb-2">Broken Unit Economics</h3>
                <p className="text-sm text-[var(--muted)]">
                  High component costs, unsustainable AI operational expenses.
                  The math didn&apos;t work at any reasonable price point.
                </p>
              </div>
              <div className="p-6 rounded-xl border border-[var(--border)] bg-[var(--card)]">
                <h3 className="font-semibold mb-2">Time-to-Market</h3>
                <p className="text-sm text-[var(--muted)]">
                  Hardware development cycles are measured in months.
                  Software iterations happen in days. In a fast-moving AI landscape,
                  speed is survival.
                </p>
              </div>
            </div>
          </section>

          {/* Tech Stack */}
          <section className="mb-16">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              {[
                { category: "Embedded", techs: ["Yocto Linux"] },
                { category: "AI", techs: ["TensorFlow", "ONNX"] },
                { category: "Infra", techs: ["AWS IoT Core"] },
                { category: "Hardware", techs: ["EasyEDA", "KiCad"] },
              ].map((group) => (
                <div key={group.category}>
                  <h4 className="text-sm font-semibold mb-3">{group.category}</h4>
                  <div className="flex flex-wrap gap-2">
                    {group.techs.map((tech) => (
                      <span key={tech} className="tech-tag">
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* Section 05 - Reflections */}
          <section className="mb-16">
            <p className="text-xs font-semibold uppercase tracking-widest text-[var(--muted)] mb-4">
              05 — Reflections
            </p>
            <h2 className="text-2xl font-bold mb-6">
              What I learned
            </h2>
            <div className="space-y-6">
              <div className="p-6 rounded-xl border border-[var(--border)] bg-[var(--card)]">
                <h3 className="font-semibold mb-2">Velocity Matters</h3>
                <p className="text-sm text-[var(--muted)]">
                  In a market moving as fast as AI, the ability to iterate quickly is more
                  valuable than the ability to build complex hardware.
                </p>
              </div>
              <div className="p-6 rounded-xl border border-[var(--border)] bg-[var(--card)]">
                <h3 className="font-semibold mb-2">Viability First</h3>
                <p className="text-sm text-[var(--muted)]">
                  A beautiful product with broken unit economics is a hobby, not a business.
                  Validate the business model before perfecting the product.
                </p>
              </div>
              <div className="p-6 rounded-xl border border-[var(--border)] bg-[var(--card)]">
                <h3 className="font-semibold mb-2">Founder-Market Fit</h3>
                <p className="text-sm text-[var(--muted)]">
                  My strengths are in software and rapid iteration.
                  Fighting against that was fighting against myself.
                </p>
              </div>
            </div>
          </section>

          {/* Section 06 - The Pivot */}
          <section className="mb-16">
            <p className="text-xs font-semibold uppercase tracking-widest text-[var(--muted)] mb-4">
              06 — The Pivot
            </p>
            <h2 className="text-2xl font-bold mb-6">
              From hardware to software
            </h2>
            <p className="text-[var(--muted)] leading-relaxed mb-4">
              We took the core thesis — AI companions with personality and memory — and
              stripped away the hardware. The result was{" "}
              <Link href="/experience/mefriend" className="text-[var(--accent)] hover:underline">
                mefriend.ai
              </Link>
              , a software platform that could reach millions instead of hundreds.
            </p>
            <p className="text-[var(--muted)] leading-relaxed">
              Sometimes the best engineering decision is knowing when to change the medium.
            </p>
          </section>

          {/* CTA */}
          <section className="p-8 rounded-xl border border-[var(--border)] bg-[var(--card)] text-center">
            <h3 className="text-xl font-bold mb-2">See what came next</h3>
            <p className="text-sm text-[var(--muted)] mb-6">
              The pivot from Naly became mefriend.ai — 300K+ users and counting.
            </p>
            <Link
              href="/experience/mefriend"
              className="inline-block px-6 py-2.5 bg-[var(--foreground)] text-[var(--background)] rounded-lg text-sm font-medium hover:opacity-90 transition-opacity"
            >
              Read mefriend.ai case study
            </Link>
          </section>
        </div>
      </article>
    </main>
  );
}
