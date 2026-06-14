"use client";

import { type ProofFigure } from "@/data/proof";
import { useEffect, useState } from "react";

type ProofStatFigureProps = {
  figure: ProofFigure;
  active: boolean;
  reducedMotion: boolean;
  index: number;
};

const COUNT_DELAY_MS = 1100;
const COUNT_DURATION_MS = 1050;

function easeOutCubic(t: number): number {
  return 1 - (1 - t) ** 3;
}

export function ProofStatFigure({
  figure,
  active,
  reducedMotion,
  index,
}: ProofStatFigureProps) {
  const [count, setCount] = useState<number | null>(null);
  const [counting, setCounting] = useState(false);

  useEffect(() => {
    if (figure.animate !== "count" || !active || reducedMotion) return;
    if (figure.countTo === undefined) return;

    let frame = 0;
    let start: number | null = null;

    const delayTimer = window.setTimeout(() => {
      setCounting(true);
      setCount(0);

      const step = (timestamp: number) => {
        if (start === null) start = timestamp;
        const progress = Math.min((timestamp - start) / COUNT_DURATION_MS, 1);
        setCount(Math.round(easeOutCubic(progress) * figure.countTo!));
        if (progress < 1) {
          frame = requestAnimationFrame(step);
        }
      };

      frame = requestAnimationFrame(step);
    }, COUNT_DELAY_MS);

    return () => {
      window.clearTimeout(delayTimer);
      cancelAnimationFrame(frame);
    };
  }, [active, figure.animate, figure.countTo, reducedMotion]);

  const showFinalCount = !active || reducedMotion || (figure.animate === "count" && !counting);

  return (
    <div
      className={`figure proof-band__figure proof-band__figure--${index + 1}`}
      style={{ "--figure-index": index } as React.CSSProperties}
    >
      <span className="proof-band__figure-divider" aria-hidden="true" />
      <div
        className={`fig-num proof-band__fig-num${
          figure.animate === "fade" ? " proof-band__fig-num--fade" : ""
        }`}
      >
        {figure.animate === "count" ? (
          showFinalCount ? (
            <>
              {figure.countTo}
              {figure.suffix ?? null}
              {figure.unit ? <span className="u">{figure.unit}</span> : null}
            </>
          ) : (
            <>
              {count}
              {figure.suffix ?? null}
              {figure.unit ? <span className="u">{figure.unit}</span> : null}
            </>
          )
        ) : (
          figure.display
        )}
      </div>
      <div className="fig-label proof-band__fig-label">{figure.label}</div>
    </div>
  );
}
