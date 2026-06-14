import type { Metadata } from "next";
import Link from "next/link";
import { Button } from "@/components/ui/Button";
import { SectionRule } from "@/components/ui/SectionRule";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Book a call or send a brief to TDev Digital about your website, web app or marketing system.",
};

export default function ContactPage() {
  return (
    <section className="sheet-container policy-page">
      <SectionRule code="§05" name="Contact" meta="Start a build" />

      <header className="policy-header">
        <h1 className="policy-title">Book a call or send a brief</h1>
        <p className="policy-updated">Direct contact</p>
      </header>

      <article className="policy-content">
        <p>
          Tell us about the website, web app, marketing system or technical
          problem you need help with.
        </p>

        <h2>Primary contact</h2>
        <p>
          <a href="mailto:contact@towseddev.com">contact@towseddev.com</a>
        </p>

        <p>
          We typically respond within 1–2 business days. If you do not have a
          booking link yet, email is the fastest way to start.
        </p>

        <p>
          <Button href="mailto:contact@towseddev.com" variant="solid" showArrow>
            Email the brief
          </Button>
        </p>

        <p>
          Prefer to review our work first?{" "}
          <Link href="/work">View selected projects</Link>.
        </p>
      </article>
    </section>
  );
}
