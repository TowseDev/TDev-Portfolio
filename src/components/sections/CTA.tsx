import { Button } from "@/components/ui/Button";
import { Reveal } from "@/components/ui/Reveal";

export function CTA() {
  return (
    <section className="sheet-container cta" id="contact">
      <Reveal>
        <span className="cta-stamp">For approval</span>
      </Reveal>

      <Reveal>
        <h2 className="cta-title">
          Have a project that needs
          <br />
          more than a <span className="blue">template?</span>
        </h2>
      </Reveal>

      <Reveal>
        <p className="cta-sub">
          Send the brief, the problem, or just the rough idea. We&apos;ll help
          you understand the clearest next step.
        </p>
      </Reveal>

      <Reveal>
        <div className="hero-actions">
          <Button href="#contact" variant="solid" showArrow>
            Book a call
          </Button>
          <Button href="mailto:hello@tdevdigital.com" variant="line">
            Email us
          </Button>
        </div>
      </Reveal>
    </section>
  );
}
