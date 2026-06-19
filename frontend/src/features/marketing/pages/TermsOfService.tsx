import { Link } from "react-router-dom";
import LegalPageShell from "@/components/marketing/LegalPageShell";

const LAST_UPDATED = "June 19, 2026";

const TermsOfService = () => {
  return (
    <LegalPageShell
      title="Terms of Service"
      description="Read the terms and conditions governing your use of Shyara Digital's website and custom digital invitation services, including orders, payments, revisions, and intellectual property."
      canonicalPath="/terms-of-service"
      lastUpdated={LAST_UPDATED}
    >
      <p>
        These Terms of Service (&quot;Terms&quot;) govern your access to and use of the website{" "}
        <a href="https://digital.shyara.co.in">digital.shyara.co.in</a> and the digital
        invitation services offered by <strong>Shyara Digital</strong>, a brand operated by{" "}
        <strong>Shyara Tech Solutions</strong> (&quot;we,&quot; &quot;us,&quot; or &quot;our&quot;),
        based in Patna, Bihar, India.
      </p>
      <p>
        By accessing our Website, contacting us, or placing an order, you agree to these Terms.
        If you do not agree, please do not use our Website or services.
      </p>

      <h2>1. Services</h2>
      <p>Shyara Digital provides custom digital invitation services, including but not limited to:</p>
      <ul>
        <li>Animated video invitations (delivered as MP4 files)</li>
        <li>Digital PDF invitation cards</li>
        <li>Custom invitation websites with RSVP, guest management, and related features</li>
        <li>Design revisions as agreed per order</li>
      </ul>
      <p>
        Service scope, deliverables, timelines, and pricing are confirmed on a per-order basis
        via WhatsApp, email, or other agreed communication channels before work begins.
      </p>

      <h2>2. Eligibility</h2>
      <p>
        You must be at least 18 years old (or the age of majority in your jurisdiction) to place
        an order. By using our services, you represent that you have the legal capacity to enter
        into a binding agreement.
      </p>

      <h2>3. Orders and Acceptance</h2>
      <ul>
        <li>An order is confirmed only after we acknowledge it and receive any required advance payment.</li>
        <li>You are responsible for providing accurate event details, names, dates, venues, and content.</li>
        <li>We reserve the right to decline orders that violate law, infringe third-party rights, or conflict with our values.</li>
        <li>Estimated delivery times (typically 24–48 hours for standard orders) are indicative and may vary based on complexity and workload.</li>
      </ul>

      <h2>4. Client Content and Responsibilities</h2>
      <p>When you provide photos, videos, text, music requests, or other materials (&quot;Client Content&quot;), you represent and warrant that:</p>
      <ul>
        <li>You own the Client Content or have the right to use and authorize us to use it</li>
        <li>The Client Content does not infringe any copyright, trademark, privacy, or other rights</li>
        <li>You have obtained consent from individuals appearing in photos or videos where required</li>
        <li>Music or third-party assets you request comply with applicable licensing rules</li>
      </ul>
      <p>
        You grant us a limited, non-exclusive license to use Client Content solely to create and
        deliver your invitation. We are not responsible for Client Content you supply or for
        claims arising from unauthorized use of third-party materials you request.
      </p>

      <h2>5. Pricing and Payment</h2>
      <ul>
        <li>Pricing is quoted per project based on complexity, type of invitation, and customization level.</li>
        <li>We accept payment via UPI, bank transfer, and cash as agreed at the time of order.</li>
        <li>An advance payment may be required before design work begins; the balance is due before final delivery unless otherwise agreed.</li>
        <li>All prices are quoted in Indian Rupees (INR) unless stated otherwise.</li>
        <li>Prices do not include applicable taxes unless explicitly stated.</li>
      </ul>

      <h2>6. Revisions</h2>
      <p>
        We include reasonable revisions to ensure your satisfaction, as agreed at the time of
        order. Additional revisions beyond the agreed scope may incur extra charges. Revision
        requests must be submitted within a reasonable time after preview delivery.
      </p>

      <h2>7. Delivery and Acceptance</h2>
      <ul>
        <li>Final deliverables are shared via agreed channels (WhatsApp, email, download link, or live URL for websites).</li>
        <li>Upon delivery of final files, you are responsible for reviewing and approving the work.</li>
        <li>Minor display differences may occur across devices and platforms; we optimize for common sharing channels (WhatsApp, social media).</li>
      </ul>

      <h2>8. Refunds and Cancellations</h2>
      <ul>
        <li>
          <strong>Before work begins:</strong> Full refund of any advance paid, minus non-recoverable costs if any materials were procured.
        </li>
        <li>
          <strong>After work has started:</strong> Refunds are evaluated case-by-case. Partial refunds may apply if significant work has not yet been completed.
        </li>
        <li>
          <strong>After final delivery:</strong> Generally no refunds, as custom digital goods are created specifically for you. We will work with you on revisions to address legitimate concerns.
        </li>
        <li>
          <strong>Cancellation by us:</strong> If we cannot fulfill an order, we will provide a full refund of amounts paid.
        </li>
      </ul>
      <p>
        To request a refund or cancellation, contact us at{" "}
        <a href="mailto:shyaradigital@gmail.com">shyaradigital@gmail.com</a> or{" "}
        <a href="tel:+919584661610">+91 95846 61610</a> within 7 days of payment or delivery,
        as applicable.
      </p>

      <h2>9. Intellectual Property</h2>
      <ul>
        <li>
          <strong>Our work:</strong> Upon full payment, you receive a license to use the final
          delivered invitation for personal, non-commercial event purposes (sharing with guests,
          posting on social media, etc.).
        </li>
        <li>
          We retain ownership of our design templates, frameworks, tools, and pre-existing
          creative elements. Custom work created for you is licensed, not sold, unless a
          separate written agreement states otherwise.
        </li>
        <li>
          You may not resell, sublicense, or commercially exploit our designs without written
          permission.
        </li>
        <li>
          We may showcase completed work (with your consent) in our portfolio, samples gallery,
          or marketing materials. You may opt out by informing us in writing.
        </li>
      </ul>

      <h2>10. Invitation Website Services</h2>
      <p>For invitation website orders, additional terms may apply, including:</p>
      <ul>
        <li>Hosting duration and renewal terms as agreed per order</li>
        <li>RSVP data collection handled per our <Link to="/privacy-policy" className="text-primary hover:underline">Privacy Policy</Link></li>
        <li>You are responsible for guest communications and accuracy of event information displayed</li>
        <li>We are not liable for downtime caused by third-party hosting or infrastructure providers beyond our reasonable control</li>
      </ul>

      <h2>11. Prohibited Uses</h2>
      <p>You agree not to:</p>
      <ul>
        <li>Use our services for unlawful, fraudulent, or harmful purposes</li>
        <li>Submit content that is defamatory, obscene, hateful, or infringes others&apos; rights</li>
        <li>Attempt to gain unauthorized access to our systems or other users&apos; data</li>
        <li>Reverse-engineer, scrape, or misuse our Website or deliverables</li>
        <li>Misrepresent your affiliation with Shyara Digital</li>
      </ul>

      <h2>12. Disclaimers</h2>
      <p>
        OUR WEBSITE AND SERVICES ARE PROVIDED &quot;AS IS&quot; AND &quot;AS AVAILABLE.&quot; TO THE FULLEST
        EXTENT PERMITTED BY LAW, WE DISCLAIM ALL WARRANTIES, EXPRESS OR IMPLIED, INCLUDING
        MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE, AND NON-INFRINGEMENT.
      </p>
      <p>
        We do not guarantee uninterrupted Website access, error-free delivery, or compatibility
        with every device or platform. Third-party services (YouTube, Google Maps, WhatsApp,
        payment providers) are subject to their own terms.
      </p>

      <h2>13. Limitation of Liability</h2>
      <p>
        TO THE MAXIMUM EXTENT PERMITTED BY APPLICABLE LAW, SHYARA DIGITAL AND SHYARA TECH
        SOLUTIONS SHALL NOT BE LIABLE FOR ANY INDIRECT, INCIDENTAL, SPECIAL, CONSEQUENTIAL, OR
        PUNITIVE DAMAGES, OR FOR LOSS OF PROFITS, DATA, OR GOODWILL, ARISING FROM YOUR USE OF
        OUR WEBSITE OR SERVICES.
      </p>
      <p>
        OUR TOTAL LIABILITY FOR ANY CLAIM ARISING FROM AN ORDER SHALL NOT EXCEED THE AMOUNT YOU
        PAID US FOR THAT SPECIFIC ORDER.
      </p>

      <h2>14. Indemnification</h2>
      <p>
        You agree to indemnify and hold harmless Shyara Digital, Shyara Tech Solutions, and
        their owners, employees, and agents from claims, damages, and expenses (including
        reasonable legal fees) arising from your Client Content, your breach of these Terms, or
        your misuse of our services.
      </p>

      <h2>15. Governing Law and Dispute Resolution</h2>
      <p>
        These Terms are governed by the laws of India. Any disputes shall be subject to the
        exclusive jurisdiction of the courts in Patna, Bihar, India.
      </p>
      <p>
        Before initiating legal proceedings, we encourage you to contact us to seek an amicable
        resolution. We will make good-faith efforts to resolve disputes within 30 days.
      </p>

      <h2>16. Changes to These Terms</h2>
      <p>
        We may update these Terms from time to time. The &quot;Last updated&quot; date reflects the most
        recent revision. Material changes will be posted on this page. Continued use of our
        Website or services after changes constitutes acceptance of the updated Terms.
      </p>

      <h2>17. Severability</h2>
      <p>
        If any provision of these Terms is found unenforceable, the remaining provisions will
        remain in full force and effect.
      </p>

      <h2>18. Contact</h2>
      <p>For questions about these Terms, contact:</p>
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
        See also our{" "}
        <Link to="/privacy-policy" className="text-primary hover:underline">
          Privacy Policy
        </Link>
        .
      </p>
    </LegalPageShell>
  );
};

export default TermsOfService;
