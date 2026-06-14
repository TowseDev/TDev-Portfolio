"use client";

import { useEffect } from "react";
import { Button } from "@/components/ui/Button";

function HeroSchematic() {
  return (
    <svg viewBox="0 0 300 168" fill="none" id="schematic" aria-hidden="true">
      <path className="draw-path" d="M70 42 L150 84" stroke="#14161B" strokeWidth="1.2" />
      <path className="draw-path" d="M230 42 L150 84" stroke="#14161B" strokeWidth="1.2" />
      <path className="draw-path" d="M150 84 L70 126" stroke="#14161B" strokeWidth="1.2" />
      <path className="draw-path" d="M150 84 L230 126" stroke="#14161B" strokeWidth="1.2" />
      <g className="node-pulse" style={{ animationDelay: "1.0s" }}>
        <rect x="40" y="28" width="60" height="28" fill="#EAE7DF" stroke="#14161B" strokeWidth="1.2" />
        <text x="70" y="46" fontFamily="var(--mono)" fontSize="10" fill="#14161B" textAnchor="middle">
          Website
        </text>
      </g>
      <g className="node-pulse" style={{ animationDelay: "1.15s" }}>
        <rect x="200" y="28" width="60" height="28" fill="#EAE7DF" stroke="#14161B" strokeWidth="1.2" />
        <text x="230" y="46" fontFamily="var(--mono)" fontSize="10" fill="#14161B" textAnchor="middle">
          Web App
        </text>
      </g>
      <g className="node-pulse" style={{ animationDelay: "1.3s" }}>
        <circle cx="150" cy="84" r="22" fill="#1B43E8" stroke="#1B43E8" />
        <text x="150" y="81" fontFamily="var(--mono)" fontSize="8" fill="#EAE7DF" textAnchor="middle">
          Core
        </text>
        <text x="150" y="92" fontFamily="var(--mono)" fontSize="8" fill="#EAE7DF" textAnchor="middle">
          System
        </text>
      </g>
      <g className="node-pulse" style={{ animationDelay: "1.45s" }}>
        <rect x="40" y="112" width="60" height="28" fill="#EAE7DF" stroke="#14161B" strokeWidth="1.2" />
        <text x="70" y="130" fontFamily="var(--mono)" fontSize="10" fill="#14161B" textAnchor="middle">
          Marketing
        </text>
      </g>
      <g className="node-pulse" style={{ animationDelay: "1.6s" }}>
        <rect x="200" y="112" width="60" height="28" fill="#EAE7DF" stroke="#14161B" strokeWidth="1.2" />
        <text x="230" y="130" fontFamily="var(--mono)" fontSize="10" fill="#14161B" textAnchor="middle">
          Automation
        </text>
      </g>
    </svg>
  );
}

export function Hero() {
  useEffect(() => {
    document.querySelectorAll(".ld").forEach((el) => el.classList.add("go"));
    document
      .querySelectorAll("#schematic .draw-path, #schematic .node-pulse")
      .forEach((el) => el.classList.add("go"));
    document.getElementById("struck")?.classList.add("drawn");
    document.getElementById("corrected")?.classList.add("drawn");
  }, []);

  return (
    <section className="sheet-container hero">
      <div className="hero-meta">
        <span className="dot" />
        <span>Digital studio</span>
        <span>·</span>
        <span>Websites</span>
        <span>·</span>
        <span>Web apps</span>
        <span>·</span>
        <span>Marketing systems</span>
        <span className="sep" />
      </div>

      <div className="hero-grid">
        <div>
          <h1 className="hero-headline">
            <span className="line">
              <span className="ld" style={{ animationDelay: "0.05s" }}>
                We build the
              </span>
            </span>
            <span className="line">
              <span className="ld" style={{ animationDelay: "0.18s" }}>
                <span className="struck" id="struck">
                  websites
                </span>
                <span className="corrected" id="corrected">
                  systems
                </span>
              </span>
            </span>
            <span className="line">
              <span className="ld" style={{ animationDelay: "0.32s" }}>
                businesses run on.
              </span>
            </span>
          </h1>

          <p className="hero-body ld" style={{ animationDelay: "0.55s" }}>
            TDev Digital builds websites, web apps and marketing systems for
            businesses that need their online presence to work harder. From
            outdated websites to manual processes, we create practical digital
            systems that look credible, generate enquiries and run smoothly.
          </p>

          <p className="hero-tagline ld" style={{ animationDelay: "0.62s" }}>
            <strong>Engineered, not assembled.</strong>
          </p>

          <div className="hero-actions ld" style={{ animationDelay: "0.7s" }}>
            <Button href="#contact" variant="solid" showArrow>
              Book a call
            </Button>
            <Button href="#work" variant="line">
              View work
            </Button>
          </div>
        </div>

        <aside className="hero-aside ld" style={{ animationDelay: "0.45s" }}>
          <div className="schematic">
            <div className="schematic-top">
              <span>FIG.01 — SYSTEM</span>
              <span>SCALE 1:1</span>
            </div>
            <HeroSchematic />
          </div>

          <div className="title-block">
            <div className="tb-cell">
              <div className="tb-k">Studio</div>
              <div className="tb-v">TDev Digital</div>
            </div>
            <div className="tb-cell">
              <div className="tb-k">Discipline</div>
              <div className="tb-v">Web · App · Marketing</div>
            </div>
            <div className="tb-cell">
              <div className="tb-k">Build type</div>
              <div className="tb-v">Websites &amp; systems</div>
            </div>
            <div className="tb-cell">
              <div className="tb-k">Status</div>
              <div className="tb-v blue">Taking projects</div>
            </div>
            <div className="tb-cell full">
              <div className="tb-k">Brief</div>
              <div className="tb-v">
                Better websites, smarter tools and clearer online growth.
              </div>
            </div>
          </div>
        </aside>
      </div>
    </section>
  );
}
