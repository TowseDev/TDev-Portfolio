export type Project = {
  slug: string;
  title: string;
  category: string;
  description: string;
  services: string[];
  stack: string[];
  image: string;
  featured: boolean;
};

export const projects: Project[] = [
  {
    slug: "engine-room-coach",
    title: "Engine Room Coach",
    category: "SaaS / AI Platform",
    description:
      "Coaching software concept for managing group programmes.",
    services: [
      "Product Strategy",
      "UI Design",
      "Web App",
      "AI Systems",
    ],
    stack: ["Next.js", "TypeScript", "Tailwind", "OpenAI"],
    image: "/projects/engineroomcoach-preview.png",
    featured: true,
  },
  {
    slug: "give2gets-project-planning",
    title: "Give2Gets Project Planning",
    category: "Consultancy Website",
    description:
      "Planning consultancy website for infrastructure, rail, energy and construction.",
    services: [
      "Web Design",
      "Brand Direction",
      "WordPress",
      "Custom HTML/CSS",
    ],
    stack: ["WordPress", "Kadence", "Custom CSS"],
    image: "/projects/Give2gets-preview.png",
    featured: true,
  },
  {
    slug: "alchemy-ferns",
    title: "Alchemy Ferns",
    category: "Ecommerce Website",
    description:
      "Calm ecommerce experience for a specialist fern nursery.",
    services: [
      "Ecommerce",
      "Web Design",
      "Stripe Setup",
      "WordPress Development",
    ],
    stack: ["WordPress", "WooCommerce", "Stripe"],
    image: "/projects/alchemyferns-preview.png",
    featured: true,
  },
  {
    slug: "virtue-developments",
    title: "Virtue Developments",
    category: "Construction Website",
    description:
      "Photography-led construction website with direct project credibility.",
    services: ["Web Design", "Branding", "WordPress Development"],
    stack: ["WordPress", "Elementor", "Custom CSS"],
    image: "/projects/virtuedevelopments-preview.png",
    featured: true,
  },
  {
    slug: "stay-at-filey",
    title: "Stay at Filey",
    category: "Holiday Cottage Website",
    description:
      "Property-led booking website for coastal holiday cottages.",
    services: ["Web Design", "Booking Journey", "Content Structure"],
    stack: ["Wix", "Custom Design"],
    image: "/projects/stayatfiley-preview.png",
    featured: false,
  },
];

export function getFeaturedProjects(): Project[] {
  return projects.filter((project) => project.featured);
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
