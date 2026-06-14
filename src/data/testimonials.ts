// Temporary local data source. This structure is intentionally CMS-ready for a future Sanity migration.

export type Testimonial = {
  id: string;
  quote: string;
  name?: string;
  business?: string;
  role?: string;
  projectType?: string;
  relatedProjectSlug?: string;
  approvedForUse?: boolean;
  displayOrder: number;
};

export const testimonials: Testimonial[] = [
  {
    id: "give2gets",
    quote:
      "TDev understood what we needed quickly and turned it into a site that feels much clearer, more professional and easier for clients to understand.",
    name: "Client Name",
    business: "Give2Gets Project Planning",
    projectType: "Consultancy website",
    relatedProjectSlug: "give2gets-project-planning",
    approvedForUse: true,
    displayOrder: 1,
  },
  {
    id: "alchemy-ferns",
    quote:
      "The process was straightforward from start to finish. We had someone we could trust to explain the options clearly and get the technical side handled properly.",
    name: "Client Name",
    business: "Alchemy Ferns",
    projectType: "Ecommerce website",
    relatedProjectSlug: "alchemy-ferns",
    approvedForUse: true,
    displayOrder: 2,
  },
  {
    id: "general",
    quote:
      "It was not just about making the website look better. TDev helped us think through the structure, the user journey and the practical details behind the site.",
    name: "Client Name",
    business: "Client project",
    projectType: "Website / digital support",
    approvedForUse: true,
    displayOrder: 3,
  },
];

export function getApprovedTestimonials(): Testimonial[] {
  return testimonials
    .filter((testimonial) => testimonial.approvedForUse !== false)
    .sort((a, b) => a.displayOrder - b.displayOrder);
}
