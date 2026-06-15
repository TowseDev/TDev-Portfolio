import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Button } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";
import { ProjectImage } from "@/components/ui/ProjectImage";
import { getProjectBySlug, projects } from "@/data/projects";

type ProjectPageProps = {
  params: Promise<{ slug: string }>;
};

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

  return {
    title: project.title,
    description: project.summary,
  };
}

export default async function ProjectPage({ params }: ProjectPageProps) {
  const { slug } = await params;
  const project = getProjectBySlug(slug);

  if (!project) {
    notFound();
  }

  return (
    <article className="py-24 lg:py-32">
      <Container>
        <Link
          href="/work"
          className="inline-flex text-sm text-muted transition-colors hover:text-foreground"
        >
          ← Back to work
        </Link>

        <div className="mt-10 max-w-4xl">
          <p className="font-mono text-xs uppercase tracking-[0.2em] text-accent">
            {project.category}
          </p>
          <h1 className="mt-4 text-4xl font-medium tracking-tight text-foreground sm:text-5xl lg:text-6xl">
            {project.title}
          </h1>
          <p className="mt-6 text-lg leading-relaxed text-muted sm:text-xl">
            {project.summary}
          </p>
        </div>

        <div className="mt-12">
          <ProjectImage
            src={project.featuredImage ?? ""}
            alt={`${project.title}, ${project.category}`}
            className="aspect-[16/9] w-full"
            sizes="100vw"
            priority
          />
        </div>

        <div className="mt-12 flex flex-wrap gap-3">
          {(project.stack ?? []).map((item) => (
            <span
              key={item}
              className="border border-border px-4 py-1.5 font-mono text-xs text-muted"
            >
              {item}
            </span>
          ))}
        </div>

        <div className="mt-16 grid gap-12 border-t border-border pt-16 lg:grid-cols-[240px_1fr]">
          <aside className="space-y-8">
            <div>
              <p className="font-mono text-xs uppercase tracking-[0.15em] text-muted">
                Services
              </p>
              <ul className="mt-3 space-y-2">
                {(project.services ?? []).map((service) => (
                  <li key={service} className="text-sm text-foreground">
                    {service}
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <p className="font-mono text-xs uppercase tracking-[0.15em] text-muted">
                Stack
              </p>
              <ul className="mt-3 space-y-2">
                {(project.stack ?? []).map((item) => (
                  <li key={item} className="text-sm text-foreground">
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </aside>

          <div>
            <h2 className="text-2xl font-medium tracking-tight text-foreground">
              Overview
            </h2>
            <p className="mt-4 max-w-3xl text-base leading-relaxed text-muted sm:text-lg">
              {project.summary}
            </p>
          </div>
        </div>

        <div className="mt-16">
          <Button href="/contact">Discuss a similar project</Button>
        </div>
      </Container>
    </article>
  );
}
