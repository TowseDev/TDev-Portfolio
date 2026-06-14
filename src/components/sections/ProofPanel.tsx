"use client";

import { proofFigures } from "@/data/proof";
import { getApprovedTestimonials } from "@/data/testimonials";
import { ProofStatFigure } from "@/components/sections/ProofStatFigure";
import { useInViewOnce } from "@/hooks/useInViewOnce";
import { useEffect, useRef, useState } from "react";

type MotionState = "pending" | "reduce" | "animate";

export function ProofPanel() {
  const sectionRef = useRef<HTMLElement>(null);
  const inView = useInViewOnce(sectionRef, { threshold: 0.12 });
  const [motionState, setMotionState] = useState<MotionState>("pending");

  useEffect(() => {
    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    setMotionState(reduced ? "reduce" : "animate");
  }, []);

  const shouldAnimate = motionState === "animate";
  const reducedMotion = motionState === "reduce";
  const active = motionState !== "animate" || inView;

  return (
    <section
      ref={sectionRef}
      className={`proof-band${shouldAnimate ? " proof-band--animate" : ""}${
        active ? " proof-band--active" : ""
      }`}
      id="why"
    >
      <div className="proof-band__grid-bg" aria-hidden="true" />
      <div className="proof-band__inner sheet-container">
        <div className="proof-band__rule sec-rule">
          <span className="proof-band__rule-draw" aria-hidden="true" />
          <div className="proof-band__rule-labels">
            <span className="tick" />
            <span className="sec-code" style={{ color: "#6E8BFF" }}>
              §03
            </span>
            <span className="sec-name">Proof of work</span>
            <span className="sec-meta">Operating record</span>
          </div>
        </div>

        <div className="proof-band__main">
          <h2 className="proof-band__heading">
            <span className="proof-band__heading-line">
              A better website is only part of the fix.
            </span>
          </h2>
          <div className="proof-band__copy">
            <p className="proof-band__support proof-band__support--1">
              Most small businesses need the systems underneath to work too.
              enquiries, forms, payments, analytics, hosting, updates and the tools
              that keep everything moving.
            </p>
          
          </div>
        </div>

        <div className="proof-band__figures">
          {proofFigures.map((figure, index) => (
            <ProofStatFigure
              key={figure.id}
              figure={figure}
              active={active}
              reducedMotion={reducedMotion}
              index={index}
            />
          ))}
        </div>

        <div className="proof-band__comments">
          <div className="proof-band__comments-head">
            <span className="proof-band__comments-label">Client comments</span>
            <span className="proof-band__comments-meta">03 notes</span>
          </div>
          <div className="proof-band__comments-grid">
            {getApprovedTestimonials().map((testimonial, index) => (
              <figure
                key={testimonial.id}
                className="proof-band__comment"
                style={{ "--comment-index": index } as React.CSSProperties}
              >
                <blockquote className="proof-band__comment-quote">
                  <p>&ldquo;{testimonial.quote}&rdquo;</p>
                </blockquote>
                <figcaption className="proof-band__comment-foot">
                  <cite className="proof-band__comment-name">{testimonial.name}</cite>
                  <span className="proof-band__comment-business">
                    {testimonial.business}
                  </span>
                  <span className="proof-band__comment-type">
                    {testimonial.projectType}
                  </span>
                </figcaption>
              </figure>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
