import { capabilities } from "@/data/capabilities";
import { Reveal } from "@/components/ui/Reveal";
import { SectionRule } from "@/components/ui/SectionRule";

export function Capabilities() {
  return (
    <section className="sheet-container sec-pad" id="capabilities">
      <Reveal>
        <SectionRule code="§01" name="Capabilities" meta="05 services" />
      </Reveal>

      <Reveal>
        {capabilities.map((capability) => (
          <div key={capability.code} className="spec-row">
            <span className="spec-code">{capability.code}</span>
            <span className="spec-name">{capability.name}</span>
            <span className="spec-desc">{capability.description}</span>
            <span className="spec-stack">
              {capability.stack.map((item) => (
                <span key={item}>
                  {item}
                  <br />
                </span>
              ))}
            </span>
          </div>
        ))}
      </Reveal>
    </section>
  );
}
