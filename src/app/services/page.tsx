import type { Metadata } from "next";
import Link from "next/link";
import { Button } from "@/components/ui/Button";
import { JsonLd } from "@/components/seo/JsonLd";
import { SectionRule } from "@/components/ui/SectionRule";
import { aiSearchVisibilityFaqs } from "@/data/aiSearchVisibilityFaqs";
import {
  getServiceHref,
  serviceIndexItems,
  serviceModules,
  workingMethodSteps,
} from "@/data/servicesPageContent";
import { createPageMetadata } from "@/lib/metadata";
import {
  breadcrumbSchema,
  faqPageSchema,
  serviceSchemas,
} from "@/lib/schema";

export const metadata: Metadata = createPageMetadata({
  title: "Services",
  description:
    "Website development, custom web apps, digital marketing systems, AI search visibility and technical support for small businesses.",
  path: "/services",
});

function ServiceList({
  label,
  items,
}: {
  label: string;
  items: string[];
}) {
  return (
    <div className="services-module-block">
      <span className="services-module-label">{label}</span>
      <ul className="services-module-list">
        {items.map((item) => (
          <li key={item}>{item}</li>
        ))}
      </ul>
    </div>
  );
}

function AiSearchVisibilityFaq() {
  return (
    <div className="services-module-block services-module-block--outcome services-faq">
      <span className="services-module-label">Common questions</span>
      <div className="services-faq-list">
        {aiSearchVisibilityFaqs.map((faq) => (
          <div key={faq.question} className="services-faq-item">
            <h3 className="services-faq-question">{faq.question}</h3>
            <p className="services-module-outcome">{faq.answer}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default function ServicesPage() {
  return (
    <div className="services-page">
      <JsonLd
        data={[
          breadcrumbSchema([
            { name: "Home", path: "/" },
            { name: "Services", path: "/services" },
          ]),
          ...serviceSchemas(),
          faqPageSchema(aiSearchVisibilityFaqs),
        ]}
      />

      <section className="sheet-container services-hero">
        <SectionRule code="§01" name="Capabilities" meta="05 Services" />

        <header className="services-header">
          <h1 className="services-title">Services</h1>
          <p className="services-eyebrow">What we help businesses build</p>
        </header>

        <p className="services-intro">
          Focused digital capabilities across websites, web apps, marketing
          systems and technical infrastructure, structured for businesses that
          need their online presence to look credible, generate enquiries and
          work reliably.
        </p>

        <div className="services-index" role="table" aria-label="Capability index">
          <div className="services-index-head" role="row">
            <span className="services-index-head-num" aria-hidden="true" />
            <span className="services-index-head-cell" role="columnheader">
              Service
            </span>
            <span className="services-index-head-cell" role="columnheader">
              Summary
            </span>
            <span className="services-index-head-cell services-index-head-cell--link" role="columnheader">
              Ref
            </span>
          </div>

          {serviceIndexItems.map((item) => (
            <Link
              key={item.slug}
              href={getServiceHref(item.slug)}
              className="services-index-row"
              role="row"
            >
              <span className="services-index-marker" aria-hidden="true" />
              <span className="services-index-num">{item.num}</span>
              <span className="services-index-title">{item.title}</span>
              <span className="services-index-summary">{item.summary}</span>
              <span className="services-index-ref">View</span>
            </Link>
          ))}
        </div>
      </section>

      <section className="sheet-container services-modules" aria-label="Service details">
        {serviceModules.map((module) => (
          <article
            key={module.id}
            id={module.id}
            className="services-module"
          >
            <div className="services-module-left">
              <span className="services-module-num">{module.num}</span>
              <h2 className="services-module-title">{module.title}</h2>
              <p className="services-module-summary">{module.summary}</p>
            </div>

            <div className="services-module-right">
              <ServiceList label="Best for" items={module.bestFor} />
              <ServiceList label="What we handle" items={module.deliverables} />
              <div className="services-module-block services-module-block--outcome">
                <span className="services-module-label">Outcome</span>
                <p className="services-module-outcome">{module.outcome}</p>
              </div>
              {module.id === "ai-search-visibility" ? (
                <AiSearchVisibilityFaq />
              ) : null}
            </div>
          </article>
        ))}
      </section>

      <section className="sheet-container services-method">
        <SectionRule code="§02" name="Working method" meta="Practical delivery" />

        <header className="services-method-header">
          <h2 className="services-method-title">
            Built around the problem, not the package.
          </h2>
          <p className="services-method-intro">
            Most businesses do not need a bloated digital project. They need the
            right technical pieces planned properly, built cleanly and connected
            so the website, tools and marketing activity work together.
          </p>
        </header>

        <div className="services-method-rows">
          {workingMethodSteps.map((step) => (
            <div key={step.num} className="services-method-row">
              <span className="services-method-num">{step.num}</span>
              <div className="services-method-content">
                <h3 className="services-method-step-title">{step.title}</h3>
                <p className="services-method-step-desc">{step.description}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="sheet-container cta services-cta">
        <div className="cta-inner">
          <h2 className="cta-title">
            Need a website, app or digital system that works properly?
          </h2>

          <p className="cta-sub">
            Send the brief, the broken process or the outdated setup.
            We&apos;ll help work out the clearest next step and shape it into a
            practical build plan.
          </p>

          <div className="hero-actions cta-actions">
            <Button href="/contact" variant="solid" showArrow>
              Book a call
            </Button>
            <Button href="/work" variant="line">
              View work
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}
