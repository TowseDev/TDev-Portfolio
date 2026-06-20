import type { Metadata } from "next";
import { JsonLd } from "@/components/seo/JsonLd";
import { SectionRule } from "@/components/ui/SectionRule";
import { createPageMetadata } from "@/lib/metadata";
import { breadcrumbSchema } from "@/lib/schema";

export const metadata: Metadata = createPageMetadata({
  title: "Privacy Policy",
  description:
    "Privacy policy for TDev Digital, explaining how personal information is collected, used and protected.",
  path: "/privacy-policy",
});

export default function PrivacyPolicyPage() {
  return (
    <section className="sheet-container policy-page">
      <JsonLd
        data={breadcrumbSchema([
          { name: "Home", path: "/" },
          { name: "Privacy Policy", path: "/privacy-policy" },
        ])}
      />
      <SectionRule
        code="§00"
        name="Privacy Policy"
        meta="TDev Digital · Privacy Notice"
      />

      <header className="policy-header">
        <h1 className="policy-title">Privacy Policy</h1>
        <p className="policy-updated">Last updated: 2026</p>
      </header>

      <article className="policy-content">
        <p>
          TDev Digital respects your privacy and is committed to protecting
          your personal information. This privacy policy explains how we
          collect, use and protect personal information when you use our
          website, contact us, or work with us.
        </p>

        <h2>1. Who we are</h2>
        <p>
          TDev Digital is a UK-based digital studio providing website
          development, custom web apps, digital marketing systems and technical
          support for businesses.
        </p>
        <p>
          For privacy questions, contact us at:{" "}
          <a href="mailto:contact@towseddev.com">contact@towseddev.com</a>
        </p>

        <h2>2. What information we collect</h2>
        <p>We may collect and process the following information:</p>
        <ul>
          <li>Name</li>
          <li>Email address</li>
          <li>Phone number</li>
          <li>Business name</li>
          <li>Website URL</li>
          <li>Project details or enquiry information</li>
          <li>Messages you send to us</li>
          <li>
            Technical information about how you use our website, such as
            analytics and cookie data
          </li>
        </ul>
        <p>
          We only collect information that is relevant to your enquiry,
          project, or use of our website.
        </p>

        <h2>3. How we collect information</h2>
        <p>We collect information when you:</p>
        <ul>
          <li>contact us by email</li>
          <li>communicate with us during a project</li>
          <li>use our website, where analytics or cookies are enabled</li>
        </ul>

        <h2>4. How we use your information</h2>
        <p>We use your information to:</p>
        <ul>
          <li>respond to enquiries</li>
          <li>discuss potential projects</li>
          <li>provide quotes or proposals</li>
          <li>deliver website, app, marketing or support services</li>
          <li>manage client relationships</li>
          <li>improve our website and services</li>
          <li>keep records for business, tax and legal purposes</li>
          <li>maintain website security and performance</li>
        </ul>

        <h2>5. Lawful basis for using your information</h2>
        <p>
          We rely on different lawful bases depending on how we use your
          information:
        </p>
        <ul>
          <li>
            <strong>Contract:</strong> when we need your information to provide
            a quote, deliver a service, manage a project or communicate with
            you as a client.
          </li>
          <li>
            <strong>Legitimate interests:</strong> when we respond to business
            enquiries, improve our services, maintain website security, or
            manage normal business communications.
          </li>
          <li>
            <strong>Legal obligation:</strong> when we need to keep records for
            tax, accounting or legal reasons.
          </li>
          <li>
            <strong>Consent:</strong> where we ask for permission, such as for
            certain cookies or optional marketing communications.
          </li>
        </ul>

        <h2>6. How long we keep your information</h2>
        <p>
          We only keep personal information for as long as necessary.
        </p>
        <p>
          Enquiry information is usually kept for up to 24 months unless a
          project goes ahead or we need to keep it for business records.
        </p>
        <p>
          Client and project records may be kept for up to 7 years for
          accounting, tax and legal purposes.
        </p>
        <p>
          Website analytics data may be kept according to the settings of the
          analytics provider.
        </p>

        <h2>7. Who we share information with</h2>
        <p>We do not sell your personal information.</p>
        <p>
          We may share information with trusted service providers where
          necessary to run our business and deliver services, such as:
        </p>
        <ul>
          <li>website hosting providers</li>
          <li>email and communication tools</li>
          <li>analytics providers</li>
          <li>payment processors</li>
          <li>project management or document tools</li>
          <li>professional advisers, such as accountants</li>
        </ul>
        <p>
          Where possible, we only share the information needed for the relevant
          purpose.
        </p>

        <h2>8. International transfers</h2>
        <p>
          Some tools or service providers may process data outside the UK. Where
          this happens, we aim to use providers that apply appropriate
          safeguards for international data transfers.
        </p>

        <h2>9. Cookies and analytics</h2>
        <p>
          Our website may use cookies or analytics tools to understand how
          visitors use the site, improve performance and measure marketing
          activity.
        </p>
        <p>Cookies may collect technical information such as:</p>
        <ul>
          <li>pages visited</li>
          <li>time spent on the site</li>
          <li>device and browser type</li>
          <li>referral source</li>
          <li>approximate location</li>
        </ul>
        <p>
          Where required, we will ask for consent before setting non-essential
          cookies.
        </p>

        <h2>10. Marketing communications</h2>
        <p>
          We may contact existing or potential business contacts about relevant
          services where there is a legitimate business interest, or where
          consent has been given.
        </p>
        <p>
          You can ask us to stop sending marketing communications at any time by
          contacting:{" "}
          <a href="mailto:contact@towseddev.com">contact@towseddev.com</a>
        </p>

        <h2>11. Your rights</h2>
        <p>
          Under UK data protection law, you have rights over your personal
          information. These may include the right to:
        </p>
        <ul>
          <li>access the personal information we hold about you</li>
          <li>ask us to correct inaccurate information</li>
          <li>ask us to delete your information</li>
          <li>object to certain types of processing</li>
          <li>ask us to restrict how we use your information</li>
          <li>request a copy of your information</li>
          <li>
            withdraw consent where consent is the lawful basis
          </li>
        </ul>
        <p>
          To exercise your rights, contact:{" "}
          <a href="mailto:contact@towseddev.com">contact@towseddev.com</a>
        </p>

        <h2>12. Security</h2>
        <p>
          We take reasonable steps to protect personal information from loss,
          misuse, unauthorised access or disclosure.
        </p>
        <p>
          No website, email system or online service can be guaranteed
          completely secure, but we aim to use appropriate technical and
          organisational measures to protect the information we handle.
        </p>

        <h2>13. Complaints</h2>
        <p>
          If you have concerns about how we use your personal information,
          please contact us first so we can try to resolve the issue.
        </p>
        <p>
          You also have the right to complain to the Information
          Commissioner&apos;s Office, the UK data protection regulator:{" "}
          <a
            href="https://ico.org.uk/make-a-complaint/"
            rel="noopener noreferrer"
            target="_blank"
          >
            https://ico.org.uk/make-a-complaint/
          </a>
        </p>

        <h2>14. Updates to this policy</h2>
        <p>
          We may update this privacy policy from time to time. The latest
          version will be published on this page.
        </p>
      </article>
    </section>
  );
}
