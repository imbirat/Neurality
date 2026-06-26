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
      "Neurality is a small studio building AI tools, Discord bots, and modern web applications. We previously operated as Axion-team and rebranded as we expanded our focus.",
  },
  {
    question: "What products do you offer?",
    answer:
      "Our lineup includes Axion, a free Discord bot with automod and anti-nuke protection; Cortex, an AI chat web app; birat.gg, a music bot in development; and Xyrox, an open-source tool from our earlier days.",
  },
  {
    question: "Are your Discord bots really free?",
    answer:
      "Yes. Axion is free to invite and use. If we ever introduce optional premium features down the line, the core moderation toolkit will stay free.",
  },
  {
    question: "How do I get support or report a bug?",
    answer:
      "The fastest way is through our Discord community, where we share updates and take feedback directly. Links are available from the Products section above.",
  },
  {
    question: "What happened to Axion-team?",
    answer:
      "Axion-team rebranded to Neurality-Inc to better reflect our broader focus on AI tools and modern digital systems, beyond just our original bot.",
  },
  {
    question: "Is Cortex AI available yet?",
    answer:
      "Cortex is currently in active development. It started as Axion AI and is being rebuilt and rebranded as Cortex AI — check the Products section for status updates.",
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
