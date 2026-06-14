import Link from "next/link";

const studioLinks = [
  { href: "#work", label: "Work" },
  { href: "#capabilities", label: "Capabilities" },
  { href: "#process", label: "Process" },
];

const serviceLinks = [
  { href: "#capabilities", label: "Website Development" },
  { href: "#capabilities", label: "Custom Web Apps" },
  { href: "#capabilities", label: "Digital Marketing" },
  { href: "#capabilities", label: "Infrastructure & Support" },
];

const connectLinks = [
  { href: "mailto:hello@tdevdigital.com", label: "Email us" },
  { href: "https://linkedin.com", label: "LinkedIn" },
  { href: "https://github.com", label: "GitHub" },
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
            A digital studio building websites, web apps and marketing systems
            for businesses that need practical technical support.
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
        <span>© 2026 TDev Digital — All rights reserved</span>
        <span>Designed and built in the UK</span>
      </div>
    </footer>
  );
}
