const sectors = [
  {
    emoji: "⚖️",
    name: "Legal",
    description:
      "Contract analysis, document review automation, and legal research assistants that reduce billable-hour dependency.",
  },
  {
    emoji: "🏗️",
    name: "Real Estate",
    description:
      "Market intelligence, property valuation models, and automated due diligence workflows for faster deal flow.",
  },
  {
    emoji: "💰",
    name: "Financial Services",
    description:
      "Risk modeling, regulatory compliance automation, and intelligent reporting for banks, funds, and fintechs.",
  },
  {
    emoji: "🏛️",
    name: "Construction",
    description:
      "Project estimation, safety compliance monitoring, and document management systems for general contractors.",
  },
  {
    emoji: "🛒",
    name: "E-Commerce",
    description:
      "Personalization engines, inventory forecasting, and AI-powered customer support at scale.",
  },
  {
    emoji: "🚀",
    name: "Growth-Stage Tech",
    description:
      "Embed AI into your product, accelerate time-to-market, and build defensible moats with intelligent features.",
  },
  {
    emoji: "🏥",
    name: "Healthcare",
    description:
      "Clinical decision support, patient triage automation, and HIPAA-compliant document intelligence systems.",
  },
  {
    emoji: "🏭",
    name: "Manufacturing",
    description:
      "Predictive maintenance, quality inspection automation, and supply chain optimization powered by AI.",
  },
];

export default function Industries() {
  return (
    <section id="sectors" className="bg-silver py-24">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <p className="text-sm font-medium uppercase tracking-widest text-accent">
          Industries
        </p>
        <h2 className="mt-3 text-3xl sm:text-4xl font-bold tracking-tight text-ink text-balance max-w-2xl">
          AI solutions tailored to your industry
        </h2>

        <div className="mt-14 grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {sectors.map((sector) => (
            <div
              key={sector.name}
              className="rounded-2xl border border-gray-200 bg-white p-6 hover:border-accent/30 hover:shadow-lg hover:shadow-accent/5 transition-all"
            >
              <p className="text-2xl">{sector.emoji}</p>
              <h3 className="mt-3 text-base font-semibold text-ink">
                {sector.name}
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-gray-600">
                {sector.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
