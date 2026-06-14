import { Container } from "@/components/ui/Container";
import { SystemLabel } from "@/components/ui/SystemLabel";

const steps = [
  {
    number: "01",
    title: "Diagnose",
    description: "Understand the business problem, constraints and what success looks like.",
  },
  {
    number: "02",
    title: "Structure",
    description: "Map pages, flows, data and technical requirements before design.",
  },
  {
    number: "03",
    title: "Design",
    description: "Define layout, interface and content hierarchy with clear intent.",
  },
  {
    number: "04",
    title: "Develop",
    description: "Build in focused sprints with regular checkpoints and visible progress.",
  },
  {
    number: "05",
    title: "Launch",
    description: "Deploy, test, document and hand over a working system.",
  },
  {
    number: "06",
    title: "Improve",
    description: "Refine, automate and extend as the business evolves.",
  },
];

export function BuildProcess() {
  return (
    <section className="border-t border-border bg-background py-24 lg:py-32">
      <Container>
        <div className="border-b border-border pb-10">
          <SystemLabel className="text-accent">Section 04</SystemLabel>
          <h2 className="mt-4 text-4xl font-medium leading-[1.06] tracking-[-0.02em] sm:text-5xl lg:text-[3.25rem]">
            Build sequence
          </h2>
        </div>

        <div className="mt-10 overflow-x-auto">
          <ol className="flex min-w-[720px] gap-0">
            {steps.map((step, index) => (
              <li
                key={step.number}
                className={`relative flex flex-1 flex-col border border-border bg-panel px-5 py-6 ${
                  index > 0 ? "border-l-0" : ""
                }`}
              >
                {index < steps.length - 1 && (
                  <span
                    aria-hidden
                    className="absolute top-1/2 -right-px z-10 hidden h-px w-px bg-accent lg:block"
                  />
                )}

                <span className="font-mono text-sm text-accent">
                  {step.number}
                </span>

                <h3 className="mt-4 text-lg font-medium tracking-tight text-foreground sm:text-xl">
                  {step.title}
                </h3>

                <p className="mt-3 text-[15px] leading-relaxed text-muted">
                  {step.description}
                </p>
              </li>
            ))}
          </ol>
        </div>
      </Container>
    </section>
  );
}
