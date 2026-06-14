import { Capabilities } from "@/components/sections/Capabilities";
import { CTA } from "@/components/sections/CTA";
import { Hero } from "@/components/sections/Hero";
import { Process } from "@/components/sections/Process";
import { ProofPanel } from "@/components/sections/ProofPanel";
import { SelectedWork } from "@/components/sections/SelectedWork";

export default function HomePage() {
  return (
    <>
      <Hero />
      <Capabilities />
      <SelectedWork />
      <ProofPanel />
      <Process />
      <CTA />
    </>
  );
}
