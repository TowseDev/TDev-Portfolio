import type { Metadata } from "next";
import { BuildArchive } from "@/components/sections/BuildArchive";
import { JsonLd } from "@/components/seo/JsonLd";
import { ProjectCard } from "@/components/ui/ProjectCard";
import { Container } from "@/components/ui/Container";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { getVisibleBuildArchiveItems } from "@/data/buildArchive";
import { projects } from "@/data/projects";
import { createPageMetadata } from "@/lib/metadata";
import { breadcrumbSchema } from "@/lib/schema";

export const metadata: Metadata = createPageMetadata({
  title: "Work",
  description:
    "Selected websites, web apps, ecommerce builds and digital systems delivered for small businesses across consultancy, coaching, sport, hospitality, retail and local services.",
  path: "/work",
});

export default function WorkPage() {
  return (
    <>
      <JsonLd
        data={breadcrumbSchema([
          { name: "Home", path: "/" },
          { name: "Work", path: "/work" },
        ])}
      />

      <section className="py-24 lg:py-32">
        <Container>
          <SectionHeader
            eyebrow="Work"
            title="Selected builds"
            description="Selected websites, web apps, ecommerce builds and digital systems delivered for UK small businesses across consultancy, coaching, sport, hospitality, retail and local services."
          />

          <div className="mt-14 grid gap-6 md:grid-cols-2">
            {projects.map((project) => (
              <ProjectCard key={project.slug} project={project} />
            ))}
          </div>
        </Container>
      </section>

      <BuildArchive items={getVisibleBuildArchiveItems()} />
    </>
  );
}
