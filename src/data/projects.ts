// Temporary local data source. This structure is intentionally CMS-ready for a future Sanity migration.

export type Project = {
  id: string;
  title: string;
  slug: string;
  category: string;
  summary: string;
  featuredImage?: string;
  galleryImages?: string[];
  services?: string[];
  stack?: string[];
  sector?: string;
  projectType?: string;
  clientName?: string;
  problem?: string;
  whatWeBuilt?: string;
  outcome?: string;
  liveUrl?: string;
  featured?: boolean;
  displayOrder: number;
};

export const projects: Project[] = [
  {
    id: "engine-room-coach",
    slug: "engine-room-coach",
    title: "Engine Room Coach",
    category: "SaaS / AI Platform",
    summary:
      "Coaching software concept for managing group programmes.",
    services: [
      "Product Strategy",
      "UI Design",
      "Web App",
      "AI Systems",
    ],
    stack: ["Next.js", "TypeScript", "Tailwind", "OpenAI"],
    featuredImage: "/projects/engineroomcoach-preview.png",
    featured: true,
    displayOrder: 1,
  },
  {
    id: "give2gets-project-planning",
    slug: "give2gets-project-planning",
    title: "Give2Gets Project Planning",
    category: "Consultancy Website",
    summary:
      "Planning consultancy website for infrastructure, rail, energy and construction.",
    services: [
      "Web Design",
      "Brand Direction",
      "WordPress",
      "Custom HTML/CSS",
    ],
    stack: ["WordPress", "Kadence", "Custom CSS"],
    featuredImage: "/projects/Give2gets-preview.png",
    featured: true,
    displayOrder: 2,
  },
  {
    id: "alchemy-ferns",
    slug: "alchemy-ferns",
    title: "Alchemy Ferns",
    category: "Ecommerce Website",
    summary:
      "Calm ecommerce experience for a specialist fern nursery.",
    services: [
      "Ecommerce",
      "Web Design",
      "Stripe Setup",
      "WordPress Development",
    ],
    stack: ["WordPress", "WooCommerce", "Stripe"],
    featuredImage: "/projects/alchemyferns-preview.png",
    featured: true,
    displayOrder: 3,
  },
  {
    id: "virtue-developments",
    slug: "virtue-developments",
    title: "Virtue Developments",
    category: "Construction Website",
    summary:
      "Photography-led construction website with direct project credibility.",
    services: ["Web Design", "Branding", "WordPress Development"],
    stack: ["WordPress", "Elementor", "Custom CSS"],
    featuredImage: "/projects/virtuedevelopments-preview.png",
    featured: true,
    displayOrder: 4,
  },
  {
    id: "stay-at-filey",
    slug: "stay-at-filey",
    title: "Stay at Filey",
    category: "Holiday Cottage Website",
    summary:
      "Property-led booking website for coastal holiday cottages.",
    services: ["Web Design", "Booking Journey", "Content Structure"],
    stack: ["Wix", "Custom Design"],
    featuredImage: "/projects/stayatfiley-preview.png",
    featured: false,
    displayOrder: 5,
  },
];

export function getFeaturedProjects(): Project[] {
  return projects
    .filter((project) => project.featured)
    .sort((a, b) => a.displayOrder - b.displayOrder);
}

export function getFeaturedProject(): Project | undefined {
  return projects.find((project) => project.slug === "engine-room-coach");
}

export function getSelectedWorkProjects(): Project[] {
  const slugs = [
    "give2gets-project-planning",
    "alchemy-ferns",
    "virtue-developments",
    "stay-at-filey",
  ];

  return slugs
    .map((slug) => projects.find((project) => project.slug === slug))
    .filter((project): project is Project => project !== undefined);
}

export function getProjectBySlug(slug: string): Project | undefined {
  return projects.find((project) => project.slug === slug);
}
