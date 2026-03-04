const companies = [
  "Caldera",
  "CB Insights",
  "Skiff",
  "Halliday",
  "Arbitrum",
  "Cursor",
];

export default function LogosBar() {
  return (
    <section className="py-14 border-y border-gray-100">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <p className="text-center text-xs font-medium uppercase tracking-widest text-gray-400 mb-8">
          Trusted by teams at
        </p>
        <div className="flex flex-wrap items-center justify-center gap-x-12 gap-y-6">
          {companies.map((name) => (
            <span
              key={name}
              className="text-lg font-semibold text-gray-300 select-none"
            >
              {name}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
