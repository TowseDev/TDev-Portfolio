import Link from "next/link";
import { ProjectImage } from "@/components/ui/ProjectImage";
import type { Project } from "@/data/projects";

type ProjectPreviewProps = {
  project: Project;
  variant?: "featured" | "stacked" | "compact";
};

function ProjectMeta({
  project,
  showFull = false,
}: {
  project: Project;
  showFull?: boolean;
}) {
  return (
    <>
      <span className="font-mono text-[11px] uppercase tracking-[0.12em] text-accent">
        {project.category}
      </span>

      <h3
        className={`mt-4 font-medium tracking-tight text-foreground transition-colors group-hover:text-white ${showFull ? "text-3xl sm:text-4xl lg:text-[2.75rem] lg:leading-[1.05]" : "text-xl sm:text-2xl"}`}
      >
        {project.title}
      </h3>

      <p className="mt-3 text-sm leading-relaxed text-muted">
        {project.description}
      </p>

      {showFull ? (
        <ul className="mt-5 flex flex-wrap gap-2">
          {project.services.map((service) => (
            <li
              key={service}
              className="border border-border px-2.5 py-1 text-[11px] text-muted"
            >
              {service}
            </li>
          ))}
        </ul>
      ) : null}

      <ul className="mt-4 flex flex-wrap gap-x-3 gap-y-1">
        {project.stack.map((item) => (
          <li
            key={item}
            className="font-mono text-[10px] uppercase tracking-wider text-muted/70"
          >
            {item}
          </li>
        ))}
      </ul>
    </>
  );
}

export function ProjectPreview({
  project,
  variant = "compact",
}: ProjectPreviewProps) {
  if (variant === "featured") {
    return (
      <Link
        href={`/work/${project.slug}`}
        className="group grid border border-border transition-colors hover:border-white/15 lg:grid-cols-2"
      >
        <ProjectImage
          src={project.image}
          alt={`${project.title} — ${project.category}`}
          className="aspect-[4/3] w-full lg:aspect-auto lg:min-h-[24rem]"
          sizes="(max-width: 1024px) 100vw, 50vw"
        />

        <div className="flex flex-col justify-between border-t border-border p-6 sm:p-8 lg:border-l lg:border-t-0 lg:p-10">
          <ProjectMeta project={project} showFull />

          <span className="mt-8 inline-flex items-center gap-2 text-sm text-foreground">
            View case study
            <span
              aria-hidden
              className="transition-transform group-hover:translate-x-1"
            >
              →
            </span>
          </span>
        </div>
      </Link>
    );
  }

  if (variant === "stacked") {
    return (
      <Link
        href={`/work/${project.slug}`}
        className="group block border border-border transition-colors hover:border-white/15"
      >
        <ProjectImage
          src={project.image}
          alt={`${project.title} — ${project.category}`}
          className="aspect-[16/10] w-full"
          sizes="(max-width: 1024px) 100vw, 50vw"
        />

        <div className="border-t border-border p-6 sm:p-8">
          <ProjectMeta project={project} />
          <span className="mt-6 inline-flex items-center gap-2 text-sm text-muted transition-colors group-hover:text-foreground">
            View case study →
          </span>
        </div>
      </Link>
    );
  }

  return (
    <Link
      href={`/work/${project.slug}`}
      className="group flex flex-col border border-border transition-colors hover:border-white/15"
    >
      <ProjectImage
        src={project.image}
        alt={`${project.title} — ${project.category}`}
        className="aspect-[4/3] w-full"
        sizes="(max-width: 1024px) 100vw, 50vw"
      />

      <div className="border-t border-border p-6 sm:p-8">
        <ProjectMeta project={project} />
        <span className="mt-6 inline-flex items-center gap-2 text-sm text-muted transition-colors group-hover:text-foreground">
          View case study →
        </span>
      </div>
    </Link>
  );
}
