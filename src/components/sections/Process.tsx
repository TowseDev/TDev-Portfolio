"use client";

import { useState } from "react";
import { processSteps } from "@/data/process";
import { Reveal } from "@/components/ui/Reveal";
import { SectionRule } from "@/components/ui/SectionRule";

export function Process() {
  const [flowRunning, setFlowRunning] = useState(false);

  return (
    <section className="sheet-container sec-pad" id="process">
      <Reveal>
        <SectionRule code="§04" name="How a build runs" meta="05 phases" />
      </Reveal>

      <Reveal id="flow" onVisible={() => setFlowRunning(true)}>
        <div className={`flow${flowRunning ? " run" : ""}`}>
          {processSteps.map((step) => (
            <div key={step.num} className="flow-step">
              <div className="flow-num">{step.num}</div>
              <div className="flow-title">{step.title}</div>
              <div className="flow-desc">{step.description}</div>
            </div>
          ))}
        </div>
      </Reveal>
    </section>
  );
}
