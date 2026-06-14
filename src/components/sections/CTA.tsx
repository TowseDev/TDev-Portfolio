"use client";

import { useEffect, useRef, useState } from "react";
import { Button } from "@/components/ui/Button";
import { useInViewOnce } from "@/hooks/useInViewOnce";

const nextSteps = [
  { num: "01", label: "Book Free Call" },
  { num: "02", label: "Accept Project Propsosal" },
  { num: "03", label: "Start Project" },
];

type MotionState = "pending" | "reduce" | "animate";

export function CTA() {
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
      className={`sheet-container cta cta-section${
        shouldAnimate ? " cta-section--animate" : ""
      }${active ? " cta-section--active" : ""}`}
      id="contact"
    >
      <div className="cta-inner">
        <span className="cta-stamp">For approval</span>

        <h2 className="cta-title">
          <span className="cta-title-line">Have a project that needs</span>
          <span className="cta-title-line">
            more than a <span className="blue">template?</span>
          </span>
        </h2>

        <p className="cta-sub">
          Send the brief, the broken process, or the outdated website. We&apos;ll
          help shape it into a clear digital build plan.
        </p>

        <div className="hero-actions cta-actions">
          <Button href="/contact" variant="solid" showArrow>
            Book a call
          </Button>
          <Button href="mailto:contact@towseddev.com" variant="line">
            Email the brief
          </Button>
        </div>

        <hr className="cta-rule" aria-hidden="true" />

        <div className="cta-next">
          <div className="cta-next-head">
            <span>Next step</span>
          </div>
          <ol className="cta-next-steps">
            {nextSteps.map((step) => (
              <li key={step.num} className="cta-next-step">
                <span className="cta-next-num">{step.num}</span>
                <span className="cta-next-label">{step.label}</span>
              </li>
            ))}
          </ol>
        </div>
      </div>
    </section>
  );
}
