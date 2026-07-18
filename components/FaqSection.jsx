'use client';

import React, { useState } from 'react';
import { Plus, Minus, Zap, Wallet, Clock, Layers, RefreshCcw } from 'lucide-react';
import clsx from 'clsx';
import { twMerge } from 'tailwind-merge';

function cn(...inputs) {
  return twMerge(clsx(inputs));
}

const faqData = [
  {
    id: 1,
    question: 'What are your service charges?',
    icon: <Wallet className="w-5 h-5 text-blue-600" />,
    answer: (
      <div className="space-y-3">
        <p>
          Our pricing is transparent and designed for startups, creators, and small businesses.
          Final cost depends on scope and complexity.
        </p>

        <ul className="grid gap-2 mt-3">
          <li className="flex justify-between items-center p-3 rounded-lg bg-blue-50 border border-blue-100">
            <span className="flex items-center gap-2">
              <span>Website Development</span>
              <span className="text-[11px] font-semibold text-red-600 bg-red-50 border border-red-200 px-2 py-0.5 rounded-full">
                Limited time Offer
              </span>
            </span>
            <span className="font-semibold text-blue-700">Starts @ ₹999</span>
          </li>

          <li className="flex justify-between items-center p-3 rounded-lg bg-blue-50 border border-blue-100">
            <span className="flex items-center gap-2">
              <span>Social Media Management</span>
              <span className="text-[11px] font-semibold text-red-600 bg-red-50 border border-red-200 px-2 py-0.5 rounded-full">
                Limited time Offer
              </span>
            </span>
            <span className="font-semibold text-blue-700">₹2,999 / month</span>
          </li>

          <li className="flex justify-between p-3 rounded-lg bg-blue-50 border border-blue-100">
            <span>Video Editing</span>
            <span className="font-semibold text-blue-700">₹99 / minute</span>
          </li>

          <li className="flex justify-between p-3 rounded-lg bg-blue-50 border border-blue-100">
            <span>Graphic Design</span>
            <span className="font-semibold text-blue-700">₹499 / design</span>
          </li>
        </ul>

        <p className="text-xs text-slate-500 italic">
          Prices may vary based on revisions, urgency, and advanced features. T&C applied
        </p>
      </div>
    ),
  },
  {
    id: 2,
    question: 'How do we start a project?',
    icon: <Zap className="w-5 h-5 text-blue-600" />,
    answer:
      'You can contact us through WhatsApp or the Contact Form. After requirement discussion, we suggest the best plan, confirm timelines, and start immediately.',
  },
  {
    id: 3,
    question: 'What is the delivery timeline?',
    icon: <Clock className="w-5 h-5 text-blue-600" />,
    answer:
      'Design tasks are usually delivered within 24 hours. Websites and video projects depend on scope, but we always commit to clear timelines before starting.',
  },
  {
    id: 4,
    question: 'Do you provide revisions?',
    icon: <RefreshCcw className="w-5 h-5 text-blue-600" />,
    answer:
      'Yes. Revisions are included to ensure the final output matches your expectations. The number of revisions depends on the selected package.',
  },
  {
    id: 6,
    question: 'Is ongoing support available?',
    icon: <Layers className="w-5 h-5 text-blue-600" />,
    answer:
      'Yes. We offer optional maintenance and support plans for websites, social media, and long-term digital growth.',
  },
];

export default function FaqSection() {
  const [openIndex, setOpenIndex] = useState(null);

  return (
    <section
      className="relative w-full py-20 bg-[#F5F8FF]"
      style={{
        fontFamily:
          'system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Inter, Arial, sans-serif',
      }}
    >
      <div className="max-w-5xl mx-auto px-4 md:px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 tracking-tight">
            Frequently Asked Questions
          </h2>
          <p className="mt-3 text-slate-600 text-lg">
            Clear answers before you start working with us.
          </p>
        </div>

        <div className="space-y-4">
          {faqData.map((faq, index) => (
            <div
              key={faq.id}
              className={cn(
                'rounded-2xl border transition-all overflow-hidden',
                openIndex === index
                  ? 'bg-white border-blue-200 shadow-lg'
                  : 'bg-white/70 border-transparent hover:bg-white'
              )}
            >
              <button
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                className="w-full flex items-center justify-between p-5 md:p-6 text-left"
              >
                <div className="flex items-center gap-4">
                  <div
                    className={cn(
                      'p-2 rounded-lg',
                      openIndex === index ? 'bg-blue-100' : 'bg-slate-100'
                    )}
                  >
                    {faq.icon}
                  </div>
                  <span className="font-semibold text-slate-800 text-lg">
                    {faq.question}
                  </span>
                </div>

                {openIndex === index ? <Minus /> : <Plus />}
              </button>

              <div
                className={cn(
                  'transition-all duration-300',
                  openIndex === index
                    ? 'max-h-[600px] opacity-100'
                    : 'max-h-0 opacity-0'
                )}
              >
                <div className="p-6 pt-0 text-slate-600 leading-relaxed border-t">
                  {faq.answer}
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-12 text-center">
          <p className="text-sm text-slate-500">
            Still have questions?{' '}
            <a href="#" className="text-blue-600 font-semibold hover:underline">
              Talk to our team
            </a>
          </p>
        </div>
      </div>
    </section>
  );
}
