import Link from "next/link";

export default function CTA() {
  return (
    <section id="contact" className="py-24">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="rounded-3xl bg-ink px-8 py-16 sm:px-16 sm:py-20 text-center">
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-white text-balance">
            Ready to put AI to work for your business?
          </h2>
          <p className="mt-4 text-lg text-gray-400 max-w-xl mx-auto">
            Whether you&apos;re exploring AI for the first time or scaling
            existing systems, we&apos;ll help you move from ambition to
            execution.
          </p>
          <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
            <Link
              href="/contact"
              className="inline-flex items-center rounded-lg bg-white px-6 py-3 text-sm font-medium text-ink hover:bg-gray-100 transition-colors"
            >
              Schedule a Call&ensp;&rarr;
            </Link>
            <a
              href="mailto:hello@ksm.ai"
              className="inline-flex items-center rounded-lg border border-gray-600 px-6 py-3 text-sm font-medium text-white hover:border-gray-400 transition-colors"
            >
              Email us instead
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
