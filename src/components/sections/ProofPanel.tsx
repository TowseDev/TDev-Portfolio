import { proofFigures } from "@/data/proof";
import { Reveal } from "@/components/ui/Reveal";
import { SectionRule } from "@/components/ui/SectionRule";

export function ProofPanel() {
  return (
    <div className="sheet-container">
      <section className="ink-panel" id="why">
        <Reveal>
          <SectionRule
            code="§03"
            name="Proof of work"
            codeColor="#6E8BFF"
          />
        </Reveal>

        <Reveal>
          <p className="ink-lead">
            Most small businesses do not need another pretty homepage. They need
            a website and <span className="blue">digital systems</span> that
            actually work — and a team they can trust when something needs
            fixing, improving or scaling.
          </p>
        </Reveal>

        <Reveal>
          <div className="figures">
            {proofFigures.map((figure) => (
              <div key={figure.label} className="figure">
                <div className="fig-num">
                  {figure.value}
                  {figure.unit ? <span className="u">{figure.unit}</span> : null}
                </div>
                <div className="fig-label">{figure.label}</div>
              </div>
            ))}
          </div>
        </Reveal>
      </section>
    </div>
  );
}
