"use client";

import { useEffect, useRef, useState } from "react";
import { processSteps } from "@/data/process";
import { useInViewOnce } from "@/hooks/useInViewOnce";

type MotionState = "pending" | "reduce" | "animate";

export function Process() {
  const sectionRef = useRef<HTMLElement>(null);
  const inView = useInViewOnce(sectionRef, { threshold: 0.12 });
  const [motionState, setMotionState] = useState<MotionState>("pending");

  useEffect(() => {
    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    setMotionState(reduced ? "reduce" : "animate");
  }, []);

  const shouldAnimate = motionState === "animate";
  const active = motionState !== "animate" || inView;

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
