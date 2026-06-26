import type { Metadata } from "next";
import { Navbar } from "@/components/neurality/navbar";
import { Footer } from "@/components/neurality/footer";
import { BackToTop } from "@/components/neurality/back-to-top";

export const metadata: Metadata = {
  title: "Terms of Service — Neurality",
  description: "Terms of Service for Neurality-Inc products and services.",
};

export default function TermsPage() {
  return (
    <>
      <Navbar />
      <main>
        <div className="legal-page">
          {/*
            IMPORTANT: This is template legal boilerplate, not legal advice.
            Have a qualified attorney review this document before relying on it in production.
          */}
          <h1>Terms of Service</h1>
          <p className="legal-updated">Effective date: June 1, 2026</p>

          <div className="legal-notice">
            <strong>Note:</strong> This document is template legal boilerplate
            provided for informational purposes only. It is not legal advice.
            Neurality-Inc recommends having a qualified attorney review these
            terms before relying on them in production.
          </div>

          <h2>1. Acceptance of Terms</h2>
          <p>
            By accessing or using any product, service, website, bot, or
            application provided by Neurality-Inc (&quot;Neurality,&quot;
            &quot;we,&quot; &quot;us,&quot; or &quot;our&quot;), you agree to be
            bound by these Terms of Service (&quot;Terms&quot;). If you do not
            agree to these Terms, you may not use our services.
          </p>
          <p>
            These Terms apply to all visitors, users, and others who access or
            use our services, including but not limited to Cortex, Cortex 4.6,
            Cortex Code, and Axion (collectively, the &quot;Services&quot;).
          </p>

          <h2>2. Description of Service</h2>
          <p>
            Neurality-Inc builds and maintains AI chatbot platforms, Discord
            bots, and modern web applications. Our Services include:
          </p>
          <ul>
            <li>
              <strong>Cortex</strong> — an AI chatbot platform (rebranded from
              Axion AI), including the Cortex 4.6 model and Cortex Code mode.
            </li>
            <li>
              <strong>Axion</strong> — a free Discord bot providing automod,
              anti-nuke, and server management capabilities.
            </li>
          </ul>
          <p>
            We reserve the right to modify, suspend, or discontinue any part of
            the Services at any time, with or without notice. We will not be
            liable to you or any third party for any modification, suspension,
            or discontinuation.
          </p>

          <h2>3. Accounts &amp; Eligibility</h2>
          <p>
            Some of our Services may require you to create an account. You must
            be at least 13 years old (or the minimum age required by your
            jurisdiction) to use our Services. By using the Services, you
            represent and warrant that you meet this requirement.
          </p>
          <p>
            You are responsible for maintaining the confidentiality of your
            account credentials and for all activity that occurs under your
            account. You agree to notify us immediately of any unauthorised use
            of your account at{" "}
            <a href="mailto:support@neurality.dev">support@neurality.dev</a>.
          </p>

          <h2>4. Acceptable Use</h2>
          <p>You agree not to use the Services to:</p>
          <ul>
            <li>
              Violate any applicable law or regulation, including those governing
              export controls, privacy, or consumer protection.
            </li>
            <li>
              Harass, abuse, threaten, defame, or otherwise harm other users or
              third parties.
            </li>
            <li>
              Distribute spam, malware, or any other harmful or disruptive
              content.
            </li>
            <li>
              Attempt to gain unauthorised access to any part of the Services or
              their underlying infrastructure.
            </li>
            <li>
              Scrape, crawl, or otherwise extract data from the Services in a
              manner that places undue load on our systems.
            </li>
            <li>
              Impersonate Neurality-Inc, its employees, or any other person or
              entity.
            </li>
            <li>
              Use the Services for any purpose that we, in our sole discretion,
              deem inappropriate or contrary to these Terms.
            </li>
          </ul>

          <h2>5. Intellectual Property</h2>
          <p>
            The Services and their original content, features, and
            functionality are and will remain the exclusive property of
            Neurality-Inc and its licensors. Our trademarks and trade dress may
            not be used in connection with any product or service without our
            prior written consent.
          </p>
          <p>
            Content you submit through the Services remains yours. By submitting
            content, you grant Neurality-Inc a non-exclusive, worldwide,
            royalty-free licence to use, reproduce, and display that content
            solely as necessary to provide the Services.
          </p>

          <h2>6. Development Status</h2>
          <p>
            Several Neurality products are in varying stages of development:
          </p>
          <ul>
            <li>
              <strong>Cortex, Cortex 4.6, and Cortex Code</strong> are currently
              in development and not yet publicly released. Features described
              on our website are subject to change.
            </li>
            <li>
              <strong>Axion</strong> is operational but may undergo maintenance
              or updates that temporarily affect availability.
            </li>
          </ul>
          <p>
            We make no representations about the readiness, completeness, or
            fitness for purpose of any product described as &quot;in
            development&quot; or &quot;coming soon.&quot;
          </p>

          <h2>7. Disclaimers &amp; &quot;As-Is&quot; Service</h2>
          <p>
            THE SERVICES ARE PROVIDED &quot;AS IS&quot; AND &quot;AS
            AVAILABLE&quot; WITHOUT WARRANTIES OF ANY KIND, EITHER EXPRESS OR
            IMPLIED, INCLUDING BUT NOT LIMITED TO WARRANTIES OF
            MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE,
            NON-INFRINGEMENT, OR UNINTERRUPTED OR ERROR-FREE OPERATION.
          </p>
          <p>
            We do not warrant that the Services will be available at all times,
            that defects will be corrected, or that the Services or servers that
            make them available are free of viruses or other harmful
            components.
          </p>

          <h2>8. Limitation of Liability</h2>
          <p>
            TO THE FULLEST EXTENT PERMITTED BY APPLICABLE LAW, NEURALITY-INC AND
            ITS AFFILIATES, OFFICERS, EMPLOYEES, AGENTS, AND LICENSORS SHALL NOT
            BE LIABLE FOR ANY INDIRECT, INCIDENTAL, SPECIAL, CONSEQUENTIAL, OR
            PUNITIVE DAMAGES, INCLUDING LOSS OF PROFITS, DATA, USE, GOODWILL, OR
            OTHER INTANGIBLE LOSSES, ARISING OUT OF OR IN CONNECTION WITH YOUR
            ACCESS TO OR USE OF (OR INABILITY TO ACCESS OR USE) THE SERVICES.
          </p>
          <p>
            IN NO EVENT SHALL OUR TOTAL LIABILITY TO YOU EXCEED THE AMOUNT YOU
            PAID TO US IN THE TWELVE (12) MONTHS PRIOR TO THE EVENT GIVING RISE
            TO THE CLAIM, OR ONE HUNDRED US DOLLARS (USD $100), WHICHEVER IS
            GREATER.
          </p>

          <h2>9. Termination</h2>
          <p>
            We may terminate or suspend your access to the Services immediately,
            without prior notice or liability, for any reason, including if you
            breach these Terms. Upon termination, your right to use the Services
            ceases immediately.
          </p>
          <p>
            You may stop using the Services at any time. If you have an account,
            you may request deletion by contacting us at{" "}
            <a href="mailto:support@neurality.dev">support@neurality.dev</a>.
          </p>

          <h2>10. Changes to These Terms</h2>
          <p>
            We reserve the right to modify these Terms at any time. If we make
            material changes, we will update the &quot;Effective date&quot; at
            the top of this page and may provide additional notice through our
            Services or via email. Your continued use of the Services after
            changes become effective constitutes your acceptance of the revised
            Terms.
          </p>

          <h2>11. Contact</h2>
          <p>If you have questions about these Terms, please contact us at:</p>
          <p>
            <strong>Neurality-Inc</strong>
            <br />
            Email: <a href="mailto:legal@neurality.dev">legal@neurality.dev</a>
          </p>
        </div>
      </main>
      <Footer />
      <BackToTop />
    </>
  );
}
