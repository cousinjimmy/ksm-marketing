"use client";

import Link from "next/link";
import { useState } from "react";

export default function Nav() {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-lg border-b border-gray-100">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          <Link href="/" className="text-xl font-bold tracking-tight text-ink">
            KSM<span className="text-accent">.</span>
          </Link>

          {/* Desktop nav */}
          <div className="hidden md:flex items-center gap-8">
            <a
              href="/#capabilities"
              className="text-sm text-gray-600 hover:text-ink transition-colors"
            >
              Capabilities
            </a>
            <a
              href="/#services"
              className="text-sm text-gray-600 hover:text-ink transition-colors"
            >
              Services
            </a>
            <a
              href="/#sectors"
              className="text-sm text-gray-600 hover:text-ink transition-colors"
            >
              Industries
            </a>
            <Link
              href="/contact"
              className="inline-flex items-center rounded-lg bg-ink px-4 py-2 text-sm font-medium text-white hover:bg-gray-800 transition-colors"
            >
              Schedule a Call
            </Link>
          </div>

          {/* Mobile hamburger */}
          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className="md:hidden p-2 text-ink"
            aria-label="Toggle menu"
          >
            <svg
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
            >
              {mobileOpen ? (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M6 18L18 6M6 6l12 12"
                />
              ) : (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M3.75 9h16.5m-16.5 6.75h16.5"
                />
              )}
            </svg>
          </button>
        </div>

        {/* Mobile menu */}
        {mobileOpen && (
          <div className="md:hidden pb-4 border-t border-gray-100 pt-4 flex flex-col gap-4">
            <a
              href="/#capabilities"
              onClick={() => setMobileOpen(false)}
              className="text-sm text-gray-600 hover:text-ink"
            >
              Capabilities
            </a>
            <a
              href="/#services"
              onClick={() => setMobileOpen(false)}
              className="text-sm text-gray-600 hover:text-ink"
            >
              Services
            </a>
            <a
              href="/#sectors"
              onClick={() => setMobileOpen(false)}
              className="text-sm text-gray-600 hover:text-ink"
            >
              Industries
            </a>
            <Link
              href="/contact"
              onClick={() => setMobileOpen(false)}
              className="inline-flex items-center justify-center rounded-lg bg-ink px-4 py-2 text-sm font-medium text-white"
            >
              Schedule a Call
            </Link>
          </div>
        )}
      </div>
    </nav>
  );
}
