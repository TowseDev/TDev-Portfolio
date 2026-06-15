import type { Metadata } from "next";
import { Button } from "@/components/ui/Button";
import { SectionRule } from "@/components/ui/SectionRule";
import { processSteps, projectControlSteps } from "@/data/process";

export const metadata: Metadata = {
  title: "Process",
  description:
    "How TDev Digital moves from brief to launch: clarify, plan, build, launch and improve.",
};

function ProcessChecklist({
  label,
  items,
}: {
  label: string;
  items: string[];
}) {
  return (
    <div className="process-module-block">
      <span className="process-module-label">{label}</span>
      <ul className="process-module-list">
        {items.map((item) => (
          <li key={item}>{item}</li>
        ))}
      </ul>
    </div>
  );
}

export default function ProcessPage() {
  return (
    <div className="process-page">
      <section className="sheet-container process-hero">
        <SectionRule code="§01" name="Build sequence" meta="05 Phases" />

        <header className="process-header">
          <h1 className="process-title">Process</h1>
          <p className="process-eyebrow">From brief to launch</p>
        </header>

        <p className="process-intro">
          Every project follows a clear sequence: scoped for clarity, built in
          focused stages and supported after launch.
        </p>

        <div className="process-index" role="table" aria-label="Process index">
          <div className="process-index-head" role="row">
            <span className="process-index-head-num" aria-hidden="true" />
            <span className="process-index-head-cell" role="columnheader">
              Phase
            </span>
            <span className="process-index-head-cell" role="columnheader">
              Focus
            </span>
            <span className="process-index-head-cell process-index-head-cell--output" role="columnheader">
              Output
            </span>
          </div>

          {processSteps.map((step) => (
            <div key={step.num} className="process-index-row" role="row">
              <span className="process-index-marker" aria-hidden="true" />
              <span className="process-index-num">{step.num}</span>
              <span className="process-index-title">{step.title}</span>
              <span className="process-index-focus">{step.focus}</span>
              <span className="process-index-output">{step.output}</span>
            </div>
          ))}
        </div>
      </section>

      <section
        className="sheet-container process-modules"
        aria-label="Process sequence details"
      >
        {processSteps.map((step) => (
          <article key={step.num} className="process-module">
            <div className="process-module-left">
              <span className="process-module-num">{step.num}</span>
              <h2 className="process-module-title">{step.title}</h2>
              <p className="process-module-summary">{step.description}</p>
              <div className="process-module-output">
                <span className="process-module-output-label">Output</span>
                <span className="process-module-output-value">{step.output}</span>
              </div>
            </div>

            <div className="process-module-right">
              <ProcessChecklist label="Checklist" items={step.checklist} />
            </div>
          </article>
        ))}
      </section>

      <section className="sheet-container process-control">
        <SectionRule code="§02" name="Project control" meta="Clear delivery" />

        <header className="process-control-header">
          <h2 className="process-control-title">
            Built in stages, not guesswork.
          </h2>
          <p className="process-control-intro">
            Small business digital projects often go wrong when the scope is
            unclear, the technical setup is rushed, or everything is left until
            launch. We keep the process structured so decisions are made at the
            right time and the finished system is easier to manage.
          </p>
        </header>

        <div className="process-control-rows">
          {projectControlSteps.map((step) => (
            <div key={step.num} className="process-control-row">
              <span className="process-control-num">{step.num}</span>
              <div className="process-control-content">
                <h3 className="process-control-step-title">{step.title}</h3>
                <p className="process-control-step-desc">{step.description}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="sheet-container cta process-cta">
        <div className="cta-inner">
          <span className="cta-stamp">Next step</span>

          <h2 className="cta-title">
            Ready to turn the brief into a build plan?
          </h2>

          <p className="cta-sub">
            Send the brief, the outdated website or the process that is slowing
            things down. We&apos;ll help work out the clearest next step.
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
