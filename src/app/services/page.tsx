import type { Metadata } from "next";
import Link from "next/link";
import { Button } from "@/components/ui/Button";
import { servicePages } from "@/data/servicePages";
import { SectionRule } from "@/components/ui/SectionRule";

export const metadata: Metadata = {
  title: "Services",
  description:
    "Website development, custom web apps, digital marketing systems and technical support from TDev Digital.",
};

export default function ServicesPage() {
  return (
    <section className="sheet-container policy-page">
      <SectionRule code="§01" name="Capabilities" meta="04 services" />

      <header className="policy-header">
        <h1 className="policy-title">Services</h1>
        <p className="policy-updated">What we help businesses build</p>
      </header>

      <article className="policy-content">
        <p>
          Focused capabilities across design and engineering — structured for
          projects that need to look credible and work reliably.
        </p>

        {servicePages.map((service) => (
          <div key={service.slug}>
            <h2>
              <Link href={`/services/${service.slug}`}>{service.title}</Link>
            </h2>
            <p>{service.description}</p>
          </div>
        ))}

        <p>
          <Button href="/contact" variant="solid" showArrow>
            Book a call
          </Button>
        </p>
      </article>
    </section>
  );
}
