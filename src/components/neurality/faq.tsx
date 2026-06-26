"use client";

import { useState } from "react";
import { Reveal } from "./reveal";

type FaqItem = {
  question: string;
  answer: string;
};

const FAQS: FaqItem[] = [
  {
    question: "What is Neurality?",
    answer:
      "Neurality is a studio building AI chatbot platforms, Discord bots, and modern web applications. We previously operated as Axion-team and rebranded as we expanded our focus on AI tools.",
  },
  {
    question: "What is Cortex?",
    answer:
      "Cortex is our AI chatbot platform. It started as Axion AI and has been rebranded and rebuilt as Cortex AI. Cortex 4.6 and Cortex Code are part of this growing family of models.",
  },
  {
    question: "What is Cortex 4.6?",
    answer:
      "Cortex 4.6 is a powerful model made for chatting, coding, learning, and reasoning — all in a single model. It is currently in development and coming soon.",
  },
  {
    question: "What is Cortex Code?",
    answer:
      "Cortex Code is a new mode built for coding. It can use sub-agents, ships with a dedicated code model (Cortex 4.7 Code), and is designed from the ground up for development workflows.",
  },
  {
    question: "What is Axion?",
    answer:
      "Axion is our free Discord bot with automod, anti-nuke, and server management features. It is live and available to invite — you can find it via the Docs link in the navigation.",
  },
  {
    question: "Are your products free?",
    answer:
      "Axion is free to invite and use. Cortex and its models are currently in development; we will share pricing and availability details as we get closer to launch.",
  },
];

export function Faq() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section className="section" id="faq">
      <div className="container">
        <Reveal className="section-head">
          <span className="section-tag">FAQ</span>
          <h2 className="section-title">Questions, answered</h2>
          <p className="section-subtitle">
            Everything you need to know about Neurality and what we&apos;re
            building.
          </p>
        </Reveal>

        <div className="faq-list">
          {FAQS.map((item, i) => {
            const open = openIndex === i;
            return (
              <Reveal key={item.question} className="card faq-item" index={i}>
                <button
                  type="button"
                  className="faq-question"
                  aria-expanded={open}
                  aria-controls={`faq-panel-${i}`}
                  onClick={() => setOpenIndex(open ? null : i)}
                >
                  <span>{item.question}</span>
                  <svg
                    className={`faq-chevron${open ? " open" : ""}`}
                    viewBox="0 0 24 24"
                    width={18}
                    height={18}
                    aria-hidden="true"
                  >
                    <path
                      fill="none"
                      stroke="currentColor"
                      strokeWidth={2}
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M6 9l6 6 6-6"
                    />
                  </svg>
                </button>
                <div
                  className={`faq-answer-wrap${open ? " open" : ""}`}
                  id={`faq-panel-${i}`}
                  role="region"
                >
                  <div className="faq-answer-inner">
                    <p className="faq-answer">{item.answer}</p>
                  </div>
                </div>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
