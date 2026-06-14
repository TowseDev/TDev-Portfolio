import type { Metadata } from "next";
import { Button } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { services } from "@/data/services";

export const metadata: Metadata = {
  title: "Services",
  description:
    "Web development, design, custom software, and e-commerce services from TDev Digital.",
};

export default function ServicesPage() {
  return (
    <section className="py-24 lg:py-32">
      <Container>
        <SectionHeader
          eyebrow="Services"
          title="What we help teams build"
          description="Focused capabilities across design and engineering — structured for projects that need to look premium and work reliably."
        />

        <div className="mt-14 space-y-6">
          {services.map((service, index) => (
            <article
              key={service.slug}
              className="rounded-2xl border border-border bg-surface p-6 sm:p-10"
            >
              <div className="flex flex-col gap-6 lg:flex-row lg:items-start lg:justify-between">
                <div className="max-w-2xl">
                  <p className="font-mono text-sm text-accent">
                    {String(index + 1).padStart(2, "0")}
                  </p>
                  <h2 className="mt-3 text-2xl font-medium tracking-tight text-foreground sm:text-3xl">
                    {service.title}
                  </h2>
                  <p className="mt-4 text-base leading-relaxed text-muted sm:text-lg">
                    {service.description}
                  </p>
                </div>

                <ul className="min-w-[240px] space-y-3 rounded-xl border border-border bg-background/40 p-5">
                  {service.deliverables.map((item) => (
                    <li
                      key={item}
                      className="flex items-start gap-3 text-sm text-muted"
                    >
                      <span className="mt-1.5 h-1 w-1 shrink-0 rounded-full bg-accent" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </article>
          ))}
        </div>

        <div className="mt-16 rounded-2xl border border-border bg-accent-muted p-8 sm:p-10">
          <h3 className="text-2xl font-medium tracking-tight text-foreground">
            Not sure where to start?
          </h3>
          <p className="mt-3 max-w-2xl text-base leading-relaxed text-muted">
            Share your goals and we&apos;ll recommend the right scope — from a
            focused landing page to a full product build.
          </p>
          <div className="mt-6">
            <Button href="/contact">Book a conversation</Button>
          </div>
        </div>
      </Container>
    </section>
  );
}
