import Link from "next/link";

const navLinks = [
  { href: "#work", label: "Work" },
  { href: "#capabilities", label: "Capabilities" },
  { href: "#process", label: "Process" },
  { href: "#contact", label: "Contact" },
];

export function Header() {
  return (
    <header className="site-header">
      <nav className="nav">
        <Link href="/" className="logo">
          <span className="logo-mark">TDev</span>
          <span className="logo-tag">Digital Systems</span>
        </Link>

        <ul className="nav-links">
          {navLinks.map((link) => (
            <li key={link.href}>
              <Link href={link.href}>{link.label}</Link>
            </li>
          ))}
        </ul>

        <Link href="#contact" className="nav-cta">
          Book a call
        </Link>
      </nav>
    </header>
  );
}
