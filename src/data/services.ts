export type Service = {
  slug: string;
  title: string;
  excerpt: string;
  description: string;
  deliverables: string[];
};

export const services: Service[] = [
  {
    slug: "websites",
    title: "Websites",
    excerpt:
      "Credible, fast websites for businesses that need to launch, explain their offer and convert visitors.",
    description:
      "From marketing sites to content-led builds, I design and develop websites that feel intentional, load quickly and give your business a clear digital home.",
    deliverables: [
      "Marketing and brochure sites",
      "WordPress and CMS builds",
      "Landing pages and campaign sites",
      "Performance and SEO foundations",
    ],
  },
  {
    slug: "web-apps",
    title: "Web Apps",
    excerpt:
      "Custom web applications for bookings, operations, client portals and internal workflows.",
    description:
      "When a brochure site is not enough, I build web apps around real business processes, scoped clearly, structured for growth and easy to maintain.",
    deliverables: [
      "Client portals and dashboards",
      "Booking and enquiry flows",
      "Custom Next.js applications",
      "API integrations",
    ],
  },
  {
    slug: "ai-systems",
    title: "AI Systems",
    excerpt:
      "Practical AI features integrated into products, not novelty demos bolted on for show.",
    description:
      "I design and build AI-powered tools that support real tasks: content workflows, coaching systems, automation and decision support embedded where they add value.",
    deliverables: [
      "OpenAI and LLM integrations",
      "Workflow automation",
      "AI-assisted product features",
      "Prompt and system design",
    ],
  },
  {
    slug: "digital-infrastructure",
    title: "Digital Infrastructure",
    excerpt:
      "The technical layer behind reliable launches: hosting, integrations, performance and maintainability.",
    description:
      "Strong digital products need solid foundations. I handle deployment, integrations, monitoring and the technical decisions that keep your site or app running smoothly over time.",
    deliverables: [
      "Hosting and deployment setup",
      "Third-party integrations",
      "Performance optimisation",
      "Handover and documentation",
    ],
  },
];

export function getServiceBySlug(slug: string): Service | undefined {
  return services.find((service) => service.slug === slug);
}
