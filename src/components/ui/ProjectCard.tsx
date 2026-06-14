import Link from "next/link";
import { ProjectImage } from "@/components/ui/ProjectImage";
import type { Project } from "@/data/projects";

type ProjectCardProps = {
  project: Project;
};

export function ProjectCard({ project }: ProjectCardProps) {
  return (
    <Link
      href={`/work/${project.slug}`}
      className="group flex flex-col border border-border transition-colors hover:border-white/15"
    >
      <ProjectImage
        src={project.image}
        alt={`${project.title} — ${project.category}`}
        className="aspect-[16/10] w-full"
        sizes="(max-width: 768px) 100vw, 50vw"
      />

      <div className="flex flex-1 flex-col p-6 sm:p-8">
        <div className="mb-4 flex items-center justify-between gap-4">
          <span className="font-mono text-[11px] uppercase tracking-[0.12em] text-accent">
            {project.category}
          </span>
        </div>

        <h3 className="text-2xl font-medium tracking-tight text-foreground transition-colors group-hover:text-white sm:text-3xl">
          {project.title}
        </h3>

        <p className="mt-4 flex-1 text-base leading-relaxed text-muted">
          {project.description}
        </p>

        <div className="mt-6 flex flex-wrap gap-2">
          {project.stack.map((item) => (
            <span
              key={item}
              className="border border-border px-2.5 py-1 font-mono text-[10px] uppercase tracking-wider text-muted"
            >
              {item}
            </span>
          ))}
        </div>

        <span className="mt-8 inline-flex items-center gap-2 text-sm font-medium text-foreground">
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
