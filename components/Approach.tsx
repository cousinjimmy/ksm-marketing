const phases = [
  {
    phase: "01",
    emoji: "🔍",
    title: "Diagnose",
    description:
      "We audit your current systems, data, and workflows to understand where AI can create the most value. This diagnostic phase surfaces hidden inefficiencies, data gaps, and quick wins — giving you a clear picture before any strategy is set.",
  },
  {
    phase: "02",
    emoji: "🧭",
    title: "Advise",
    description:
      "We start by understanding your business, data landscape, and strategic goals. Through stakeholder workshops and technical assessments, we identify the highest-impact AI opportunities and build a prioritized roadmap.",
  },
  {
    phase: "03",
    emoji: "✏️",
    title: "Design",
    description:
      "We translate strategy into architecture — selecting the right models, defining data pipelines, and designing user experiences. Every solution is scoped for measurable outcomes and realistic timelines.",
  },
  {
    phase: "04",
    emoji: "⚙️",
    title: "Build",
    description:
      "Our engineering team builds production-grade AI systems with rigorous testing, security, and scalability. We ship in sprints so you see working software early and can iterate based on real results.",
  },
  {
    phase: "05",
    emoji: "📈",
    title: "Operate",
    description:
      "Post-launch, we monitor performance, optimize costs, and continuously improve. From model retraining to scaling infrastructure, we ensure your AI systems deliver value over time — not just on day one.",
  },
];

export default function Approach() {
  return (
    <section className="bg-ink py-24">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-white text-balance">
          Diagnose. Advise. Design. Build. Operate.
        </h2>
        <p className="mt-4 text-gray-400 text-lg max-w-2xl">
          A structured methodology that takes you from idea to production — and
          keeps your AI systems performing long after launch.
        </p>

        <div className="mt-16 grid sm:grid-cols-2 lg:grid-cols-5 gap-8">
          {phases.map((phase) => (
            <div key={phase.phase}>
              <p className="text-xs font-medium uppercase tracking-widest text-gray-500">
                Phase {phase.phase}
              </p>
              <p className="mt-3 text-3xl">{phase.emoji}</p>
              <h3 className="mt-4 text-xl font-semibold text-white">
                {phase.title}
              </h3>
              <p className="mt-3 text-sm leading-relaxed text-gray-400">
                {phase.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
