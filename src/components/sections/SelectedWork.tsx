import { workPlates } from "@/data/workPlates";
import { Reveal } from "@/components/ui/Reveal";
import { SectionRule } from "@/components/ui/SectionRule";
import { WorkPlate } from "@/components/ui/WorkPlate";

export function SelectedWork() {
  return (
    <section className="sheet-container sec-pad" id="work">
      <Reveal>
        <SectionRule code="§02" name="Selected work" meta="06 builds" />
      </Reveal>

      <Reveal>
        <div className="work-grid">
          {workPlates.map((plate) => (
            <WorkPlate key={plate.index} {...plate} />
          ))}
        </div>
      </Reveal>
    </section>
  );
}
