export type Capability = {
  code: string;
  name: string;
  description: string;
  stack: string[];
};

export const capabilities: Capability[] = [
  {
    code: "A1",
    name: "Website Design & Development",
    description:
      "Modern business websites designed to look credible, load quickly and convert clearly. Built around structure, content, SEO foundations and a clean user journey.",
    stack: ["WordPress", "Next.js", "SEO"],
  },
  {
    code: "A2",
    name: "Custom Web Apps",
    description:
      "Custom applications, portals, dashboards and interactive tools built around real business workflows. Designed to reduce manual admin and solve everyday operational problems.",
    stack: ["Next.js", "TypeScript", "Databases"],
  },
  {
    code: "A3",
    name: "Digital Marketing Systems",
    description:
      "SEO foundations, analytics, tracking and campaign support to help businesses measure performance, improve landing pages and generate better enquiries.",
    stack: ["SEO", "Analytics", "Campaigns"],
  },
  {
    code: "A5",
    name: "AI Search Visibility",
    description:
      "Structured content, technical signals and trust-building work designed to help businesses become easier to understand and reference across AI-assisted search.",
    stack: ["GEO", "LLM Visibility", "Structured Content"],
  },
  {
    code: "A4",
    name: "Digital Infrastructure & Support",
    description:
      "The technical layer behind a business online: payments, analytics, domains, hosting, forms, email setup, integrations and ongoing support.",
    stack: ["Stripe", "Analytics", "Hosting"],
  },
];
