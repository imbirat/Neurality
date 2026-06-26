import type { Metadata } from "next";
import { Navbar } from "@/components/neurality/navbar";
import { Footer } from "@/components/neurality/footer";
import { BackToTop } from "@/components/neurality/back-to-top";

export const metadata: Metadata = {
  title: "Privacy Policy — Neurality",
  description: "Privacy Policy for Neurality-Inc products and services.",
};

export default function PrivacyPage() {
  return (
    <>
      <Navbar />
      <main>
        <div className="legal-page">
          {/*
            IMPORTANT: This is template legal boilerplate, not legal advice.
            Have a qualified attorney review this document before relying on it in production.
          */}
          <h1>Privacy Policy</h1>
          <p className="legal-updated">Effective date: June 1, 2026</p>

          <div className="legal-notice">
            <strong>Note:</strong> This document is template legal boilerplate
            provided for informational purposes only. It is not legal advice.
            Neurality-Inc recommends having a qualified attorney review this
            policy before relying on it in production.
          </div>

          <p>
            Neurality-Inc (&quot;Neurality,&quot; &quot;we,&quot;
            &quot;us,&quot; or &quot;our&quot;) is committed to protecting your
            privacy. This Privacy Policy explains how we collect, use, share,
            and safeguard information when you use our products, services,
            websites, bots, and applications (collectively, the
            &quot;Services&quot;). By using our Services, you agree to the
            collection and use of information in accordance with this policy.
          </p>

          <h2>1. Information We Collect</h2>
          <p>We may collect the following categories of information:</p>
          <ul>
            <li>
              <strong>Account information:</strong> When you register for an
              account, we collect your username, email address, and password
              (stored as a secure hash).
            </li>
            <li>
              <strong>Usage data:</strong> We automatically collect information
              about how you interact with our Services, including pages visited,
              features used, and timestamps.
            </li>
            <li>
              <strong>Discord data:</strong> When you add our Discord bot
              (Axion) to a server, we may receive your Discord user ID, server
              ID, and messages sent in channels where the bot is active, solely
              to provide the requested functionality.
            </li>
            <li>
              <strong>Conversations:</strong> When you use Cortex or Cortex
              Code, we may process the prompts and content you submit solely to
              generate responses and provide the service.
            </li>
            <li>
              <strong>Communications:</strong> If you contact us for support or
              via email, we retain those communications to help resolve your
              inquiry.
            </li>
            <li>
              <strong>Device and technical data:</strong> We may collect your IP
              address, browser type, operating system, and device identifiers
              for security and diagnostic purposes.
            </li>
          </ul>
          <p>
            We do not intentionally collect sensitive personal data such as
            financial information, government ID numbers, or health data. Please
            do not submit such information through our Services.
          </p>

          <h2>2. How We Use Information</h2>
          <p>We use the information we collect to:</p>
          <ul>
            <li>Provide, operate, and improve our Services.</li>
            <li>Authenticate users and maintain account security.</li>
            <li>
              Respond to support requests and communicate with you about your
              account or our Services.
            </li>
            <li>
              Monitor usage patterns to understand how our Services are used and
              to inform product decisions.
            </li>
            <li>
              Detect, investigate, and prevent fraudulent activity, abuse, and
              violations of our Terms of Service.
            </li>
            <li>Comply with legal obligations and enforce our policies.</li>
          </ul>
          <p>
            We do not sell your personal information to third parties, and we do
            not use it for targeted advertising.
          </p>

          <h2>3. Cookies &amp; Analytics</h2>
          <p>
            We may use cookies and similar tracking technologies to maintain
            session state, remember your preferences, and analyse aggregate
            usage of our Services. You can configure your browser to refuse all
            cookies or to alert you when cookies are being sent; however, some
            features of our Services may not function properly without them.
          </p>
          <p>
            We may use third-party analytics tools (such as privacy-focused
            analytics software) to collect aggregated, anonymised data about how
            users navigate our Services. These tools do not receive information
            that identifies you personally.
          </p>

          <h2>4. Data Sharing &amp; Third Parties</h2>
          <p>
            We do not sell, rent, or trade your personal information. We may
            share information in the following limited circumstances:
          </p>
          <ul>
            <li>
              <strong>Service providers:</strong> We may share information with
              trusted third-party vendors (hosting providers, email delivery
              services, model inference providers) who assist us in operating
              our Services. These vendors are contractually required to keep
              your information confidential and to use it only to perform
              services on our behalf.
            </li>
            <li>
              <strong>Legal compliance:</strong> We may disclose information if
              required to do so by law, court order, or governmental authority,
              or when we believe in good faith that disclosure is necessary to
              protect our rights, protect your safety or the safety of others,
              or investigate fraud.
            </li>
            <li>
              <strong>Business transfers:</strong> If Neurality-Inc is involved
              in a merger, acquisition, or sale of assets, your information may
              be transferred as part of that transaction. We will notify you
              before your personal information is transferred and becomes subject
              to a different privacy policy.
            </li>
          </ul>

          <h2>5. Data Retention &amp; Security</h2>
          <p>
            We retain personal information for as long as necessary to fulfil
            the purposes described in this policy, or as required by applicable
            law. When we no longer need your information, we will securely
            delete or anonymise it.
          </p>
          <p>
            We take reasonable technical and organisational measures to protect
            your information from unauthorised access, loss, or misuse. However,
            no method of transmission over the internet or electronic storage is
            completely secure. We cannot guarantee absolute security, and you
            use our Services at your own risk.
          </p>

          <h2>6. Your Rights &amp; Choices</h2>
          <p>
            Depending on where you are located, you may have certain rights
            regarding your personal information, including:
          </p>
          <ul>
            <li>
              <strong>Access:</strong> Request a copy of the personal
              information we hold about you.
            </li>
            <li>
              <strong>Correction:</strong> Request that we correct inaccurate or
              incomplete information.
            </li>
            <li>
              <strong>Deletion:</strong> Request that we delete your personal
              information, subject to certain legal exceptions.
            </li>
            <li>
              <strong>Objection / restriction:</strong> Object to or request
              that we restrict certain processing of your information.
            </li>
            <li>
              <strong>Portability:</strong> Request a machine-readable copy of
              your information in certain circumstances.
            </li>
          </ul>
          <p>
            To exercise any of these rights, please contact us at{" "}
            <a href="mailto:privacy@neurality.dev">privacy@neurality.dev</a>. We
            will respond to your request within 30 days.
          </p>

          <h2>7. Children&apos;s Privacy</h2>
          <p>
            Our Services are not directed to children under the age of 13 (or a
            higher minimum age where required by local law). We do not knowingly
            collect personal information from children. If you believe we have
            inadvertently collected information from a child, please contact us
            and we will promptly delete it.
          </p>

          <h2>8. Changes to This Policy</h2>
          <p>
            We may update this Privacy Policy from time to time. When we do, we
            will revise the &quot;Effective date&quot; at the top of this page
            and, where appropriate, notify you by email or through a notice in
            our Services. We encourage you to review this policy periodically.
            Your continued use of the Services after changes become effective
            constitutes your acceptance of the updated policy.
          </p>

          <h2>9. Contact</h2>
          <p>
            If you have questions or concerns about this Privacy Policy or our
            data practices, please contact us at:
          </p>
          <p>
            <strong>Neurality-Inc</strong>
            <br />
            Email: <a href="mailto:privacy@neurality.dev">privacy@neurality.dev</a>
          </p>
        </div>
      </main>
      <Footer />
      <BackToTop />
    </>
  );
}
