import Link from "next/link";

export default function Hero() {
  return (
    <section className="pt-32 pb-20 lg:pt-40 lg:pb-28">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-start">
          {/* Left column */}
          <div className="max-w-xl">
            <div className="inline-flex items-center rounded-full border border-gray-200 bg-white px-4 py-1.5 text-xs font-medium text-gray-600 mb-6">
              AI Advisory &amp; Implementation
            </div>
            <h1 className="text-4xl sm:text-5xl lg:text-[3.5rem] font-bold leading-[1.1] tracking-tight text-ink text-balance">
              Transform your business with{" "}
              <span className="text-accent">AI that works</span>
            </h1>
            <p className="mt-6 text-lg leading-relaxed text-gray-600">
              KSM partners with forward-thinking companies to develop AI
              strategy, design intelligent systems, and implement solutions that
              create measurable business value — from first insight to full
              deployment.
            </p>
            <div className="mt-8 flex flex-wrap items-center gap-4">
              <Link
                href="/contact"
                className="inline-flex items-center rounded-lg bg-ink px-6 py-3 text-sm font-medium text-white hover:bg-gray-800 transition-colors"
              >
                Schedule a Call&ensp;&rarr;
              </Link>
              <a
                href="#capabilities"
                className="text-sm font-medium text-gray-600 hover:text-ink transition-colors"
              >
                Explore our capabilities&ensp;&darr;
              </a>
            </div>
          </div>

          {/* Right column — stat cards */}
          <div className="flex flex-col gap-4">
            <div className="rounded-2xl bg-ink text-white p-8">
              <p className="text-lg leading-relaxed font-medium">
                97% of executives say generative AI will transform their company
                — but only 31% have invested significantly.
              </p>
              <p className="mt-4 text-sm text-gray-400 font-medium">
                The gap is where we work.
              </p>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div className="rounded-2xl border border-gray-200 bg-white p-6">
                <p className="text-3xl font-bold text-ink">2–6wk</p>
                <p className="mt-1 text-sm text-gray-500">
                  avg time to value
                </p>
              </div>
              <div className="rounded-2xl border border-gray-200 bg-white p-6">
                <p className="text-3xl font-bold text-ink">4–8&times;</p>
                <p className="mt-1 text-sm text-gray-500">Year 1 ROI</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
