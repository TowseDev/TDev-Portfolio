import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Button } from "@/components/ui/Button";
import {
  getServicePageBySlug,
  servicePages,
} from "@/data/servicePages";
import { SectionRule } from "@/components/ui/SectionRule";

type ServicePageProps = {
  params: Promise<{ slug: string }>;
};

export async function generateStaticParams() {
  return servicePages.map((service) => ({ slug: service.slug }));
}

export async function generateMetadata({
  params,
}: ServicePageProps): Promise<Metadata> {
  const { slug } = await params;
  const service = getServicePageBySlug(slug);

  if (!service) {
    return { title: "Service not found" };
  }

  return {
    title: service.title,
    description: service.description,
  };
}

export default async function ServiceDetailPage({ params }: ServicePageProps) {
  const { slug } = await params;
  const service = getServicePageBySlug(slug);

  if (!service) {
    notFound();
  }

  return (
    <section className="sheet-container policy-page">
      <SectionRule code={service.code} name="Services" meta={service.title} />

      <header className="policy-header">
        <h1 className="policy-title">{service.title}</h1>
        <p className="policy-updated">{service.code}</p>
      </header>

      <article className="policy-content">
        <p>{service.description}</p>

        <h2>Typical stack</h2>
        <ul>
          {service.stack.map((item) => (
            <li key={item}>{item}</li>
          ))}
        </ul>

        <p>This page is being built. Full service details will be added soon.</p>

        <p>
          <Link href="/services">View all services</Link>
          {" · "}
          <Link href="/contact">Book a call</Link>
        </p>

        <Button href="mailto:contact@towseddev.com" variant="solid">
          Email the brief
        </Button>
      </article>
    </section>
  );
}
