const services = [
  {
    title: "AI Diagnostic & Strategy",
    timeline: "1–3 weeks",
    featured: false,
    deliverables: [
      "AI opportunity assessment & prioritization matrix",
      "Data readiness and infrastructure audit",
      "Competitive AI landscape analysis",
      "Phased implementation roadmap",
      "Executive presentation with ROI projections",
    ],
  },
  {
    title: "Implementation Sprint",
    timeline: "4–10 weeks",
    featured: true,
    deliverables: [
      "Production-ready AI system or agent",
      "Custom model fine-tuning & evaluation",
      "API integrations with existing tech stack",
      "User training and documentation",
      "30-day post-launch support & monitoring",
    ],
  },
  {
    title: "AI Operations Retainer",
    timeline: "Ongoing",
    featured: false,
    deliverables: [
      "Continuous model monitoring & optimization",
      "Monthly performance and cost reports",
      "Priority access to engineering team",
      "Quarterly strategy reviews & roadmap updates",
      "New use case identification & prototyping",
    ],
  },
];

export default function Services() {
  return (
    <section id="services" className="py-24">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-ink text-balance max-w-2xl">
          Flexible engagement models to match where you are
        </h2>

        <div className="mt-14 grid lg:grid-cols-3 gap-8">
          {services.map((service) => (
            <div
              key={service.title}
              className={`rounded-2xl border bg-white p-8 flex flex-col ${
                service.featured
                  ? "border-accent/40 border-t-4 border-t-accent shadow-lg shadow-accent/5"
                  : "border-gray-200"
              }`}
            >
              <h3 className="text-xl font-semibold text-ink">
                {service.title}
              </h3>
              <p className="mt-2 text-sm text-gray-500">
                &middot;&ensp;{service.timeline}
              </p>
              <ul className="mt-6 space-y-3 flex-1">
                {service.deliverables.map((item) => (
                  <li
                    key={item}
                    className="flex items-start gap-3 text-sm text-gray-600"
                  >
                    <svg
                      className="h-5 w-5 shrink-0 text-accent mt-0.5"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth={2}
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="m4.5 12.75 6 6 9-13.5"
                      />
                    </svg>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
