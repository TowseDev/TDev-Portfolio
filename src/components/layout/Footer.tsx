import Link from "next/link";
import { SITE_EMAIL } from "@/lib/site";

const studioLinks = [
  { href: "/work", label: "Work" },
  { href: "/services", label: "Capabilities" },
  { href: "/process", label: "Process" },
];

const serviceLinks = [
  { href: "/services#website-development", label: "Website Development" },
  { href: "/services#custom-web-apps", label: "Custom Web Apps" },
  { href: "/services#digital-marketing", label: "Digital Marketing" },
  {
    href: "/services#ai-search-visibility",
    label: "AI Search Visibility",
  },
  {
    href: "/services#infrastructure-support",
    label: "Infrastructure & Support",
  },
];

const connectLinks = [
  { href: `mailto:${SITE_EMAIL}`, label: SITE_EMAIL },
  { href: "/contact", label: "Contact" },
  { href: "/privacy-policy", label: "Privacy Policy" },
];

export function Footer() {
  return (
    <footer className="site-footer sheet-container">
      <div className="foot-top">
        <div className="foot-brand">
          <Link href="/" className="logo">
            <span className="logo-mark">TDev</span>
            <span className="logo-tag">Digital Systems</span>
          </Link>
          <p className="foot-tag">
            TDev Digital is a UK digital studio helping small businesses build
            credible websites, practical web apps, marketing systems and clearer
            digital infrastructure.
          </p>
        </div>

        <div className="foot-col">
          <h4>Studio</h4>
          <ul>
            {studioLinks.map((link) => (
              <li key={link.label}>
                <Link href={link.href}>{link.label}</Link>
              </li>
            ))}
          </ul>
        </div>

        <div className="foot-col">
          <h4>Services</h4>
          <ul>
            {serviceLinks.map((link) => (
              <li key={link.label}>
                <Link href={link.href}>{link.label}</Link>
              </li>
            ))}
          </ul>
        </div>

        <div className="foot-col">
          <h4>Connect</h4>
          <ul>
            {connectLinks.map((link) => (
              <li key={link.label}>
                <Link href={link.href}>{link.label}</Link>
              </li>
            ))}
          </ul>
        </div>
      </div>

      <div className="foot-bot">
        <span>© 2026 TDev Digital. All rights reserved</span>
        <span>Designed and built in the UK</span>
      </div>
    </footer>
  );
}
