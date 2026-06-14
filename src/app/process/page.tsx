import type { Metadata } from "next";
import Link from "next/link";
import { processSteps } from "@/data/process";
import { SectionRule } from "@/components/ui/SectionRule";

export const metadata: Metadata = {
  title: "Process",
  description:
    "How TDev Digital moves from brief to launch — clarify, plan, build, launch and improve.",
};

export default function ProcessPage() {
  return (
    <section className="sheet-container policy-page">
      <SectionRule code="§04" name="Build sequence" meta="05 phases" />

      <header className="policy-header">
        <h1 className="policy-title">Process</h1>
        <p className="policy-updated">From brief to launch</p>
      </header>

      <article className="policy-content">
        <p>
          Every project follows a clear sequence — scoped for clarity, built in
          focused stages, and supported after launch.
        </p>

        {processSteps.map((step) => (
          <div key={step.num}>
            <h2>
              {step.num}. {step.title}
            </h2>
            <p>{step.description}</p>
            <p>
              <strong>Output:</strong> {step.output}
            </p>
          </div>
        ))}

        <p>
          Ready to start?{" "}
          <Link href="/contact">Book a call or send a brief</Link>.
        </p>
      </article>
    </section>
  );
}
