import { Link } from "react-router-dom";
import LegalPageShell from "@/components/marketing/LegalPageShell";

const LAST_UPDATED = "June 19, 2026";

const PrivacyPolicy = () => {
  return (
    <LegalPageShell
      title="Privacy Policy"
      description="Learn how Shyara Digital collects, uses, stores, and protects your personal information when you use our website and digital invitation services."
      canonicalPath="/privacy-policy"
      lastUpdated={LAST_UPDATED}
    >
      <p>
        Shyara Digital (&quot;we,&quot; &quot;us,&quot; or &quot;our&quot;) is a brand operated by{" "}
        <strong>Shyara Tech Solutions</strong>, based in Patna, Bihar, India. We create custom
        digital invitation videos, PDF cards, and invitation websites for weddings and
        celebrations.
      </p>
      <p>
        This Privacy Policy explains how we collect, use, disclose, and safeguard personal
        information when you visit{" "}
        <a href="https://digital.shyara.co.in">digital.shyara.co.in</a> (the &quot;Website&quot;),
        contact us, or use our services. By using our Website or services, you agree to the
        practices described in this policy.
      </p>

      <h2>1. Information We Collect</h2>

      <h3>1.1 Information You Provide Directly</h3>
      <p>When you contact us or place an order, we may collect:</p>
      <ul>
        <li>Name, email address, and phone number</li>
        <li>Event details (date, venue, names, preferences)</li>
        <li>Photos, videos, and other content you share for your invitation</li>
        <li>Payment-related information (transaction references; we do not store full card details on our servers)</li>
        <li>Messages sent via our contact form, email, WhatsApp, or phone</li>
        <li>RSVP and guest information when you use our invitation website services</li>
      </ul>

      <h3>1.2 Information Collected Automatically</h3>
      <p>When you visit our Website, we and our service providers may automatically collect:</p>
      <ul>
        <li>IP address, browser type, device type, and operating system</li>
        <li>Pages viewed, time spent, referring URLs, and general location (city/country level)</li>
        <li>Cookie identifiers and similar tracking technologies (see Section 6)</li>
      </ul>

      <h3>1.3 Information from Third Parties</h3>
      <p>
        We may receive limited information from payment processors, analytics providers, and
        social media platforms when you interact with our content or links on those platforms.
      </p>

      <h2>2. How We Use Your Information</h2>
      <p>We use personal information to:</p>
      <ul>
        <li>Provide, customize, and deliver digital invitation services</li>
        <li>Communicate with you about orders, revisions, and support</li>
        <li>Process payments and maintain business records</li>
        <li>Improve our Website, services, and user experience</li>
        <li>Analyze Website traffic and measure marketing performance</li>
        <li>Comply with legal obligations and protect our rights</li>
        <li>Send service-related updates (we do not sell your data for third-party marketing)</li>
      </ul>

      <h2>3. Legal Basis for Processing</h2>
      <p>Depending on your location and the context, we process personal data based on:</p>
      <ul>
        <li>
          <strong>Contract:</strong> to fulfill orders and deliver services you request
        </li>
        <li>
          <strong>Consent:</strong> where required (e.g., non-essential cookies, marketing communications)
        </li>
        <li>
          <strong>Legitimate interests:</strong> to operate and improve our business, prevent fraud, and ensure security
        </li>
        <li>
          <strong>Legal obligation:</strong> to comply with applicable laws and regulations
        </li>
      </ul>
      <p>
        For users in India, we process personal data in accordance with the Digital Personal
        Data Protection Act, 2023 (DPDP Act) and applicable rules.
      </p>

      <h2>4. How We Share Your Information</h2>
      <p>We do not sell your personal information. We may share information with:</p>
      <ul>
        <li>
          <strong>Service providers</strong> who help us operate our business (hosting, analytics,
          email, payment processing), subject to confidentiality obligations
        </li>
        <li>
          <strong>Google LLC</strong> for website analytics via Google Analytics (Measurement ID: G-EVDNV486J2)
        </li>
        <li>
          <strong>Legal authorities</strong> when required by law, court order, or to protect rights and safety
        </li>
        <li>
          <strong>Business transfers</strong> in connection with a merger, acquisition, or sale of assets
        </li>
      </ul>
      <p>
        Content you provide for invitations (names, photos, event details) is used solely to
        create your deliverables and is not shared publicly unless you choose to share the
        finished invitation.
      </p>

      <h2>5. International Data Transfers</h2>
      <p>
        We are based in India and serve clients worldwide. Your information may be processed in
        India and in countries where our service providers operate (including the United States
        for Google Analytics). Where required, we implement appropriate safeguards for
        cross-border transfers.
      </p>

      <h2>6. Cookies and Analytics</h2>
      <p>Our Website uses cookies and similar technologies to:</p>
      <ul>
        <li>Remember preferences and improve functionality</li>
        <li>Understand how visitors use our Website through Google Analytics</li>
      </ul>
      <p>
        <strong>Google Analytics:</strong> We use Google Analytics to collect aggregated usage
        statistics. Google may use cookies and collect data such as your IP address. Learn more at{" "}
        <a href="https://policies.google.com/privacy" target="_blank" rel="noopener noreferrer">
          Google&apos;s Privacy Policy
        </a>{" "}
        and opt out via the{" "}
        <a
          href="https://tools.google.com/dlpage/gaoptout"
          target="_blank"
          rel="noopener noreferrer"
        >
          Google Analytics Opt-out Browser Add-on
        </a>
        .
      </p>
      <p>
        You can control cookies through your browser settings. Disabling cookies may affect
        some Website features.
      </p>

      <h2>7. Data Retention</h2>
      <p>We retain personal information only as long as necessary for the purposes described in this policy, including:</p>
      <ul>
        <li>Active orders and client communications: for the duration of the project and a reasonable period afterward for support</li>
        <li>Business and tax records: as required by applicable law (typically up to 7 years in India)</li>
        <li>Analytics data: per Google Analytics default retention settings or as configured by us</li>
        <li>Contact form inquiries: until the inquiry is resolved and for follow-up as needed</li>
      </ul>
      <p>We securely delete or anonymize data when it is no longer needed.</p>

      <h2>8. Data Security</h2>
      <p>
        We implement reasonable technical and organizational measures to protect your
        information against unauthorized access, alteration, disclosure, or destruction.
        However, no method of transmission over the Internet is 100% secure, and we cannot
        guarantee absolute security.
      </p>

      <h2>9. Your Rights and Choices</h2>
      <p>Depending on applicable law, you may have the right to:</p>
      <ul>
        <li>Access the personal data we hold about you</li>
        <li>Request correction of inaccurate or incomplete data</li>
        <li>Request deletion of your data (subject to legal retention requirements)</li>
        <li>Withdraw consent where processing is consent-based</li>
        <li>Object to or restrict certain processing</li>
        <li>File a complaint with a data protection authority</li>
      </ul>
      <p>
        Under India&apos;s DPDP Act, you may exercise your rights as a Data Principal by contacting
        us using the details below. We will respond within the timeframes required by law.
      </p>
      <p>
        For users in the European Economic Area (EEA) or UK, you have additional rights under
        GDPR/UK GDPR. For California residents, you may have rights under the CCPA/CPRA,
        including the right to know what personal information we collect and the right to
        request deletion. We do not sell personal information.
      </p>

      <h2>10. Children&apos;s Privacy</h2>
      <p>
        Our Website and services are not directed to children under 13 (or 16 in the EEA).
        We do not knowingly collect personal information from children. If you believe a child
        has provided us personal information, please contact us and we will delete it promptly.
      </p>

      <h2>11. Third-Party Links and Embeds</h2>
      <p>
        Our Website may contain links to third-party sites (Instagram, Facebook, YouTube,
        WhatsApp) and embedded content (YouTube videos, Google Maps). We are not responsible
        for the privacy practices of those third parties. We encourage you to review their
        privacy policies.
      </p>

      <h2>12. Changes to This Policy</h2>
      <p>
        We may update this Privacy Policy from time to time. The &quot;Last updated&quot; date at the top
        indicates when changes were last made. Material changes will be posted on this page.
        Continued use of our Website after changes constitutes acceptance of the updated policy.
      </p>

      <h2>13. Contact Us / Grievance Officer</h2>
      <p>
        For privacy-related questions, requests, or complaints, contact:
      </p>
      <ul>
        <li>
          <strong>Shyara Digital</strong> (Shyara Tech Solutions)
        </li>
        <li>Email: <a href="mailto:shyaradigital@gmail.com">shyaradigital@gmail.com</a></li>
        <li>Phone: <a href="tel:+919584661610">+91 95846 61610</a></li>
        <li>Address: Patna, Bihar, India</li>
        <li>Website: <a href="https://digital.shyara.co.in">https://digital.shyara.co.in</a></li>
      </ul>
      <p>
        We will acknowledge grievances within 24 hours and aim to resolve them within 30 days,
        or as required under applicable law.
      </p>
      <p>
        See also our{" "}
        <Link to="/terms-of-service" className="text-primary hover:underline">
          Terms of Service
        </Link>
        .
      </p>
    </LegalPageShell>
  );
};

export default PrivacyPolicy;
