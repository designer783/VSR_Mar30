"use client";



import { useState } from "react";
import { GenericPage } from "@/components/GenericPage";
import Link from "next/link";

function ContactForm() {
  const [submitted, setSubmitted] = useState(false);
  const [form, setForm] = useState({ name: "", email: "", subject: "", message: "" });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  if (submitted) {
    return (
      <div className="bg-green-50 border border-green-200 rounded-2xl p-8 text-center">
        <div className="text-4xl mb-3">✅</div>
        <h3 className="text-xl font-bold text-primary-navy mb-2">Message Sent!</h3>
        <p className="text-text-secondary">Thank you for reaching out. We'll get back to you as soon as possible.</p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-5">
      <div className="grid sm:grid-cols-2 gap-5">
        <div>
          <label className="block text-sm font-semibold text-primary-navy mb-1.5">Full Name</label>
          <input
            type="text"
            name="name"
            required
            placeholder="John Smith"
            value={form.name}
            onChange={handleChange}
            className="w-full border border-slate-200 rounded-xl px-4 py-3 text-text-secondary placeholder:text-slate-300 focus:outline-none focus:ring-2 focus:ring-primary-accent/40 focus:border-primary-accent transition"
          />
        </div>
        <div>
          <label className="block text-sm font-semibold text-primary-navy mb-1.5">Email Address</label>
          <input
            type="email"
            name="email"
            required
            placeholder="you@example.com"
            value={form.email}
            onChange={handleChange}
            className="w-full border border-slate-200 rounded-xl px-4 py-3 text-text-secondary placeholder:text-slate-300 focus:outline-none focus:ring-2 focus:ring-primary-accent/40 focus:border-primary-accent transition"
          />
        </div>
      </div>

      <div>
        <label className="block text-sm font-semibold text-primary-navy mb-1.5">Subject</label>
        <select
          name="subject"
          required
          value={form.subject}
          onChange={handleChange}
          className="w-full border border-slate-200 rounded-xl px-4 py-3 text-text-secondary focus:outline-none focus:ring-2 focus:ring-primary-accent/40 focus:border-primary-accent transition bg-white"
        >
          <option value="" disabled>Select a topic…</option>
          <option>General Question</option>
          <option>Report Issue</option>
          <option>Billing & Refund</option>
          <option>Technical Support</option>
          <option>Other</option>
        </select>
      </div>

      <div>
        <label className="block text-sm font-semibold text-primary-navy mb-1.5">Message</label>
        <textarea
          name="message"
          required
          rows={5}
          placeholder="Tell us how we can help…"
          value={form.message}
          onChange={handleChange}
          className="w-full border border-slate-200 rounded-xl px-4 py-3 text-text-secondary placeholder:text-slate-300 focus:outline-none focus:ring-2 focus:ring-primary-accent/40 focus:border-primary-accent transition resize-none"
        />
      </div>

      <button
        type="submit"
        className="w-full bg-primary-accent hover:bg-primary-accent/90 text-white font-bold py-3.5 rounded-xl transition-all duration-200 shadow-md hover:shadow-lg"
      >
        Send Message
      </button>
    </form>
  );
}

const sections = [
  {
    content: (
      <div className="space-y-10">
        {/* Contact info cards */}
        <div className="grid sm:grid-cols-2 gap-6">
          <div className="bg-slate-50 border border-slate-100 rounded-2xl p-6 space-y-1">
            <p className="text-xs font-bold uppercase tracking-widest text-text-tertiary">Phone</p>
            <a
              href="tel:8007096297"
              className="text-2xl font-bold text-primary-navy hover:text-primary-accent transition block"
            >
              (800)-709-6297
            </a>
            <p className="text-sm text-text-tertiary">Available 7 days a week</p>
          </div>

          <div className="bg-slate-50 border border-slate-100 rounded-2xl p-6 space-y-1">
            <p className="text-xs font-bold uppercase tracking-widest text-text-tertiary">Help Desk</p>
            <a
              href="https://vehiclehistoryreports.freshdesk.com/en/support/home"
              target="_blank"
              rel="noopener noreferrer"
              className="text-lg font-bold text-primary-accent hover:underline block"
            >
              Open Help Desk →
            </a>
            <p className="text-sm text-text-tertiary">Browse FAQs &amp; submit a ticket</p>
          </div>
        </div>

        {/* Address */}
        <div className="bg-primary-navy rounded-3xl p-8 text-white">
          <p className="text-xs font-bold uppercase tracking-widest text-slate-400 mb-3">ADDRESS</p>
          <p className="text-lg font-semibold">2196 3rd Ave #4001</p>
          <p className="text-slate-300">New York, NY, United States</p>
        </div>

        {/* FAQ callout */}
        <div className="flex items-center gap-4 bg-primary-accent/5 border border-primary-accent/20 rounded-2xl p-5">
          <span className="text-2xl">💡</span>
          <p className="text-text-secondary text-sm">
            Have a common question?{" "}
            <Link href="/faq" className="text-primary-accent font-semibold hover:underline">
              Check our FAQ page
            </Link>{" "}
            — you might find an instant answer.
          </p>
        </div>

        {/* Contact form */}
        <div>
          <h2 className="text-2xl font-bold text-primary-navy mb-6 font-heading">Send Us a Message</h2>
          <ContactForm />
        </div>
      </div>
    ),
  },
];

export default function ContactUsPage() {
  return (
    <GenericPage
      title="Contact Us"
      subtitle="Simply fill out the form below or give us a call directly. Let us know what questions you have and how we can help — we're looking forward to hearing from you soon."
      sections={sections}
    />
  );
}
