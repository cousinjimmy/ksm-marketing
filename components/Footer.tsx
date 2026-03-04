import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-ink border-t border-gray-800">
      <div className="mx-auto max-w-7xl px-6 lg:px-8 py-12">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          <Link
            href="/"
            className="text-xl font-bold tracking-tight text-white"
          >
            KSM<span className="text-accent">.</span>
          </Link>

          <div className="flex flex-wrap items-center gap-8">
            <a
              href="/#capabilities"
              className="text-sm text-gray-400 hover:text-white transition-colors"
            >
              Capabilities
            </a>
            <a
              href="/#services"
              className="text-sm text-gray-400 hover:text-white transition-colors"
            >
              Services
            </a>
            <a
              href="/#sectors"
              className="text-sm text-gray-400 hover:text-white transition-colors"
            >
              Industries
            </a>
            <Link
              href="/contact"
              className="text-sm text-gray-400 hover:text-white transition-colors"
            >
              Contact
            </Link>
          </div>

          <p className="text-sm text-gray-500">
            &copy; {new Date().getFullYear()} KSM. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
