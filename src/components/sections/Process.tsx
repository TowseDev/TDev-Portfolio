"use client";

import { useRef } from "react";
import { processSteps } from "@/data/process";
import { useInViewOnce } from "@/hooks/useInViewOnce";
import { usePrefersReducedMotion } from "@/hooks/usePrefersReducedMotion";

export function Process() {
  const sectionRef = useRef<HTMLElement>(null);
  const inView = useInViewOnce(sectionRef, { threshold: 0.12 });
  const reducedMotion = usePrefersReducedMotion();

  const shouldAnimate = !reducedMotion;
  const active = reducedMotion || inView;

  return (
    <section
      ref={sectionRef}
      className={`sheet-container sec-pad build-seq-section${
        shouldAnimate ? " build-seq-section--animate" : ""
      }${active ? " build-seq-section--active" : ""}`}
      id="process"
    >
      <div className="build-seq-rule sec-rule">
        <span className="build-seq-rule-draw" aria-hidden="true" />
        <div className="build-seq-rule-labels">
          <span className="tick" />
          <span className="sec-code">§04</span>
          <span className="sec-name">Build sequence</span>
          <span className="sec-meta">05 phases</span>
        </div>
      </div>

      <div className="build-seq">
        {processSteps.map((step, index) => (
          <div
            key={step.num}
            className="build-seq-row"
            style={{ "--row-index": index } as React.CSSProperties}
          >
            <span className="build-seq-marker" aria-hidden="true" />
            <span className="build-seq-num">{step.num}</span>
            <span className="build-seq-title">{step.title}</span>
            <span className="build-seq-desc">{step.description}</span>
            <span className="build-seq-output">
              <span className="build-seq-output-label">Output</span>
              <span className="build-seq-output-value">{step.output}</span>
            </span>
          </div>
        ))}
      </div>
    </section>
  );
}
