import Link from "next/link";
import Image from "next/image";
import { Container } from "@/components/ui/Container";
import { InterfacePanel } from "@/components/ui/InterfacePanel";
import { SystemLabel } from "@/components/ui/SystemLabel";

type BuildProject = {
  slug: string;
  title: string;
  type: string;
  description: string;
  image: string;
  tags: string[];
  featured?: boolean;
};

const builds: BuildProject[] = [
  {
    slug: "give2gets-project-planning",
    title: "Give2Gets Project Planning",
    type: "Consultancy Website",
    description:
      "Planning consultancy website for infrastructure, rail, energy and construction.",
    image: "/projects/Give2gets-preview.png",
    tags: ["WordPress", "Brand", "Consultancy"],
    featured: true,
  },
  {
    slug: "alchemy-ferns",
    title: "Alchemy Ferns",
    type: "Ecommerce Website",
    description:
      "Calm ecommerce experience for a specialist fern nursery.",
    image: "/projects/alchemyferns-preview.png",
    tags: ["WooCommerce", "Stripe", "Ecommerce"],
  },
  {
    slug: "virtue-developments",
    title: "Virtue Developments",
    type: "Construction Website",
    description:
      "Photography-led construction website with direct project credibility.",
    image: "/projects/virtuedevelopments-preview.png",
    tags: ["WordPress", "Photography", "Construction"],
  },
  {
    slug: "stay-at-filey",
    title: "Stay at Filey",
    type: "Holiday Cottage Website",
    description:
      "Property-led booking website for coastal holiday cottages.",
    image: "/projects/stayatfiley-preview.png",
    tags: ["Booking", "Property", "Coastal"],
  },
  {
    slug: "engine-room-coach",
    title: "Engine Room Coach",
    type: "SaaS / AI Platform",
    description:
      "Coaching software concept for managing group programmes.",
    image: "/projects/engineroomcoach-preview.png",
    tags: ["Next.js", "OpenAI", "SaaS"],
  },
];

function BuildModule({
  project,
  className = "",
}: {
  project: BuildProject;
  className?: string;
}) {
  return (
    <InterfacePanel
      className={`group flex flex-col overflow-hidden ${className}`.trim()}
    >
      <div className="relative aspect-[16/10] w-full overflow-hidden bg-[#080a10]">
        <Image
          src={project.image}
          alt={`${project.title} — ${project.type}`}
          fill
          className="object-cover object-top transition-transform duration-500 group-hover:scale-[1.02]"
          sizes={
            project.featured
              ? "(max-width: 1024px) 100vw, 60vw"
              : "(max-width: 1024px) 100vw, 33vw"
          }
        />
      </div>

      <div className="flex flex-1 flex-col border-t border-border p-5 sm:p-6">
        <div className="flex items-start justify-between gap-4">
          <SystemLabel>{project.type}</SystemLabel>
          <span className="shrink-0 font-mono text-[10px] text-accent">
            Build
          </span>
        </div>

        <h3 className="mt-4 text-xl font-medium leading-tight tracking-tight text-foreground sm:text-2xl">
          {project.title}
        </h3>

        <p className="mt-3 flex-1 text-[15px] leading-relaxed text-muted sm:text-base">
          {project.description}
        </p>

        <ul className="mt-5 flex flex-wrap gap-2">
          {project.tags.map((tag) => (
            <li
              key={tag}
              className="border border-border px-2.5 py-1 font-mono text-[11px] text-muted"
            >
              {tag}
            </li>
          ))}
        </ul>

        <Link
          href={`/work/${project.slug}`}
          className="mt-6 inline-flex items-center gap-2 font-mono text-sm text-accent transition-colors hover:text-foreground"
        >
          View build
          <span aria-hidden>→</span>
        </Link>
      </div>
    </InterfacePanel>
  );
}

export function ActiveBuilds() {
  const featured = builds.find((b) => b.featured)!;
  const others = builds.filter((b) => !b.featured);

  return (
    <section id="active-builds" className="border-t border-border bg-background py-24 lg:py-32">
      <Container>
        <div className="grid gap-6 border-b border-border pb-10 lg:grid-cols-[1fr_auto] lg:items-end">
          <div>
            <SystemLabel className="text-accent">Section 02</SystemLabel>
            <h2 className="mt-4 text-4xl font-medium leading-[1.06] tracking-[-0.02em] sm:text-5xl lg:text-[3.25rem]">
              Build index
            </h2>
            <p className="mt-5 max-w-xl text-[17px] leading-relaxed text-muted lg:text-lg">
              A curated view of websites, product builds and digital systems.
            </p>
          </div>
          <p className="font-mono text-sm text-muted">
            {builds.length} active entries
          </p>
        </div>

        <div className="mt-10 grid gap-4 lg:grid-cols-12 lg:gap-5">
          <BuildModule
            project={featured}
            className="lg:col-span-7 lg:row-span-2"
          />
          <BuildModule project={others[0]} className="lg:col-span-5" />
          <BuildModule project={others[1]} className="lg:col-span-5" />
          <BuildModule project={others[2]} className="lg:col-span-6" />
          <BuildModule project={others[3]} className="lg:col-span-6" />
        </div>
      </Container>
    </section>
  );
}
