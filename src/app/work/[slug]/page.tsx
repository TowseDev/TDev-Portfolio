import type { Metadata } from "next";
import type { ReactNode } from "react";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { JsonLd } from "@/components/seo/JsonLd";
import { SectionRule } from "@/components/ui/SectionRule";
import {
  getAdjacentProjects,
  getProjectBySlug,
  projects,
  type Project,
} from "@/data/projects";
import { createPageMetadata } from "@/lib/metadata";
import { breadcrumbSchema, caseStudySchema } from "@/lib/schema";

type ProjectPageProps = {
  params: Promise<{ slug: string }>;
};

type CaseStudySection = {
  num: string;
  title: string;
  paragraphs: string[];
  items?: string[];
};

function splitParagraphs(text?: string): string[] {
  if (!text) {
    return [];
  }

  return text.split("\n\n").filter(Boolean);
}

function buildSections(project: Project): CaseStudySection[] {
  const sections: CaseStudySection[] = [];

  if (project.overview) {
    sections.push({
      num: "01",
      title: "Overview",
      paragraphs: splitParagraphs(project.overview),
    });
  }

  if (project.problem) {
    sections.push({
      num: "02",
      title: "The problem",
      paragraphs: splitParagraphs(project.problem),
    });
  }

  if (project.whatWeBuilt) {
    sections.push({
      num: "03",
      title: "What we built",
      paragraphs: splitParagraphs(project.whatWeBuilt),
      items: project.whatWeBuiltItems,
    });
  }

  if (project.technicalApproach) {
    sections.push({
      num: "04",
      title: "Technical approach",
      paragraphs: splitParagraphs(project.technicalApproach),
    });
  }

  if (project.outcome) {
    sections.push({
      num: "05",
      title: "Outcome",
      paragraphs: splitParagraphs(project.outcome),
    });
  }

  return sections;
}

function MetaCell({
  label,
  children,
}: {
  label: string;
  children: ReactNode;
}) {
  return (
    <div className="case-study-meta-cell">
      <span className="case-study-meta-label">{label}</span>
      <div className="case-study-meta-value">{children}</div>
    </div>
  );
}

function TagList({ items }: { items: string[] }) {
  return (
    <ul className="case-study-tag-list">
      {items.map((item) => (
        <li key={item}>{item}</li>
      ))}
    </ul>
  );
}

export async function generateStaticParams() {
  return projects.map((project) => ({ slug: project.slug }));
}

export async function generateMetadata({
  params,
}: ProjectPageProps): Promise<Metadata> {
  const { slug } = await params;
  const project = getProjectBySlug(slug);

  if (!project) {
    return { title: "Project not found" };
  }

  return createPageMetadata({
    title: `${project.title} Case Study`,
    description: project.summary,
    path: `/work/${project.slug}`,
    image: project.featuredImage,
  });
}

