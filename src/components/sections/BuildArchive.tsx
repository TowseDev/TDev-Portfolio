import type { CSSProperties } from "react";
import { Container } from "@/components/ui/Container";
import { SectionRule } from "@/components/ui/SectionRule";
import type { BuildArchiveItem } from "@/data/buildArchive";

type BuildArchiveProps = {
  items: BuildArchiveItem[];
};

const columns = [
  { key: "project", label: "Project" },
  { key: "sector", label: "Sector" },
  { key: "buildType", label: "Build type" },
  { key: "link", label: "Link" },
  { key: "scope", label: "Scope" },
] as const;

function formatRowNumber(index: number) {
  return String(index + 1).padStart(2, "0");
}

function ArchiveLink({ item }: { item: BuildArchiveItem }) {
  if (item.liveUrl) {
    return (
      <a
        href={item.liveUrl}
        className="build-archive-link"
        target="_blank"
        rel="noopener noreferrer"
      >
        View site
      </a>
    );
  }

  return <span className="build-archive-link build-archive-link--empty">·</span>;
}

export function BuildArchive({ items }: BuildArchiveProps) {
  return (
    <section className="build-archive-section" aria-labelledby="build-archive-heading">
      <Container>
        <SectionRule code="§02" name="Build archive" meta="Small business builds" />

        <p className="build-archive-intro" id="build-archive-heading">
          Alongside the featured case studies, this archive captures a wider body of
          small business websites, ecommerce builds, landing pages and digital support
          projects. Some were focused launches; others involved ongoing updates,
          content structure, local visibility, forms, booking journeys or CMS support.
        </p>

        <div className="build-archive-table" role="table">
          <div className="build-archive-head" role="row">
            <span className="build-archive-head-num" aria-hidden="true" />
            {columns.map((column) => (
              <span
                key={column.key}
                className={`build-archive-head-cell build-archive-head-cell--${column.key}`}
                role="columnheader"
              >
                {column.label}
              </span>
            ))}
          </div>

          {items.map((item, index) => (
            <div
              key={item.id}
              className="build-archive-row"
              role="row"
              style={{ "--row-index": index } as CSSProperties}
            >
              <span className="build-archive-marker" aria-hidden="true" />
              <span className="build-archive-num">{formatRowNumber(index)}</span>

              <div className="build-archive-cell build-archive-cell--project" role="cell">
                <span className="build-archive-field-label">Project</span>
                <span className="build-archive-project">{item.project}</span>
              </div>

              <div className="build-archive-cell build-archive-cell--sector" role="cell">
                <span className="build-archive-field-label">Sector</span>
                <span className="build-archive-field-value build-archive-field-value--technical">
                  {item.sector}
                </span>
              </div>

              <div className="build-archive-cell build-archive-cell--buildType" role="cell">
                <span className="build-archive-field-label">Build type</span>
                <span className="build-archive-field-value build-archive-field-value--technical">
                  {item.buildType}
                </span>
              </div>

              <div className="build-archive-cell build-archive-cell--link" role="cell">
                <span className="build-archive-field-label">Link</span>
                <ArchiveLink item={item} />
              </div>

              <div className="build-archive-cell build-archive-cell--scope" role="cell">
                <span className="build-archive-field-label">Scope</span>
                <span className="build-archive-field-value build-archive-field-value--scope">
                  {item.scope}
                </span>
              </div>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
