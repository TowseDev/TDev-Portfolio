import { Container } from "@/components/ui/Container";

const capabilities = [
  "Websites",
  "WordPress",
  "Web Apps",
  "AI Tools",
  "Stripe",
  "SEO",
  "Automation",
];

export function ProofStrip() {
  return (
    <section className="border-b border-border bg-surface py-6">
      <Container>
        <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
          <span className="shrink-0 font-mono text-[10px] uppercase tracking-[0.18em] text-muted/60">
            Capabilities
          </span>
          <ul className="flex flex-wrap items-center gap-x-1 gap-y-2">
            {capabilities.map((item, index) => (
              <li key={item} className="flex items-center">
                {index > 0 ? (
                  <span
                    aria-hidden
                    className="mx-3 hidden h-px w-6 bg-border sm:block"
                  />
                ) : null}
                <span className="font-mono text-xs tracking-wide text-muted">
                  {item}
                </span>
              </li>
            ))}
          </ul>
        </div>
      </Container>
    </section>
  );
}
