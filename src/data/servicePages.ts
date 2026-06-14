export type ServicePage = {
  slug: string;
  code: string;
  title: string;
  description: string;
  stack: string[];
  footerLabel: string;
};

export const servicePages: ServicePage[] = [
  {
    slug: "website-development",
    code: "A1",
    title: "Website Design & Development",
    description:
      "Modern business websites designed to look credible, load quickly and convert clearly. Built around structure, content, SEO foundations and a clean user journey.",
    stack: ["WordPress", "Next.js", "SEO"],
    footerLabel: "Website Development",
  },
  {
    slug: "custom-web-apps",
    code: "A2",
    title: "Custom Web Apps",
    description:
      "Custom applications, portals, dashboards and interactive tools built around real business workflows. Designed to reduce manual admin and solve everyday operational problems.",
    stack: ["Next.js", "TypeScript", "Databases"],
    footerLabel: "Custom Web Apps",
  },
  {
    slug: "digital-marketing",
    code: "A3",
    title: "Digital Marketing Systems",
    description:
      "Practical digital marketing support to help businesses improve visibility, track performance and generate better enquiries from their website.",
    stack: ["SEO", "Analytics", "Campaigns"],
    footerLabel: "Digital Marketing",
  },
  {
    slug: "infrastructure-support",
    code: "A4",
    title: "Digital Infrastructure & Support",
    description:
      "The technical layer behind a business online — payments, analytics, domains, hosting, forms, email setup, integrations and ongoing support.",
    stack: ["Stripe", "Analytics", "Hosting"],
    footerLabel: "Infrastructure & Support",
  },
];

export function getServicePageBySlug(slug: string): ServicePage | undefined {
  return servicePages.find((service) => service.slug === slug);
}