export default async function ProjectPage({ params }: ProjectPageProps) {
  const { slug } = await params;
  const project = getProjectBySlug(slug);

  if (!project) {
    notFound();
  }

  const sections = buildSections(project);
  const { previous, next } = getAdjacentProjects(slug);
  const metaLabel = project.projectType ?? project.category;

  return (
    <article className="case-study-page">
      <JsonLd
        data={[
          breadcrumbSchema([
            { name: "Home", path: "/" },
            { name: "Work", path: "/work" },
            { name: project.title, path: `/work/${project.slug}` },
          ]),
          caseStudySchema({
            title: `${project.title} Case Study`,
            description: project.summary,
            path: `/work/${project.slug}`,
            image: project.featuredImage,
          }),
        ]}
      />

      <section className="sheet-container case-study-hero">
        <SectionRule code="§01" name="Case study" meta={metaLabel} />

        <header className="case-study-header">
          <h1 className="case-study-title">{project.title}</h1>
          <p className="case-study-summary">{project.summary}</p>
        </header>

        <div className="case-study-meta-grid">
          {project.projectType ? (
            <MetaCell label="Project type">{project.projectType}</MetaCell>
          ) : null}

          {project.sector ? (
            <MetaCell label="Sector">{project.sector}</MetaCell>
          ) : null}

          {project.services && project.services.length > 0 ? (
            <MetaCell label="Services">
              <TagList items={project.services} />
            </MetaCell>
          ) : null}

          {project.stack && project.stack.length > 0 ? (
            <MetaCell label="Stack">
              <TagList items={project.stack} />
            </MetaCell>
          ) : null}

          {project.liveUrl ? (
            <MetaCell label="Live site">
              <a
                href={project.liveUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="case-study-live-link"
              >
                View live site
              </a>
            </MetaCell>
          ) : null}
        </div>
      </section>

      {project.featuredImage ? (
        <section className="sheet-container case-study-image-section">
          <div className="case-study-image-canvas">
            <div className="case-study-image-frame">
              <Image
                src={project.featuredImage}
                alt={project.title}
                fill
                className="case-study-image"
                sizes="(max-width: 860px) 100vw, 1320px"
                priority
              />
              <span className="case-study-image-wash" aria-hidden="true" />
            </div>
          </div>
        </section>
      ) : null}

      <section
        className="sheet-container case-study-modules"
        aria-label="Case study details"
      >
        {sections.map((section) => (
          <article key={section.num} className="case-study-module">
            <div className="case-study-module-left">
              <span className="case-study-module-num">{section.num}</span>
              <h2 className="case-study-module-title">{section.title}</h2>
            </div>

            <div className="case-study-module-right">
              {section.paragraphs.map((paragraph) => (
                <p key={paragraph} className="case-study-module-text">
                  {paragraph}
                </p>
              ))}

              {section.items && section.items.length > 0 ? (
                <ul className="case-study-module-list">
                  {section.items.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
              ) : null}
            </div>
          </article>
        ))}

        {project.testimonial ? (
          <article className="case-study-module case-study-module--testimonial">
            <div className="case-study-module-left">
              <span className="case-study-module-num">06</span>
              <h2 className="case-study-module-title">Client comment</h2>
            </div>

            <div className="case-study-module-right">
              <blockquote className="case-study-testimonial">
                <p className="case-study-testimonial-quote">
                  &ldquo;{project.testimonial.quote}&rdquo;
                </p>
                <footer className="case-study-testimonial-cite">
                  <span className="case-study-testimonial-name">
                    {project.testimonial.name}
                  </span>
                  <span className="case-study-testimonial-business">
                    {project.testimonial.business}
                  </span>
                </footer>
              </blockquote>
            </div>
          </article>
        ) : null}

        {project.keyPoints && project.keyPoints.length > 0 ? (
          <article className="case-study-module case-study-module--key-points">
            <div className="case-study-module-left">
              <span className="case-study-module-num">
                {project.testimonial ? "07" : "06"}
              </span>
              <h2 className="case-study-module-title">Key points</h2>
            </div>

            <div className="case-study-module-right">
              <ul className="case-study-key-points">
                {project.keyPoints.map((point) => (
                  <li key={point}>{point}</li>
                ))}
              </ul>
            </div>
          </article>
        ) : null}
      </section>

      <section className="sheet-container case-study-nav">
        <div className="case-study-nav-row">
          {previous ? (
            <Link href={`/work/${previous.slug}`} className="case-study-nav-link">
              <span className="case-study-nav-label">Previous</span>
              <span className="case-study-nav-title">{previous.title}</span>
            </Link>
          ) : (
            <span />
          )}

          {next ? (
            <Link
              href={`/work/${next.slug}`}
              className="case-study-nav-link case-study-nav-link--next"
            >
              <span className="case-study-nav-label">Next</span>
              <span className="case-study-nav-title">{next.title}</span>
            </Link>
          ) : null}
        </div>

        <div className="case-study-cta-row">
          <Link href="/work" className="btn btn-line">
            Back to work
          </Link>
          <Link href="/contact" className="btn btn-solid">
            Start a project
          </Link>
        </div>
      </section>
    </article>
  );
}
