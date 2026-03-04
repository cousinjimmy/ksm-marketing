const stats = [
  {
    value: "50%",
    label: "of enterprises will deploy AI agents by 2027",
  },
  {
    value: "10–15%",
    label: "more revenue growth at data-driven companies",
  },
  {
    value: "47%",
    label: "of CXOs say data-readiness is their top AI challenge",
  },
];

export default function StatsBand() {
  return (
    <section className="bg-silver py-16">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="grid md:grid-cols-3 gap-10 md:gap-8">
          {stats.map((stat) => (
            <div key={stat.value} className="text-center md:text-left">
              <p className="text-3xl sm:text-4xl font-bold text-ink">
                {stat.value}
              </p>
              <p className="mt-2 text-sm text-gray-600 leading-relaxed">
                {stat.label}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
