import { Container } from "@/components/ui/Container";
import { SystemLabel } from "@/components/ui/SystemLabel";

const capabilities = [
  {
    number: "01",
    title: "Websites",
    description:
      "Modern business websites with clear structure, fast loading and credible presentation.",
  },
  {
    number: "02",
    title: "Web Apps",
    description:
      "Custom tools, portals and platforms built around specific workflows.",
  },
  {
    number: "03",
    title: "AI Systems",
    description:
      "Assistants, automations and AI-powered features that reduce manual work.",
  },
  {
    number: "04",
    title: "Infrastructure",
    description:
      "Payments, analytics, SEO foundations, hosting, domains and support.",
  },
];

export function CapabilitySystem() {
  return (
    <section className="border-t border-black/10 bg-off-white py-24 text-[#0a0a0e] lg:py-32">
      <Container>
        <div className="grid gap-8 border-b border-black/10 pb-10 lg:grid-cols-[1fr_auto] lg:items-end">
          <div>
            <SystemLabel className="text-[#3d9aad]">Section 03</SystemLabel>
            <h2 className="mt-4 text-4xl font-medium leading-[1.06] tracking-[-0.02em] sm:text-5xl lg:text-[3.25rem]">
              Capability system
            </h2>
            <p className="mt-5 max-w-xl text-[17px] leading-relaxed text-off-white-muted lg:text-lg">
              Design, development and digital infrastructure handled as one
              build.
            </p>
          </div>
          <p className="font-mono text-sm text-off-white-muted">
            04 modules loaded
          </p>
        </div>

        <div className="mt-10 grid gap-px bg-black/10 sm:grid-cols-2">
          {capabilities.map((capability) => (
            <div
              key={capability.number}
              className="relative bg-off-white p-8 sm:p-10 lg:p-12"
            >
              <span
                aria-hidden
                className="pointer-events-none absolute top-6 right-6 font-mono text-[4rem] leading-none font-medium text-black/[0.04] sm:text-[5rem] lg:top-8 lg:right-8 lg:text-[6rem]"
              >
                {capability.number}
              </span>

              <p className="font-mono text-sm text-[#3d9aad]">
                {capability.number}
              </p>

              <h3 className="mt-6 text-2xl font-medium tracking-tight sm:text-3xl lg:text-[2rem]">
                {capability.title}
              </h3>

              <p className="mt-5 max-w-md text-[17px] leading-relaxed text-off-white-muted lg:text-lg">
                {capability.description}
              </p>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
