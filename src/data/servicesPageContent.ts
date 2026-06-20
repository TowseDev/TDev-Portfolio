export type ServiceIndexItem = {
  num: string;
  slug: string;
  title: string;
  summary: string;
};

export type ServiceModule = {
  id: string;
  slug: string;
  num: string;
  title: string;
  summary: string;
  bestFor: string[];
  deliverables: string[];
  outcome: string;
};

export type WorkingMethodStep = {
  num: string;
  title: string;
  description: string;
};

export const serviceIndexItems: ServiceIndexItem[] = [
  {
    num: "01",
    slug: "website-development",
    title: "Website Design & Development",
    summary:
      "Credible, conversion-focused websites built around structure, content and clear user journeys.",
  },
  {
    num: "02",
    slug: "custom-web-apps",
    title: "Custom Web Apps",
    summary:
      "Practical tools, dashboards and portals designed around real business workflows.",
  },
  {
    num: "03",
    slug: "digital-marketing",
    title: "Digital Marketing Systems",
    summary:
      "SEO foundations, analytics, tracking and campaign pages that help businesses measure performance and generate better enquiries.",
  },
  {
    num: "04",
    slug: "infrastructure-support",
    title: "Digital Infrastructure & Support",
    summary:
      "The technical setup behind a business online: domains, hosting, forms, payments, email and ongoing support.",
  },
  {
    num: "05",
    slug: "ai-search-visibility",
    title: "AI Search Visibility",
    summary:
      "Help search engines and AI tools understand what the business does, where it operates and why it should be trusted.",
  },
];

export const serviceModules: ServiceModule[] = [
  {
    id: "website-development",
    slug: "website-development",
    num: "01",
    title: "Website Design & Development",
    summary:
      "Modern business websites designed to look credible, load quickly and convert clearly. Built around structure, content, SEO foundations and a clean user journey.",
    bestFor: [
      "New business websites",
      "Website redesigns",
      "Professional service websites",
      "Local business websites",
      "Ecommerce and product-led websites",
    ],
    deliverables: [
      "Site structure and user journeys",
      "Responsive design",
      "Page build and development",
      "Content layout and conversion points",
      "Forms, enquiries and contact routes",
      "SEO foundations",
      "Launch support",
    ],
    outcome:
      "A sharper website that explains the business clearly, builds trust and gives visitors a straightforward route to enquire.",
  },
  {
    id: "custom-web-apps",
    slug: "custom-web-apps",
    num: "02",
    title: "Custom Web Apps",
    summary:
      "Custom applications, portals, dashboards and interactive tools built around real business workflows. Designed to reduce manual admin and solve everyday operational problems.",
    bestFor: [
      "Client portals",
      "Internal tools",
      "Booking or enquiry systems",
      "Calculators and interactive tools",
      "Dashboards",
      "Lightweight SaaS products",
    ],
    deliverables: [
      "Product planning",
      "Interface design",
      "Frontend development",
      "Workflow mapping",
      "Database-connected features where required",
      "Authentication and user journeys where required",
      "Testing and iteration",
    ],
    outcome:
      "A practical digital tool that replaces manual processes, improves consistency and gives the business a system it can actually use.",
  },
  {
    id: "digital-marketing",
    slug: "digital-marketing",
    num: "03",
    title: "Digital Marketing Systems",
    summary:
      "Practical digital marketing support focused on SEO foundations, analytics, tracking, campaigns and landing pages that help businesses measure performance and generate better enquiries.",
    bestFor: [
      "Businesses relying on local search",
      "Websites with weak enquiry flow",
      "Campaign landing pages",
      "Businesses that need clearer tracking",
      "Brands launching paid or organic campaigns",
    ],
    deliverables: [
      "SEO foundations",
      "Landing pages",
      "Analytics and conversion tracking",
      "Campaign pages",
      "Google Business support",
      "Content structure and messaging",
      "Enquiry flow improvements",
    ],
    outcome:
      "A clearer marketing setup that helps the website do more than sit online, so it becomes easier to find, easier to measure and easier to improve.",
  },
  {
    id: "ai-search-visibility",
    slug: "ai-search-visibility",
    num: "05",
    title: "AI Search Visibility",
    summary:
      "Search is changing. More people are using AI tools to compare businesses, ask for recommendations and understand who to trust. We help make your website, content and digital footprint easier for those systems to read, understand and reference.",
    bestFor: [
      "Local businesses that want to be found in AI-assisted search",
      "Service businesses competing in crowded markets",
      "Brands with unclear or thin website content",
      "Businesses already investing in SEO",
      "Companies that want stronger visibility beyond Google",
    ],
    deliverables: [
      "Service and location content structure",
      "Clear business entity signals",
      "Schema and technical SEO foundations",
      "FAQ and answer-led content",
      "Case studies, proof and trust signals",
      "Local search and Google Business alignment",
      "Content designed for both people and AI search systems",
    ],
    outcome:
      "A clearer digital footprint that gives search engines and AI tools better information about who you are, what you do, where you operate and why your business should be trusted.",
  },
  {
    id: "infrastructure-support",
    slug: "infrastructure-support",
    num: "04",
    title: "Digital Infrastructure & Support",
    summary:
      "The technical layer behind a business online: payments, analytics, domains, hosting, forms, email setup, integrations and ongoing support.",
    bestFor: [
      "Businesses with messy technical setup",
      "Website migrations",
      "Domain or email issues",
      "Payment and form setup",
      "Ongoing website support",
      "Small businesses without internal technical help",
    ],
    deliverables: [
      "Hosting and domain setup",
      "Email and DNS support",
      "Forms and notifications",
      "Payment integrations",
      "Analytics setup",
      "Technical fixes",
      "Ongoing updates and support",
    ],
    outcome:
      "A cleaner, more reliable digital setup with the important technical pieces connected properly and maintained over time.",
  },
];

export const workingMethodSteps: WorkingMethodStep[] = [
  {
    num: "01",
    title: "Clarify the business need",
    description:
      "We work out what the website, app or system actually needs to do before deciding what should be built.",
  },
  {
    num: "02",
    title: "Build the useful version first",
    description:
      "We focus on the version that solves the problem clearly, works reliably and can be improved without unnecessary complexity.",
  },
  {
    num: "03",
    title: "Support the system after launch",
    description:
      "We help with the practical details after launch: updates, forms, tracking, hosting, email, fixes and improvements.",
  },
];

export function getServiceHref(slug: string): string {
  return `#${slug}`;
}

export function getServicePageHref(slug: string): string {
  return `/services#${slug}`;
}
