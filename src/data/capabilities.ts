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
      "Practical digital marketing support to help businesses improve visibility, track performance and generate better enquiries from their website.",
    stack: ["SEO", "Analytics", "Campaigns"],
  },
  {
    code: "A4",
    name: "Digital Infrastructure & Support",
    description:
      "The technical layer behind a business online: payments, analytics, domains, hosting, forms, email setup, integrations and ongoing support.",
    stack: ["Stripe", "Analytics", "Hosting"],
  },
];
