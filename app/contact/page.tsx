"use client";

import { useFormState, useFormStatus } from "react-dom";
import { submitContactForm } from "@/app/actions/contact";
import Link from "next/link";

function SubmitButton() {
  const { pending } = useFormStatus();
  return (
    <button
      type="submit"
      disabled={pending}
      className="inline-flex items-center rounded-lg bg-ink px-6 py-3 text-sm font-medium text-white hover:bg-gray-800 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
    >
      {pending ? "Sending..." : "Send Message\u2003\u2192"}
    </button>
  );
}

export default function ContactPage() {
  const [state, formAction] = useFormState(submitContactForm, {
    success: false,
    error: null,
  });

  if (state.success) {
    return (
      <div className="pt-32 pb-24">
        <div className="mx-auto max-w-xl px-6 lg:px-8 text-center">
          <div className="flex h-16 w-16 items-center justify-center rounded-full bg-green-50 mx-auto">
            <svg
              className="h-8 w-8 text-green-600"
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
          </div>
          <h1 className="mt-6 text-3xl font-bold text-ink">
            Message sent successfully
          </h1>
          <p className="mt-4 text-gray-600 leading-relaxed">
            Thank you for reaching out. We&apos;ll review your message and get
            back to you within one business day.
          </p>
          <Link
            href="/"
            className="mt-8 inline-flex items-center text-sm font-medium text-accent hover:underline"
          >
            &larr;&ensp;Back to homepage
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="pt-32 pb-24">
      <div className="mx-auto max-w-2xl px-6 lg:px-8">
        <div className="mb-10">
          <Link
            href="/"
            className="text-sm text-gray-500 hover:text-ink transition-colors"
          >
            &larr;&ensp;Back to homepage
          </Link>
        </div>

        <h1 className="text-3xl sm:text-4xl font-bold tracking-tight text-ink">
          Get in touch
        </h1>
        <p className="mt-4 text-lg text-gray-600 leading-relaxed">
          Tell us about your business and what you&apos;re looking for.
          We&apos;ll get back to you within one business day.
        </p>

        <form action={formAction} className="mt-10 space-y-6">
          {state.error && (
            <div className="rounded-lg border border-red-200 bg-red-50 p-4 text-sm text-red-700">
              {state.error}
            </div>
          )}

          <div className="grid sm:grid-cols-2 gap-6">
            <div>
              <label
                htmlFor="name"
                className="block text-sm font-medium text-ink"
              >
                Full name <span className="text-red-500">*</span>
              </label>
              <input
                id="name"
                name="name"
                type="text"
                required
                className="mt-2 block w-full rounded-lg border border-gray-300 px-4 py-3 text-sm text-ink placeholder:text-gray-400 focus:border-accent focus:outline-none focus:ring-1 focus:ring-accent"
                placeholder="Jane Smith"
              />
            </div>
            <div>
              <label
                htmlFor="company"
                className="block text-sm font-medium text-ink"
              >
                Company name <span className="text-red-500">*</span>
              </label>
              <input
                id="company"
                name="company"
                type="text"
                required
                className="mt-2 block w-full rounded-lg border border-gray-300 px-4 py-3 text-sm text-ink placeholder:text-gray-400 focus:border-accent focus:outline-none focus:ring-1 focus:ring-accent"
                placeholder="Acme Corp"
              />
            </div>
          </div>

          <div>
            <label
              htmlFor="email"
              className="block text-sm font-medium text-ink"
            >
              Email <span className="text-red-500">*</span>
            </label>
            <input
              id="email"
              name="email"
              type="email"
              required
              className="mt-2 block w-full rounded-lg border border-gray-300 px-4 py-3 text-sm text-ink placeholder:text-gray-400 focus:border-accent focus:outline-none focus:ring-1 focus:ring-accent"
              placeholder="jane@acme.com"
            />
          </div>

          <div className="grid sm:grid-cols-2 gap-6">
            <div>
              <label
                htmlFor="companySize"
                className="block text-sm font-medium text-ink"
              >
                Company size
              </label>
              <select
                id="companySize"
                name="companySize"
                className="mt-2 block w-full rounded-lg border border-gray-300 px-4 py-3 text-sm text-ink focus:border-accent focus:outline-none focus:ring-1 focus:ring-accent bg-white"
              >
                <option value="">Select...</option>
                <option value="1-10">1–10</option>
                <option value="11-50">11–50</option>
                <option value="51-200">51–200</option>
                <option value="201-1000">201–1,000</option>
                <option value="1000+">1,000+</option>
              </select>
            </div>
            <div>
              <label
                htmlFor="situation"
                className="block text-sm font-medium text-ink"
              >
                What best describes your situation
              </label>
              <select
                id="situation"
                name="situation"
                className="mt-2 block w-full rounded-lg border border-gray-300 px-4 py-3 text-sm text-ink focus:border-accent focus:outline-none focus:ring-1 focus:ring-accent bg-white"
              >
                <option value="">Select...</option>
                <option value="need-strategy">We need an AI strategy</option>
                <option value="know-what-to-build">
                  We know what we want to build
                </option>
                <option value="ongoing-support">
                  We need ongoing AI support
                </option>
                <option value="exploring">
                  Not sure yet — just exploring
                </option>
              </select>
            </div>
          </div>

          <div>
            <label
              htmlFor="description"
              className="block text-sm font-medium text-ink"
            >
              Brief description of what you&apos;re looking for
            </label>
            <textarea
              id="description"
              name="description"
              rows={4}
              className="mt-2 block w-full rounded-lg border border-gray-300 px-4 py-3 text-sm text-ink placeholder:text-gray-400 focus:border-accent focus:outline-none focus:ring-1 focus:ring-accent resize-none"
              placeholder="Tell us about your goals, challenges, or the project you have in mind..."
            />
          </div>

          <div>
            <label
              htmlFor="referral"
              className="block text-sm font-medium text-ink"
            >
              How did you hear about us?{" "}
              <span className="text-gray-400 font-normal">(optional)</span>
            </label>
            <input
              id="referral"
              name="referral"
              type="text"
              className="mt-2 block w-full rounded-lg border border-gray-300 px-4 py-3 text-sm text-ink placeholder:text-gray-400 focus:border-accent focus:outline-none focus:ring-1 focus:ring-accent"
              placeholder="Referral, LinkedIn, Google..."
            />
          </div>

          <div className="pt-2">
            <SubmitButton />
          </div>
        </form>
      </div>
    </div>
  );
}
