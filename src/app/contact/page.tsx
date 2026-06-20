import type { Metadata } from "next";
import { Button } from "@/components/ui/Button";
import { JsonLd } from "@/components/seo/JsonLd";
import { SectionRule } from "@/components/ui/SectionRule";
import { createPageMetadata } from "@/lib/metadata";
import { breadcrumbSchema } from "@/lib/schema";

const EMAIL = "contact@towseddev.com";
const MAILTO = `mailto:${EMAIL}?subject=Project%20enquiry%20for%20TDev%20Digital`;

const briefChecklist = [
  "Current website or business name",
  "What you want to build or improve",
  "Main services or products",
  "Any deadline or launch date",
  "Budget range if already known",
  "Examples of sites or systems you like",
];

const nextSteps = [
  {
    num: "01",
    title: "Review",
    description:
      "We look through the brief, website or problem and identify what needs to be clarified.",
  },
  {
    num: "02",
    title: "Recommend",
    description:
      "We suggest the most practical next step, whether that is a website, web app, marketing system, technical fix or smaller discovery phase.",
  },
  {
    num: "03",
    title: "Plan",
    description:
      "If the project is a fit, we shape the work into a clear scope, timeline and build approach.",
  },
];

const projectTypes = [
  {
    title: "Website redesigns",
    description:
      "For businesses with outdated sites, unclear messaging or weak enquiry journeys.",
  },
  {
    title: "New business websites",
    description:
      "For small businesses that need a credible online presence built properly from the start.",
  },
  {
    title: "Custom web apps",
    description:
      "For dashboards, portals, calculators, workflows and tools that reduce manual admin.",
  },
  {
    title: "Marketing systems",
    description:
      "For landing pages, SEO foundations, analytics, tracking and campaign support.",
  },
  {
    title: "Technical setup",
    description:
      "For domains, hosting, forms, email, payments, migrations and ongoing website support.",
  },
];

export const metadata: Metadata = createPageMetadata({
  title: "Contact",
  description:
    "Contact TDev Digital to discuss a website, web app, marketing system, technical setup or AI search visibility project.",
  path: "/contact",
});

export default function ContactPage() {
  return (
    <div className="contact-page">
      <JsonLd
        data={breadcrumbSchema([
          { name: "Home", path: "/" },
          { name: "Contact", path: "/contact" },
        ])}
      />

      <section className="sheet-container contact-hero">
        <SectionRule code="§01" name="Contact" meta="Start a build" />

        <header className="contact-header">
          <h1 className="contact-title">Book a call or send a brief</h1>
          <p className="contact-eyebrow">Direct contact</p>
        </header>

        <p className="contact-intro">
          TDev Digital is a UK digital studio helping small businesses with
          websites, custom web apps, marketing systems, digital infrastructure
          and AI search visibility. Tell us about the project or technical
          problem you need help with. If the brief is rough, send it anyway.
          The first step is working out what needs to be built, fixed or
          improved.
        </p>

        <div className="contact-action">
          <div className="contact-action-col contact-action-col--primary">
            <h2 className="contact-action-title">Start with email</h2>
            <p className="contact-action-copy">
              Send over the project outline, the current website, the problem you
              are trying to solve or anything you already have prepared. We will
              review it and come back with the clearest next step.
            </p>
            <p className="contact-email">
              <a href={`mailto:${EMAIL}`}>{EMAIL}</a>
            </p>
            <div className="contact-action-btn">
              <Button href={MAILTO} variant="solid" showArrow>
                Email the brief
              </Button>
            </div>
            <p className="contact-response">
              Typical response time: 1-2 business days.
            </p>
          </div>

          <div className="contact-action-col contact-action-col--checklist">
            <h2 className="contact-action-title">Useful to include</h2>
            <div className="contact-checklist-block">
              <span className="contact-checklist-label">Brief checklist</span>
              <ul className="contact-checklist">
                {briefChecklist.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section className="sheet-container contact-next">
        <SectionRule code="§02" name="Next steps" meta="Simple process" />

        <header className="contact-section-header">
          <h2 className="contact-section-title">
            What happens after you get in touch
          </h2>
        </header>

        <div className="contact-next-rows">
          {nextSteps.map((step) => (
            <div key={step.num} className="contact-next-row">
              <span className="contact-next-num">{step.num}</span>
              <div className="contact-next-content">
                <h3 className="contact-next-step-title">{step.title}</h3>
                <p className="contact-next-step-desc">{step.description}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="sheet-container contact-fit">
        <SectionRule code="§03" name="Good fit" meta="Project types" />

        <header className="contact-section-header">
          <h2 className="contact-section-title">Projects we can help with</h2>
        </header>

        <div className="contact-fit-grid">
          {projectTypes.map((item) => (
            <article key={item.title} className="contact-fit-item">
              <h3 className="contact-fit-title">{item.title}</h3>
              <p className="contact-fit-desc">{item.description}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="sheet-container cta contact-cta">
        <div className="cta-inner">
          <h2 className="cta-title">Rather check the work first?</h2>

          <p className="cta-sub">
            Review selected projects, case studies and smaller builds before
            sending the brief.
          </p>

          <div className="hero-actions cta-actions">
            <Button href="/work" variant="solid" showArrow>
              View work
            </Button>
          </div>

          <p className="contact-cta-fallback">
            Or email us directly at{" "}
            <a href={`mailto:${EMAIL}`}>{EMAIL}</a>
          </p>
        </div>
      </section>
    </div>
  );
}
