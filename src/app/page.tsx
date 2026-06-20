import type { Metadata } from "next";
import { Capabilities } from "@/components/sections/Capabilities";
import { CTA } from "@/components/sections/CTA";
import { Hero } from "@/components/sections/Hero";
import { Process } from "@/components/sections/Process";
import { ProofPanel } from "@/components/sections/ProofPanel";
import { SelectedWork } from "@/components/sections/SelectedWork";
import { createPageMetadata } from "@/lib/metadata";

export const metadata: Metadata = createPageMetadata({
  title: "TDev Digital | Websites, Web Apps & Digital Systems",
  description:
    "TDev Digital builds websites, custom web apps and marketing systems for small businesses that need a clearer, more reliable online presence.",
  path: "/",
  absoluteTitle: true,
});

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
